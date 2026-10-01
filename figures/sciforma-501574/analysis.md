# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Gaussian Splatting for Efficient Satellite Image Photogrammetry — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13047

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic diagram illustrating the transformation pipeline from 3D world space to 2D normalized device coordinates (NDC) space, along with an affine approximation used for computational efficiency. The layout is horizontally structured into two main colored regions: a light blue box on the left representing 2D camera-dependent coordinates, and a light red box on the right representing 3D world coordinates (camera-independent). Within the blue region, two rectangular nodes labeled '2D NDC Space' and 'RowColumn' are arranged side by side, connected by a leftward arrow indicating the direction of transformation. In the red region, three rectangular nodes labeled 'LongLatAlt', 'UTM', and 'World Space' are aligned from left to right, connected sequentially by rightward arrows. The 'LongLatAlt' node is linked to 'UTM' via an arrow labeled 'ζ(⃗x)', and 'UTM' is linked to 'World Space' via an arrow labeled 'c⃗x + ⃗b'. A bidirectional arrow labeled 'RPC' connects the 'RowColumn' node in the blue region to the 'LongLatAlt' node in the red region, indicating a reversible transformation. Below the main diagram, a curved arrow spans from the 'World Space' node to the '2D NDC Space' node, annotated with '≈ A : ℝ³ → ℝ² affine transformation', signifying the approximate mapping from 3D world coordinates to 2D NDC space using an affine transformation. All nodes are outlined with thin gray borders and contain black text. The arrows are solid black lines with standard arrowheads, clearly indicating the direction of data flow or transformation. The figure caption explains that this affine approximation is computationally efficient, compatible with Gaussian splatting, and suitable for satellite imagery. The color-coding distinguishes between camera-dependent (blue) and camera-independent (red) coordinate systems, emphasizing the transition from global 3D world coordinates to local 2D image coordinates.
