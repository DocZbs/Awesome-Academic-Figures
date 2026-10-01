# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Implementation of a Bayesian Optimization Framework for Interconnected Systems — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00967

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of the S-BO (Sequential Bayesian Optimization) framework, structured as a cyclic process involving data collection, Gaussian-process modeling, and acquisition function optimization. The global layout is a clockwise loop starting from the top-left, moving right to the acquisition function, then down to the Gaussian-process model, left to the system block, and back up to update the iteration counter and select the next query point.

At the top center, the Acquisition Function (AF) is enclosed in a red-bordered box. It contains a plot showing a wavy black curve with several peaks and valleys, marked with black dots at local extrema and one red dot indicating the selected minimum. Below the plot, the mathematical definition is given: AF^ℓ(x) = m_f^ℓ(x) - κ·σ_f^ℓ(x), where m_f^ℓ(x) is the mean and σ_f^ℓ(x) is the standard deviation from the GP model, and κ is a hyperparameter. To the left of the AF box, the optimization problem is stated: x^{ℓ+1} ← argmin_x AF^ℓ(x) subject to x ∈ X, indicating the selection of the next input point by minimizing the acquisition function over the feasible domain X.

Below the AF box, on the right side, is the Gaussian-Process Model, depicted as a plot with a black line representing the mean function -m_f^ℓ(x) and shaded purple regions indicating the uncertainty (±σ_f^ℓ(x)). The legend inside the plot labels the black line as -m_f^ℓ(x) and the purple region as σ_f^ℓ(x). To the right of this plot, the outputs m_f^ℓ(x) and σ_f^ℓ(x) are explicitly labeled, showing they are fed into the acquisition function.

On the bottom left, a large black rounded rectangle labeled 'SYSTEM' represents the physical or simulated system being optimized. An arrow labeled 'Data Collection' points to it from below, and an arrow labeled x^ℓ enters it from the left, indicating the current input point. An arrow exits the system to the right, labeled D^ℓ = D^{ℓ−1} ∪ {x^ℓ, f^ℓ}, signifying that the output f^ℓ from the system is collected and appended to the dataset D^ℓ, which is then used to update the GP model.

The cycle continues with an arrow from the GP model pointing to the AF box, feeding the mean and variance into the acquisition function. From the AF box, an arrow loops back to the left, updating the iteration counter with ℓ ← ℓ + 1, and then another arrow points to the system with the newly selected point x^{ℓ+1}, completing the loop for the next iteration. The entire diagram visually represents the iterative nature of Bayesian optimization, where each step refines the GP surrogate model using new data and uses the updated model to guide the next sample selection via the acquisition function.
