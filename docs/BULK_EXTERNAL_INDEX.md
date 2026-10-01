# Importing a licensed external figure index

`scripts/bulk_import_external.py` imports real raster images from an existing
figure collection. It never downloads full paper PDFs or source archives, and
does not claim the source collection's JPEG crops are author vector originals.
Local operations read/write metadata only. Image staging and promotion require
Linux paths beneath `/home/jdp` and run in the jdp checkout.

The importer has three stages:

1. Validate the source index and generate record SHA-256 values. Unknown or
   unsupported licenses remain metadata; validation does not approve images.
2. Download images only after a separate review manifest approves the matching
   record's license and third-party rights. Byte-preserved raster images stay in
   `cache/external-figures/<id>/`, outside the published Git tree. Downloads are
   HTTPS, have an explicit hostname allowlist and a 20 MiB per-image limit. PDF,
   ZIP, gzip, HTML and oversized/invalid images are rejected.
3. Promote images into `figures/<id>/` only with asset SHA-256 binding and an
   explicit image/source and figure-scope review. `source_index_verified` means
   provenance was checked against an immutable source index. It does **not**
   mean every image received independent human visual inspection.

The initial policy accepts CC BY 4.0 and CC0 1.0. Code-license assertions do not
license the paper images. The adapter requires evidence for the actual article
version from which the image was extracted. Known separate rights notices,
third-party exclusions and bad crops prevent publication or remove an already
staged image from the gallery pending review.

## Generic input schema

Use a JSON array, `{ "figures": [...] }`, `{ "records": [...] }`, or JSONL.
Each figure record contains:

| Field                                                           | Meaning                                                           |
| --------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                            | Unique safe lowercase identifier; letters, digits and hyphens     |
| `paper.id`                                                      | Stable paper identifier                                           |
| `paper.title`, `paper.venue`, `paper.publication_year`          | Real bibliographic fields                                         |
| `paper.authors`                                                 | Author list; use `[]` when unavailable                            |
| `paper.url`                                                     | HTTPS original article page                                       |
| `source.kind`                                                   | `standalone_figure`                                               |
| `source.document`                                               | `main`                                                            |
| `source.number`                                                 | Integer 1/2, or `null` for an explicitly declared leading image   |
| `source.number_status`                                          | `source_index_leading_figure` when exact number is unknown        |
| `source.index_url`, `source.version`                            | Source index and immutable release/commit                         |
| `source.image_url`, `source.format`                             | Direct HTTPS PNG/JPEG/WebP image                                  |
| `source.caption`                                                | Exact caption supplied by the source, or `null`; never invent one |
| `source.sha256`                                                 | Optional publisher/index-provided expected image checksum         |
| `classification.primary_type`                                   | Supported type, or `unclassified`                                 |
| `classification.types`, `purposes`, `layouts`, `search_aliases` | Source label arrays; may be empty                                 |
| `rights.source_license`                                         | `CC-BY-4.0`, `CC0-1.0` or `unknown`                               |
| `rights.license_url`                                            | Canonical Creative Commons URL for an eligible license            |
| `rights.license_evidence_url`                                   | Article-specific or applicable publisher policy evidence          |
| `rights.evidence_scope`                                         | Explain how evidence applies to this actual figure/version        |

The review manifest is another JSON array. Each entry needs `id`,
`record_sha256`, `license_review: approved`, `third_party_review: approved`,
`reviewed_by`, `checked_at`, `license_evidence_url`, `license_notes` and
`third_party_notes`. Promotion additionally requires `asset_sha256`,
`visual_source_review`, `figure_scope_review`, `visual_notes` and `scope_notes`.
The two scope/visual status fields accept `approved` or
`source_index_verified`; notes must state which kind of review occurred.

Checksums bind review to the exact source record and exact downloaded image.
They establish identity and integrity, not legal permission or visual quality.

## Topconf adapter

The built-in adapter supports
`qwdwqfwq/topconf-paper-figure-gallery` pinned to the full Git commit recorded in
`data/external/topconf/provenance.json`. The upstream source provides leading
Figure 1 / teaser crops, but no individual precise figure numbers or captions.
Imported records therefore use `source.number: null`, preserve the upstream
scope claim, and display as a leading image. They cannot satisfy a verified
Figure 1/2 filter merely from this upstream assertion.

The official publisher verifier supplies real article titles, author lists,
dates, exact PDF URL matching and publisher license evidence. Only `verified`
ACL/PMLR entries with exact title/PDF matching and HTML checksums become
license candidates. Author/date corrections come from the official record.

