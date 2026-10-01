# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Prior2Posterior: Model Prior Correction for Long-Tailed Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative and methodological overview of four distinct components related to training and correcting biases in classification models under class imbalance, arranged in two rows. The top row contrasts two training paradigms: 'Plain CE Training' on the left and 'Logit Adjusted Training' on the right. Each is enclosed in a rounded rectangular box. In 'Plain CE Training', a dataset P(x,y) ~ (x_i, y_i) is fed into a pink rounded rectangle labeled 'Model Θ', which outputs a predicted distribution P^m(y), visualized as a curve over 'Classes'. This output is then used to compute 'Cross Entropy Loss'. In 'Logit Adjusted Training', the same input data flows into an identical 'Model Θ' block, but the output is adjusted by a factor P(y)/P^t(y), where P^t(y) represents the true class prior, leading to a 'Logit Adjusted Loss'. Both models are visually represented with the same pink color and rounded rectangular shape, and each includes an internal graph depicting the predicted probability distribution over classes.

The bottom row details two post-training correction methods. On the left, 'Effective Prior Calculation' shows a model Θ trained on data P(x,y) ~ (x_i) — i.e., without labels — producing an output P̄(y|x). A blue arrow points from this output to a graph labeled 1/N ∑ P̄(y|x), representing the empirical average over the dataset, which yields the estimated prior P̄(y). A footnote clarifies that P̄(y) corresponds to P^m for the plain CE-trained model and P̄^m for the logit-adjusted model. On the right, 'Prior2Posterior' (P2P) takes the same model Θ (trained on unlabeled data) and its output P̄(y), and feeds it into an orange rectangular block labeled 'P2P'. This module applies the formula P^a(y|x) = P̄(y|x) * P^t(y)/P(y) to produce adjusted posterior probabilities. The entire figure uses consistent visual elements: pink rounded rectangles for models, black arrows for data flow, and mathematical expressions to denote transformations. The layout is modular and hierarchical, emphasizing the contrast between training methods (top row) and the subsequent correction strategy (bottom row).
