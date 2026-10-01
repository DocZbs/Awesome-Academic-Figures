# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Wonderland: Navigating 3D Scenes from a Single Image — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12091

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Dual-branch Camera-guided Video Diffusion Model, designed to generate video frames conditioned on both a source video clip and a conditional image, with camera embedding guidance integrated through two distinct branches: a LoRA-based branch on the left and a ControlNet-inspired branch on the right. The global layout is divided into three main vertical streams: the left branch processes camera embedding p (B,T=49,H=480,W=720,6), the central stream handles the source video clip x (B,T=49,H=480,W=720,3) and conditional image y (B,H=480,W=720,3), and the right branch also processes the same camera embedding p. These streams converge into a shared transformer backbone.

In the left branch, the camera embedding p first passes through a Conv3D layer (in_c=6, out_c=16, kernel=(4,8,8), stride=(4,8,8), pad=(2,0,0)), followed by a Zero-Init Conv3D layer (in_c=16, out_c=16, kernel=(3,3,3), stride=(1,1,1), pad=(1,1,1)). The output is then reshaped and fed into a Conv2D layer (in_c=16, out_c=3072, kernel=2, stride=2), which is flattened. This branch is color-coded in light blue and green for the Conv3D and Conv2D layers respectively.

In the center, the source video clip x is processed by a 3D-Encoder ε, producing latent z (B,t=13,h=60,w=90,c=16). Random noise is added to z, forming z_t. The conditional image y is encoded by another 3D-Encoder ε, producing a latent of shape (B,h=60,w=90,c=16), which undergoes zero padding to match dimensions with z_t. The two latents are then concatenated via a circular 'C' node. The concatenated result is passed through a Conv2D layer (in_c=32, out_c=3072, kernel=2, stride=2), which is then flattened. The 3D-Encoder blocks are depicted as trapezoids in purple, while the Conv2D block is in light green.

In the right branch, the same camera embedding p is processed by a Conv3D layer (in_c=6, out_c=3072, kernel=(4,8,8), stride=(4,8,8), pad=(2,0,0)), followed by BatchNorm3D, an Activation layer (SiLu by default), MaxPool3D (kernel=(1,2,2), stride=(1,2,2)), Flatten, Layer Normalization, another Activation, and finally a Zero Linear layer (3072,3072). This branch uses light gray, beige, and orange for BatchNorm3D, Activation, and Layer Normalization respectively.

All three branches converge: the left branch’s flattened output, the center’s flattened output, and the right branch’s output after the Zero Linear layer are combined via a circular 'C' node. The combined features pass through a Customized Linear layer (6144,3072), then enter a series of Transformer Blocks. Each Transformer Block in the main sequence is augmented with a Cam-LoRA module (gray rectangle attached to the left). The right branch’s output is also fed into a series of Copied Transformer Blocks (light gray rectangles), which are connected to the main transformer stack via Zero Linear layers and element-wise addition (indicated by '+' nodes). Dotted lines between Transformer Blocks indicate repeated structure. The final output from the last Transformer Block is passed to an Unpatchify Module, producing the final latent of shape (B,t=13,h=60,w=90,c=16). The figure omits text tokens, diffusion time embeddings, positional embeddings, and some reshaping operations for clarity. The connections are directed arrows indicating data flow, with explicit concatenation ('C') and addition ('+') nodes at merge points.
