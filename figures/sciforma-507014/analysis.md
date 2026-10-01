# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enhanced Importance Sampling through Latent Space Exploration in Normalizing Flows — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03394

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-step normalizing flow process that transforms a simple base distribution into a complex target distribution through invertible transformations. The global layout is organized in two horizontal rows: the top row shows the transformation of point samples through successive mappings, while the bottom row displays the corresponding evolution of probability density functions, including the effect of the Jacobian determinant. Each stage is enclosed in a dashed circular boundary, indicating a space or domain.

In the top row, the first circle contains a dense cloud of black dots representing samples from a base distribution u ~ p_u(u), which appears uniform or isotropic within the circle. An arrow labeled T_1(u) points to the second circle, where the same number of points are now clustered more densely in certain regions, indicating the result of applying the first transformation, yielding z_1 ~ p_1(z_1). Another arrow labeled T_2(z_1) leads to the third circle, showing further reshaping of the point cloud into a more complex, elongated structure, corresponding to z_2 ~ p_2(z_2).

The bottom row mirrors this process but visualizes the probability densities. The rightmost circle shows contour lines forming a bimodal distribution for p_2(z_2), with two distinct peaks. An arrow labeled |det J_{T_2}(z_2)| points left to the middle circle, which displays a bimodal density p_1(z_1) with smoother, more symmetric contours. Another arrow labeled |det J_{T_1}(z_1)| points to the leftmost circle, which shows concentric circular contours representing the base density p_u(u), indicating a radially symmetric distribution like a Gaussian.

The arrows between the circles represent the forward transformations (top row) and the associated Jacobian determinants (bottom row), which are essential for computing the change in probability density under the transformation. The figure thus demonstrates how normalizing flows progressively map a simple base distribution to a complex target distribution by composing invertible functions, with the density being adjusted via the absolute value of the Jacobian determinant at each step. The visual contrast between the point clouds and the contour plots emphasizes both the geometric transformation of data points and the corresponding changes in probability density.
