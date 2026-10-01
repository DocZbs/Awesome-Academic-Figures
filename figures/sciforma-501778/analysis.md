# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Analysis of Higher-Order Ising Hamiltonians — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13489

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main vertical sections: a left-side encoding pipeline and a right-side computational workflow for the IsingSim framework.

[1] Global Layout and Structure:
On the left, a vertical sequence of three gray rounded rectangles represents the encoding process: starting from a 'Combinatorial Problem' (symbolized by a locked microchip), it flows down to a 'Hybrid SAT Formula' (containing five constraints c₁ to c₅ and an objective F = ∧ᵢ₌₁⁵ cᵢ), then to a 'Higher-order Ising Model' (denoted G(V,E)). On the right, a larger black-bordered box contains the core algorithmic flow of IsingSim, with multiple interconnected modules arranged in a feedback loop. The top-right module displays a mathematical expansion labeled CC_seq and CC_rev, representing sequential and reverse combinatorial constructions. Below this, a central processing path involves Ising Spins, gradient computation (approximate and explicit), and gradient descent, feeding back into the Hamiltonian.

[2] Visual Modules and Attributes:
- Left Column Modules: All have gray backgrounds and rounded corners. The top module shows a locked chip icon with 'Combinatorial Problem'. The middle module lists five constraints using ⊕ (XOR) and Σ (sum) operations, with variables b₁–b₅ and d₁–d₄, and defines F as the conjunction of all constraints. The bottom module labels the output as 'G(V,E)' and 'Higher-order Ising Model'.
- Right Column Modules: All have white backgrounds and bold black borders. The top module contains two sequences: CC_seq (forward) and CC_rev (backward), showing matrix-like expansions with terms like [y₁ 1], [y₁y₂ y₁+y₂ 1], etc., where y terms are color-coded (blue for single variables, red for products/sums). Below, 'Type 1/2: yᵢ = xᵢ; Type 3: yᵢ = sin(xᵢ)' is labeled 'Ising Spins'. Next, '∇_approx H̄' and '∇_approx ū' are labeled 'Approx. Gradient', while '∇H̄' is labeled 'Explicit Gradient'. The 'Gradient Descent' module contains the update rule: x = x - η∇H̄. The 'Hamiltonian' module shows H̄ = Σₑ∈E fₑ. A green label 'Fourier Expansion' points from the left column's 'Higher-order Ising Model' to the 'Hamiltonian' module. The entire right section is labeled 'IsingSim' at the bottom-right corner.

[3] Connections and Arrows:
- Left Column: Solid downward arrows connect 'Combinatorial Problem' → 'Hybrid SAT Formula' → 'Higher-order Ising Model'.
- Right Column: A solid arrow from 'Higher-order Ising Model' (left) points to 'Hamiltonian' (right) via 'Fourier Expansion'. From 'Hamiltonian', a solid arrow goes up to 'Ising Spins'. From 'Ising Spins', a solid arrow points to 'Approx. Gradient', and a dashed arrow also points to 'Approx. Gradient'. From 'Approx. Gradient', a dashed arrow points to 'Gradient Descent'. From 'Explicit Gradient', a solid arrow points to 'Gradient Descent'. From 'Gradient Descent', a solid arrow loops back to 'Hamiltonian'. Additionally, solid arrows go from 'Ising Spins' to the top CC module, and from the top CC module to both 'Approx. Gradient' and 'Explicit Gradient'.
