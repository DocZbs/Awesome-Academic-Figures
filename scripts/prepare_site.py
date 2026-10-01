"""Copy only curated local gallery assets into Vite's public directory."""
import json
import shutil
from pathlib import Path

root = Path(__file__).resolve().parent.parent
public = root / "public"
public.mkdir(exist_ok=True)
catalog = json.loads((root / "data/catalog.json").read_text())
for figure in catalog["figures"]:
    if figure["asset_base"].startswith("https://"):
        if not figure.get("details_available") and not all(figure.get(field) for field in ("analysis_text", "prompt_text", "agent_text")):
            raise ValueError("Remote catalog must include text for thin local preview")
        continue
    source = root / "figures" / figure["id"]
    destination = public / "figures" / figure["id"]
    destination.mkdir(parents=True, exist_ok=True)
    for name in {"metadata.json", *[value for value in figure["assets"].values() if value]}:
        path = source / name
        if not path.resolve().is_relative_to(source.resolve()):
            raise ValueError("Asset must remain within its figure directory")
        shutil.copy2(path, destination / name)
    figure["analysis_text"] = (source / "analysis.md").read_text()
    figure["prompt_text"] = (source / "prompt.md").read_text()
    figure["agent_text"] = (source / "agent.md").read_text()
(public / "catalog.json").write_text(json.dumps(catalog, ensure_ascii=False) + "\n")
print(f"Prepared {len(catalog['figures'])} figures; remote originals stay on the staging server / GitHub.")
