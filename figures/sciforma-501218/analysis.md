# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Potential of Model Bias for Generalized Category Discovery — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12501

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an end-to-end framework for logit adjustment in open-set recognition, designed to mitigate bias and confusion in classification outputs. The global layout is divided into two main stages: feature extraction and logit calibration. On the left, input data X^u is processed by two parallel backbones: a frozen 'Biased Backbone' (yellow trapezoid labeled f_bias with a snowflake icon) and a trainable 'Trainable Backbone' (blue trapezoid labeled f_θ with a flame icon). The biased backbone feeds into a frozen 'Biased Classifier' (light blue rectangle labeled g_bias), producing 'Biased Logits' for known classes only. The trainable backbone connects to a trainable 'Trainable Classifier' (stacked light blue and purple rectangles labeled g_φ), generating 'Original Logits' for both known and novel classes. These two streams converge into a central calibration module enclosed in a large rounded rectangle labeled 'Logit Adjustment'. Inside this module, the 'Biased Logits' are transformed via a 'Transfer Matrix' (a heatmap with red-to-blue gradient indicating max to min values) into 'Transfer Logits' for novel classes. The 'Original Logits' are split into known and novel components. A 'Bias Mitigation' block (beige rectangle with ⊖ symbol) subtracts the biased logits from the known-class original logits. Simultaneously, a 'Confusion Mitigation' block (beige rectangle with ⊕ symbol) adds the transfer logits to the novel-class original logits. Between these blocks, an 'Entropy-based Weighting' mechanism (curved red line labeled 'Entropy') dynamically adjusts the contribution of each mitigation step based on entropy. The resulting outputs are combined into 'Calibrated Logits', shown as a bar chart with distinct known (teal) and novel (lavender) class distributions, separated by a dashed vertical line. Finally, the calibrated logits are passed through the Sinkhorn-Knopp (S-K) algorithm to produce the final pseudo-label ŷ. The figure includes visual indicators: flame icons denote trainable components, snowflake icons denote frozen components, and the entire process emphasizes balancing bias reduction and novel class activation through structured logit manipulation.
