# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a bidirectional Gated Recurrent Unit (GRU) encoder architecture used in neural machine translation. The global layout consists of four sequential time steps arranged horizontally, each representing a processing unit for an input token. At the bottom, input tokens 'sos', 'Good', 'morning', and 'eos' are fed into the model sequentially from left to right. Each token is represented by a light yellow rectangular box, which feeds upward into a two-part GRU cell structure. The lower part of each GRU cell is a light blue rectangle, representing the forward GRU unit, while the upper part is a slightly darker blue rectangle, representing the backward GRU unit. These two components process the input in opposite directions: the forward unit processes from left to right, and the backward unit processes from right to left. 

Each time step produces two hidden state outputs: one from the forward GRU (denoted by -> h1, -> h2, etc.) and one from the backward GRU (denoted by <- h1, <- h2, etc.). These are shown as solid arrows pointing upward from each GRU cell. Additionally, dashed arrows indicate the backward hidden state propagation from right to left, connecting the backward GRU units across time steps. The forward hidden states are passed sequentially to the next time step via solid horizontal arrows, while the backward hidden states are passed in reverse order via dashed horizontal arrows. 

At the top of the diagram, the final hidden states from both directions are labeled: -> h4 and <- h4 for the last time step, and -> h0 and <- h0 for the initial states. A context vector z is derived from the concatenation or combination of the final forward and backward hidden states, indicated by a dashed arrow pointing leftward from the first time step’s backward GRU unit. The figure also includes a solid arrow labeled -> h0 entering the first forward GRU unit, representing the initial hidden state for the forward pass. The caption clarifies that the notation -> denotes values from the forward GRU, and <- denotes values from the backward GRU, including the context vector z. The overall structure emphasizes the bidirectional nature of the encoder, capturing contextual information from both past and future tokens at each time step.
