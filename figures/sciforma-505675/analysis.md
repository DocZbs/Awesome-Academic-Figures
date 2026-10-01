# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ReTaKe: Reducing Temporal and Knowledge Redundancy for Long Video Understanding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20504

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ReTaKe framework, a method for efficient video processing using a large language model (LLM) with compressed key-value (KV) caching. The global layout is vertically structured, depicting a data flow from raw video frames at the bottom to the LLM at the top, with intermediate processing stages. At the base, a sequence of blue rectangular blocks labeled 'raw frames' represents the input video. These are processed by a trapezoidal module labeled 'Vision Encoder & Projection', which outputs a sequence of frame embeddings shown as 3D grid-like blocks. Above this, a trapezoidal module named 'DPSelect' selects keyframes from the sequence; this selection is visually indicated by red grid patterns on certain frames, labeled as 'pivot frames' in the legend. The remaining frames are marked as 'non-pivot frames' (blue grids) or 'dropped frames' (gray grids), with corresponding tokens labeled as 'kept frame tokens' (light blue squares) or 'dropped frame tokens' (gray squares). The selected frame embeddings are grouped into chunks, with 'chunk i' highlighted and fed into the 'Large Language Model'. The LLM processes each chunk and generates a KV cache for it, represented as a horizontal array of grid blocks. A component called 'PivotKV' receives this KV cache and compresses it, producing a compressed KV cache for chunk i, depicted as a similar grid array but with fewer elements. This compressed cache is then appended to the existing compressed KV cache of previous chunks [0, i-1], forming an accumulated compressed cache shown as a larger 3D structure. The process repeats for subsequent chunks. Arrows indicate the direction of data flow: from raw frames upward through encoding, selection, and chunking, then into the LLM, followed by KV cache generation, compression via PivotKV, and appending to the cumulative cache. The legend at the bottom clarifies visual attributes: red grids denote pivot frames, blue grids non-pivot frames, gray grids dropped frames, light blue squares kept tokens, and gray squares dropped tokens. The figure emphasizes the iterative, chunk-based processing and the role of DPSelect in selecting keyframes and PivotKV in compressing the KV cache to enable efficient long-context video understanding.
