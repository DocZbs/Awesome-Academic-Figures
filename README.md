<div align="center">
  <img src="docs/assets/aaf-mark.svg" width="64" height="64" alt="Awesome Academic Figures logo" />
  <h1>Awesome Academic Figures</h1>
  <p><strong>Find your next figure. Brief your drawing agent.</strong></p>
  <p>A visual reference library for researchers and drawing agents.</p>
  <p><strong>English</strong> · <a href="README.zh-CN.md">简体中文</a></p>
  <p>
    <a href="https://doczbs.github.io/Awesome-Academic-Figures/"><strong>Explore the gallery ↗</strong></a> &nbsp; · &nbsp;
    <a href="AGENTS.md">For agents</a> &nbsp; · &nbsp;
    <a href="docs/USAGE.md">User guide</a>
  </p>
  <p>
    <a href="docs/COLLECTION.md"><img src="https://img.shields.io/badge/figures-3%2C000-284CDA?style=flat-square" alt="3,000 figure references" /></a>
    <a href="docs/COLLECTION.md"><img src="https://img.shields.io/badge/papers-2%2C174-286249?style=flat-square" alt="2,174 source papers" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/code-MIT-202923?style=flat-square" alt="Code license: MIT" /></a>
  </p>
</div>

<a href="https://raw.githubusercontent.com/DocZbs/Awesome-Academic-Figures/main/docs/assets/figure-showcase.png">
  <img src="docs/assets/figure-showcase.png" width="100%" alt="Two complete CollabLLM paper figures in the live gallery, with source information and project actions" />
</a>
<p align="center"><sub>Real paper figures. Complete diagrams. Sources you can trace. Click a preview for full resolution.</sub></p>

Great research deserves a clear figure. Explore Teasers, method architectures, mechanisms and experiments from conferences, journals and arXiv. Save the expression that clicks, then take its image, structural notes and prompt to your drawing agent—with your own research brief.

<h2 align="center">🎬 Demo</h2>

<table align="center">
<tr><td width="560">

https://github.com/user-attachments/assets/d4c4fef6-f91e-4fa3-a247-5d7b5a0b3f8b

</td></tr>
</table>

## 🔎 Find an expression that fits

Start with the kind of figure you want to draw. Follow a topic such as [RL](https://doczbs.github.io/Awesome-Academic-Figures/?q=rl), [World Model](https://doczbs.github.io/Awesome-Academic-Figures/?q=world+model) or [ICL](https://doczbs.github.io/Awesome-Academic-Figures/?q=icl). A figure can have several research tags, so you can explore the connections between ideas.

<a href="https://raw.githubusercontent.com/DocZbs/Awesome-Academic-Figures/main/docs/assets/search-showcase.png">
  <img src="docs/assets/search-showcase.png" width="100%" alt="World Model search in the live gallery, showing full figures, research tags and layout filters" />
</a>

Have a draft already? Upload a PDF or paste your abstract and methods, choose a figure genre, and get keyword-based reference suggestions in your browser.

## 📌 Keep inspiration with your project

Make a reference board for a paper or research direction. Choose a destination on each figure; the same reference can belong to several projects. Review the collection, refine your choices, and export an image-and-prompt package for your drawing task.

<a href="https://raw.githubusercontent.com/DocZbs/Awesome-Academic-Figures/main/docs/assets/project-showcase.png">
  <img src="docs/assets/project-showcase.png" width="100%" alt="Project workspace with navigation, two selected figure previews and reference-package export; demonstration projects" />
</a>

## 🤖 Give your agent a way in

Agents can search the same catalog, inspect provenance, create projects and add or remove figure references through the [agent CLI](scripts/agent.mjs). Portable project JSON lets you hand a collection to an agent and bring its selections back into the gallery for review.

> Read [AGENTS.md](AGENTS.md), find Teaser and mechanism references for my paper, explain what each helps communicate, and return an `aaf-projects.json` I can import into the gallery.

```sh
node scripts/agent.mjs search --query "rl world model" --type mechanism --limit 12
```

**[Agent guide →](AGENTS.md)** &nbsp; [Discovery manifest](https://doczbs.github.io/Awesome-Academic-Figures/agent.json) · [Catalog](https://doczbs.github.io/Awesome-Academic-Figures/catalog.json) · [Project schema](https://doczbs.github.io/Awesome-Academic-Figures/project-schema.json)

---

**Try it:** [Open the gallery](https://doczbs.github.io/Awesome-Academic-Figures/) → pick a figure → add it to your project → export your reference package. No local checkout is needed to browse.

The gallery UI and extended user docs are currently in Chinese; the agent guide is in English. Projects stay in your browser or portable JSON files. Paper matching runs locally with keywords and topics. Screenshots are lossless 2× captures of the live UI; project contents are examples. Numbering, source and prompt verification statuses stay with each figure—see [collection notes](docs/COLLECTION.md).

**Build with us.** Contribute a licensed figure, a better tag or a more useful prompt. [Contributing](CONTRIBUTING.md) · [Local development](docs/DEVELOPMENT.md) · [Report an issue](https://github.com/DocZbs/Awesome-Academic-Figures/issues)

Code and maintainer-authored text are [MIT licensed](LICENSE). Paper images retain their [individual licenses](docs/LICENSING.md). [Video credits](docs/media/walkthrough-sources.md).
