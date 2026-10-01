# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the PRISM framework, a method for processing a continuous stream of data chunks in an efficient, memory-optimized manner. The global layout is horizontal, depicting a sequential pipeline where data flows from left to right through multiple processing stages. Each stage corresponds to a data 'Chunk' (labeled Chunk 1, Chunk 2, Chunk 3, etc.), represented by light blue rounded rectangles. These chunks are processed sequentially by a central model component, shown as a purple rounded rectangle labeled 'Model'.

The visual modules include: (1) Input chunks, which feed into processing units (white rounded rectangles); (2) a central 'Model' block; (3) two projection or processing operators denoted by small white squares labeled 'P'; (4) memory components labeled 'Prev. Memory' and 'New Memory', indicated by text annotations near the flow; and (5) a feedback loop labeled 'Proposed Revision', represented by a dashed purple arrow.

Key attributes: The 'Model' is centrally positioned and colored purple, emphasizing its core role. The 'P' operators are small white boxes with black borders, placed before and after the Model, suggesting pre- and post-processing steps. The KV Cache is symbolized by a yellow lightning bolt connecting the output of the first processing unit to the input of the second 'P' operator, indicating a fast, cached retrieval mechanism. The 'Prev. Memory' is shown as a dashed purple arrow feeding into the second 'P' operator, while 'New Memory' is indicated by a solid yellow arrow looping from the output of the Model back to the input of the next chunk’s processing unit, signifying memory update.

Connections and arrows define the workflow: Data from Chunk 1 flows into a white processing unit, then to the first 'P' operator, which feeds into the Model. The Model outputs to the second 'P' operator, which then feeds into the next processing unit for Chunk 3. A feedback loop from the Model's output to the second 'P' operator is labeled 'Proposed Revision', suggesting iterative refinement. Additionally, the KV Cache (yellow lightning bolt) connects the first processing unit’s output to the second 'P' operator, enabling reuse of key-value pairs. The 'New Memory' (solid yellow arrow) loops from the Model’s output back to the next chunk’s processing unit, updating the memory state. The 'Prev. Memory' (dashed purple arrow) feeds into the second 'P' operator, indicating prior context usage. The entire process is designed to maintain efficiency via caching and structured memory updates, allowing PRISM to handle long sequences with minimal computational overhead.
