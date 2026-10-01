# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Macro2Micro: A Rapid and Precise Cross-modal Magnetic Resonance Imaging Synthesis using Multi-scale Structural Brain Similarity — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11277

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the overall architecture of a proposed generative model for brain imaging synthesis, specifically for converting structural MRI (T1) into diffusion tensor imaging (DTI) fractional anisotropy (FA) maps, along with downstream applications. The diagram is divided into two main sections: the top section details the core model architecture, while the bottom section illustrates its versatility in downstream tasks.

[1] Global Layout and Structure:
The figure is organized into two vertically stacked blocks, each containing a primary generative adversarial network (GAN) pipeline and a secondary application block. The top block shows the full GAN architecture, including generator, discriminators, and loss functions. The bottom block mirrors the top but includes additional downstream applications. Each block is enclosed in a rounded rectangle with a yellow border for the GAN and a purple border for the downstream tasks. The layout follows a left-to-right data flow, starting from input images, passing through encoding and generation, and ending with output and loss computation.

[2] Visual Modules and Attributes:
In the GAN pipeline, the input consists of two images: 'Content (T1)' — a structural MRI scan shown as a grayscale brain slice — and 'Ground Truth (FA)' — the target DTI FA map, also displayed as a grayscale brain slice with highlighted regions. The 'Frequency Feature Encoder' (yellow trapezoid) processes the T1 image to extract latent embeddings, which are split into high-frequency (H, blue cube) and low-frequency (L, green cube) features. These features feed into the 'Generator' (pink parallelogram), which produces the 'Output (FA)' — a synthesized FA map. The output is compared against the ground truth via multiple losses: 'Pixel Loss' (dark gray rectangle) computes pixel-wise error; 'VGG Loss' (dark gray rectangle) measures perceptual similarity using a pre-trained VGG network; and two discriminators evaluate realism. The 'Discriminator' (gray rectangle) assesses the entire output image as real or fake. The 'Brain-focused Patch Discriminator' (light orange rectangle) evaluates random patches from both real and generated images, with example patches shown in colored boxes (green, red, yellow for real; blue, cyan, orange for fake). The 'Batch-wise brain-focused region' (green box) highlights the region of interest for patch sampling.

The downstream applications are shown below the GAN. On the left, 'From T1 to DTI' uses the trained model ('Macro2Micro', green bowtie-shaped module) to convert sMRI (T1) to DTI (FA). This is used for 'Downstream Predictions' such as ADHD, Sex, and Intelligence. On the right, 'From DTI to Tractography' demonstrates further processing: axial, coronal, and sagittal slices of the generated FA maps are processed by 'Macro2Micro' to produce stacks of 3D tractography, which are then averaged to generate final 3D tractography visualizations.

[3] Connections and Arrows:
Arrows indicate data flow and loss backpropagation. From 'Content (T1)', a blue arrow leads to the 'Frequency Feature Encoder'. Dashed blue and green arrows from the encoder lead to H and L features, respectively, which enter the 'Generator'. A solid black arrow from the 'Generator' points to 'Output (FA)'. From 'Output (FA)', a dashed red arrow feeds into the 'Brain-focused Patch Discriminator', and a solid green arrow goes to the 'Discriminator'. The 'Ground Truth (FA)' connects to both discriminators via dashed red arrows. Losses are computed as follows: 'Pixel Loss' receives inputs from both Ground Truth and Output (FA); 'VGG Loss' receives inputs from Content (T1) and Output (FA); the discriminators provide feedback to the generator via dashed red arrows. In the downstream section, 'sMRI (T1)' flows through 'Macro2Micro' to 'DTI (FA)', which then branches to predictions and tractography. For tractography, axial, coronal, and sagittal slices feed into 'Macro2Micro', producing 3D tractography stacks, which are averaged to yield final 3D tractography outputs.
