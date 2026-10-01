# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SpeechPrune: Context-aware Token Pruning for Speech Information Retrieval — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12009

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-phase token pruning framework for speech-text processing, designed to reduce computational load while preserving semantic information. The global layout is left-to-right, starting with an 'Input' section on the far left, progressing through two sequential pruning phases, followed by a concatenation step, and ending with the 'Pruned Input' output on the far right. The input consists of two vertical stacks: 'Speech Tokens' (yellow background, labeled S1 to Sn) and 'Text Tokens' (green background, labeled T1 to Tk), each flanked by gray 'Other Token' markers at top and bottom. These inputs feed into two main processing blocks: 'Speech-Text Similarity Calculation' (blue box) and 'Binarized Attention Estimation' (larger blue box), which support the pruning phases.

In the first phase, 'First Phase Pruning', the original speech tokens are pruned based on similarity scores derived from the 'Speech-Text Similarity Calculation' module. This module computes cosine similarity between normalized speech and text embeddings, applies frame-wise adaptation, then performs top-k selection to generate a 'Preserved Index'. This index guides the pruning, resulting in a pruned set Sp1 (containing S1, S3, ..., Sn). The second phase, 'Second Phase Pruning', further refines Sp1 using the 'Binarized Attention Estimation' module. This module takes Sp1 and the first layer Q, K weights from a 'Speech LLM' (gray box), applies binarization to produce S^b, then computes Q' and K' via weight matrices W_Q^b and W_K^b. A matrix multiplication (MatMul) follows, then softmax, and finally top-k selection to generate another 'Preserved Index', leading to the final pruned set Sp2 (S1, S3, ..., Sn).

Connections are shown as black arrows indicating data flow. From the input, both speech and text tokens feed into the similarity calculation block. The preserved index from this block directs the first pruning. The pruned output Sp1 feeds into the binarized attention estimation block, which also receives the Speech LLM's Q,K weights. The output of this block (preserved index) drives the second pruning. The final pruned speech tokens (Sp2) are concatenated with the original text tokens (T1 to Tk) in the 'Concat With Other Tokens' block, producing the final 'Pruned Input' containing pruned speech tokens (yellow) and full text tokens (green). A legend at the bottom right clarifies token types: yellow for speech, green for text, and gray for other tokens. The entire process is structured to progressively reduce speech token count using both cross-modal similarity and attention-based binarization, ensuring efficient yet semantically meaningful input for downstream tasks.
