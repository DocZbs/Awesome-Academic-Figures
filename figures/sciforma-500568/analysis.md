# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Constructing Confidence Intervals for Average Treatment Effects from Multiple Datasets — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11511

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a method for constructing confidence intervals (CIs) for the average treatment effect (ATE) using two observational datasets from the same population but under different assumptions. The global layout is horizontal and modular, divided into four main steps labeled A through D, with two distinct data sources on the left feeding into a central processing pipeline that culminates in the final CI construction.

On the left, two datasets are shown: D¹ (small but unconfounded) and D² (large but confounded). D¹ is represented by a light blue box containing three blue human icons, with checkmarks indicating 'Consistency', 'Overlap', and 'Unconfoundedness'. It is connected to a causal diagram showing variables X → A → Y, with no unmeasured confounder U. Below it, D² is shown in a green box with multiple green human icons, marked with 'Consistency' and 'Overlap' only; its causal diagram includes a red U node pointing to A, indicating confounding. The notation n ≪ N indicates D¹ is much smaller than D².

From D¹, nuisance parameters (μ₀(x), μ₁(x), π¹(x)) are estimated and passed to Step B: influence function estimation, which outputs Ŷ̃ₙ(x) in a light blue rounded rectangle. From D², a DR-Learner (with subtypes S-Learner, AIPW, T-Learner, RA-Learner listed inside a circular node) is used to estimate τ̂₂(x), which is then aggregated over D² in Step A: Measure of fit, yielding τ̂₂ = Σⱼ₌₁ᴺ τ̂₂(xⱼ). This aggregate is further restricted to D¹ to produce τ̂₂(x), x ∈ D¹.

Step C: Rectifier Δ̂_τ combines the influence function output Ŷ̃ₙ(x) with the D¹-restricted τ̂₂(x) via subtraction: Σᵢ₌₁ⁿ τ̂₂(xᵢ) - Ŷ̃ₙ(xᵢ). This rectifier term is then added to the measure of fit (Step A) to form the final estimator.

Step D: Constructing CIs for ATE in D¹ shows the final formula: Cα^PP = (τ̂^PP ± z₁₋α/2 √(σ̂Δ²/n + σ̂τ₂²/N)), displayed in a light blue rounded rectangle. The entire process is visually connected by arrows indicating data flow and computation sequence, with each step clearly labeled and color-coded for clarity: light blue for D¹-related components and influence function, green for D²-related components and DR-learner outputs, and white for intermediate calculations and final output.
