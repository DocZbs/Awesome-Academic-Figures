# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

QuIM-RAG: Advancing Retrieval-Augmented Generation with Inverted Question Matching for Enhanced QA Performance — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the process of constructing an inverted index for question matching, structured as a horizontal workflow from left to right. At the top, two primary inputs are shown: 'Chunked Document, si' on the left and 'Question Generation from Chunk, qij' on the right. Both inputs feed into an 'Embedding Model', depicted as a gray rounded rectangle positioned centrally above the main processing area. Below this, the core processing pipeline is divided into three main sections: document embedding and prototype generation on the left, quantization in the center, and question embedding and inverted index construction on the right.

In the left section, a table labeled 'Document Chunk Embedding' displays five rows, each corresponding to a chunk identified by a 'Chunk ID' (2, 5, 7, 8, 15) in a yellow header cell. Each row contains a sequence of numerical values (e.g., 0.80, 0.21, ..., 0.50) representing embeddings, displayed in colored rectangular cells (light blue, green, orange, pink, purple for different chunks). These embeddings are processed by a module labeled 'Prototype generation for Document (pi)', which outputs three prototype vectors (e.g., 0.16, 0.18, ..., 0.8), shown as horizontal sequences of numbers in white boxes.

In the right section, a similar table labeled 'Question Embedding' shows five rows, each associated with a 'Chunk ID' (2, 5, 7, 8, 15) in a yellow header cell. Each row contains a sequence of numerical values (e.g., 0.05, 0.1, ..., 0.78) representing question embeddings, also displayed in colored rectangular cells matching the chunk colors. These embeddings are processed by a module labeled 'Prototype generation for Question (pj)', which outputs three prototype vectors (e.g., 0.48, 0.43, ..., 0.59), shown as horizontal sequences of numbers in white boxes.

At the center, a 'VectorDB' component is represented by a Venn diagram with overlapping blue and red circles, symbolizing the storage or comparison space. Arrows from both sets of prototypes point toward this VectorDB. Below it, a label reads 'Quantization to nearest Prototype', indicating that document and question embeddings are mapped to their closest prototype vectors within the VectorDB.

Finally, the output is labeled 'Inverted Index, I', located at the bottom right. This structure maps each question embedding back to its corresponding Chunk ID, forming an index where each entry links a question representation to its source document chunk. The entire diagram uses solid black arrows to indicate data flow, with clear directional connections from inputs through embedding, prototype generation, quantization, and finally to the inverted index output.
