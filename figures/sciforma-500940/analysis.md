# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

IDArb: Intrinsic Decomposition for Arbitrary Number of Input Views and Illuminations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12083

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part architectural diagram for a neural network method designed to estimate intrinsic properties (albedo, normal, metallic & roughness) of 3D objects from multi-view, multi-illumination images. The top section provides an overview of the entire pipeline, while the bottom section details the internal structure of the attention block within the U-Net.

[1] Global Layout and Structure:

The top portion shows the end-to-end workflow: starting from a grid of input images representing N_v views and N_i illuminations of a 3D object (e.g., a car), N images are sampled. These images are paired with corresponding noise maps and fed into an encoder ε, which produces latent representations. These latents are concatenated with a specific text prompt (e.g., 'albedo', 'normal', or 'metallic&roughness') and processed by a U-Net denoiser D. The output is a set of predicted intrinsic maps for the object, shown in three distinct color-coded outputs: albedo (gray-scale), normal (pinkish), and metallic&roughness (green).

The bottom portion zooms into the attention block inside the U-Net, structured as a sequence of three modules: cross-component attention, cross-view attention, and a feed-forward layer with cross-attention. Each module processes a latent tensor of shape D×H×W (where D=3 for the three intrinsic components), and the flow proceeds left to right.

[2] Visual Modules and Attributes:

In the top section, input images are arranged in a grid labeled 'N_v views' and 'N_i illumination'. Sampled images are highlighted with orange borders. The encoder ε is depicted as a gray box with a downward arrow, followed by a concatenation symbol ⊕. The U-Net is shown as a series of vertical bars with a central bottleneck, labeled 'U-Net'. The decoder D is represented by a gray box with a rightward arrow. Output intrinsic maps are displayed in three rows, each with a distinct color scheme: gray for albedo, pink for normal, green for metallic&roughness.

In the bottom section, the 'cross-component attention' module takes a latent tensor (D×H×W) and applies attention across the three intrinsic components (albedo, normal, metallic&roughness), visualized as three separate image patches. The attention mechanism uses query (Q_N), key (K_N), and value (V_N) matrices derived from the latent, producing attention maps of size D×H×W. The 'cross-view attention' module similarly processes the same latent tensor but applies attention across four different views (view1 to view4), using Q_D, K_D, V_D to generate attention maps of size N×H×W. Both attention blocks use standard transformer-style diagrams with colored boxes for keys, queries, values, and attention maps. The final 'feed-forward' block includes a cross-attention step guided by the specific text prompt, which modulates the latent representation before passing it forward.

[3] Connections and Arrows:

In the top section, arrows indicate the data flow: from the input grid → sample N images → encoder ε → concatenation with text prompt → U-Net → decoder D → output intrinsic maps. A curved black arrow points from the U-Net to the attention block in the bottom section, indicating that this is the detailed implementation of the attention mechanism within the U-Net.

In the bottom section, data flows from left to right through the three attention modules. Within each module, arrows show how the latent tensor is split into Q, K, V, then multiplied to produce attention maps, which are combined with the original values via addition. The output of each module feeds into the next. The feed-forward block receives the output from cross-view attention and performs cross-attention with the text prompt before proceeding. All connections are solid black arrows, except for the curved arrow linking the U-Net to the attention block.
