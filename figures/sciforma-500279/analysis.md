# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deployment Pipeline from Rockpool to Xylo for Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11047

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural network architecture composed of sequential and residual blocks, designed within the Rockpool framework. The global layout is linear and left-to-right, depicting a data flow through a series of processing modules. The structure begins with an initial blue rectangular block labeled 'W', representing a weight matrix or linear transformation, followed by an orange rectangular block labeled 'ReLU', indicating a rectified linear unit activation function. This sequence is repeated after a central residual block, which is enclosed in a dashed blue rectangle and explicitly labeled 'Residual' at the top.

Within the residual block, the input from the preceding ReLU layer splits into two paths. One path proceeds directly through another blue 'W' block and then an orange 'ReLU' block. The other path bypasses these layers via a direct connection (skip connection) and feeds into a circular node labeled with a '+' symbol, representing element-wise addition. The output of the ReLU block also connects to a smaller blue square labeled 'W_rec', which represents a recurrent weight matrix. An arrow from this 'W_rec' block loops back to the input of the 'W' block within the residual block, indicating a feedback or recurrent connection. The output of the summation node then continues to the next stage: another blue 'W' block followed by an orange 'ReLU' block, completing the sequence.

All 'W' blocks are rendered as solid blue rectangles with white text, while all 'ReLU' blocks are solid orange rectangles with white text. The residual block is demarcated by a dashed blue border, and the summation operation is shown as a white circle with a black plus sign. Arrows are black, solid lines with arrowheads indicating the direction of data flow. The skip connection is a straight horizontal line entering the summation node from the left, while the recurrent connection is a curved arrow from 'W_rec' back to the 'W' block. The entire diagram is clean, minimalistic, and uses consistent color coding and shapes to distinguish between different types of operations and connections.
