# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Selective Shot Learning for Code Explanation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12852

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Selective Shot Learning (SSL) pipeline for generating explanations for code snippets using a large language model (LLM). The global layout is horizontal, progressing from left to right: input data on the far left, three parallel selection modules in the center, and the LLM inference stage on the right. The entire process begins with a query code snippet q and a set of training data consisting of code-explanation pairs, denoted as d_i. The training data is visually represented as a rounded rectangle containing multiple Python code examples with comments, while the query q is shown below it as a user icon followed by the code 'os.mkdir(path)' inside a rectangular box.

In the center, three distinct selection methods are presented vertically stacked, each enclosed in a light gray box with a blue title. The first, 'Token-based Selection (Selection_token)', processes both d_i and q through a 'Preprocess' step (rectangle), followed by 'Tokenize' (rectangle), and computes 'Jaccard similarity' (hexagon) between tokenized outputs. The second, 'Emb-based Selection (Selection_semantic)', uses CodeBERT (rectangle) to generate embeddings d̄_i and q̄ from d_i and q respectively, then calculates 'Cosine similarity' (hexagon) between them. The third, 'Code Named Entity based Selection (SSL_ner)', employs a 'Code-NER' module (icon with labeled entities like function, library, algorithm, variable) to label both the training data and the query, producing 'Entity Labelled Training data' and 'Entity Labelled Query'. These labeled versions are then compared via 'Entity similarity' (hexagon).

Each selection method outputs a ranked list of code demonstrations, which are visualized as a vertical list containing '#1 Snippet: Explanation:', ..., '#k Snippet: Explanation:', followed by the query and its snippet. These lists are passed to the rightmost section labeled 'top-k selection', where the top-k examples are chosen. This section feeds into an LLM, represented by a cube icon, which generates the final 'Explanation' as output. All three selection paths converge at this stage, indicating that any of the three methods can be used to select demonstrations for the LLM. Arrows clearly indicate the flow: from inputs to selection modules, from selection modules to demonstration lists, and finally from demonstrations to the LLM. The diagram emphasizes modularity and flexibility in selecting relevant code examples for few-shot learning.
