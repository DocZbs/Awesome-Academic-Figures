"""Apply independently evidenced layout annotations without mutating source files."""
import hashlib
import json
import re

LAYOUTS = {"left-to-right", "top-to-bottom", "nested-modules", "feedback-loop",
           "two-column", "grid", "radial", "hub-and-spoke", "freeform"}
STATUSES = {"visual_layout_reviewed", "description_inferred"}


def load_annotations(root):
    path = root / "data/layout_annotations.json"
    if not path.exists():
        return {}
    report = json.loads(path.read_text())
    annotations = report["annotations"]
    index = {item["id"]: item for item in annotations}
    if len(index) != len(annotations):
        raise ValueError("Duplicate layout annotation")
    return index


def apply_annotation(entry, annotation, figure_dir=None):
    if entry["id"] != annotation["id"]:
        raise ValueError("Layout annotation identity mismatch")
    layouts = annotation["layouts"]
    if not layouts or len(layouts) != len(set(layouts)) or not set(layouts) <= LAYOUTS:
        raise ValueError("Invalid layout annotation tags")
    if annotation["status"] not in STATUSES or not annotation.get("observation"):
        raise ValueError("Layout annotation requires a basis and observation")
    originals = {original["sha256"] for original in entry.get("original_assets", [])}
    if annotation["reference_sha256"] not in originals:
        raise ValueError("Layout annotation belongs to a different reference asset")
    if annotation["status"] == "visual_layout_reviewed":
        expected = annotation.get("preview_sha256", "")
        if not re.fullmatch(r"[0-9a-f]{64}", expected):
            raise ValueError("Visual layout annotation requires preview evidence")
        if figure_dir is not None:
            actual = hashlib.sha256((figure_dir / entry["assets"]["preview"]).read_bytes()).hexdigest()
            if actual != expected:
                raise ValueError("Layout annotation preview changed")
    else:
        expected = entry["source"].get("description_sha256")
        if expected is not None and expected != annotation["description_sha256"]:
            raise ValueError("Layout description evidence changed")
    entry["classification"]["layouts"] = list(layouts)
    entry["layout_annotation"] = annotation
    return entry
