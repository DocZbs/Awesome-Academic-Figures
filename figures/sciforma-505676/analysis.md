# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ReTaKe: Reducing Temporal and Knowledge Redundancy for Long Video Understanding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20504

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two pipeline diagrams comparing an original and an optimized prefilling process in a computational framework, likely for large language model inference or training, emphasizing efficiency gains through overlapping operations across CUDA streams. The global layout consists of two horizontally aligned subfigures labeled (a) Original prefilling pipeline and (b) Optimized prefilling pipeline. Each subfigure displays a sequence of operations arranged left-to-right, representing temporal progression, with chunks demarcated by vertical dashed lines and labeled as 'chunk i' and 'chunk i+1'. The operations are represented as rectangular boxes with distinct colors and labels, grouped under two CUDA streams: S₁ and S₂.

In both subfigures, each operation box is labeled with either Fᵢˡ or Cᵢˡ, where F denotes prefilling and C denotes compression, with subscript i indicating chunk index and superscript l denoting layer index. The color coding distinguishes layers: green for layer 0, light blue for layer 1, orange for layer 26, and pink for layer 27. These colors are consistent across both pipelines.

In subfigure (a), the original pipeline shows all operations executed sequentially within a single stream S₁. For chunk i, operations Fᵢ⁰, Cᵢ⁰, Fᵢ¹, Cᵢ¹, ..., Fᵢ²⁶, Cᵢ²⁶, Fᵢ²⁷, Cᵢ²⁷ are arranged consecutively. The transition to chunk i+1 begins immediately after Cᵢ²⁷, with Fᵢ₊₁⁰ and Cᵢ₊₁⁰ following. There are no overlaps between chunks or layers.

In subfigure (b), the optimized pipeline introduces parallelism via two CUDA streams, S₁ and S₂. Stream S₁ handles compression operations Cᵢ⁰, Cᵢ¹, ..., Cᵢ²⁷, while stream S₂ handles prefilling operations Fᵢ⁰, Fᵢ¹, ..., Fᵢ²⁷. Crucially, the operations are staggered such that compression for chunk i (Cᵢˡ) begins after the corresponding prefilling (Fᵢˡ) completes, but overlaps with prefilling of subsequent layers within the same chunk. Moreover, prefilling for chunk i+1 (Fᵢ₊₁⁰) starts before compression for chunk i (Cᵢ²⁷) finishes, enabling overlap between chunks. This overlap is visually indicated by the alignment of Fᵢ₊₁⁰ with Cᵢ²⁷ and Cᵢ₊₁⁰ with Fᵢ²⁷, demonstrating concurrent execution across streams and chunks.

There are no explicit arrows connecting the boxes; instead, the horizontal arrangement implies sequential execution within each stream, while vertical alignment between S₁ and S₂ indicates potential concurrency. The figure’s caption clarifies that S₁ and S₂ represent different CUDA streams, and Fᵢˡ and Cᵢˡ denote prefilling and compression operations for chunk i in layer l. The optimization aims to reduce latency by overlapping computation across streams and chunks.
