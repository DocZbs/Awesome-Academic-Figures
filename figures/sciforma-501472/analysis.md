# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Benchmarking and Understanding Compositional Relational Reasoning of LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12841

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a detailed breakdown of neural circuitry within the Vicuna-33B model for solving Generalized Attribute Reasoning (GAR) tasks, illustrating how different head types process and route information through attention mechanisms. The global layout is divided into five main panels: (a) Classification, (b) sub-circuit of affirmative rel.² head (True head), (c) sub-circuit of negative rel.² head (False head), (d) Affirmative Generation, and (e) Negative Generation. Each panel shows a flow of information from input tokens (represented as K, V, Q with colored labels indicating token types like 'Donna', 'has', 'apple') through various attention heads to produce outputs such as 'Yes/No' or generated entities like 'vehicle' or 'shirt'.

Visual modules are represented as rectangular boxes with rounded corners, color-coded by function: green for Rel.² heads, yellow for Loc. heads, purple for Ind. heads, red for Pred. heads, and pink for Ppred. heads. Each box contains a label specifying the head type (e.g., 'Rel.² / Q->A') and numerical values (e.g., '14.18 14.46') representing attention weights or activation scores. The inputs are shown as vertical lists of tokens with color-coded labels (K for Key, V for Value, Q for Query) and associated text (e.g., 'Donna has a kind of fruit'). Outputs are indicated at the end of each circuit, such as 'END !' for classification or specific entities for generation.

Connections are depicted as directed arrows showing data flow between modules. Blue arrows indicate primary data paths, while red arrows denote critical routing decisions or final output pathways. In panels (b) and (c), dashed boxes group related heads into sub-circuits, with dotted lines indicating continuation. Panel (d) includes numbered annotations ('to ①', 'to ②') linking intermediate results to subsequent processing steps. The legend at the top defines head classes: (P)Pred. = (Pre-)Predicting Heads, Loc. = Local Syntactic Heads, Rel. = Relating Heads, Ind. = Induction Heads, NRel. = Neg-Relating Heads, and XX² = Higher-Order XX Heads. Sketch circuits in the top-right corner illustrate query-and-key-wise attribution for relating heads and query-wise attribution for predicting heads, using simplified diagrams with labeled arrows (e.g., 'K → Loc. → V'). The figure also includes subcaptions for each panel specifying the task type (e.g., 'Classification: GendersOfPersons/=,KindsOfThings/∈[g2c]'). Overall, the diagram abstracts the model’s internal reasoning process, emphasizing how different head types collaborate to solve GAR tasks through structured information routing and attention-based computation.
