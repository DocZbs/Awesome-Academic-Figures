# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Uncertainty-Aware Hybrid Inference with On-Device Small and Remote Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12687

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the token-by-token generation process in a hierarchical language model framework called U-HLM, which uses uncertainty-based decision making to determine whether to skip or transmit tokens to a larger language model (LLM) for verification and resampling. The diagram is divided into two main scenarios: (a) Skip and (b) Transmit, each showing the internal workflow of a Small Language Model (SLM) and, in the Transmit case, the involvement of a Large Language Model (LLM).

In both scenarios, the input token sequence 'The quick brown fox' is fed into the SLM. The SLM performs inference to generate a draft token (e.g., 'jumps') and simultaneously applies temperature perturbation to sample alternative tokens. For each perturbed sample, a binary comparison is made with the draft token: 0 if they match, 1 if they differ. These values are averaged to compute the uncertainty metric u(t). In scenario (a) Skip, the uncertainty is computed as (0 + 0 + 0)/3 = 0, which is less than or equal to the threshold u_th = 0.5. As a result, the token 'jumps' is directly outputted without further processing, and no transmission to the LLM occurs.

In scenario (b) Transmit, the input sequence has been extended to 'The quick brown fox jumps', and the next token is being generated. The SLM’s draft token is 'on', while the temperature perturbation samples 'over', 'on', and 'in'. The comparisons yield (1 + 0 + 1)/3 = 0.66..., which exceeds u_th. This triggers the Transmit path, where the token is sent to a blue-shaded module labeled 'Verifying & Resampling'. Within this module, the SLM again infers 'on', while the LLM infers 'over' with higher confidence (indicated by a taller bar in the probability distribution). The final output token is 'over', selected after verification and resampling by the LLM.

Visually, the SLM components are enclosed in orange boxes with rounded corners, while the LLM and verification modules are in blue. Text labels are placed above or within boxes, with arrows indicating data flow. The uncertainty computation box is positioned at the top of each SLM section, receiving inputs from both the draft token and perturbation results. A vertical line separates the Skip and Transmit cases, emphasizing the conditional branching based on uncertainty. The final output tokens are shown above the respective sections, with 'jumps' in (a) and 'over' in (b), connected by arrows to indicate the generated sequence.
