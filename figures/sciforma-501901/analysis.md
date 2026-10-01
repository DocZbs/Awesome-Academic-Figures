# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAGS: Granularity-Aware Feature Distillation for Language Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-phase framework for semantic feature distillation in a Gaussian-based scene representation, divided into 'Inference' (top section) and 'Training' (bottom section), enclosed within dashed rectangular boundaries. The global layout is horizontal and modular, with data flow progressing from left to right, and feedback connections linking inference outputs to training components.

In the Inference phase, an RGB Gaussian input is processed through a 3D cube-shaped module labeled 'RGB + feature Gaussian', which incorporates parameters x, q, s, c, α (enclosed in a dotted oval) and a feature vector f (enclosed in a dotted circle with a flame icon). This module feeds into a gray box labeled 'R', followed by a vertical bar representing the renderer function f_renderer. The output passes through a 'Feature Decoder' depicted as stacked dark blue bars, producing a high-dimensional feature vector f_clip. This is then rendered into a colorized image labeled 'Rendered Feature', showing a stylized outdoor scene with a table and trees.

In the Training phase, an RGB Image and a Multi-level Mask are fed into a CLIP model, symbolized by a paperclip icon with a snowflake, generating a set of multi-scale feature maps labeled 'Multi-level Feature'. These are shown as three stacked images with different color palettes, representing varying levels of abstraction. The rendered feature from the Inference phase is also fed into this phase, where it is passed through a Softmax layer (indicated by η) to produce a weight distribution. This distribution is used in a 'Granularity Select' module, which selects one of three feature branches: f_s (red), f_p (green), or f_w (blue), each corresponding to a different scale of the multi-level feature maps. The selected feature is then compared with the full-dimensional output of the Feature Decoder via a loss term labeled ℓ_distill, forming a distillation loop.

Connections are represented by solid arrows indicating data flow. A key connection runs from the Rendered Feature in Inference down to the Granularity Select module in Training, where it is used to compute the distillation loss. The Softmax output (η) controls the selection weights (α) for choosing among the three feature scales. The figure uses distinct colors for different feature branches (red, green, blue) and includes visual icons (snowflake for CLIP, flame for feature f) to denote specific components. The overall design emphasizes a feedback mechanism where rendered features guide the selection of appropriate semantic granularity during training, enabling efficient distillation of semantic information into the Gaussian scene representation.
