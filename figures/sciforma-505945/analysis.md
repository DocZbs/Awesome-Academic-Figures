# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EdgeRAG: Online-Indexed RAG for Edge Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical indexing process for document embeddings, structured as a left-to-right workflow with seven numbered steps. The global layout is linear and sequential, beginning with a 'Document' on the far left and progressing through preprocessing, embedding generation, clustering, and multi-level index creation, ending with storage of second-level embeddings. The diagram uses rectangular boxes for processing stages and cylindrical shapes for data storage indices, with arrows indicating the flow of data and operations.

Visual modules include: a white rectangle labeled 'Document' at the start; a stacked rectangle labeled 'Nodes' representing preprocessed document segments; another stacked rectangle labeled 'Vector Embeddings' for generated embeddings; a stacked rectangle labeled 'Cluster Centroids' for results of clustering; two green cylinders labeled 'First-level Index' and 'Second-level Index' for hierarchical storage; and a gray cylinder labeled 'Second-level Embeddings' for final stored data. All text labels are black, with step numbers (1–7) enclosed in black circles and placed near corresponding arrows. The arrows are thick, dark gray, and directional, with labels describing each step.

Connections and arrows define the workflow: Step 1, 'Preprocess', connects 'Document' to 'Nodes'. Step 2, 'Generate Embedding', links 'Nodes' to 'Vector Embeddings'. Step 3, 'Clustering', branches downward from 'Vector Embeddings' to 'Cluster Centroids'. Step 4, 'Insert Centroids', connects 'Cluster Centroids' to 'First-level Index'. Step 5, 'Look up Centroids', branches from 'Vector Embeddings' to 'Second-level Index'. Step 6, 'Create Index', connects 'Vector Embeddings' to 'Second-level Index'. Step 7, 'Store Embedding', connects 'Second-level Index' to 'Second-level Embeddings'. The diagram emphasizes a dual-path approach: one path creates cluster centroids and stores them in the first-level index, while the other path uses vector embeddings to create and populate a second-level index, which then stores the embeddings. This reflects a two-tiered indexing strategy where the first level contains centroid representations for coarse-grained search, and the second level holds full embeddings for fine-grained retrieval.
