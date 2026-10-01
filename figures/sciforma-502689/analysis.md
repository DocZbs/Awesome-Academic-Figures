# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Tests for model misspecification in simulation-based inference: from local distortions to global model checks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15100

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a methodological framework for detecting model misspecification in Simulation-Based Inference (SBI), structured into three main panels: 'Localized deviation tests' on the left, 'Aggregated deviation tests' on the right, and a central integration panel connecting both. The left panel, set against a light blue background, begins with a wavy line graph illustrating a localized deviation, where a dashed segment indicates a perturbation or anomaly. Below this, the localized test statistic is defined as t_i(x) = -2 ln(p_sim(x)/p_dist(x|i)), representing the log-likelihood ratio between simulated and distorted distributions. This leads to two downstream analyses: first, p-values for anomaly detection, indicated by a solid downward arrow, and second, residual analysis, indicated by a dashed downward arrow. The right panel, on a light gray background, shows a similar wavy graph but with a dashed curve overlaying the solid one, symbolizing aggregated deviations across multiple local tests. The aggregated test statistic is defined as t_sum(x) = Σ_i t_i(x), summing over all localized test statistics. This leads to two outputs: first, a p-value for model validation via a solid downward arrow, and second, residual variance analysis via a dashed downward arrow. The central panel connects both sides with horizontal arrows: a solid arrow from the left panel to the center, and another from the right panel to the center, converging on the label 'Global p-value of all tests'. From this global p-value, a solid downward arrow points to 'Insight', which is also connected bidirectionally via dashed arrows to both residual analysis and residual variance analysis, indicating that these analyses contribute to and are informed by the final insight. The overall layout is horizontal, with the left and right panels containing distinct methodologies that feed into a shared central evaluation step, emphasizing the integration of localized and aggregated testing for comprehensive model assessment.
