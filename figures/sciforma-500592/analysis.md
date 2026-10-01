# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SP$^2$T: Sparse Proxy Attention for Dual-stream Point Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct architectural modules for feature interaction and fusion in a neural network context, labeled (a) Sparse Proxy Attention (Point to Proxy) and (b) SA-based Proxy Fusion. Both diagrams are vertically structured, showing a data flow from bottom to top, with input features at the base and output features at the top.

In diagram (a), the Sparse Proxy Attention module begins with two input features: 'Proxy Feature' of size m × d and 'Point Feature' of size n × d. These inputs are processed by three separate linear layers: 'Query Linear', 'Key Linear', and 'Value Linear'. The 'Query Linear' layer takes the Proxy Feature and outputs a Query tensor of size m × h × d/h. The 'Key Linear' and 'Value Linear' layers take the Point Feature and produce Key and Value tensors, both of size n × h × d/h. These three tensors are then fed into a block labeled 'Sparse Matmul & Softmax', which is enclosed within a dashed orange rectangle indicating a grouped operation. This block receives an additional input labeled 'TRE' (likely Temporal or Structural Encoding) on its left side. The output of this block feeds into a 'Sparse Matmul' layer, which produces an intermediate result. Finally, this result is passed through a 'Concat & Output Linear' layer, yielding the 'Output Feature' of size m × d.

Diagram (b), SA-based Proxy Fusion, follows a similar structure but with key differences. It also starts with 'Proxy Feature' (m × d) and 'Point Feature' (n × d). The 'Query Linear' layer processes the Proxy Feature to generate a Query tensor of size m × h × d/h. The 'Key Linear' and 'Value Linear' layers process the same Proxy Feature to produce Key and Value tensors, both of size m × h × d/h — note that here, the Key and Value are derived from the Proxy Feature rather than the Point Feature. These three tensors are then input into a 'Self-Attention with TRE' block, which also receives the 'TRE' input on its left. The output of this self-attention block is passed to a 'Concat & Output Linear' layer, resulting in the 'Output Proxy Feature' of size m × d.

Visually, all linear layers are represented as gray rectangular boxes. The 'Sparse Matmul & Softmax' block in (a) is a light pink rectangle, while the 'Sparse Matmul' block above it is a light yellow rectangle, both enclosed in a dashed orange border. In (b), the 'Self-Attention with TRE' block is a gray rectangle. All connections are indicated by solid black arrows pointing upward, signifying the forward pass. The figure includes explicit dimension annotations for each tensor, and the two subfigures are clearly labeled at the bottom with their respective titles.
