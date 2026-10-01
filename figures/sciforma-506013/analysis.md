# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relation-Aware Equivariant Graph Networks for Epitope-Unknown Antibody Design and Specificity Optimization — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00013

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a structural representation of a protein backbone, focusing on the geometric relationships between consecutive amino acid residues. The global layout is linear and sequential, depicting a chain of residues indexed by i, extending from left to right. Each residue is represented by its key atoms: nitrogen (N), alpha-carbon (Cα), carbonyl carbon (C), and oxygen (O), arranged in a repeating pattern along the backbone. The structure emphasizes the connectivity and angular relationships between these atoms, forming a backbone framework with explicit labeling of bond and dihedral angles.

Visual modules consist of circular nodes representing atoms, color-coded for clarity: Cα atoms are pink, N atoms are light blue, O atoms are pale yellow, and C atoms are light green. These nodes are connected by solid black lines indicating covalent bonds. Dashed red arcs denote bond angles (αi−1, βi, γi−1), while curved blue arrows indicate dihedral angles (ψi−1, φi, ωi−1). At the center-right, a local coordinate frame Qi is defined for residue i, shown as a green vector ci, a blue vector ni, and a red vector ci × ni, forming an orthogonal basis. Below this, the mathematical definitions for the unit vectors ui, ci, and ni are provided using LaTeX-style equations, derived from the positions of successive Cα atoms. The expression for Qi = [ci, ni, ci × ni] is written in green text, emphasizing its role as a rotationally and translationally invariant feature.

Connections and arrows include solid black lines connecting atoms within each residue and between adjacent residues, forming the backbone chain. Dashed red arcs connect three consecutive atoms to define bond angles, while curved blue arrows span four atoms to represent dihedral angles. A set of colored arrows (green, blue, red) emanating from the Cαi atom visually depict the local coordinate frame Qi. Additionally, double black lines connect the C atom to the O atom, indicating a double bond. The figure is annotated with labels for each atom and angle, and the equations for ui, ci, and ni are positioned near the Cαi node, linking the geometric representation to its mathematical formulation. The overall design conveys a method for extracting invariant geometric features from protein structures, suitable for machine learning applications in structural biology.
