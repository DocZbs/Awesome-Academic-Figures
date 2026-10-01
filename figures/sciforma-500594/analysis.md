# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

THESAURUS: Contrastive Graph Clustering by Swapping Fused Gromov-Wasserstein Couplings — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11550

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the THESAURUS network architecture, divided into three main modules: (a) THESAURUS Network with Prototypes, (b) Momentum Module, and (c) Task and Structure Alignment Module. The global layout is structured horizontally across these three sections, each with distinct background colors—light blue for (a), light pink for (b), and light green for (c)—to differentiate functional components. A legend at the top defines symbols: star for Prototype, blue circle with plus for Addition, gray arrow for Operation, blue circle with cross for Nonlinear Fusion, yellow arrow for Forward & Backward propagation, blue trapezoid labeled 'NN' for Neural Network, and blue square labeled 'CE' for Cross-entropy loss.

In section (a), multiple graph inputs G = (A, X), G₁ = (A₁, X₁), and G₂ = (A₂, X₂) are processed by separate neural networks (NNs), represented as blue trapezoids. Each graph is depicted as a node-edge structure with associated feature matrices (stacked horizontal lines). The NN outputs Z₁ and Z₂ are fed into a central 'Sphere' module, which contains four colored prototypes (s₁ to s₄, marked with stars in orange, green, blue, red). These prototypes are combined via nonlinear fusion (blue cross circles) with the outputs R₁ and R₂ (colored grids) to form updated representations.

Section (b), the Momentum Module, receives prototype matrices P₁ and P₂ from (a) and previous state vectors B^(t−1) and ν^(t−1). It computes momentum updates using coefficients β₁ and β₂, applying operations like (1−β₁)P₁ᵀP₁ and (1−β₂)P₁ᵀ1_N. These are added (blue plus circles) to the previous states, forming new B and ν values, which are then passed to (c).

Section (c) performs Task and Structure Alignment. It takes B^(t) and S (prototype-task alignment) to generate ν₁ and ν₂, which are aligned with graph representations G₁ = (A₁, Z₁) and G₂ = (A₂, Z₂) via GW-OT (Graph Wasserstein Optimal Transport) blocks. Outputs Q₁ and Q₂ are formed through nonlinear fusion (blue cross circles) combining OT results with α and (1−α) weights. These are fed into CE loss blocks for training. Yellow arrows indicate forward and backward propagation throughout the entire pipeline, connecting all modules. The diagram emphasizes iterative learning with momentum and alignment between graph structures and task-specific prototypes.
