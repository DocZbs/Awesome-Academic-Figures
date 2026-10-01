# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ResKoopNet: Learning Koopman Representations for Complex Dynamics with Spectral Residuals — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00701

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a data-driven method for computing Koopman operator-related quantities using an optimization-based approach to find an optimal dictionary. The global layout is divided into two main vertical sections: a left-side data processing pipeline and a right-side optimizer module enclosed in a light teal rounded rectangle labeled 'Optimizer'. The left side begins with a light blue rectangular box labeled 'Input: data snapshots {(x_i, y_i)}_{i=1}^m', indicating the initial dataset of state-input pairs. This feeds into a light green rectangular box labeled 'Look for optimal dictionary Ψ = {ψ_1, ..., ψ_{N_K}}', which represents the core task of finding a suitable set of basis functions. The output of this step is shown in another light blue box labeled 'Output: Koopman matrix K̃, pseudospectrum, eigenfunctions', summarizing the final computed results.

On the right, the 'Optimizer' module contains a sequence of five orange-yellow gradient-filled rectangular steps arranged vertically. The first step is 'Initialize θ for Ψ(x; θ)', where θ denotes parameters of the dictionary functions. This leads to 'Construct K̃(θ)', forming the approximate Koopman matrix based on current parameters. Next is 'Compute residual J(θ)', calculating a cost function (as referenced in the caption, Eq.~\eqref{relative_residual_approximation}) that measures the approximation error. The fourth step is 'Update θ = argmin_θ J(θ)', which performs parameter optimization to minimize the residual. A feedback loop from this step back to 'Construct K̃(θ)' indicates an iterative process. Below this, a conditional check 'If J < ε' determines convergence; if satisfied, the final step 'Return Ψ(x; θ)' outputs the optimized dictionary. An arrow from the 'Return' step points back to the 'Look for optimal dictionary' box on the left, signifying that the optimized dictionary is used to produce the final output. All connections are represented by solid black arrows indicating the direction of data or control flow. The visual design uses distinct colors to differentiate input/output (light blue), core task (light green), and optimization steps (orange-yellow), enhancing clarity of the method's structure.
