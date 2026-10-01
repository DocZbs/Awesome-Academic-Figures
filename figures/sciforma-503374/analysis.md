# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Real-time Bangla Sign Language Translator — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16497

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural overview of a Sign Language Translation (SLT) model, structured as an encoder-decoder framework with attention mechanism. The global layout is horizontally divided into two main components: the Encoder on the left and the Decoder on the right, separated by a dashed vertical boundary. Both components are enclosed within dashed rectangular boxes labeled 'Encoder' and 'Decoder', respectively. Below the Encoder, a separate dashed box labeled 'Spatial Embedding' contains input frames, indicating the source of visual data.

In the Encoder section, the bottom layer consists of four input frames (labeled Frame₁, Frame₂, ..., Frameₜ), each represented as a small grayscale image of a person signing. Each frame feeds into a CNN block (depicted as a yellow rectangle with 'CNN' inside), which extracts features. These feature vectors (denoted f₁, f₂, ..., fₜ) are passed upward to a tokenization layer (a light purple horizontal bar labeled 'tokenization layer'), which converts them into discrete tokens z₁, z₂, ..., zₙ. These tokens are then fed into a bidirectional RNN stack (four circular nodes per direction, labeled RNN, arranged vertically in two rows). The top row represents forward RNNs processing from left to right, while the bottom row represents backward RNNs processing from right to left. The outputs of these RNNs are combined to form hidden states h₁, h₂, ..., hₙ, which are then passed to an output vector layer (a light green horizontal bar labeled 'output vector'). This layer produces context vectors o₁, o₂, ..., oₙ, which are passed to the Decoder.

The Decoder section begins with a Word Embedding layer at the bottom, consisting of five vertical blocks labeled 'Linear Projection'. Each block maps a word token (e.g., <bos>, word₁, word₂, ..., wordₜ₋₁, wordₜ) into an embedding vector (k₁, k₂, ..., kₜ). These embeddings feed into a bidirectional RNN stack (five circular nodes per direction, labeled RNN), producing hidden states h̄₁, h̄₂, ..., h̄ₜ. Above this, an attention layer (a pink horizontal bar labeled 'attention layer') computes attention weights a₁, a₂, ..., aₜ based on the encoder's output vectors o₁ to oₙ. These weights are used to compute context vectors c₁, c₂, ..., cₜ, which are combined with the decoder’s hidden states to produce final hidden representations h₁, h₂, ..., hₜ. Each of these is passed through a fully connected (FC) layer (white circles labeled 'FC') to generate predicted words (word₁, word₂, ..., wordₜ, <eos>). The final output sequence ends with an <eos> token.

Connections are shown as solid black arrows indicating data flow: from frames to CNNs, to tokenization, to RNNs, to output vectors; from word tokens to linear projections, to RNNs, to attention, to FC layers. Dashed arrows indicate the attention mechanism linking the decoder’s current state to all encoder outputs. The entire diagram uses consistent node shapes (circles for RNNs, rectangles for CNNs and linear projections, bars for layers) and colors (yellow for CNNs, light purple for tokenization, light green for output vector, pink for attention layer). Text labels are placed directly on or near components, with mathematical notation (e.g., zₙ, hₙ, oₙ, aₙ) used for intermediate variables.
