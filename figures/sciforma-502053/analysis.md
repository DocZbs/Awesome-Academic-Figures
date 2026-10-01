# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unleashing the Power of Continual Learning on Non-Centralized Devices: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13840

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct model-level methods for continual learning, organized into three horizontally stacked panels labeled (a), (b), and (c), each with a distinct background color: light green for (a), light orange for (b), and light blue for (c). Each panel illustrates a progression from a local model trained on a local dataset at time t to an updated local model at time t+1, using different strategies to retain knowledge across tasks.

Panel (a), titled 'Weight Regularization', shows a green-themed workflow. On the left, a green neural network icon labeled 'Local Model(t)' is trained on a green database icon labeled 'Local Dataset(t)'. A green arrow points right to another green neural network labeled 'Local Model(t+1)', trained on 'Local Dataset(t+1)'. Between these models, a green gear icon with code symbols represents a 'Regularization Term'. A red curved arrow labeled 'Penalize' connects the weight vector W_t of the old model to W_{t+1} of the new model, indicating that the regularization term penalizes large deviations in weights during updates. The process continues with an ellipsis, suggesting sequential task learning.

Panel (b), titled 'Dynamic Network', uses an orange theme. The left side features an orange neural network ('Local Model(t)') trained on an orange database ('Local Dataset(t)'). An orange arrow labeled 'Dynamic Structure' points to the right, where the network structure has evolved: some nodes and connections have changed, and new output modules (yellow rectangles) are added. This updated network, labeled 'Local Model(t+1)', is trained on 'Local Dataset(t+1)'. Below the main arrow, a smaller yellow arrow shows the addition of new weight components (W_{t+1} for new task) to the existing structure, emphasizing structural expansion rather than weight modification alone. A snowflake icon accompanies the 'Dynamic Structure' label, symbolizing adaptability.

Panel (c), titled 'LLM Foundation', uses a blue theme. The left side shows a blue neural network ('Local Model(t)') trained on a blue database ('Local Dataset(t)'). A central purple hexagonal icon labeled 'LLMs' (Large Language Models) is connected via bidirectional blue arrows to both the current and future models. From the LLMs, a downward purple arrow labeled 'Prompt' leads to two dashed rectangular boxes representing prompt inputs. These prompts are then fed into the model update process, influencing the transition to 'Local Model(t+1)', which is trained on 'Local Dataset(t+1)'. The bidirectional arrows indicate that LLMs both guide the model update and may receive feedback or context from the local models, enabling knowledge transfer and guidance for parameter updates.

Each panel shares a common layout: a left-to-right flow from Local Model(t) to Local Model(t+1), with a central mechanism (regularization, dynamic structure, or LLMs) mediating the transition. The visual elements—colors, icons, and arrows—are consistently used to distinguish the three approaches while maintaining structural coherence across the figure.
