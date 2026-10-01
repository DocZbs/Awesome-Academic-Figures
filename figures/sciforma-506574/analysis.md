# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

End-to-End Long Document Summarization using Gradient Caching — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01805

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a CachED (Caching Encoder Decoding) approach for long document summarization, structured into three main steps. The global layout is divided into three sequential phases: (1) chunked encoding of the input, (2) decoding and loss computation, and (3) gradient caching and backpropagation. The entire process is depicted as a flow from bottom to top, with data moving through encoder modules, then to a decoder, and finally gradients being cached and propagated back.

In Step (1), the input sequence, represented as a light blue horizontal bar labeled 'Input' containing tokens x₁ to xₗ, is split into K non-overlapping chunks denoted as c₁, cₖ, ..., cₖ. Each chunk is processed independently by a separate purple rectangular module labeled 'Encoder'. These encoders produce corresponding hidden state sequences: H₁, Hₖ, ..., Hₖ, which are shown as upward-pointing arrows leading to a row of pink rectangular boxes representing the hidden states h₁ to hₗ. These hidden states are concatenated across all chunks to form a continuous sequence of representations.

Step (2) involves the decoder, another purple rectangular module, which takes the concatenated hidden states as input. The decoder generates an output sequence y₁ to yₘ, displayed as green rectangular boxes. This output is fed into a 'Cross Entropy Loss(J)' function, which computes the loss J. A vertical dashed yellow line labeled '∇J' indicates the gradient of the loss with respect to the model parameters, flowing downward from the loss function.

Step (3) introduces the gradient caching mechanism. A yellow-bordered box labeled 'Gradient Cache(G) = ∂J/∂H' receives the gradient information from the loss function via a dashed yellow arrow. This cache stores the gradients with respect to the hidden states H. From this cache, dashed yellow arrows propagate the gradients back to each individual encoder module, enabling efficient backpropagation through the chunked encoders. The connections between components are indicated by solid black arrows for forward passes and dashed yellow arrows for backward gradient flow. The figure uses distinct colors—light blue for input, pink for hidden states, green for output, and purple for encoder/decoder modules—to differentiate data types and processing units. The overall structure emphasizes an end-to-end trainable architecture where gradients are cached at the hidden state level and reused during backpropagation to handle long documents efficiently.
