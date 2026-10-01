# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CCNDF: Curvature Constrained Neural Distance Fields from 3D LiDAR Sequences — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15909

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure consists of two side-by-side diagrams labeled (a) and (b), both set against a dark gray background, illustrating the concentric nature of the Normal Direction Field (NDF) and how the Radius of Curvature (ROC) increases as one moves away from a surface. 

In diagram (a), a geometric configuration is shown with several labeled points: A, x_l, e_i, F, and c_l. Point A lies on the left edge, connected by a cyan line segment to x_l, which is further connected via another cyan segment to e_i. From e_i, a cyan line extends to point F, and from F, a cyan line connects to c_l. These points form a polygonal path. At point F, a cyan vector labeled n_l = -∇_x D(x_l) points outward, indicating the normal direction at that location. Surrounding this structure is a dashed red quadrilateral labeled 'NDF ROC R_l' at the top and 'ROC r_l' along the right side, suggesting a region or boundary associated with the NDF and its ROC. A small dashed arrow labeled 'd_l' points from near x_l toward the interior, possibly indicating a direction or displacement. The overall layout suggests a local neighborhood around a surface point where the NDF and ROC are defined.

Diagram (b) presents a more quantitative illustration within a coordinate system implied by the equation x² + y² = 4 written at the top, representing a circle of radius 2 centered at the origin. Points x_l, e_i, F, and c_l are again present, forming a similar polygonal path as in (a), but now with explicit numerical annotations. The dashed red quadrilateral is labeled 'NDF ROC = 2' at the top, indicating the ROC value at the outer boundary. Inside this region, a horizontal cyan line connects x_l to c_l, passing through F and e_i. The vertical distance between x_l and e_i is labeled 'DCN = 1.75', likely denoting the Distance to Closest Neighbor or a similar metric. The horizontal distance between x_l and e_i is labeled 'TSD = 1', possibly meaning Tangential Step Distance. Additionally, a diagonal dashed red line labeled 'Ray Dist. = 1.4' extends from x_l toward the bottom-right, intersecting the boundary. The right edge of the diagram includes a vertical dashed red line labeled 'ROC', aligning with the right side of the quadrilateral. This diagram emphasizes the increasing ROC values as one moves radially outward from the surface, consistent with the concentric nature of the NDF.

Both diagrams use cyan lines for connections and vectors, red dashed lines for boundaries and auxiliary rays, and white text for labels. The visual modules include geometric points, directed segments, labeled vectors, and annotated distances, all arranged to convey the spatial relationship between surface points, normals, and ROC values. Arrows indicate directions of vectors and distances, while dashed lines denote boundaries or auxiliary measurements. The overall workflow depicted is the progression from a surface point (x_l) through intermediate points (e_i, F) to an outer boundary (c_l), with ROC values increasing along this path, demonstrating the concentric property of the NDF.
