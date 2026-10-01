# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Is Your Text-to-Image Model Robust to Caption Noise? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19531

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a tokenizer mapping mechanism between two different tokenizers, labeled as Tokenizer α and Tokenizer β, applied to the same input sentence: 'A close-up of a cat with a happy expression.' The global layout is horizontal and structured into three main rows aligned vertically. The top row displays Tokenizer α’s output, represented by orange rounded rectangles labeled C₁^α, C₄^α, ..., C₈^α, C₉^α, each corresponding to specific segments or tokens of the input text. These tokens are visually connected via thin orange lines to their respective words or word parts in the central row, which contains the original sentence in bold black font. The middle row shows Tokenizer β’s output, depicted as pink rounded rectangles labeled C₁^β, C₂^β, C₃^β, C₆^β, ..., C₁₀^β, also linked by thin pink lines to their corresponding segments in the sentence. Notably, some words are split differently between the two tokenizers—for example, 'close-up' is mapped to three tokens under β (C₁^β to C₃^β) but to a single token under α (C₁^α), while 'expression.' is split into two tokens under α (C₈^α and C₉^α) but mapped to a single token under β (C₁₀^β). The bottom row, labeled 'Tokenizer Mapping,' presents the mathematical mapping function M_{α→β}(i), which defines how each token index i from Tokenizer α maps to one or more token indices in Tokenizer β. Specific examples are given: M_{α→β}(1) = [1,2,3], indicating that the first token from α corresponds to the first three tokens in β; M_{α→β}(4) = 6, meaning the fourth token from α maps directly to the sixth token in β; M_{α→β}(8) = 10 and M_{α→β}(9) = 10, showing that both the eighth and ninth tokens from α map to the tenth token in β. The visual design uses color-coding—orange for α, pink for β—to distinguish the two tokenizers, and the connections are drawn as thin lines radiating from tokens to their corresponding text segments. The entire diagram is enclosed within a light beige rounded rectangle, emphasizing it as a self-contained conceptual illustration. This structure enables the construction of a cross-tokenizer alignment function, crucial for tasks requiring compatibility between different encoding schemes.
