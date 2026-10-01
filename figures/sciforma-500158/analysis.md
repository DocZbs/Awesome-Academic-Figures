# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Learning Models for Colloidal Nanocrystal Synthesis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10838

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural network architecture designed for predicting molecular properties, specifically size and shape, using a multi-layer transformer model. The global layout is left-to-right, starting with input features on the far left, progressing through an embedding and transformation stage, then entering a central multi-layer transformer block, and finally producing outputs on the right. The structure is modular, with distinct components for input processing, feature encoding, and output generation.

On the left side, the input consists of two types of data: one labeled 'T_j, T_i, t, Sp, Mol' in a yellow rectangle, and another labeled 'T_j, T_i, t, Sp' in a similar yellow rectangle. The 'Mol' component from the first input is further processed by a small yellow box labeled 'Mol', which feeds into a set of four light blue rectangular blocks corresponding to atomic or molecular features: PbO, Se, OA, and PbSe. Each of these is connected to a combined orange-and-light-blue block, suggesting a feature embedding or concatenation step. Additionally, a white square labeled '[CLS]' is included, likely representing a classification token, and all these embeddings are fed into a light blue rounded rectangle labeled 'Linear', indicating a linear projection layer.

This linear layer's output connects to the main processing unit: a large gray rounded rectangle labeled 'Multi-layer transformer'. Inside this block, the flow begins with a salmon-colored rounded rectangle labeled 'Norm' (normalization), followed by a yellow rounded rectangle labeled 'Multi-Head Self-Attention'. The output of the self-attention module is passed to a light green rounded rectangle labeled 'Add & Norm' (addition and normalization), which also receives a skip connection from the 'Norm' input. This is followed by a yellow rounded rectangle labeled 'Feed Forward', and then another 'Add & Norm' block, again with a skip connection from the previous 'Add & Norm' output. A purple square follows the transformer block, possibly representing a pooling or aggregation operation.

From the purple square, the output flows to a salmon-colored rounded rectangle labeled 'Concat', which combines it with a separate branch originating from the top 'Linear' layer (which receives input from the 'T_j, T_i, t, Sp' data). The concatenated result is then passed to a final light blue 'Linear' layer, which produces two outputs: 'Size' and 'Shape', each indicated by an arrow pointing rightward.

The visual modules are color-coded: yellow for input and some internal layers, light blue for linear projections, salmon for normalization and concatenation, light green for residual connections, and purple for an intermediate aggregation step. All blocks are rounded rectangles except for the input feature blocks and the purple square. Text labels are clear and placed inside or adjacent to the respective modules. The connections are solid black arrows indicating the direction of data flow, with skip connections shown as curved lines bypassing certain layers within the transformer. The overall design reflects a standard transformer-based encoder architecture with residual connections and layer normalization, adapted for molecular property prediction.
