# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Practicable Black-box Evasion Attacks on Link Prediction in Dynamic Graphs -- A Graph Sequential Embedding Method — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13134

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the proposed Graph Sequence Embedding (GSE) method, divided into two main components: (a) Static Degree Embedding and (b) Dynamic Sequence Embedding. The global layout is structured into two horizontal sections separated by dashed borders—light blue for part (a) and orange for part (b)—with a clear top-to-bottom and left-to-right data flow.

In section (a), labeled 'Static Degree Embedding', an adjacency matrix sequence is represented as a series of T time steps, each containing a light blue square box labeled with a hat symbol over A followed by a subscript (e.g., Â₁, Â₂, ..., Âₜ). Each adjacency matrix feeds into a light green rectangular module labeled 'F', which computes a static degree feature. The output of this module is a teal rectangular box labeled X₁, X₂, ..., Xₜ, representing the degree embedding for each time step. These embeddings form the input sequence for the next stage.

Section (b), labeled 'Dynamic Sequence Embedding', processes the sequence of degree embeddings using a recurrent neural network structure composed of LSTM units. This section features a chain of yellow rectangular boxes labeled 'Cell', representing individual LSTM cells. Each cell receives an input from the corresponding Xₜ (via a light green arrow) and passes its hidden state (h₁, h₂, ..., hₜ₋₁) and cell state (c₁, c₂, ..., cₜ₋₁) to the next cell. The hidden state is passed via a yellow arrow, while the cell state is passed via a blue arrow, both marked with a small circle labeled 'C' to denote the connection between states. The final hidden state, denoted as hₜ, is explicitly labeled as equal to S, and is fed into a final yellow box labeled 'GSE'. This final output is annotated with the caption: 'Final Hidden, serves as the represented state S'.

The connections between modules are indicated by arrows: solid blue arrows represent the forward pass from adjacency matrices to degree embeddings, and solid light green arrows connect the degree embeddings to the LSTM cells. Within the LSTM chain, yellow arrows indicate the hidden state propagation, and blue arrows indicate the cell state propagation. The entire process is designed to transform a sequence of graph adjacency matrices into a single, compact representation S through a combination of static feature extraction and dynamic sequence modeling.
