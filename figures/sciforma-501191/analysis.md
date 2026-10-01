# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Boosting Long-Context Management via Query-Guided Activation Refilling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12486

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram illustrating three approaches to information retrieval and generation: Standard RAG, Efficient Long LLM, and the proposed ACRE method. The layout is divided into two main vertical sections by a dashed vertical line. On the left side, Standard RAG and Efficient Long LLM are shown as separate workflows, each leading to an 'Inferior Answer' symbolized by a blue speech bubble with a question mark and a red 'X'. On the right side, the ACRE method is depicted, culminating in a 'Good Answer' represented by a green checkmark inside a speech bubble.

In the left section, Standard RAG is enclosed in a gray rounded rectangle and connects via a solid arrow to the inferior answer. Below it, a horizontal dashed line labeled 'Discrete evidence' indicates fragmented or isolated pieces of retrieved information. Similarly, Efficient Long LLM, also in a gray rounded rectangle, points to an inferior answer, with a light blue triangular shape beneath it labeled 'Incomplete evidence', suggesting limited context coverage due to model constraints.

The right section details the ACRE architecture. At the top, ACRE is shown in a purple rounded rectangle, leading to the good answer. Below this, a horizontal bar labeled 'Refilled Activation' contains a sequence of colored circles: red, red, gray, gray, red, red, blue, blue — indicating activations being selectively refilled. An annotation reads 'Refilling with query-relevant activations.'

Beneath the refilled activation bar, two layers of cache are illustrated: 'L2 Cache' and 'L1 Cache'. The L2 Cache consists of multiple gray oval groups, each containing two dark gray circles, representing stored activations. Dashed arrows point from these L2 Cache groups upward to the Refilled Activation bar, indicating retrieval and refilling. The L1 Cache is shown as a horizontal bar with red circles on the left and blue circles on the right, labeled 'Query' at the far right end. A dashed arrow from the Query points to the L1 Cache, and another dashed arrow from the L1 Cache points to the L2 Cache, with the label 'Grasp the Global Information.' This suggests that the query interacts with the L1 Cache to access relevant global context, which then informs the L2 Cache for refilling.

The bottom of the diagram features a light blue shaded area spanning the width of the right section, with small vertical tick marks along its base, possibly representing a continuous context or memory space. The overall structure emphasizes that ACRE leverages a bi-layer KV cache mechanism with query-guided refilling to overcome the limitations of discrete evidence in RAG and incomplete evidence in long LLMs, thereby achieving superior performance.
