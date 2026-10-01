# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Drive-1-to-3: Enriching Diffusion Priors for Novel View Synthesis of Real Vehicles — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14494

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the end-to-end pipeline of Drive-1-to-3, a method for synthesizing 360° novel views of vehicles from a single on-board camera image. The global layout is left-to-right, depicting a sequential workflow: input scene → pose transformation → symmetry-based view generation → diffusion modeling → output synthesis. The process begins with an 'Original Scene' containing multiple vehicles, where one vehicle (highlighted in red) is selected for processing. A green arrow points from this scene to a central dashed box labeled 'Original Pose', which contains a top-down schematic showing the vehicle's initial orientation relative to the camera. This is followed by a 'Virtual Rotation' step, transforming the original pose into an 'Orbital Pose'—a standardized viewpoint aligned with a virtual orbit around the vehicle, maintaining a constant focal length. The resulting 'Source View' is a cropped, object-centric image of the vehicle, shown in a red-bordered box. From this source view, a 'Symmetry Pair' is generated via a 'Flip' operation, producing a mirrored view with inverted azimuth angle (α, -θ, z), which is also shown in a red-bordered box. These two views (source and symmetry pair) are then fed into a 'Pose-conditioned Diffusion Model', represented as a green trapezoidal block with pink internal layers, indicating a multi-stage neural network. The model receives 'Target Views' as input, each defined by a ray embedding (indicated by purple triangles and grid patterns) corresponding to different viewing angles (R,T). Below the diffusion model, 'Occlusion-aware Training' is depicted using four black-and-white silhouettes, suggesting latent space training that accounts for occlusions. The output of the diffusion model is a set of synthesized images, labeled 'GT Target Views', displayed in a vertical stack of four rendered vehicle views from different angles. These are compared to real-world reference images (shown in a separate column) to validate the synthesis. Finally, the rightmost section, separated by a dashed blue line, presents the final result: '360° Novel Views Synthesis', showing four distinct, photorealistic renderings of the vehicle from various perspectives, demonstrating the model’s ability to generate a full 360-degree view sequence. The entire pipeline emphasizes symmetry, consistent pose representation, and occlusion handling to enable robust view synthesis from a single input.
