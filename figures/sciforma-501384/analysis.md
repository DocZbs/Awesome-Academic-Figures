# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unsupervised UAV 3D Trajectories Estimation with Sparse Point Clouds — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12716

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive system overview for UAV trajectory estimation from LiDAR point cloud sequences. The global layout is left-to-right, depicting a pipeline starting from raw sensor input on the far left and progressing through clustering, filtering, scoring, and finally trajectory estimation on the right. The diagram is structured into distinct functional modules connected by solid and dashed arrows indicating data flow and evaluation paths.

On the left, a purple rounded rectangle labeled 'LiDAR' feeds into another purple box labeled 'Temporal Concat.', representing temporal concatenation of point cloud frames. This produces a 'Point Cloud Temporal Sequence P_i', visualized as a stack of gray rectangular blocks. Below this, a colorful 3D point cloud image illustrates the raw input data.

From the temporal sequence, two parallel clustering pathways emerge. The upper path leads to 'Global Cluster C_k^global', depicted as a stack of translucent purple cubes labeled 'Cluster i', 'Cluster j', 'Cluster k'. This is generated via a DBSCAN module shown as an orange rounded rectangle. The lower path leads to 'Local Cluster C_local^k', represented as multiple stacks of smaller translucent cubes, each labeled with frame numbers (frame 1, frame 2, ..., frame n), indicating per-frame clustering. Both clustering outputs are derived from the same input sequence via a 'Global-Local Cluster' process.

From the global clusters, two metrics are computed: 'V_k^global / Num_k^global' and 'V_k,i^local', which feed into a 'Voxel' module (blue cube with internal grid) and a 'Density' module (stack of blue cubes). These modules compute spatial features such as voxel volume and density, denoted by 'ρ_k^global', 'ρ_k^local', and 'R_k^frame'.

The local clusters also contribute to a 'RMSE Evaluation' block (red rectangle), indicating performance assessment of the clustering over time.

The voxel and density features are combined with the sampled UAV point cloud (shown as scattered colored dots labeled 'Recent Point clouds' and 'Old Point Cloud') to perform 'Scoring' (light orange rectangle). This scoring step filters out non-UAV points, producing an 'Extracted point cloud' that feeds into the final 'Trajectory Estimation' module (light blue rounded rectangle).

The trajectory estimation module outputs both a 'Predicted Trajectory' (green dashed line) and compares it against a 'Ground Truth' (red dashed line), with the RMSE evaluation block also receiving feedback from this comparison, closing the loop for performance validation.

All connections are indicated with arrows: solid arrows denote primary data flow, while dashed arrows represent auxiliary or feedback paths, such as from clustering results to feature computation and from trajectory estimation back to evaluation.
