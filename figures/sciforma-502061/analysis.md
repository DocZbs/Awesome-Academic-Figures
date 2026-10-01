# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CRM: Retrieval Model with Controllable Condition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative illustration of two variants of the Decision Transformer architecture, labeled as (a) Origin Decision Transformer and (b) Controllable Retrieval Decision Transformer (CRM Decision Transformer), designed for sequential decision-making tasks, particularly in the context of recommendation systems.

[1] Global Layout and Structure:
The figure is vertically divided into two main sections, separated by a horizontal line. The top section (a) illustrates the original Decision Transformer, while the bottom section (b) shows the modified CRM version. Each section contains a large gray rounded rectangle at the top representing the core model, with multiple light blue rectangular blocks below it, each corresponding to a time step or token in the input sequence. Arrows point from these blocks upward into the model, indicating input flow. Above the model, a label specifies the prediction goal: 'To predict next action_{n+1}' for (a) and 'To predict next item_{n+1}' for (b). A single blue circle at the top right represents the predicted output.

[2] Visual Modules and Attributes:
In section (a), each light blue block contains three distinct tokens: a pink pentagon labeled with the cumulative reward-to-go (∑_{i=1}^{n+1} reward_i), a blue square labeled 'state_1' through 'state_n', and a blue circle labeled 'action_1' through 'action_n'. The final block contains only the reward-to-go and state_{n+1}, with no action token, as the model predicts the next action. The tokens are color-coded: pink for reward-to-go, blue square for state, and blue circle for action. The labels are positioned directly beneath each shape.

In section (b), each light blue block contains two tokens: a pink pentagon labeled with the cumulative watch-time-to-go (∑_{i=1}^{n+1} watch_i) and a blue circle labeled 'item_1' through 'item_n'. The final block contains only the watch-time-to-go and 'watch_{n+1}', with no item token, as the model predicts the next item. The pink pentagon represents the watch-time-to-go, and the blue circle represents the item. This reflects the adaptation of the model for recommendation, where the state is implicitly represented by the sequence of previously interacted items (actions).

[3] Connections and Arrows:
Black arrows originate from each token within the light blue blocks and point upward into the respective Decision Transformer model, indicating that all tokens are fed as inputs. The model processes these inputs to produce a single output, represented by a blue circle, which is connected via an arrow from the model to the prediction target: 'action_{n+1}' in (a) and 'item_{n+1}' in (b). The sequence of blocks is shown with ellipses (...) between them, indicating that the full sequence may extend beyond what is explicitly drawn. The structure emphasizes a causal, masked autoregressive setup where the model uses past observations to predict the next element in the sequence.
