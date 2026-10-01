# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generalizable Articulated Object Perception with Superpoints — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16656

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of GAPS, a method for segmenting articulated objects into semantic parts using a combination of 3D point cloud processing and 2D image segmentation, followed by a transformer-based decoding step. The global layout is divided into two main parallel pathways: a top pathway handling 3D data and a bottom pathway processing 2D data, which converge into a central transformer decoder for final part segmentation.

In the top pathway, an input articulated object (shown as a wooden cabinet with an open drawer and door) is first represented as a 3D point cloud p_i. This point cloud is then processed to generate a 3D original superpoint s_j, depicted as a colorful segmented 3D model where each color represents a different superpoint. A 'Learn and Update' step refines this into a 3D learned superpoint s'_j, shown as a more accurately segmented version with improved boundaries. These superpoints are organized into a grid-like structure labeled 'Transformer query', where each cell corresponds to a superpoint (s_0' to s_6') and is marked with yellow if active or selected. The grid has columns labeled p_0 to p_4, indicating query positions.

In the bottom pathway, the same articulated object is processed by a 2D Segment Anything Model. This model infers part centers p_k (e.g., p_0 to p_4) on a 2D image of the object, shown as small circles on the cabinet’s parts. These inferred 2D part centers are then mapped to 3D positions using a coordinate system (x, y, z), resulting in 3D query points p_k(x, y, z). These 3D query points are fed into the transformer query grid as additional inputs.

The two pathways converge at the transformer decoder, represented as a purple trapezoid labeled 'Transformer Decoder'. The decoder takes the combined information from the 3D superpoints and 2D-inferred 3D query points to perform part segmentation. The output is a segmented 3D model of the object, with distinct colors assigned to different parts (e.g., green for the door, red for the drawer, pink for the top surface).

To the right of the transformer decoder, a green dashed box lists the final part assignments: Part_0 = {s_1}, Part_1 = {s_3, s_5}, Part_2 = {s_2}, Part_3 = {s_4}, Part_4 = {s_0, s_6}, showing how the superpoints are grouped into semantic parts. Arrows indicate the flow: from the 3D point cloud to superpoint learning, from 2D segmentation to 3D query point mapping, and finally from both sources to the transformer decoder for part segmentation. The entire process is encapsulated within two dashed boxes—one blue for the 3D processing and one orange for the 2D processing—highlighting the dual-input nature of the method.
