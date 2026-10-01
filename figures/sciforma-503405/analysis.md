# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DOFEN: Deep Oblivious Forest ENsemble — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16534

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-part methodology for constructing and bagging a Relaxed ODT Forest, presented in two main sections labeled (a) and (b). The global layout is horizontal, with section (a) on the left depicting the forest construction process and section (b) on the right showing the bagging and prediction phase. A legend at the top right defines symbols: σ represents the softmax operation, and ⊗ denotes the weighted sum operation.

In section (a), 'Relaxed ODT Forest Construction', the process begins with a vertical stack of six pairs of elements, each pair consisting of a square labeled w_i1 to w_i6 (in varying shades of pink and purple) and a cube labeled →e₁ to →e₆ (in corresponding colors). These represent feature weights and embeddings. An arrow points from this stack to a text label indicating 'sample N_estimator instances of (w_ij, →e_j) without replacement and repeat N_forest times'. This sampling leads to two separate horizontal arrays. The first array, labeled →w'_i, contains N_estimator pink/purple squares (w_i1, w_i2, w_i3) arranged side by side, enclosed within a dashed box labeled N_forest above and N_estimator below. The second array, labeled E', consists of N_estimator cubes (→e₁, →e₂, →e₃) in matching colors, also enclosed in a dashed box with the same labels. From these two arrays, three downward arrows labeled σ (softmax) are drawn from →w'_i, and three upward arrows point to a central ⊗ symbol (weighted sum operation). The output of this operation is a single pink/purple cube labeled →f_i, representing the forest embedding, which is enclosed in a dashed box labeled N_forest.

Section (b), 'Bagging of Relaxed ODT Forest', continues from →f_i. An arrow labeled 'a shared Δ₃' points from →f_i to a group of N_forest red rectangles labeled ŷ_i, indicating predictions made by a shared sub-network. Below this group, an arrow labeled 'average' points to a rectangular box labeled 'final prediction'. Another arrow from the group of ŷ_i points to a group of N_forest red rectangles labeled loss_i, and from there, an arrow labeled 'sum' points to a box labeled 'loss'.

The visual modules use distinct shapes and colors: squares for weights (w), cubes for embeddings (→e), and rectangles for predictions (ŷ_i) and losses (loss_i). The color gradient from light pink to dark blue across the initial pairs suggests variation or different feature types. Dashed boxes group elements under N_forest, indicating multiple instances. All text labels are in black, with mathematical symbols and variables in standard notation. The connections are solid black arrows, clearly indicating the data flow and operations between modules.
