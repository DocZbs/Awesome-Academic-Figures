# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exposing the Vulnerability of Decentralized Learning to Membership Inference Attacks Through the Lens of Graph Mixing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12837

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two side-by-side diagrams illustrating the model update and aggregation processes in two different distributed learning frameworks: Gossip Learning (left) and SAMO (right). Both diagrams share a similar global layout, consisting of three input nodes labeled y₁, y₂, and y₃ on the left, a central processing node labeled x in the middle, and three output nodes labeled z₁, z₂, and z₃ on the right. All nodes are represented as purple circles with black text. The central node x contains the mathematical symbols 'Σ + ♻️', indicating summation and recycling or iterative update operations. The connections between nodes are directed arrows in dark teal, each labeled with a numbered circle (1 through 5) to denote sequential steps in the process.

In the Gossip Learning diagram (left), the flow begins with y₁ sending data to x via arrow 1, y₂ sending data to x via arrow 3, and y₃ sending data to x via arrow 4. These inputs are aggregated at x, which then outputs to z₁ via arrow 5, to z₂ via an unlabeled arrow (implied step 5), and to z₃ via another unlabeled arrow (also implied step 5). The numbering suggests that steps 1, 3, and 4 occur before the aggregation at x, followed by step 5 for all outputs. The diagram implies a centralized aggregation where multiple peers send updates to a central node, which then broadcasts the updated model.

In the SAMO diagram (right), the structure is similar but the sequence of operations differs. Here, y₁ sends data to x via arrow 1, y₂ sends data to x via arrow 2, and y₃ sends data to x via arrow 3. After aggregation at x, the outputs to z₁, z₂, and z₃ are all labeled with arrow 5, indicating a synchronized broadcast step. This suggests a more coordinated or synchronous update mechanism compared to Gossip Learning, where the order of input reception may vary.

Both diagrams are captioned beneath them: 'Model Update and Aggregation in Gossip Learning' for the left and 'Model Update and Aggregation in SAMO' for the right. The visual distinction lies primarily in the ordering of input steps (arrows 1, 2, 3, 4) and the uniform labeling of output steps (all 5s in SAMO), highlighting differences in the timing and coordination of model updates between the two methods.
