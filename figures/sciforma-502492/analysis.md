# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Successive optimization of optics and post-processing with differentiable coherent PSF operator and field information — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14603

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure consists of two panels, (a) and (b), illustrating different aspects of an optical system modeling approach.

Panel (a) presents a comparison between two methods for estimating initial ray positions in an optical system. The layout features a curved black dashed line labeled 'aperture', which represents the boundary of the optical aperture. Along this curve, blue dots form a series of 'mesh grids' that define discrete sampling points. A red dashed vertical line, labeled 'tangent plane', intersects the aperture curve. A yellow line labeled 'ray' originates from a point on the tangent plane, marked with a red star, representing a 'simple guess' for the initial ray position. In contrast, a blue arrow labeled 'our initial' points to a blue star located at a different position along the aperture curve, indicating the proposed improved initial estimate. The visual distinction emphasizes that the proposed method selects a more accurate starting point on the aperture surface compared to the naive approach.

Panel (b) illustrates the coherent point spread function (PSF) calculation process through a lens system. The global structure spans from left to right, with a horizontal axis labeled 'z' indicating the optical axis direction. On the far left, a vertical dashed line marks the 'object plane'. A thick red arrow labeled 'ray' enters from the object plane and propagates toward a central lens system. The lens system is depicted as two black curved surfaces forming a convex lens, labeled 'optical surfaces'. Above the lens, a red integral expression ∫ n(λ)s ds indicates the optical path length calculation along the ray. After passing through the lens, the ray continues to the right, intersecting a vertical solid line labeled 'image plane'. Near the image plane, a red dashed curve labeled 'wavefront' shows the phase front of the light, with a small blue arrow labeled 'Δr' indicating a local displacement or deviation. A blue dot labeled 'grid' marks a sampling point on the wavefront, connected to the image plane by a dashed red line, suggesting the discretization used in the PSF computation. The entire setup demonstrates how rays propagate through the optical system, accumulate phase via the optical path length, and are sampled at the image plane to compute the PSF.

Connections and arrows: In panel (a), the red arrow labeled 'simple guess' points from the tangent plane to the red star on the aperture, while the blue arrow labeled 'our initial' points to the blue star on the aperture, showing the difference in initial ray selection. In panel (b), the red ray arrow traces the path from the object plane through the lens system to the image plane, with the integral expression positioned above the lens segment to denote the phase accumulation. The blue Δr arrow and the grid point indicate the sampling and wavefront analysis at the image plane. The z-axis arrow provides directional context for the propagation.
