# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Contrastive Learning from Exploratory Actions: Leveraging Natural Interactions for Preference Elicitation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01367

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of CLEA (Contrastive Learning from Exploratory Actions), a framework designed to enable personalized robot behavior learning through user interaction. The overall layout is structured into four main stages arranged horizontally: Exploratory Search, User Data, CLEA, and Customization. These stages are connected by directional arrows labeled 'Generates', 'Enables', 'Facilitates', and 'Encourages', forming a feedback loop that emphasizes iterative improvement.

In the first stage, 'Exploratory Search' (highlighted in green), a user interacts with a set of robot behavior options represented as icons depicting hand gestures, object interactions, and touch inputs. These options are categorized under modalities: Visual, Sound, and Movement. The user mentally evaluates each option using a binary decision function ψ(·), where ψ(hand gesture) = 1 indicates exploration (positive selection) and ψ(touch screen) = 0 indicates ignoring (negative selection). This process generates two sets of data: explored and ignored behaviors.

The second stage, 'User Data' (highlighted in pink), receives the outputs from exploratory search. It contains two submodules: 'Explored Data' (yellow-bordered icons) and 'Ignored Data' (gray-bordered icons), visually distinguishing selected versus rejected behaviors. This data serves as input for the next stage.

The third stage, 'CLEA' (highlighted in pink), is the core learning module. It processes the user data by constructing 'Contrastive Triplets'—triplets consisting of an anchor (explored behavior), a positive example (another explored behavior), and a negative example (ignored behavior). These triplets are fed into a neural network denoted by Φ, which learns discriminative features Φ(ξ) from the behavioral data. The learned features are then used to support downstream tasks.

The fourth stage, 'Customization' (highlighted in green), demonstrates how the learned features enable personalized robot behavior adaptation. Three distinct customization scenarios are shown: Query (user selects desired behaviors via icons), Ranking (user ranks behaviors numerically), and Language (user provides natural language descriptions like 'A hand holding an object'). Each scenario uses the learned features Φ(ξ) to compute a personalized response R_Hi(Φ(ξ)), where i denotes different users or contexts.

Arrows indicate the flow: 'Generates' connects Exploratory Search to User Data; 'Enables' links User Data to CLEA; 'Facilitates' connects CLEA to Customization; and 'Encourages' forms a feedback loop from Customization back to Exploratory Search, promoting continuous refinement. The visual design uses color coding—pink for CLEA’s contributions and green for enabled applications—to highlight the framework’s core innovation and its broader impact.
