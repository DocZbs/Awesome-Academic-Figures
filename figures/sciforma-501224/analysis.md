# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3DGUT: Enabling Distorted Cameras and Secondary Rays in Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12507

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative visualization of three methods for projecting a 3D Gaussian particle (represented by a green elliptical distribution with mean μ and covariance Σ) onto a 2D image plane using a nonlinear transformation v = g(x). The layout is horizontal, divided into three distinct panels labeled 'Monte Carlo Sampling', 'Linearization (EWA)', and 'Unscented Transform (UT)', each illustrating a different approach to estimating the resulting 2D distribution.

In the left panel, 'Monte Carlo Sampling', the original 3D Gaussian is shown above a grid representing the 2D image plane. A gray arrow labeled 'v = g(x)' indicates the nonlinear projection. The result is depicted as a yellow shaded region within a dashed black ellipse on the grid, representing the true projected distribution. Labels point to this region: 'true mean νμ' and 'true covariance Σ′', indicating this method yields the most accurate estimate at the cost of computational expense.

The middle panel, 'Linearization (EWA)', shows the same 3D Gaussian above a grid. The projection is again indicated by a gray arrow. The result is a red dashed ellipse centered at a red dot labeled 'νμ^EWA = g(μ)', representing the mean obtained by applying the function g to the original mean μ. The covariance is approximated by the formula 'Σ′_EWA = J W Σ W^T J^T', written below the grid, where J is the Jacobian matrix of g evaluated at μ. This method introduces approximation errors, especially under high distortion, due to linearization.

The right panel, 'Unscented Transform (UT)', displays the 3D Gaussian above a grid with multiple blue dots inside it, representing sigma points chosen to capture the distribution's statistics. These points are projected via 'v = g(x)' (gray arrow) onto the 2D plane, forming a set of blue dots. From these, the mean 'νμ^UT' and covariance 'Σ′_UT' are estimated, shown as a blue dashed ellipse centered at a blue dot. This method avoids linearization by directly transforming sample points and reconstructing the distribution, offering better accuracy than EWA without the full cost of Monte Carlo.

Each panel uses consistent visual elements: green ellipses for the 3D Gaussian, grids for the 2D plane, and arrows for the transformation. Colors differentiate results: yellow for true values, red for EWA estimates, and blue for UT estimates. The figure effectively contrasts the trade-offs between accuracy and computational cost among the three methods.
