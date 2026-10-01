# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

De Novo Generation of Hit-like Molecules from Gene Expression Profiles via Deep Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19422

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the HVL2Mol model, a two-stage deep learning framework for generating candidate molecules based on gene expression profiles. The overall layout is divided into two main components: (A) Feature Extraction of Gene Expression Profile and (B) Molecular Generation, connected by a feedback loop labeled 'Hit Identification' that leads from generated molecules back to the input gene expression data.

In section (A), a gene expression profile, represented by a double helix icon, is fed into a Variational Autoencoder (VAE). The VAE consists of an encoder (a blue trapezoid narrowing toward the center) that compresses the input into a latent space, depicted as a 3D manifold with a Gaussian distribution. From this latent space, a decoder (a light blue trapezoid expanding outward) reconstructs the original gene expression profile, shown again as a double helix. The latent features extracted by the encoder are then passed as a condition to the LSTM in section (B).

Section (B) details the molecular generation process using an LSTM network. The condition from the VAE’s latent space is concatenated with an embedding vector representing a start token. This concatenated vector feeds into the first time step of a multi-layer LSTM, consisting of three hidden layers, each represented by a row of blue circular nodes. At each time step, the LSTM generates a character of a SMILES string—starting with 'C', followed by 'O', and ending with '<EOS>' (end-of-sequence token)—which is shown above the corresponding output node. Dashed lines indicate the recurrent connections within each layer, while solid arrows show the flow of information between layers and across time steps. The generated characters are sequentially assembled into a complete SMILES string, which represents a generated molecule, illustrated as a chemical structure with rings and functional groups. This molecule is then considered a candidate for hit identification, completing the feedback loop to the initial gene expression profile.

The visual modules include distinct shapes and colors: DNA helices for gene expression, blue trapezoids for VAE encoder/decoder, a 3D manifold for latent space, green rectangles for embeddings, and blue circles for LSTM hidden units. Text labels such as 'Latent Features as the condition for LSTM', 'Concatenation', and 'Generated molecule' clarify the data flow. The connections are primarily directed arrows indicating forward propagation, with dashed lines denoting recurrent links in the LSTM. The entire diagram emphasizes a conditional generative process where biological features guide the synthesis of novel chemical structures.
