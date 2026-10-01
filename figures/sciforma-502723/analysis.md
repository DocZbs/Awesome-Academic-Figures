# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Probabilistic Strategy Logic with Degrees of Observability — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a simple message interception scenario modeled as a finite-state machine or probabilistic automaton with four states: s₀, s₁, s₂, and s₃. The global layout is hierarchical and centered around state s₀ at the bottom, which acts as the initial or central decision state. From s₀, transitions branch out to s₁, s₂, and s₃, forming a fan-out structure. Each state is represented by a circular node with a bold black outline and a shadow effect, labeled with its respective identifier (s₀, s₁, s₂, s₃) in italicized serif font at the center. All nodes are white-filled circles.

State s₀ has a self-loop indicating transitions that keep the system within s₀ under certain conditions. The self-loop is annotated with three transition labels: (wait, wait), 1; (wait, copy), 1; and (send, wait), 1 — suggesting deterministic transitions (probability 1) for these input-action pairs. From s₀, there are three outgoing directed edges: one to s₁ labeled (send, copy), 0.1; one to s₂ labeled (send, copy), 0.1; and one to s₃ labeled (send, copy), 0.8. These indicate probabilistic transitions triggered by the action 'send' with 'copy' as the associated event or context, with probabilities summing to 1.0 (0.1 + 0.1 + 0.8).

Each of the terminal states s₁, s₂, and s₃ also has a self-loop. The self-loop on s₁ is labeled (*, *), 1, meaning any input-action pair leads to staying in s₁ with probability 1. Similarly, s₃ has a self-loop labeled (*, *), 1, indicating it is an absorbing state for all inputs. State s₂’s self-loop is labeled (wait, *), 1, meaning that if the action is 'wait', regardless of the input, the system remains in s₂ with probability 1. This suggests s₂ is a waiting state that only responds to 'wait' actions.

All transitions are represented by solid black arrows with arrowheads pointing to the destination state. The transition labels are placed near the middle of each edge and consist of a tuple (input, action) followed by a comma and a probability value. The figure uses a clean, minimalistic style with no background colors or additional graphical elements. The overall structure conveys a probabilistic state machine where s₀ decides the next state based on the 'send' action with 'copy', distributing probability mass among s₁, s₂, and s₃, while each target state either absorbs all further inputs or waits for specific actions.
