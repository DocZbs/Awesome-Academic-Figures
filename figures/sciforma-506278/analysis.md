# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Implementation of a Bayesian Optimization Framework for Interconnected Systems — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00967

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of the OP-BO (Optimization with Probabilistic Bounds) algorithm, structured as a feedback loop involving data collection, Gaussian Process modeling, and an auxiliary optimization problem. The global layout is a top-down, left-to-right flow with a feedback connection from the top to the bottom left, forming a closed loop. At the top center, a red-bordered box labeled 'Auxiliary Problem' contains two plots: the left plot shows a blue curve representing -f(x, u_y^ℓ) - f(x, l_y^ℓ), with a shaded purple region indicating the feasible region, and a caption below stating f(x,y) ∈ [f(x,l_y^ℓ), f(x,u_y^ℓ)]. The right plot displays -u_y^ℓ(x) - l_y^ℓ(x) with a similar purple feasible region, and a caption l_y^ℓ(x) ≤ y ≤ u_y^ℓ(x). Above this box, the mathematical formulation of the auxiliary problem is given: x^{ℓ+1} ← argmin_{x,y} f(x,y) subject to l_y^ℓ(x) ≤ y ≤ u_y^ℓ(x), x ∈ X, y ∈ ℝ^{d_y}. Below the auxiliary problem, the process continues with a 'Data Collection' block on the left, labeled 'SYSTEM', which contains five components: g1, g2, GP3, GP4, and g5. g1 and g2 are white rounded rectangles; GP3 and GP4 are black rounded rectangles; g5 is a white rounded rectangle. Arrows indicate that x^ℓ enters the system, and outputs from g1, g2, and g5 feed into GP3 and GP4. An arrow from the system points right to a 'Gaussian Process Model' block, which contains a plot showing a blue curve for -m_y^ℓ(x) with a shaded purple region for σ_y^ℓ(x), and black dots along the curve. A label above this plot reads m_y^ℓ(x) and σ_y^ℓ(x). A horizontal arrow from the system to the GP model is labeled D_y^ℓ = D_y^{ℓ-1} ∪ {x^ℓ, y^ℓ}, indicating data update. From the GP model, two vertical arrows point upward to the auxiliary problem, carrying m_y^ℓ(x) and σ_y^ℓ(x). After solving the auxiliary problem, a vertical arrow leads down to the left, updating ℓ ← ℓ + 1, and then a horizontal arrow returns to the system, feeding x^{ℓ+1} back into the data collection step. The entire process is iterative, with each iteration updating the dataset and retraining the GP model to refine the confidence bounds for the next optimization step.
