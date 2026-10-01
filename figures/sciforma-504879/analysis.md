# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Repository Structure-Aware Training Makes SLMs Better Issue Resolver — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19031

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two typical issue-resolving frameworks, labeled (a) and (b), each illustrating a distinct approach to localizing and editing code snippets to resolve software issues. Both frameworks share a common overall structure: they begin with an input consisting of an 'Issue' and a 'Repository', and proceed through a localization phase followed by 'Code Edit Generation'. The 'Issue' is represented as a rectangular box with a circular icon and text stating 'Please support header rows in RestructuredText output...', while the 'Repository' is shown as another rectangular box containing a GitHub logo and the path 'astropy / astropy'. These inputs feed into either an LLM-based or Retriever-based Localization module.

In framework (a), the localization process is LLM-based and enclosed within a dashed blue rectangle labeled 'LLM-based Localization'. This module consists of three sequential steps: 'File Localization', 'Function Localization', and 'Lines Localization', each depicted as a light blue rounded rectangle connected by solid blue arrows indicating progression. After line-level localization, the flow proceeds to 'Code Edit Generation', also a light blue rounded rectangle, which represents the final step of generating code edits to resolve the issue.

Framework (b) illustrates a Retriever-based Localization approach, similarly enclosed in a dashed blue rectangle. Inside this module, two inputs — 'Issue' (with a circular icon) and 'Files' (with a document stack icon) — are directed toward a central magnifying glass icon labeled 'Retriever'. The retriever processes these inputs and outputs a 'File' (represented by a single document icon), which then flows to 'Code Edit Generation'.

Both frameworks are visually identical in layout and component placement, differing only in the type of localization mechanism used. The figure includes a caption at the bottom stating: 'Typical issue-resolving frameworks. Both of them first localize the code snippets related to the issue, then edit the snippets to resolve the issue.' Additionally, a note below the diagrams specifies: 'Agentless first performs LLM-based step-by-step progressive localization, then edits the localized code snippets,' suggesting that the LLM-based approach is associated with a specific agent called Agentless. All visual elements use consistent colors — primarily light blue for modules and dark blue for borders and arrows — and clear, readable fonts. The diagram uses solid arrows to denote data flow and dashed rectangles to group related components.
