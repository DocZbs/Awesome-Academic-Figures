# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Domain-Specific Parallel Data on Multilingual Language Models for Low-resource Language Translation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19522

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four distinct fine-tuning strategies for a multimodal large language model (msLLM), labeled (a) through (d), arranged vertically in a flowchart format. Each strategy begins with an identical cylindrical node labeled 'msLLM', representing the base model. From each msLLM, an arrow points to a processing module, which varies by strategy. Strategy (a) uses a circular node labeled 'Fine-Tune with Single-Domain d_j ∈ D', indicating fine-tuning on a single domain dataset from the full set D. Strategy (b) employs a rectangular node labeled 'Fine-Tune with Multi-Domain ∀d_i ∈ D_i where D_i ⊆ D', signifying fine-tuning across multiple domains within a subset of D. Strategy (c) features two sequential circular nodes: first 'Fine-Tune with Single-Domain d_i ∈ D', followed by another 'Fine-Tune with d_j ∈ D', suggesting an iterative or two-stage process starting with one domain and then refining with another. Strategy (d) also has two stages: a rectangular node 'Fine-Tune with Multi-Domain ∀d_i ∈ D_i where D_i ⊆ D' followed by a circular node 'Fine-Tune with d_j ∈ D', indicating multi-domain pre-fine-tuning followed by single-domain refinement. All four strategies converge to two testing nodes on the right side of the diagram. The upper test node is a diamond-shaped box with magenta text 'Test with in-domain d_j ∈ D', and the lower test node is a similar diamond with blue text 'Test with out-domain d_k ∉ D'. Arrows from each of the final fine-tuning modules (in (a), (b), (c), and (d)) point to both test nodes, indicating that each strategy is evaluated under both in-domain and out-domain conditions. The layout is clean and structured, with consistent black lines and arrows, and all text is black except for the test node labels, which are color-coded for distinction. The figure visually contrasts different fine-tuning approaches—vanilla, mixed-domain, and iterative two-stage (single- and multi-domain)—and their evaluation protocols.
