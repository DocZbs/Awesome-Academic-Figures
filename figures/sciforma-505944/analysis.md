# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EdgeRAG: Online-Indexed RAG for Edge Devices — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative timeline analysis of four different strategies for embedding retrieval in a system, labeled as ① Offline IVF, ② Generate Embeddings, ③ Load Embeddings, and ④ Embedding Cache Hit. The horizontal axis represents time, progressing from left to right, and each strategy is depicted as a sequence of rectangular stages arranged horizontally. Above the topmost timeline, a large brace spans the first three stages of all four strategies, labeled 'Time to First Token (TTFT)', indicating that this metric encompasses the duration from query embedding through second-level lookup or generation until the prefill stage begins.

Each strategy consists of a series of processing steps, represented by rectangular blocks with black borders and centered text. The stages common across all strategies include 'Query Embed', 'First-level Look up', and 'Prefill'. The differences lie in the intermediate steps between 'First-level Look up' and 'Prefill'.

In strategy ① Offline IVF, the sequence is: Query Embed → First-level Look up → Second-level Look up → Prefill. The 'Second-level Look up' block is shaded light gray, distinguishing it from the white blocks of other stages.

Strategy ② Generate Embeddings follows: Query Embed → First-level Look up → Second-level Generate → Second-level Look up → Prefill. Here, the 'Second-level Generate' block is shaded light blue, indicating a computational step for generating embeddings on-demand.

Strategy ③ Load Embeddings proceeds as: Query Embed → First-level Look up → Load Embeddings → Second-level Look up → Prefill. The 'Load Embeddings' block is also shaded light blue, signifying a data loading operation.

Strategy ④ Embedding Cache Hit shows: Query Embed → First-level Look up → Cache Hit → Second-level Look up → Prefill. The 'Cache Hit' block is shaded light blue, representing a successful retrieval from an embedding cache, which avoids generation or loading.

All timelines are aligned vertically, allowing direct comparison of the duration and composition of TTFT across methods. The figure visually emphasizes that strategies involving embedding generation or loading (② and ③) add extra stages, potentially increasing TTFT, while the cache hit (④) minimizes latency by skipping these steps. The consistent use of color coding—light gray for offline lookup and light blue for dynamic operations—helps differentiate the nature of each intermediate step. There are no explicit arrows connecting the blocks; instead, the horizontal arrangement implies sequential flow. The figure’s purpose is to illustrate how different embedding handling approaches affect the time to first token, a critical performance metric in retrieval-augmented systems.
