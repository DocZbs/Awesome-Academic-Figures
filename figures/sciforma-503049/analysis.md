# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Multimodal Spatial-temporal Patterns for Video Object Tracking — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15691

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two main architectural components: the 'Background Suppression Interactive' (BSI) module on the left and the 'Mamba Fusion' module on the right. The overall layout is divided into two vertical sections by a dashed gray line, with the BSI module occupying the left half and the Mamba Fusion module the right half. A legend box in the upper center defines symbols used throughout: a plus sign (+) denotes summarization, a multiplication sign (×) denotes multiplication, a circle with a sigma-like symbol (σ) denotes activation, a circle with a dot (⊙) denotes Hadamard product, and colored squares represent tokens with zero values (light green for non-zero, light blue for zero, and white for masked or suppressed tokens).

In the BSI module, the top-left section illustrates token selection based on attention weights. Input tokens are grouped into three types: S (search area tokens), Z (template tokens), and T (temporal information tokens), represented as green grids. These are averaged via a 'Mean' operation, then passed through a yellow rectangular block labeled 'K=λ%' to compute attention weights. These weights are applied via a Hadamard product (⊙) with a mask (green and orange squares) to produce a filtered set of tokens (orange and brown squares), where orange indicates selected tokens and brown indicates suppressed ones. This process feeds into two parallel Transformer layers (gray rounded rectangles labeled 'Transformer Layer'), each receiving a sequence of tokens (orange/brown for top layer, blue for bottom layer). Each Transformer outputs attention weights that feed into a 'Select Search Tokens' block (light green rounded rectangle), which selects specific tokens from the input sequences. The selected tokens are then processed through a shared block consisting of 'Down Linear', 'Linear', and 'Up Linear' layers (gray rounded rectangles within a dashed box), followed by addition (+) with the original Transformer output before feeding into another Transformer Layer.

The Mamba Fusion module on the right processes two input streams: x_RGB (orange tokens) and x_X (blue tokens). These inputs first pass through separate Linear layers, then through Conv1D layers, whose outputs are concatenated into a joint representation [x_RGB, x_X]. This is fed into an SSM (State Space Model) block (purple rounded rectangle), which outputs two streams: one for x_RGB and one for x_X. Each stream passes through an activation function (σ), then multiplies (×) with the corresponding original input (x_RGB or x_X). The results are summed and passed through a final Linear layer. Additionally, the module includes Forward and Backward Scan operations shown above the main flow, where red arrows indicate sequential processing across token sequences for x_RGB and x_X, demonstrating bidirectional scanning behavior.

The entire diagram uses consistent visual attributes: Transformer layers are gray rounded rectangles; Select Search Tokens blocks are light green; Linear and Conv1D layers are gray or blue rounded rectangles; SSM is purple; and tokens are represented as colored squares. Arrows indicate data flow direction, with solid lines for primary connections and dashed lines for auxiliary or internal paths. The figure caption clarifies that S, Z, and T denote search area, template, and temporal tokens respectively.
