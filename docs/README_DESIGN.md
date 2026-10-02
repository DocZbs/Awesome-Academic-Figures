# README presentation

The 2026-10-02 README revision uses an English default (`README.md`) and a Simplified Chinese edition (`README.zh-CN.md`). Both carry the same capabilities, evidence limits and screenshot assets. The gallery interface remains Chinese; README translation does not imply interface localization.

## References and decisions

- [Excalidraw](https://github.com/excalidraw/excalidraw): a recognizable cover, clear editor/documentation links and a product showcase near the top.
- [drawDB](https://github.com/drawdb-io/drawdb): a compact logo, concise purpose statement, direct product entry and prominent screenshot.
- [Mermaid](https://github.com/mermaid-js/mermaid): English default with a visible Simplified Chinese README link.

These informed structure and hierarchy. Their artwork, logos and product screenshots are not reused.

## Visual ownership

The three-square mark comes from the gallery's existing identity, using DESIGN.md ink, background and cobalt colors. GitHub owns README typography and layout. Screenshot framing focuses on actual figures and project previews, avoiding long full-page captures with tiny controls. Small factual badges link to collection evidence and the code license; the MIT badge does not apply to paper images.

## Screenshot provenance

`figure-showcase.png`, `search-showcase.png` and `project-showcase.png` were captured from the live gallery at 2× pixel density as lossless PNG. The first is a browser screenshot of the first two complete cards; the search screenshot uses `q=world+model`; project names and descriptions are isolated demo data. Figure content, source badges and UI labels are unchanged. Each README preview links to its full-resolution PNG. Replaced JPEG captures and the unused legacy banner were removed.

Refresh these files when the interface materially changes. Do not upscale compressed older screenshots, invent interface features or imply that generated paper descriptions/prompts have been validated. Catalog and original figure assets stay outside README-only edits.


## English video walkthrough

Both READMEs show a compact GitHub-native inline video player after the introductory paragraph. The Demo / 演示 heading and the compact player are centered using GitHub-supported HTML alignment attributes. The asset URL is placed in a single 560-pixel table cell so the desktop player is about 530 pixels wide and remains responsive on mobile. The GitHub player requires a visible filename header; its display name is shortened to `Demo.mp4`. GitHub owns the media controls and initially mutes embedded videos; viewers can unmute in the player.

The attachment is `https://github.com/user-attachments/assets/d4c4fef6-f91e-4fa3-a247-5d7b5a0b3f8b`, uploaded directly with the token-authenticated GitHub user-attachments API used by GitHub CLI. No issue or comment was created for the upload. Its content is the same approved English H.264/AAC walkthrough in `public/media/walkthrough.en.mp4`; Pages continues to serve the original asset. README footer links preserve [video attribution](media/walkthrough-sources.md); [English captions](media/walkthrough.en.srt) remain in the media documentation.

Paper figures retain their recorded licenses. English synthesized narration uses Kokoro v1.0 `af_heart`; music and edit accents are original deterministic synthesis. No inference weights, intermediate audio files or full image corpus are added to the repository for this walkthrough.
