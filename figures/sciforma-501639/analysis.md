# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

HandsOnVLM: Vision-Language Models for Hand-Object Interaction Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13187

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a training pipeline for a multimodal large language model (LLM) that jointly learns to generate text and predict hand trajectories. The global layout is structured as a top-down flowchart, with input at the bottom, processing in the center, and outputs and loss computations on the right. The central component is a large blue rounded rectangle labeled 'Large Language Model', which processes token embeddings and produces output token embeddings. Below this, a yellow rectangular block labeled 'LLM Positional Embed' receives input token embeddings from a sequence of tokens: 'The', 'trajectory', 'is', '<HAND>', '<HAND>'. These input tokens are visually represented as colored blocks (light yellow, pink, light green, light blue, purple) corresponding to their positions in the sequence. Each input token embedding is combined with positional information via the LLM Positional Embed layer before being fed into the Large Language Model. Additionally, two special tokens '<HAND>' are associated with hand position embeddings, shown as a light teal rounded rectangle labeled 'Hand Position Embed', which are also fed into the LLM. The output of the LLM consists of output token embeddings, again represented as colored blocks matching the input colors, indicating a one-to-one correspondence per token. From these output embeddings, two parallel branches diverge: one passes through an orange rounded rectangle labeled 'Linear' to produce 'Token Probabilities', and the other passes through a pink rounded rectangle labeled 'CVAE' to produce 'Predicted Position'. The Token Probabilities are compared with the 'Actual Next Token' to compute a loss function denoted by a light blue diamond labeled 'L_txt'. Similarly, the Predicted Position is compared with the 'Ground Truth Position' to compute another loss function, 'L_hand', shown in a light blue diamond. Both losses are used to train the model. The connections are represented by solid black arrows indicating the direction of data flow: from input tokens upward through the LLM, then branching to the Linear and CVAE modules, and finally to the respective loss functions. The figure also includes explicit labels for 'Input Token Embeddings' and 'Output Token Embeddings' above the corresponding sequences of colored blocks. The overall structure emphasizes a joint training objective where the LLM is trained to generate both linguistic content and spatial hand movement data simultaneously.
