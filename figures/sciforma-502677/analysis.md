# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FolAI: Synchronized Foley Sound Generation with Semantic and Temporal Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram of an audio synthesis model that integrates a frozen diffusion model with trainable control modules, specifically using a ControlNet-like architecture. The global layout is divided into two main vertical sections: on the left, a series of feature extraction and conditioning modules; on the right, a modified version of the DiT (Diffusion Transformer) backbone with trainable control blocks. The central part shows the main DiT stack, which is frozen during training.

On the left side, the input 'Audio/Text' is processed by a blue trapezoid labeled 'CLAP', which outputs 'Frames'. These frames are then passed to another blue trapezoid labeled 'CAVP', which generates time-related features. A green rectangle labeled 'MLP' takes 'Time t' as input and produces two scalar values: 'seconds total' and 'seconds start', which are fed into a small white box labeled 'embed' to create time embeddings. All these conditioning signals—CLAP output, CAVP output, and time embeddings—are routed via colored lines (blue, light blue, green) to each DiT block in the main stack.

The central column consists of a sequence of gray rounded rectangles labeled 'DiT Block 1', 'DiT Block 2', ..., 'DiT Block n', representing the frozen DiT backbone. Each block receives the input from the previous block (or the initial input) and also receives the conditioning signals from the left. Between each pair of consecutive DiT blocks, there is a circular node with a '+' symbol, indicating element-wise addition of the block's output with the corresponding conditioning signal from the control path.

On the right side, enclosed within a dashed gray rectangle, is the trainable control module. This section is labeled 'RMS envelope' at the top, indicating the input to this control path. The RMS envelope is first processed by a yellow rounded rectangle labeled 'Zero Conv Block', whose output is added to the main input stream before entering the first DiT block. Subsequently, the control path contains copies of the DiT blocks, labeled 'DiT Block 1 copy', 'DiT Block 2 copy', etc., each of which is a yellow rounded rectangle, signifying they are trainable. These copies receive the output from the previous control block and also receive the conditioning signals (via the same colored lines as the main path). After each copy block, another 'Zero Conv Block' (yellow) processes the output, which is then added to the corresponding main DiT block’s output via the '+' nodes.

The connections are shown as black arrows indicating the flow of data. The main input flows down through the DiT blocks, while the control signals from the left and the control path on the right are added at each stage. The legend at the bottom right indicates that yellow boxes represent trainable components (ControlNet blocks), while gray boxes represent frozen components (Stable DiT blocks). The overall structure demonstrates how the control network modulates the frozen diffusion model using audio/text features and temporal information, guided by an RMS envelope for dynamic control.
