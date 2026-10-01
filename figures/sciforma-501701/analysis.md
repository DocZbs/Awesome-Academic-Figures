# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Expansion Span: Combining Fading Memory and Retrieval in Hybrid State Space Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13328

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture and workflow of a Sparse Attention mechanism called \ourattn\ (\ourattnsp), designed to extend the memory span of Hybrid State Space Models (SSMs). The diagram is divided into two main parts: the left side details the step-by-step processing pipeline, while the right side visualizes the resulting sparse attention pattern.

[1] Global Layout and Structure:
On the left, the process begins at the top with a sequence of 12 input tokens labeled 1 through 12. These tokens flow downward through three sequential stages: (1) Split into memory blocks, (2) Split into chunks, and (3) Retrieve memory blocks. The output of stage (3) is a reassembled sequence of tokens that includes both recent chunks and retrieved memory blocks. On the right, a grid matrix represents the attention pattern, where rows correspond to query positions and columns to key positions. Non-zero attention weights are shown as colored cells, forming a sparse diagonal pattern.

[2] Visual Modules and Attributes:
- Input tokens: Represented as black-outlined white squares numbered 1–12, arranged horizontally at the top.
- Memory blocks (Stage 1): The input tokens are grouped into six pairs (e.g., [1,2], [3,4], etc.), each enclosed in a blue rounded rectangle. This grouping is labeled '(1) Split into memory blocks'.
- Chunks (Stage 2): The same 12 tokens are split into three contiguous groups: [1–4], [5–8], [9–12], each enclosed in an orange rounded rectangle. This is labeled '(2) Split into chunks'.
- Retrieved memory blocks (Stage 3): Below the chunks, the final token sequence is shown, combining recent chunks with retrieved blocks. For example, the first chunk [1–4] is replaced by [1–2] (retrieved) + [3–4] (current), and the second chunk [5–8] is preceded by [1–2] (retrieved). Retrieved blocks are highlighted with blue borders; block candidates are indicated by dashed lines.
- Legend: A small box explains that solid arrows indicate 'Retrieved blocks' and dashed arrows indicate 'Block candidates'.
- Attention Matrix (Right Panel): A grid with 12 rows and 12 columns. Diagonal bands of orange and blue cells represent attention weights. Orange cells form a descending diagonal from top-left to bottom-right, indicating self-attention or recent context. Blue cells appear vertically in specific columns (e.g., columns 1–2, 3–4), representing retrieved memory blocks being attended to across time steps.

[3] Connections and Arrows:
- A blue curved arrow from the input tokens points to the memory blocks, labeled '(1) Split into memory blocks'.
- An orange curved arrow from the input tokens points to the chunks, labeled '(2) Split into chunks'.
- Solid black arrows connect memory blocks to their corresponding positions in the final token sequence, indicating retrieval. Dashed gray arrows point from memory blocks to other potential retrieval targets, indicating block candidates.
- The final token sequence is shown below the chunks, demonstrating how retrieved blocks are inserted into the current context.
- The right panel’s attention matrix visually corresponds to the retrieval process: the blue vertical bars align with the retrieved memory block positions, showing that queries at different time steps attend to the same retrieved blocks, creating a sparse but long-range attention pattern.

This mechanism allows the model to maintain a fixed-length attention window while effectively accessing information from arbitrarily distant past tokens by retrieving and integrating memory blocks, thus expanding the effective memory span.
