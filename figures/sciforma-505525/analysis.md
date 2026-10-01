# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DecDEC: A Systems Approach to Advancing Low-Bit LLM Quantization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20185

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a fast approximate Top-K algorithm, divided into two main parts: (a) the overall pipeline and (b) the detailed internal mechanism of the bucket-based approximate Top-K module.

[1] Global Layout and Structure:
The figure is horizontally split into two panels labeled (a) and (b), connected by a dashed line indicating that panel (b) provides an expanded view of the processing within each 'Bucket-based Approximate Top-K' block from panel (a).

Panel (a) shows a top-down flow: an input vector X of dimension d_in = 4096 is partitioned into four contiguous chunks (Chunk 0 to Chunk 3), each of size 1024. Each chunk is processed independently by a dedicated 'Bucket-based Approximate Top-K' module. The outputs from these modules are concatenated to form a final output vector sc_indices of length k = 128, where each module contributes k_chunk = 32 elements.

Panel (b) zooms into one such module, showing how it processes a 1024-dimensional input. It consists of three sequential steps: (1) Scatter elements into buckets, (2) Gather elements starting from bucket 0 until the total reaches k_chunk, and (3) Fill the remaining slots by random selection.

[2] Visual Modules and Attributes:
In panel (a), the input vector X is represented as a horizontal bar segmented into four colored blocks: red for Chunk 0, orange for Chunk 1, yellow for Chunk 2, and green for Chunk 3. Each chunk feeds into a corresponding rectangular box labeled 'Bucket-based Approximate Top-K', colored to match its input chunk. Below these boxes, the output sc_indices is shown as a segmented bar matching the color scheme of the inputs, with each segment containing ellipses to indicate multiple indices. Labels specify d_in = 4096, k = 128, and k_chunk = 32.

In panel (b), the input is again a 1024-element bar. Below it, 32 cylindrical buckets are arranged horizontally, labeled Bucket 0 through Bucket 31. Each bucket contains a pair of values in brackets, representing bounds (e.g., [b_0^k, ∞) for Bucket 0, [b_1^k, b_2^k) for Bucket 1, etc.). Inside each bucket, gray rectangles represent stored elements; their quantity varies, with Bucket 31 being nearly full. Below the buckets, step ② shows a horizontal bar collecting elements sequentially from left to right (starting at Bucket 0), with a label indicating that 30 elements have been gathered so far. Step ③ shows the remaining slots being filled by random selection, indicated by dashed lines connecting to the buckets.

[3] Connections and Arrows:
In panel (a), solid downward arrows connect each chunk to its respective processing module. Solid diagonal arrows point from each module to the corresponding segment of the output sc_indices vector. A dashed line connects the rightmost processing module to panel (b), indicating expansion.

In panel (b), solid downward arrows from the input bar lead to each bucket. Step ① is labeled above the buckets. Step ② is shown with arrows pointing from buckets 0, 1, 8, 9, and 31 to the gathering bar below, illustrating the sequential collection process. Step ③ is depicted with dashed arrows from the buckets to the end of the gathering bar, indicating random filling of the last few positions.
