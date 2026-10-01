# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MaskHand: Generative Masked Modeling for Robust Hand Mesh Reconstruction in the Wild — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13393

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the inference phase of the MaskHand framework, specifically the 'Iterative Confidence-Guided Sampling' process. The global layout is horizontal and sequential, depicting a multi-step refinement pipeline that progresses from an initial input to a final hand pose output. The process is divided into two main stages: an initial Q₁ step and subsequent T iterations, culminating in a final Q_T step. At the top, a legend defines visual elements: a salmon-colored square represents 'Mano Pose', a light blue square denotes '2D Pose', a black square indicates 'Mask', a gray square with a question mark signifies 'Low Confidence', and a blue snowflake icon marks a 'Frozen Network'.

The workflow begins at the bottom left with an 'Input' image showing a hand holding a red object. This input feeds into the first stage, labeled 'Q₁ step', where a sequence of five tokens (2, 9, 4, 1, 3) is processed by a 'Context Guided-Masked Transformer' module. This module is represented as a rounded rectangle with a light gray fill and a blue snowflake icon, indicating it is a frozen network. Below this transformer, a sequence of five black squares labeled 'M' (for mask) is shown, signifying that all tokens are masked initially.

The process then proceeds through 'T iterations', indicated by a dotted line connecting the first and last stages. In each iteration, the same 'Context Guided-Masked Transformer' is applied, but now the masking is adaptive. For example, in the final 'Q_T step', the input token sequence is [2, ?, 4, ?, 3], where '?' represents low-confidence tokens. These low-confidence tokens are masked out via 'Confidence-based Masking', resulting in a refined token sequence [2, M, 4, M, 3] (where 'M' again denotes mask). The masked tokens are replaced with high-confidence predictions from previous steps, such as '1' and '6' in the intermediate sequence [2, 1, 4, 6, 3].

The refined token sequence from the final iteration is passed to a 'VQ Decoder', depicted as a vertical white rectangle with a blue snowflake icon, also indicating it is a frozen network. The decoder outputs the final hand pose, denoted as θ', which is visually represented as a grayscale 3D hand model. The entire process emphasizes iterative refinement, where confidence scores guide the unmasking of tokens, allowing the model to progressively recover accurate Mano poses while suppressing uncertain predictions. The figure's title, 'Iterative Confidence-Guided Sampling', underscores the core mechanism: using confidence estimates to selectively sample and refine pose tokens over multiple steps.
