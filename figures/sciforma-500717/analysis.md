# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AsymRnR: Video Diffusion Transformers Acceleration with Asymmetric Reduction and Restoration — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11706

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct architectural strategies for reducing and restoring sequence length in vision transformers: (a) Symmetric Reduction and Restoration (SymRnR) and (b) Asymmetric Reduction and Restoration (AsymRnR). The global layout is split into two side-by-side diagrams, each illustrating a complete processing pipeline from input to output, with clear labeling and color-coded components to differentiate stages.

In both diagrams, the process begins with an 'input H' represented as a grid of image patches showing a dog, symbolizing a high-resolution feature map. The first step in both pipelines is a 'reduce' operation, depicted as a blue-bordered box, which compresses the input by discarding or aggregating certain patches, shown visually by hatching patterns over some grid cells.

In diagram (a), SymRnR, the reduced input is then split into two paths: one labeled 'to Q' in an orange box, and another labeled 'to K&V' in a red box. These paths feed into a gray 'attention' module, which processes the reduced sequences. The output of the attention module is then passed to a 'restore' block, also in gray, which reconstructs the full sequence length, returning the image to its original grid structure.

Diagram (b), AsymRnR, differs in the timing of reduction. After the initial 'input H', the data splits into two paths: 'to Q' and 'to K&V'. Each path undergoes a separate 'reduce' operation—shown with different hatching patterns (orange for Q, red for K&V)—before entering the attention module. This allows for independent reduction rates for query and key-value features. The attention module then combines these reduced representations, followed by a 'restore' step to recover the original sequence length.

Visually, the 'reduce' blocks are colored blue, while the 'to Q' and 'to K&V' boxes are orange and red respectively, indicating their functional roles. The 'attention' and 'restore' modules are consistently gray, signifying standard processing steps. Arrows indicate the flow of data: from input to reduce, then branching to Q and K&V paths, converging at attention, and finally to restore. The figure emphasizes that AsymRnR offers greater flexibility by allowing asymmetric reduction and supports pre-reduction operations like 3D rotary position encoding, enhancing compatibility with advanced techniques.
