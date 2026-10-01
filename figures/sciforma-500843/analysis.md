# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Investigating Mixture of Experts in Dense Retrieval — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11864

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the SB-MoE architecture, which is structured into two parallel processing streams: one for query embeddings and another for document embeddings. Each stream contains a dedicated MoE (Mixture-of-Experts) layer, labeled 'Query-level MoE Layer' and 'Document-level MoE Layer', respectively. Both MoE layers are visually represented as large purple rectangular containers, indicating their modular and distinct roles within the architecture.

Each MoE layer consists of multiple experts—labeled 'Expert 1', 'Expert 2', ..., 'Expert n'—represented as rounded rectangles with a light beige fill and black borders. These experts receive input from a shared embedding representation: 'Query Embedding Representation' for the query side and 'Document Embedding Representation' for the document side. These input representations are shown as rounded rectangles with a light gray fill at the bottom of each respective stream.

Above the experts in each MoE layer is a 'Pooling' module, depicted as a yellow rounded rectangle. The outputs from all experts feed into this pooling operation, which aggregates their contributions. The pooled output is then combined with the original input embedding representation via an addition operation, symbolized by a white circular node with a '+' sign. This summed result becomes the 'Output Query Embedding' or 'Output Document Embedding', shown as light gray rounded rectangles above each MoE layer.

A 'Gating Function', represented as a green rounded rectangle, is positioned to the left of each MoE layer. It receives the input embedding representation and determines which experts should be activated for processing that input. The gating function's output directs the flow to the appropriate experts within the MoE layer.

Finally, the 'Output Query Embedding' and 'Output Document Embedding' are fed into a 'Similarity' module, shown as a light blue rounded rectangle at the top center of the diagram. This module computes a similarity score between the two final embeddings, likely used for ranking or retrieval purposes. Arrows indicate the direction of data flow: from input representations to gating functions, to experts, through pooling and addition, to output embeddings, and finally to the similarity computation. All connections are solid black lines with arrowheads, clearly delineating the computational path.
