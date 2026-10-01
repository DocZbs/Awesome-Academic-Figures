# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Early Concept Drift Detection via Prediction Uncertainty — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11158

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-step framework for detecting concept drift in streaming data using a PU-index-based approach. The overall layout is horizontal, divided into three main stages: Step 1 (Build sliding windows), Step 2 (Build bins), and Step 3 (Drift detection with chi-square test), each enclosed in a rounded rectangular box with a bold title. These steps are connected sequentially from left to right by solid arrows indicating the flow of the algorithm.

In Step 1, a data stream is represented as a sequence of data blocks D₁ through Dₙ₊₁, with a label 'Antiquated Data' above the initial segment. A condition is specified: if the last drift was detected at time t₁, then antiquated data is discarded. The stream is processed by a gray rectangular block labeled 'Classifier f', which outputs a sequence of PU-indices uₜ₁ through uₙ₊₁ stored in a dashed-boxed area labeled 'PU-index Bank'. Below this, a process titled 'Build window pairs by cut point exploration' shows how the PU-index sequence is split into two windows: one from u₁ to uₙ (light pink) and another from uₙ₊₁ (light green), with corresponding time stamps t₁ to tₙ and tₙ₊₁. This step visually emphasizes the sliding window mechanism and the exploration of cut points to form window pairs.

Step 2, enclosed in a dashed rectangle, details the binning process. It begins with a substep 'a) For each window pair', showing two windows W₁ and W₂ separated by a 'Cutting point'. W₁ contains elements u₁ to uₙ (light pink), and W₂ contains uₙ and uₙ₊₁ (light green). Substep 'b) Build bins by PU-index bucketing algorithm' follows, where a binning structure is created based on the distribution of PU-indices. This is depicted as a horizontal bar divided into intervals: '[0, ?]', '[?, ?]', ..., '[?, 1]', labeled B₁. A note below states 'One bin for {uᵢ | ŷᵢ ≠ yᵢ}', indicating that bins are formed for instances where predicted and true labels differ. The binning is determined by the PU-index distribution, as indicated by an arrow pointing from the text to the bin structure.

Step 3, also within a dashed rectangle, outlines the drift detection using a chi-square test. Substep 'a) Compute the contingency table' shows a 2×k table with entries nᵇ¹, nᵇ², etc., representing counts of instances falling into bins for each window pair. Substep 'b) Compute the p-value' displays the mathematical formula: p = 1 − ∫₀^∞ x^(w/2−1) · e^(-x/2) / (2^(w/2) · Γ(w/2)) dx, which corresponds to the survival function of a chi-square distribution with w degrees of freedom. Finally, substep 'c) Condition of raise drift alarm' specifies the decision rule: if p ≤ α, raise a drift alarm; otherwise, if all window pairs have been examined, conclude no drift; else, return to Step 2. This step is structured vertically with downward arrows connecting the substeps.

The entire diagram uses consistent visual attributes: rectangular boxes for processes, dashed boxes for grouped subcomponents, color-coded blocks (light pink for past data, light green for new data), and clear directional arrows to indicate the algorithmic flow. Text annotations provide context for each component, including conditions, formulas, and definitions, ensuring the methodology is fully reproducible.
