# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SoftVQ-VAE: Efficient 1-Dimensional Continuous Tokenizer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10958

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct architectures for SoftVQ (Soft Vector Quantization), labeled 'SoftVQ with Product Quantization' on the left and 'SoftVQ with Residual Quantization' on the right, each illustrating a different approach to quantizing latent codes.

[1] Global Layout and Structure:
The figure is divided into two side-by-side diagrams. The left diagram shows a parallel processing structure where latent codes are split into G groups, each processed independently against K codewords. The right diagram shows a sequential, iterative structure where quantization is applied layer by layer, with residuals fed back into subsequent layers. Both diagrams follow a top-down data flow from input latent codes to output quantized representations.

[2] Visual Modules and Attributes:
In both diagrams, 'Latent Codes' are represented as vertical stacks of peach-colored rectangles enclosed in dashed boxes, labeled with 'L' indicating the number of codes. Codewords are shown as horizontal arrays of purple rectangles within dashed boxes, labeled 'K Codewords' (left) or 'K Codewords' (right). In the left diagram, the latent codes are first split into 'G Groups', each group being a smaller stack of peach rectangles. The codewords are replicated G times via a 'G Replication' step, forming G separate sets of K codewords. Each group then undergoes a sequence of operations: 'Distance' (light yellow rounded rectangle), followed by 'Softmax' (same style), then 'Mat. Mul.' (matrix multiplication, same style). The outputs of these operations are combined to produce the final quantized output, again a stack of peach rectangles.

In the right diagram, the process is iterative. The latent codes are processed through a loop of 'l Layers'. At each layer, the current latent representation (denoted r_l) is subtracted from the previous output (via a circular minus node), producing a residual. This residual is then passed to a 'Distance' module, followed by 'Softmax', and then 'Mat. Mul.', which multiplies the softmax output with the codewords. The result is added to the previous layer's output (via a circular plus node) to produce the new quantized representation z_l. This z_l becomes the input for the next layer. The final output is a stack of peach rectangles representing the quantized latent codes after l layers.

[3] Connections and Arrows:
In the left diagram, arrows indicate the flow: from 'Latent Codes' to 'G Groups', then from each group to its corresponding 'Distance' module. The 'G Replication' block feeds the codewords to each 'Distance' module. Outputs from 'Distance' go to 'Softmax', then to 'Mat. Mul.', which also receives the replicated codewords. The outputs of all 'Mat. Mul.' modules are combined to form the final output.

In the right diagram, the flow starts from 'Latent Codes' to the first 'Distance' module. The codewords feed directly into 'Mat. Mul.'. The output of 'Mat. Mul.' is added to the previous layer's output (z_{l-1}) to form z_l. A feedback loop connects z_l back to the subtraction node, where it is subtracted from the original latent code (or previous residual) to compute the next residual r_l. This loop continues for 'l Layers'. The final z_l is the output.
