# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FlowDock: Geometric Flow Matching for Generative Protein-Ligand Docking and Affinity Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10966

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the FlowDock framework for biomolecular docking, structured as a horizontal workflow from left to right within a light blue rounded rectangular container labeled 'FlowDock'. The global layout is divided into three main stages: input processing on the left, core modeling in the center, and output visualization on the right. The inputs include a protein sequence (e.g., 'PESADLRALAKHLY...') and a ligand SMILES string (e.g., 'COc1cc(-c2c(C=O)NS...'). The protein sequence feeds into two parallel modules: ESMFold (a green rectangle) which generates an apo protein structure (a teal ribbon diagram labeled 'Apo' with mathematical notation x₀^P ∈ ℝ^{N^P×3}), and PLM: ESM2 (another green rectangle) which provides protein embeddings as part of the 'Protein Inputs'. The ligand SMILES string is processed by a Harmonic Prior module (orange rectangle), producing an initial ligand conformation (a small molecular diagram labeled 'x₀^L ∈ ℝ^{N^L×3}') at time t=0. These inputs converge into a central cyan-colored rectangular block representing the core FlowDock model. This block contains four internal components: 'Encoding and Contact Predictor', 'Contact Maps', 'Flow ODE', and 'Equivariant Prediction Heads'. The 'Encoding and Contact Predictor' receives both protein and ligand inputs and outputs contact maps, which feed into the 'Flow ODE'. The 'Flow ODE' also receives a 'Block Adjacency' signal from the apo structure and produces intermediate representations that are passed to the 'Equivariant Prediction Heads'. The outputs of this central block are shown at time t=1: predicted atom positions for the protein (x₁^P ∈ ℝ^{N^P×3}) and ligand (x₁^L ∈ ℝ^{N^L×3}), depicted as a holo protein structure (labeled 'Holo') and a bound ligand diagram respectively. Additionally, the model predicts binding affinity (pK) and confidence (pDDT). On the far right, the final output is visualized as an 'All-Atom Complex' — a combined ribbon diagram showing the protein-ligand interaction. Arrows indicate data flow: from inputs to the central model, through its internal components, and finally to the outputs. The timeline progresses from t=0 (initial states) to t=1 (final predictions), emphasizing the continuous transformation modeled by the Flow ODE.