```sh
python scripts/bulk_import_external.py \
  --normalize-topconf \
  --index data/external/topconf/figures.json \
  --provenance data/external/topconf/provenance.json \
  --publisher-metadata data/external/topconf/official_metadata.json \
  --exclude-catalog data/catalog.json \
  --output-index data/external/topconf/import-index.json \
  --output-reviews data/external/topconf/import-reviews.json \
  --report data/external/topconf/validation-report.json
```

The OpenReview adapter requires `--normalize-openreview` and
`--openreview-audit`. It uses a preserved official API note with an explicit
paper-specific license, public/title/forum matching and a snapshot checksum.
Metadata states when live API access was unavailable, so snapshot evidence is
not misrepresented as a live publisher verification.

Extract the eligible candidate records whose IDs have reviews into a separate
batch index; unknown licenses must not be mixed into an image-download batch.
On jdp, an explicit source-index review can bind its immutable downloaded image
checksum and promote within one operation:

```sh
.venv/bin/python scripts/bulk_import_external.py \
  --index data/external/topconf/approved-import-index.json \
  --reviews data/external/topconf/import-reviews.json \
  --root /home/jdp/Awesome-Academic-Figures \
  --stage --promote --workers 8 \
  --allowed-host raw.githubusercontent.com \
  --bind-source-index-checksums \
  --output-reviews data/external/topconf/bound-import-reviews.json \
  --report data/external/topconf/import-report.json
```

`--bind-source-index-checksums` applies only to reviews explicitly marked
`asset_binding_method: immutable_source_index_download` and
`visual_source_review: source_index_verified`. It does not manufacture a human
review. Existing staged files are checked against their SHA-256 and can resume
without redownloading. Parallelism is bounded to eight workers, progress counts
are real completed files, and checkpoint reports write every twenty entries.

## Draft prompts and source records

Every imported image retains its image/index provenance, license evidence,
attribution and SHA-256. The importer generates a **generic reference-guided
draft**, with `reuse.prompt_status: draft` and
`reuse.analysis_status: source_record_only`. It contains no invented palette,
shape, panel count, graph structure or per-image visual interpretation. The
receiving agent must inspect the actual image before using its conventions.
Generated adaptations remain `not_tested`.

Labels inherited from the source are recorded as
`classification.status: source_index_labels_unverified`. Upstream visual types
are useful for retrieval, but are not claims of curator-reviewed descriptions.
Only true official awards copied by exact normalized paper-title matching
receive award tags; upstream poster/oral/spotlight tiers do not become awards.

`scripts/reconcile_external_collection.py` applies actual sampled exclusions by
moving whole figure directories into `cache/external-exclusions/`. Originals
are preserved and disappear from the public catalog. Its report lists IDs,
sample observations and checksum matches. It also attaches verified official
award tags and maps the source's teaser label for browsing.

Run `scripts/check_bulk_import_external.py` with the ingestion Python runtime
to check unknown-license download refusal, record/hash binding, tamper
detection, unsafe paths, paper-PDF rejection, leading-number honesty and storage
guards. The tests use only tiny synthetic raster fixtures.

## Hosted AI method figures

`--normalize-sciforma` adapts audited rows from the frozen
`microsoft/SciFormaData-700K` dataset revision recorded in the input. It requires
each row's explicit CC BY 4.0/CC0 license, frozen row/license evidence, a matching
description checksum, and independently verified arXiv identity/dates and AI
subject categories. The associated paper's arXiv metadata is identity evidence;
the hosted row's audited license is the redistribution basis.

These figures have **unknown exact numbers and unknown main-paper/appendix
scope**, represented as `source.document: unspecified` and
`source.number_status: dataset_figure_number_unresolved`. They are never labeled
Figure 1, Figure 2 or a verified leading image. An image's full source description
is a **machine-generated dataset description**, stored in `analysis.md` and
`prompt.md`, with `reuse.prompt_origin: dataset_generation_caption` and
`prompt_status: draft`. It is not an author caption or a human-reviewed visual
analysis. Simple retrieval labels are machine-derived and explicitly marked
`classification.status: dataset_generated_labels`.

Descriptions identifying photographs, Google Maps, medical images or another
known third-party source are deferred for a separate rights review. This check
does not replace visual sampling; any concrete issue found by sampling excludes
the actual image and preserves its source files outside the public tree.

`scripts/deduplicate_figures.py` compares exact SHA-256 values of complete image
files across the collection. It never merges figures by visual similarity or by
a single panel from a composed figure. Byte-identical aliases move to
`cache/external-duplicates/`, with paper/source/license provenance retained in
the public alias report. Existing reviewed images take precedence over imported
copies. The catalog counts only canonical displayed images.
