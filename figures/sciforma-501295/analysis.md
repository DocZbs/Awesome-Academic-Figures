# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLMs are Also Effective Embedding Models: An In-depth Overview — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12591

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a contextual expansion framework for embedding models, structured in a top-down flow. At the top left, a purple rounded rectangle labeled 'Query' represents the input text. From this query, three distinct context sources are derived via dashed arrows: 'Neighbor documents', 'In-context examples', and 'Generated context'. The first source, 'Neighbor documents', is depicted as a stack of three check-listed documents, with a red label 'RMs' (retrieval models) above the arrow indicating that retrieval models are used to fetch these documents. The second source, 'In-context examples', is shown as a book icon with a blue banner labeled 'EXAMPLE', and a red 'LLMs' label above the arrow, signifying that large language models generate or select these examples. The third source, 'Generated context', is illustrated as a notepad with a pencil and several small circles above it, also connected by a dashed arrow from the query with a red 'LLMs' label, indicating LLMs are responsible for generating this context. These three context types are then combined with the original query into a unified input stream labeled 'Query + Context', represented by a wide beige trapezoid that funnels down to the next stage. Below this, a gray rounded rectangle contains a neural network diagram with multiple layers of interconnected nodes, symbolizing a large language model (LLM), accompanied by a small flame emoji and the label 'LLM' in blue. A solid black arrow points downward from this LLM block to the final output, labeled 'Output embedding', which is the result of processing the enriched query-context input. The overall layout is hierarchical and sequential, emphasizing how diverse context sources—retrieved, example-based, and generated—are integrated before being processed by an LLM to produce a contextualized embedding. The visual design uses color coding: purple for input, red for model labels (RMs, LLMs), blue for LLM components, and beige for the context aggregation layer. All text labels are clear and positioned directly beneath or adjacent to their corresponding visual elements.
