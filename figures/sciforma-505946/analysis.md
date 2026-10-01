# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EdgeRAG: Online-Indexed RAG for Edge Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage retrieval process designed for efficient vector-based information retrieval from a large text corpus. The global layout is a left-to-right, top-down flowchart, beginning with a query input on the far left and progressing through several indexing and caching stages before culminating in the retrieval of relevant nodes. The process is structured into six main steps, indicated by numbered labels (① through ⑥), with an additional step labeled ④b for handling cache misses or generation of new embeddings.

The visual modules consist of rectangular boxes, cylindrical shapes representing indexes or caches, and stacked rectangles symbolizing collections of data. The 'Query Embedding' is represented as a black-bordered rectangle at the start. It connects via a thick gray arrow labeled ① 'Search' to a cylinder labeled 'First-level Index'. From there, another arrow labeled ② 'Lookup' leads to a rectangle titled 'Centroid Embeddings Index'. This module has two outgoing paths: one downward, labeled ③ 'Search Stored Embeddings', leading to a light blue cylinder named 'Stored Second-level Index'; and another rightward, labeled ④ 'Lookup Cache', pointing to a light blue cylinder called 'Embedding Cache'.

The 'Embedding Cache' also receives an incoming arrow from the 'Text Corpus' (a white cylinder on the far right), labeled ④b 'Miss, Gen. Embedding', indicating that when an embedding is not found in the cache, it is generated from the text corpus. From the 'Embedding Cache', a thick gray arrow labeled ⑤ 'Load Embeddings' points to a stack of rectangles labeled 'Vector Embeddings'. Similarly, the 'Stored Second-level Index' also feeds into the 'Vector Embeddings' stack via an arrow labeled ⑤ 'Load Embeddings'. Finally, from the 'Vector Embeddings' stack, an arrow labeled ⑥ 'Retrieve' leads to a stack of rectangles labeled 'Nodes', representing the final retrieved results.

All arrows are thick and gray, indicating data flow direction. The light blue color of the 'Embedding Cache' and 'Stored Second-level Index' visually distinguishes them as cached or stored components, while the white cylinders ('First-level Index', 'Text Corpus') and black-bordered rectangles ('Query Embedding', 'Centroid Embeddings Index') represent primary processing or source components. The stacked rectangles for 'Vector Embeddings' and 'Nodes' suggest a collection or batch of items. The entire diagram emphasizes a hierarchical and cache-aware retrieval strategy, where initial search operations are refined through multiple index levels and embedding caches to efficiently retrieve relevant nodes from a large corpus.
