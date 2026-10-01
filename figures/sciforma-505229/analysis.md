# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Adaptive Reasoning in Large Language Models with Thought Rollback — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19707

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a schematic of a rollback mechanism in a large language model (LLM)-based reasoning process, specifically when the model reaches the n-th reasoning step. The global layout is horizontal, depicting a sequential reasoning flow from left to right, with a feedback loop for rollback operations. The process begins with an initial state z₀, represented as a green circle, which feeds into an LLM block (a rounded rectangle labeled 'LLM'). This LLM generates a sequence of intermediate states z₁, ..., zₘ₋₁, shown as blue rectangles connected by solid black arrows, indicating forward progression. The current state zₘ₋₁ is then used as input to two parallel reasoning paths.

The upper path represents a standard forward reasoning step, where zₘ₋₁ is processed by an LLM function f(zₘ | Π(Aₘⁿ, Aₓ(·)_{z₀...m−1}, z₀...m−1)), producing output zₘⁿ, a blue rectangle labeled with superscript n, indicating a modified or rolled-back version. This path includes a red arrow labeled 'R' pointing from the LLM to zₘⁿ, signifying a rollback action. The lower path represents the normal forward step without rollback, using f(zₘ | Π(Aₓ(·)_{z₀...m−1}, z₀...m−1)) to produce zₘ, a standard blue rectangle. Both zₘ and zₘⁿ are part of a continuing sequence leading to zₙ, indicated by a vertical dotted line and downward arrow.

A key component is the 'Rollback-1' module, enclosed in a gray dashed box. It is triggered when a rollback is needed, indicated by a red dashed arrow labeled 'R-1' originating from zₘⁿ and pointing back to the Rollback-1 block. Inside this module, two inputs are provided: Aₘⁿ (a white rectangle) and m (another white rectangle), which are combined and fed into an LLM function f(A | Π_R(R, [z₀...n])). This function uses a rollback-specific context Π_R, incorporating the rollback signal R and the full history [z₀...n], to generate a corrected or revised state. The red dashed arrow from zₙ to the Rollback-1 block indicates that the final state zₙ can trigger a rollback, possibly due to inconsistency or error detection.

All LLM blocks are rounded rectangles with the label 'LLM' at the bottom. The function f is written inside each LLM block, with its arguments specifying the conditioning on previous actions (A) and states (z). The use of Aₓ(·)_{z₀...m−1} in the upper path accounts for the possibility that zₘ₋₁ itself may have resulted from a prior rollback, ensuring robustness. The visual distinction between zₘ and zₘⁿ (superscript n) highlights the difference between normal and rolled-back states. The red arrows and labels 'R' and 'R-1' clearly mark the rollback and rollback-triggering events, while the dashed lines indicate non-standard or conditional flows. The figure effectively conveys a dynamic, self-correcting reasoning process with explicit rollback logic.
