# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BOIDS: High-dimensional Bayesian Optimization via Incumbent-guided Direction Lines and Subspace Embeddings — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12918

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the four-stage workflow of the proposed PSBO algorithm, presented sequentially from left to right. The overall layout consists of four rectangular panels, each labeled with a step number and title: (1) Incumbent-guided Lines, (2) Optimal Line Selection, (3) Line-based Optimization, and (4) Subspace Embedding. These panels are connected by solid blue arrows indicating the forward progression of the algorithm, with a dashed blue arrow linking panel (3) to (4), suggesting an optional or subsequent enhancement step.

In panel (1), a 2D scatter plot shows data points: red stars represent global incumbents, purple stars represent personal incumbents, and blue circles denote points along lines. Three blue lines are drawn through these points, forming a triangular region. A legend in the lower-right corner identifies the blue lines as 'L(ˆx, v)', the purple stars as 'personal', and the red stars as 'global'. This stage constructs lines guided by the incumbent solutions.

Panel (2) continues the 2D plot, now showing three dotted lines: one orange, one light blue, and one purple, each representing a candidate line. The legend indicates the orange line as 'optimal L', while the purple and red stars remain labeled as 'personal' and 'global', respectively. This stage selects the optimal line using a Thompson Sampling Multi-Armed Bandit (MAB) strategy, with the orange line being chosen as the best.

Panel (3) displays a simplified 2D plot with only the selected orange dashed line, which now serves as the search direction. A new red dot labeled 'x_next' appears near the line, indicating the next point to be evaluated. The legend includes 'x_next' (red dot), 'personal' (purple star), and 'global' (red star), showing the updated state after optimization along the selected line.

Panel (4) shifts to a conceptual diagram. It features two dark blue rectangles: the top one labeled 'Subspace A' and the bottom one unlabeled but larger. A blue arrow labeled 'Increase dimension' points from the top rectangle to the bottom, illustrating the subspace embedding process that expands the dimensionality of the search space to improve algorithmic performance. This final stage enhances the optimization by operating in a higher-dimensional embedded subspace.
