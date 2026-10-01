# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TabTreeFormer: Tabular Data Generation Using Hybrid Tree-Transformer — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01216

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the TabTreeFormer framework, illustrating a top-down data flow from input table to synthetic table generation. The global layout is vertically structured into three main sections: the bottom section contains the raw Input Table, the middle section details two parallel processing modules—Tree-based Model and Tokenizer—and the top section shows the Auto-regressive Transformer (Trainable) and Reverse Tokenizer, culminating in the Synthetic Table output. A legend at the top right defines token types: BOS/EOS (white), mask (light gray), leaf (light green), bin (blue), quantile (pink), and category (orange). 

In the lower half, the Input Table includes columns such as Households (H), Gender (G), Age (A), and Education (E), with sample rows like '2, F, 29, High-School'. This table feeds into two parallel modules. On the left, the Tree-based Model (green dashed box) processes each row into a sequence of tokens using multiple LightGBM trees (visualized as decision trees with numbered nodes). Each tree outputs a leaf index (e.g., 1, 3, 5, etc.), forming a sequence per row. The module caption states it introduces 'tabular inductive bias'. On the right, the Tokenizer (blue dashed box) converts each row into a sequence of tokens using three subcomponents: Label Encoder (orange) for categorical features (e.g., Gender → 1 or 2), K-Means Quantizer (purple) for numerical features (e.g., Age → binID like 2 or 3), and Quantile Quantizer (pink) for numerical features (e.g., Age → quantileID like 14 or 33). These are combined into a token sequence with headers H.binID, H.quantID, G.catID, etc. The tokenizer caption notes it represents data 'compactly and effectively with multimodal information and sufficient precision'. 

The middle section’s outputs feed into the top section. The Auto-regressive Transformer (Trainable) receives concatenated sequences from both modules, with tokens from the Tree-based Model (light green) and Tokenizer (blue/pink/orange) interleaved, separated by '+' symbols, and framed by [S] (start) and [E] (end) tokens. The transformer generates a sequence of tokens, which are then passed to the Reverse Tokenizer (blue oval) to reconstruct the Synthetic Table. The Reverse Tokenizer maps tokens back to original data types: bin tokens to numeric ranges, quantile tokens to quantile values, and category tokens to labels. The entire process is labeled 'Model Inference' at the top, indicating the generative phase. Arrows show clear data flow: from Input Table to both modules, then to the Transformer, and finally to the Synthetic Table. Dashed lines connect specific tokens to their source features (e.g., Age=29 → binID=2 via K-Means, quantileID=14 via Quantile). The figure emphasizes the integration of tree-based inductive bias and optimized tokenization to enable high-quality synthetic tabular data generation.
