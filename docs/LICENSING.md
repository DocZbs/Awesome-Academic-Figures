# Image licensing and publication

An open paper URL is not a redistribution license. Each figure must pass both
license review and visual/source review before it enters `figures/` or the gallery.

The initial automatic collection policy accepts **CC BY 4.0** and **CC0 1.0** only.
Other licenses require a separate review; they are not described as confidential
or unlawful simply because they are outside this initial policy.

For arXiv originals, the collector reads the paper-specific `.abs-license` link
from a **versioned abstract page**, records the URL and version, and downloads
that same version's source archive. arXiv's nonexclusive distribution license
does not grant this repository permission to redistribute figures.

For the two historical CollabLLM pilot crops, the source is the final PMLR article,
not its arXiv preprint. The [PMLR publication agreement](https://proceedings.mlr.press/pmlr-license-agreement.html)
licenses published articles under CC BY 4.0 and requires attribution and a link
to the original PMLR publication.

Third-party photographs, icons, screenshots, and other material with a separate
rights notice are not automatically covered by a paper's license. Ambiguous
third-party material stays in the server's review queue; only its paper metadata
and source links may be published.

Every approved figure includes:

- Exact paper title, authors, venue/year, collection date, and an official source for any award tag.
- Exact arXiv version or final proceedings version and a license evidence URL.
- Original source path and SHA-256 for source-extracted files.
- An attribution statement, license URL, and a description of preview conversion.
- Explicit review status; reconstructed prompts are not claimed to be author prompts.

`scripts/build_catalog.py` rejects unapproved rights, missing evidence, unsupported
review states, unsafe asset paths, and mismatched original checksums. It accepts
individually reviewed source originals and explicitly labeled `source_index_verified`
imports. The latter binds an immutable upstream image index to the matching
publisher/version license and original-image checksum; it does **not** claim an
independent visual inspection of every crop. Known crop or third-party rights
problems are quarantined and excluded from publication. Batch sampling is recorded
separately and never presented as exhaustive verification.

The repository's MIT license covers its code and maintainer-written text only.
Paper images, source figure files, and quoted captions retain their own licenses,
as recorded in each figure's `metadata.json` and `ATTRIBUTION.md`.

For a correction or removal, open a GitHub issue identifying the figure and its
source. A disputed image should be removed from the gallery pending review.
