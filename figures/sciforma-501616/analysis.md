# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Practicable Black-box Evasion Attacks on Link Prediction in Dynamic Graphs -- A Graph Sequential Embedding Method — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13134

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a training pipeline for a policy network and its associated Global State Embedding (GSE), structured into four main stages labeled a, b, c, and d, each enclosed in distinct dashed boxes with different border colors: red for stage a, yellow for stage b, purple for stage c, and black for stage d. The overall layout is modular and sequential, progressing from left to right and top to bottom, depicting a reinforcement learning framework involving LSTM networks, GSE states, and Q-value estimation.

Stage a, titled 'Obtain the GSE state of the updated LSTM-q'', begins with an 'Embedding Sequence Batch' represented by a series of light cyan rectangular blocks, each containing a small colored dot (blue, purple, pink), labeled x_b. This batch feeds into a red-colored LSTM block labeled 'LSTM-q'' which processes the sequence and outputs a GSE state, denoted as S^q', shown as a group of red rectangular blocks with corresponding colored dots. This stage is enclosed in a red-dashed box.

Stage b, titled 'Obtain the GSE state from LSTM-p and the policy action', starts with a yellow-colored LSTM block labeled 'LSTM-p' receiving input from the embedding sequence batch (via a vertical arrow from stage a). The output of LSTM-p is a GSE state S^p, depicted as a group of orange rectangular blocks with colored dots. This GSE state is then fed into a fully connected neural network, symbolized by a white circular node graph labeled μ_θ, which produces a 'Policy Action' a_θ, represented as a stack of orange rectangular blocks with colored dots. This stage is enclosed in a yellow-dashed box.

Stage c, titled 'Forward to obtain the Q_θ value of the policy action and the updated Q' value of the batch action', shows two parallel forward passes. The policy action a_θ from stage b is fed into a neural network labeled 'Q_θ network' (white circular node graph), producing 'Q_θ Values' as a stack of pink rectangular blocks with colored dots. Simultaneously, the original 'Action Batch' a_b (stack of yellow blocks with colored dots) is passed through a separate network labeled 'Q' network' (another white circular node graph), yielding 'Q' Values' as a stack of pink blocks with colored dots. A thick black arrow connects the GSE state S^q' from stage a to the Q' network, indicating it is used as part of the input or context for computing Q' values. This stage is enclosed in a purple-dashed box.

Stage d, titled 'Calculate the loss and update the policy network and LSTM-p', contains a black-bordered box with a mathematical expression: Loss = MSE(a_θ, a_b) * decrease(Q_θ, Q'). Below this, two update rules are specified: μ_θ -> μ_θ' and LSTM-p -> LSTM-p'. This indicates that the policy network parameters (μ_θ) and the LSTM-p model are updated based on the computed loss, which combines the mean squared error between the generated policy action and the batch action, weighted by a term reflecting the improvement in Q-values (decrease in Q_θ relative to Q').

Connections between modules are indicated by solid black arrows showing data flow: from embedding batch to both LSTM-q' and LSTM-p; from LSTM-q' to S^q'; from LSTM-p to S^p; from S^p to μ_θ; from μ_θ to a_θ; from a_θ to Q_θ network; from a_b to Q' network; and from S^q' to Q' network. The final loss computation in stage d depends on outputs from stages b and c, completing the feedback loop for training.
