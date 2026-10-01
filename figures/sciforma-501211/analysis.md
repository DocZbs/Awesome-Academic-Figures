# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NLSR: Neuron-Level Safety Realignment of Large Language Models Against Harmful Fine-Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12497

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a neuron-level safety realignment framework designed to counteract harmful effects of user fine-tuning on large language models (LLMs). The overall layout is divided into three main stages, each enclosed in a distinct colored box: Stage ① 'Construction of a Safety Reference Model' (purple), Stage ② 'Recognition of Safety-Critical Neurons' (green), and Stage ③ 'Restoration for Safety-Broken Neurons' (orange). These stages are arranged horizontally from left to right, with arrows indicating the flow of data and processing steps.

On the far left, an 'Aligned LLM Fa' (represented by a blue cartoon llama inside a dashed circle) serves as the initial model. This model undergoes 'User Fine-tuning', depicted as a curved arrow leading to a 'Customized LLM Fwt' (a pink cartoon llama in a dashed circle). The fine-tuning process is shown in detail within a green box labeled 'jth-Layer', which contains two components: a blue rectangle labeled 'Wunaligned' and two orange trapezoids labeled 'A' and 'B^T'. These components are connected via a plus sign, indicating a combination operation, and the result feeds into the customized model.

Stage ① begins with the aligned LLM Fa feeding into a graph titled 'Safety Pre-Amplification'. The graph plots weight changes (Δw) along the x-axis (from w₀ to we) and shows a curve that increases and then plateaus, with a point marked at αΔw. This process results in a 'Super-Aligned LLM FWe', represented by another blue llama, which is then passed to Stage ②.

Stage ② starts with a matrix labeled 'All Neurons' (a colorful grid of red, blue, and white squares). This matrix is processed to compute a 'Per-Neuron Safety Score', resulting in a blue-tinted grid. A 'Top-k' selection is applied to this score, producing a 'Safety Neurons Mask Mj' (a sparsely populated blue grid). This mask is then used in a multiplication operation (indicated by a black '×' symbol) with the original 'All Neurons' matrix to isolate the 'Safety Neurons' (a grid with only a few colored squares remaining).

Stage ③, 'Restoration for Safety-Broken Neurons', takes the 'Safety Neurons' and applies a series of operations. First, mathematical formulas are shown: W't,j = (M'A ⊙ At,j)(M'B ⊙ Bt,j)^T and W'e,j = (M'A ⊙ Ae,j)(M'B ⊙ Be,j)^T. These are followed by a ranking step: Pj ← Rank(cos(W'e,j, W't,j)), and then a Bernoulli sampling: Bernoulli(P₁, P₂, ..., PN). This leads to 'Probability-based Layer Pruning', visualized as a stack of light yellow bars with some removed, followed by 'Difference-Aware Layer Selection' (a similar stack with selected layers highlighted). The output is fed into 'Neuron-Level Correction', where it is multiplied (black '×') with the 'Safety Neurons' from Stage ②, and then added (red '+' symbol) to produce 'All Restored Layers' (a set of horizontal bars with corrected patterns).

Red arrows connect the 'Safety Neurons' from Stage ② to the 'Neuron-Level Correction' in Stage ③, emphasizing the feedback loop. The final output, 'All Restored Layers', represents the corrected model weights after safety restoration. The entire framework is designed to maintain safety during customization by identifying and repairing neurons compromised during fine-tuning.
