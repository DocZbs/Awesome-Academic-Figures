# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LiftRefine: Progressively Refined View Synthesis from 3D Lifting with Volume-Triplane Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14464

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage 3D reconstruction pipeline, focusing on Stage 1, which reconstructs 3D representations from either single-view or few-view input images. The global layout is left-to-right, depicting a sequential flow from input images through multiple decoding stages to rendered outputs and loss computation. On the far left, two input pathways are shown: one labeled 'Single view' with input \(\mathcal{I}_{input}(1)\) and another labeled 'Few views' with inputs \(\mathcal{I}_{input}(2)\) up to \(\mathcal{I}_{input}(n)\). Each input image is associated with a 3D bounding box containing a sequence of small orange cubes representing extracted features or keypoints. These feature sequences from all views are fed into a shared 'Volume Decoder', indicated by a light blue trapezoidal module. A dashed arrow labeled 'Cross Attn' connects the input feature sequences to the Volume Decoder, suggesting cross-attention mechanism for aggregating multi-view information. The output of the Volume Decoder is a 3D volume represented as a cube with internal color gradients (red, yellow, green), annotated with dimensions \(C \times D_c \times H_c \times W_c\). This volume is passed to the next module, the 'Triplane Decoder', also depicted as a light blue trapezoid. The Triplane Decoder transforms the 3D volume into a set of three orthogonal planes—front, side, and top views—forming a triplane representation. This is visually shown as three intersecting planes with color gradients, annotated with dimensions \(C \times 3 \times H_f \times W_f\). Below the Triplane Decoder, a dashed rectangular box contains an expanded view of the triplane structure, showing the three planes with their respective color-encoded features and intermediate convolutional layers (represented as stacked rectangles). From the triplane representation, a solid arrow labeled 'Render' leads to two outputs: a rendered image \(\mathcal{F}_{pred}\) showing a colored human figure against a dark background, and a grayscale silhouette image \(\mathcal{I}_{pred}\). The silhouette \(\mathcal{I}_{pred}\) is compared with a target silhouette \(\mathcal{I}_{target}\) via a bidirectional arrow labeled \(\mathcal{L}_{recons}\), indicating the reconstruction loss used for training. The entire pipeline emphasizes lifting 2D inputs to 3D representations using volume and triplane decoders, enabling novel view synthesis and reconstruction supervision.
