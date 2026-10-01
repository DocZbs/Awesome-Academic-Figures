# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RoLargeSum: A Large Dialect-Aware Romanian News Dataset for Summary, Headline, and Keyword Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11317

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a baseline model for generating summaries, headlines, and keywords in the RoLargeSum framework. The global layout is structured vertically, depicting a data flow from raw token inputs at the bottom to the decoder at the top, with an adversarial training branch on the left side. The main workflow begins at the bottom with a sequence of tokens labeled tok₁ through tok₆, grouped into non-overlapping chunks (e.g., tok₁–tok₂, tok₃–tok₄, tok₅–tok₆), indicated by dashed boxes labeled 'Chunk'. These chunks are fed into an 'Encoder' module, represented as a white rectangular box, which processes each chunk independently to produce a sequence of embeddings: emb₁ through emb₆, shown as purple rectangular blocks arranged horizontally under a brace labeled 'kNN index'. These embeddings form the basis for a kNN index, which is used for efficient retrieval during decoding.

Above the embeddings, a 'Long input index' block (orange rectangle) receives input from the kNN index and feeds it into a 'Decoder' (white rectangle at the top). The Decoder contains a 'Cross-Attention' submodule (light blue rectangle), which uses the long input index as context and takes a 'Query' input to generate outputs. Arrows indicate that the Cross-Attention module both receives information from the Long input index and sends feedback to it, suggesting a bidirectional interaction.

On the left side, an adversarial training path is depicted using a dashed curved arrow labeled 'Adversarial Training'. This path branches from the embedding layer and passes through two green rectangular modules: 'Average', which computes the average of the embeddings, and 'FF' (Feed-Forward), which classifies the dialect of the input. The output of the FF module is labeled 'Dialect', indicating the adversarial objective is to predict dialect, thereby encouraging the encoder to generate dialect-independent embeddings. The adversarial loss is applied during training to make the embeddings invariant to dialect.

The visual attributes include distinct colors for different components: yellow for input tokens, purple for embeddings, green for adversarial modules, orange for the long input index, light blue for the cross-attention mechanism, and white for the encoder and decoder. All modules are rectangular with black borders, and connections are solid black arrows except for the adversarial training path, which is a dashed arrow. The figure includes textual labels such as 'Encode chunks', 'Chunk', 'kNN index', 'Query', and 'Dialect' to clarify the function of each component. The overall structure emphasizes a modular design where chunked inputs are encoded, indexed for efficient retrieval, and used in a decoder with cross-attention, while adversarial training ensures robustness against dialectal variation.
