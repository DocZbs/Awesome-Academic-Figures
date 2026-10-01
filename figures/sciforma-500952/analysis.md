# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Causal Diffusion Transformers for Generative Modeling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12095

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a conceptual comparison between two architectural designs: DiT (Diffusion Transformer) and CausalFusion, depicted side-by-side as subfigures (a) and (b), respectively. The global layout is horizontal, with both diagrams arranged left-to-right, each illustrating a distinct processing pipeline for image denoising under diffusion modeling.

In subfigure (a) labeled 'DiT', the structure consists of two stacked horizontal layers. The bottom layer is a light gray rounded rectangle labeled 'AdaLN' (Adaptive Layer Normalization), which receives inputs from two sources: a single gray square labeled 'cond' (conditioning input) connected via a curved arrow, and a sequence of six light green squares labeled collectively as 'noise x_t'. These noise tokens are vertically aligned and feed upward into the top layer. The top layer is a light blue rounded rectangle labeled 'Full Attention', which processes all six noise tokens simultaneously through full attention mechanisms. From this layer, six upward-pointing arrows lead to six identical light blue squares above, representing the output tokens. The design emphasizes that DiT processes the entire set of image tokens at once, leveraging full attention across all tokens and incorporating conditioning via AdaLN.

Subfigure (b) labeled 'CausalFusion' illustrates a different paradigm. It features a single large light blue rounded rectangle labeled 'Causal Attention', which spans horizontally across multiple input groups. Inputs include a gray square labeled 'cond' on the far left, followed by a group of dashed-boxed light blue squares labeled 'visible x_0,κ_1:s−1' (representing previously denoised tokens), and another group of dashed-boxed light green squares labeled 'noise x_t,κ_s' (representing current noisy tokens to be denoised). The 'cond' input connects via a curved arrow to the causal attention module. The visible tokens are connected via curved arrows to the causal attention block, indicating they are used as context for generating the next tokens. The noise tokens also feed into the causal attention module, but only those within the current subset κ_s are processed. The output is shown as three light blue squares enclosed in a dashed box, positioned above the causal attention block, indicating that only a subset of tokens is generated per step. An ellipsis (...) follows the last noise token group, suggesting the process continues iteratively. This architecture reflects a causal, sequential denoising strategy where only a random subset of tokens is processed at each step, conditioned on previously reconstructed tokens, mimicking masked feature prediction approaches.

Connections are represented by straight vertical arrows for direct token flow and curved arrows for conditioning or contextual dependencies. The color coding distinguishes inputs: gray for conditioning, light green for noisy tokens, and light blue for outputs or visible tokens. Dashed boxes denote subsets of tokens being processed at each step in CausalFusion, emphasizing the partial observation mechanism.
