# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Federated Unlearning with Gradient Descent and Conflict Mitigation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20200

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FedOSD framework for federated learning (FL) with unlearning capability, divided into three stages: (a) FL Training, (b) Unlearning, and (c) Post-training. The global layout is structured vertically with dashed lines separating the three stages. On the left side, clients are represented as rectangular boxes labeled 'Client 1', 'Client 2', ..., 'Client m' in light blue. A large speech bubble labeled 'Client' contains a schematic of a neural network model ω_i with three layers (blue circles and squares) and data represented by stacked colored layers (yellow, green, blue). On the right side, a large rounded rectangle labeled 'Server' contains components such as 'Aggregation' (orange rounded rectangle), a neural network diagram representing the 'Global Model ω' (pink nodes and connections), and mathematical expressions.

In stage (a) FL Training, each client performs local training using cross-entropy (CE) loss on its local data. The resulting gradients g₁, g₂, ..., gₘ (yellow circles) are sent to the server. The server aggregates these gradients and updates the global model ω via broadcasts. The global model is then sent back to clients for the next round.

Stage (b) Unlearning begins when 'Client u' (highlighted in red) requests unlearning. This client computes gradients using UCE Loss (Unified Cross-Entropy Loss), while the remaining clients (light blue box) compute gradients using standard CE Loss. Both sets of gradients are sent to the server. The server computes dᵗ using Equation (6), updates the global model as ω^{t+1} = ωᵗ + ηdᵗ, and broadcasts the updated model back to clients. The gradients from Client u are denoted as gᵤᵗ, and those from other clients as g₁ᵗ, g₂ᵗ, etc., all shown as yellow circles.

Stage (c) Post-training involves only the remaining clients (excluding Client u). Each remaining client performs local training, computing gradients gᵢ'ᵗ which are derived from the original gradient gᵢᵗ and an adjustment term gₐᵗ (shown with a vector diagram inside the Local Training box). These adjusted gradients are sent to the server for aggregation, updating the global model ωᵗ. The server broadcasts the updated model back to the remaining clients. The entire process emphasizes the separation between the unlearning phase and subsequent post-training phase, ensuring privacy and model integrity after unlearning.
