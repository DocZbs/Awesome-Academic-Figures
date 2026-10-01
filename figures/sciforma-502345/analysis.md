# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FedPIA -- Permuting and Integrating Adapters leveraging Wasserstein Barycenters for Finetuning Foundation Models in Multi-Modal Federated Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14424

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FedPIA framework, a permutation-based adapter integration method for federated learning, divided into three main parts: (a) Overview of Proposed Method, (b) Mechanism of PIA, and (c) Loss contour for anchor and permutable adapters.

[1] Global Layout and Structure:
The figure is horizontally partitioned into three sections. Section (a) on the left presents the end-to-end architecture, split into SERVER-LEVEL PIA (top) and CLIENT-LEVEL PIA (bottom), showing how global and client-specific adapters interact. Section (b) in the center details the layer-wise permutation mechanism, while section (c) on the right visualizes the loss landscape, demonstrating the effect of permutation on convergence.

[2] Visual Modules and Attributes:
In (a), the SERVER-LEVEL PIA block (pink background) contains 'Global Adapter Initialization' with a multi-colored node graph, an 'Anchor Adapter' (red node), and a 'Permutation matrix computation' module (gray box). This computes permutation matrices (black-and-white grid patterns) to align 'Adapter 1' through 'Adapter n' with the anchor. These are then integrated via weighted sums (W1 to Wn) into a 'Global Adapter'.

The CLIENT-LEVEL PIA block (beige background) includes 'Client-specific Adapter' modules (C1, C2, ..., Cn, orange boxes) feeding into an 'Integrated Local Adapter' (dashed box). Inside this, a transformer-like stack (Multi-Head Attention, Feed Forward, Add & Norm layers) processes data from a 'Vision-language Model' (gray box) with input 'Q: What disease is shown on the left of brain?' and output 'A: Brain Edema, Brain Non-enhancing Tumor', alongside a brain MRI image. A 'Permutation' step (blue snowflake icon) aligns the local adapter with the global one before integration (indicated by a red arrow).

In (b), the 'Mechanism of PIA' shows a sequence of three layers. Each layer displays a 'Permutable Adapter' (left) and 'Anchor Adapter' (right), connected by a 'Permutation Matrix' (grid with black diagonal blocks). The matrices are computed per layer (Layer 1, 2, 3 Permutation) and applied to align the permutable adapter with the anchor. The final step, 'Adapter Integration', combines W1 and W2 via summation to form a unified adapter.

In (c), two heatmaps depict loss contours. The top heatmap shows 'Anchor Adapter' (blue peak) and 'Permutable Adapter' (blue peak) in separate basins. The bottom heatmap compares 'Integration w/ permutation' (single blue peak) versus 'Integration w/o permutation' (two separate peaks), illustrating that permutation merges the loss basins, improving convergence.

[3] Connections and Arrows:
In (a), arrows show data flow: from client adapters (C1–Cn) to the integrated local adapter; from the global adapter initialization to the server-level permutation computation; from the computed permutation matrices to the integration of W1–Wn into the global adapter; and from the global adapter back to the client for permutation and integration. Dashed lines indicate optional or indirect connections.

In (b), arrows connect the permutable and anchor adapters to their respective permutation matrices, which are then applied to transform the permutable adapter. The transformed adapter is integrated with the anchor via W1 and W2, with a summation node.

In (c), dashed lines link the 'Permutated Adapter' to the merged loss peak, and the 'Integration w/o permutation' to the two separate peaks, visually explaining the benefit of permutation in aligning loss landscapes.
