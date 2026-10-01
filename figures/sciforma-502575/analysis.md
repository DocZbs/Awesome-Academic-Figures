# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Opportunities and limitations of explaining quantum machine learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14753

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative sketch of classical machine learning (ML) probabilistic functions and quantum machine learning (QML) quantum functions, highlighting structural parallels while emphasizing fundamental differences in information encoding. It is divided into two main parts: (a) Hypothetical probabilistic functions for ML, and (b) Actual quantum functions for QML.

In part (a), the global layout follows a left-to-right workflow starting from an 'Initial distribution' labeled p₀, depicted as a diagonal matrix with a single black square at the top-left corner and white squares along the diagonal. This transitions via an 'Encoding stochastic' step, labeled S(x), to a 'Data-dependent distribution' p(x), shown as a diagonal matrix with varying gray shades along the diagonal, indicating data-dependent probabilities. Next, a sequence of 'Trainable, task-dependent stochastic' transformations, denoted S₁(θ₁) through S_L(θ_L), leads to the 'Final distribution' p_L(x; θ), also a diagonal matrix with adjusted gray levels. From this final distribution, a 'Probabilistic function from expectation value' is computed as f_θ(x) = ⟨b⟩_{p_L(x;θ)}, where b is a 'Function of bitstrings' represented as a diagonal matrix with colored squares (blue, red, purple) along the diagonal. The color scheme legend indicates real magnitudes from 0 to 1 (gray scale), observables from -1 to +1 (blue to red), and complex phases from 0 to 2π (rainbow spectrum).

Part (b) mirrors this structure but replaces classical distributions with quantum states. It begins with an 'Initial state' ρ₀, shown as a grid with a single black square at the top-left, representing a pure state. An 'Encoding unitary' E(x) transforms it into a 'Data-dependent state' ρ(x), depicted as a grid with colored squares both on and off the diagonal, indicating non-zero off-diagonal elements due to quantum coherence. Subsequent 'Trainable, task-dependent unitary' operations U₁(θ₁) through U_L(θ_L) yield the 'Final state' ρ_L(x; θ), a grid with a richer pattern of colors across all positions, reflecting complex-valued correlations. The output is a 'Quantum function from expectation value' f_θ(x) = ⟨ℳ⟩_{ρ_L(x;θ)}, where ℳ is a 'Quantum observable', shown as a grid with colored squares (blue, red, purple) primarily on the diagonal, consistent with the observable's real eigenvalues. The same color legend applies, emphasizing that quantum states encode information not only in real-positive probabilities (diagonal elements) but also in complex-valued correlations (off-diagonal elements).

Connections are represented by solid arrows for direct transformations and dashed arrows for sequences of trainable layers. All modules are rectangular boxes with descriptive labels above or below them. The figure uses grayscale for classical components and a full color palette for quantum components to visually distinguish the presence of complex phases and off-diagonal elements in the quantum case.
