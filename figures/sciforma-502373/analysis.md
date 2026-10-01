# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LiftRefine: Progressively Refined View Synthesis from 3D Lifting with Volume-Triplane Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14464

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a tri-plane decoder used in 3D representation learning. The global layout is left-to-right, showing a sequential flow from an input feature volume to the final output: a feature tri-plane. On the far left, a legend defines two key components: a red arrow symbolizes a processing block composed of a ResNet block, followed by upsampling and self-attention; a blue curly bracket denotes a final operation consisting of convolution and reshape. The central part of the diagram shows a 3D feature volume, represented as a cube with internal color gradients indicating feature activations, positioned at the center. From this cube, three sets of orthogonal feature planes are extracted — one along each axis (front-back, left-right, top-bottom), visualized as slabs extending outward. These three feature planes are then processed independently through multiple upsampler blocks, indicated by red arrows pointing from each plane to a stack of three output images, which represent progressively refined feature maps. Each output image displays a heat-map-like visualization of the features, with bright regions corresponding to high activation. After upsampling, the three processed feature planes are combined and passed through a final step, marked by a large blue curly bracket on the right side of the diagram, which represents a convolutional layer followed by a reshape operation. The result is a structured 3D representation called the 'Feature tri-plane', shown on the far right as three intersecting planes forming a 3D coordinate system, each displaying a color-coded feature map. The entire process is designed to transform a compact 3D feature volume into a set of depth-aware, high-resolution feature planes suitable for rendering or further 3D modeling tasks.
