# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning Epidemiological Dynamics via the Finite Expression Method — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21049

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part flowchart illustrating the FEX method for discovering mathematical expressions to solve ordinary differential equations (ODEs) or partial differential equations (PDEs). Part (a), labeled 'Searching loop', outlines the iterative framework. It begins with an input ODE (yellow rectangle) feeding into a Loss module (gray rectangle). This loss is computed based on an Expression (beige rectangle), which is constructed from a Tree (green rectangle) and a Controller (orange rectangle). The Tree and Controller together form a composite module within a light gray rounded box. The Loss output is directed to a Score module (light blue rectangle), which evaluates candidate expressions. The Score feeds into a Candidate pool (light blue wavy container) holding multiple expressions (e.g., Expression 1, Expression 2, shown as purple rectangles). From the Candidate pool, expressions are passed to Weight optimization (purple rounded rectangle), which generates final solutions (Solution 1, Solution 2, etc., also purple rectangles). A feedback loop exists: the Score sends an 'Update' signal back to the Controller, allowing it to adapt and improve future expression generation. The Loss also directly connects to Weight optimization, indicating its role in guiding the optimization process.

Part (b), labeled 'Expression generation', details how the Expression is built from the Tree and Controller. On the left, the Controller X (vertical orange rectangle) outputs four distinct probability distributions, each represented by a bar chart with varying colors. Each distribution corresponds to a different node type: Identity (Id), multiplication (×), cosine (cos), and sine (sin). These are sampled to construct a Tree (large green rectangle containing a hierarchical structure). The Tree uses circles for binary operations and squares for unary operations, as indicated by the legend below. Dashed pink arrows show the sampling process: Id is selected as the root, × as the next binary operator, cos and sin as leaf nodes. The resulting Tree is then converted into a formal Expression (beige rectangle), depicted as a tree diagram with Id at the top, × below it, and cos(x) and sin(x) as children. Below this, the equivalent mathematical expression is written as α₃((α₁ cos(x) + β₁) × (α₂ sin(x) + β₂)) + β₃, showing the parametric form of the generated expression. The entire process in part (b) is enclosed in a large light gray rounded box, emphasizing its role as a sub-module within the larger searching loop.
