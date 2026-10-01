# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an attention-based sequence-to-sequence model architecture, specifically a neural machine translation framework using Gated Recurrent Units (GRUs). The global layout is horizontally structured into two main sections: an encoder on the left and a decoder on the right, connected via attention mechanisms. The encoder processes an input sequence ('sos', 'Good', 'morning', 'eos') sequentially through four light blue rectangular blocks representing GRU cells. Each cell receives an embedded input (yellow rectangles below) and produces a hidden state (labeled h1, h2, h3, h4), which is passed forward to the next cell. The initial hidden state h0 is fed into the first GRU cell. These hidden states are then used in the attention mechanism.

On the right side, the decoder begins with an initial hidden state s1, derived from the final encoder hidden state (h4), and processes the target sequence starting with 'sos'. The decoder consists of a light blue GRU cell that generates the next hidden state at each step. This hidden state is combined with the context vector from the attention mechanism to produce the output. The attention mechanism is implemented within two pink rectangular blocks labeled 'W' and 'Z'. The 'Z' block computes attention scores based on the decoder's current hidden state and the encoder's hidden states. The 'W' block takes these scores (denoted by 'a') and computes a weighted sum over the encoder’s hidden states H, producing a context vector. This context vector is then combined with the decoder’s hidden state via a dashed line connection to form the input for the next step.

The purple rectangular block represents a linear transformation layer (denoted as f), which takes the combined decoder hidden state and context vector as input and outputs the predicted next token, shown here as 'Guten'. The orange rectangles beneath the encoder and decoder represent the embedding layers for input tokens. Solid arrows indicate direct data flow, while dashed arrows denote attention-related connections or contextual information passing. The figure captures the full workflow: input sequence encoding, attention computation, decoding with context integration, and final token prediction.
