# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Progressive Transformer for Unifying Binary Code Embedding and Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11177

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct knowledge transfer configurations, labeled C-A and C-B, for a multi-task learning framework applied to binary code analysis. The global layout is structured as a directed graph with nodes representing different analytical tasks and arrows indicating the flow of information or dependency between them. The entire diagram is organized into two main vertical pathways: one on the left and center, and another on the right, with C-A and C-B denoting two alternative task ordering strategies.

In the central part of the diagram, 'Function Boundary Recovery' serves as a core module, receiving input from 'Instruction Boundary Recovery', which in turn is derived from 'Masked Language Modeling'. From 'Function Boundary Recovery', there are two primary downstream paths: one leading to 'Compiler Provenance' and then to 'Malware Classification', and another leading to 'Function Similarity Detection'.

Configuration C-A, located at the top and spanning horizontally, represents a forward knowledge transfer path where 'Function Signature Prediction' is the central task, feeding into 'Function Similarity Detection' and also receiving input from 'Function Name Prediction'. This configuration suggests a bidirectional relationship between function name and signature prediction, with similarity detection as an output.

Configuration C-B, located on the right side within a dashed box, presents an alternative, sequential knowledge transfer path. It begins with 'Function Similarity Detection', followed by 'Function Signature Prediction', and finally 'Function Name Prediction'. This implies a cascading dependency where each task's output informs the next.

All modules are represented as rectangular boxes with black borders and plain black text. There are no color distinctions or special shapes used; all connections are solid black arrows indicating directionality. The arrows show clear dependencies: for example, 'Masked Language Modeling' feeds into 'Instruction Boundary Recovery', which then feeds into 'Function Boundary Recovery'. Similarly, 'Function Boundary Recovery' feeds into both 'Compiler Provenance' and 'Function Similarity Detection'. The two configurations C-A and C-B are visually separated by dashed rectangles and labeled in gray text in the upper-right and lower-right corners respectively, emphasizing their distinct architectural arrangements.

The figure’s purpose, as indicated by the caption, is to compare these two knowledge transfer strategies in the context of binary code analysis tasks such as function recovery, malware classification, and function naming/signature prediction.
