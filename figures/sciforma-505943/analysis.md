# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EdgeRAG: Online-Indexed RAG for Edge Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the retrieval process of an Inverted File Index, structured as a hierarchical two-level indexing system. The global layout is a top-down flowchart depicting four sequential steps in the retrieval workflow, marked by numbered annotations (① through ④) and directional blue arrows indicating the path taken during query processing. At the top, an 'Incoming Query Embedding' enters the system and initiates the process.

Step ①, labeled 'Lookup First-level', shows the query embedding being directed into a wide, light green rectangular box labeled 'First-level Index'. This index acts as the root of the hierarchy and is visually distinct due to its size and color. From this first-level index, two paths diverge: one blue arrow leads to a smaller green rectangle labeled 'Second-level Index' on the left, while a gray arrow leads to another similar green rectangle on the right, indicating alternative branches in the index structure.

Step ②, 'Lookup Index', follows the blue path from the first-level index to the left second-level index. This step involves selecting a specific second-level index based on the query’s similarity or hash-based mapping. The visual representation emphasizes this selection via a blue arrow.

Step ③, 'Search Second-level', proceeds from the selected second-level index. Three gray rectangular boxes, labeled 'Stored Embedding' in the legend, branch out from this index. These represent stored embeddings within the second-level index, which are compared against the incoming query embedding. The blue arrows from the second-level index point to these stored embeddings, indicating the search operation.

Step ④, 'Retrieve Data', occurs when a match is found. Blue arrows extend downward from each stored embedding to a white square box labeled 'Data Chunk' in the legend. These data chunks represent the actual content retrieved from storage. The right side of the diagram includes a second branch of the second-level index, connected by gray arrows, which also leads to stored embeddings and data chunks, but is not traversed during the current query path, suggesting it represents an alternative or unselected branch.

The legend at the bottom clarifies the visual elements: a white square denotes a 'Data Chunk', a light green rectangle denotes an 'Index', and a gray rectangle denotes a 'Stored Embedding'. A blue arrow symbolizes the 'Steps Taken' during the retrieval process, distinguishing active traversal from inactive or alternative paths shown in gray. The diagram effectively conveys a hierarchical, multi-stage retrieval mechanism where the query embedding navigates through levels of indices to locate and retrieve relevant data chunks.
