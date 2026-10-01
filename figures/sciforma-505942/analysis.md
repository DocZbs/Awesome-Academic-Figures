# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EdgeRAG: Online-Indexed RAG for Edge Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct phases of a Retrieval-Augmented Generation (RAG) pipeline: (a) Indexing and (b) Lookup. The overall layout is horizontal, with each phase presented as a linear workflow from left to right, using rectangular boxes for processing steps and a cylinder for data storage. Both phases are labeled at the top with their respective titles in parentheses.

In section (a) Indexing, the process begins with a rectangular box labeled 'Document'. An arrow labeled '① Preprocess' points from this box to a stack of three overlapping rectangles labeled 'Nodes', indicating that the document is broken down into smaller units. From the 'Nodes' box, an arrow labeled '② Generate Embedding' leads to another stack of three overlapping rectangles labeled 'Vector Embeddings', representing the transformation of nodes into dense vector representations. Finally, an arrow labeled '③ Insert' connects the 'Vector Embeddings' to a cylindrical shape labeled 'Index', symbolizing the storage of these embeddings in a searchable database.

Section (b) Lookup depicts the retrieval and response generation phase. It starts with a rectangular box labeled 'Query'. An arrow labeled '① Generate Embedding' leads to a single rectangle labeled 'Vector Embedding', showing the query being converted into a vector. This is followed by an arrow labeled '② Look Up Nearest Vectors' pointing to the same cylindrical 'Index' used in indexing, indicating a similarity search within the stored vectors. From the 'Index', an arrow labeled '③ Retrieve Nodes' points to a stack of three overlapping rectangles labeled 'Nodes', representing the retrieved relevant content. The final step is an arrow labeled '④ Generate Response (LLM)' leading to a rectangular box labeled 'Response', signifying that a large language model uses the retrieved nodes to generate a final answer.

All boxes and the cylinder are filled with light gray color and have black borders. Text labels inside the boxes are centered and in bold. The arrows are thick, dark gray, and solid, with arrowheads indicating direction. Each step in both workflows is numbered with a circled numeral and accompanied by a descriptive label below or beside the arrow. The figure is clean, minimalistic, and designed to clearly convey the sequential logic of the RAG system.
