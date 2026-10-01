# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Surrogate-assisted multi-objective design of complex multibody systems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14854

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a methodology for multi-objective optimization using surrogate modeling. The global layout is vertical, with a sequential top-down workflow that includes a feedback loop. The process begins at the top with a rounded rectangular box labeled 'Design Space', which specifies the constraint bounds as 'lower bound ≤ x_i ≤ upper bound'. This feeds into the next step, 'Design of Experiment', also in a rounded rectangle, which employs sampling techniques such as Latin Hypercube sampling and Sobol sequence to generate initial data points within the design space. The output from this step flows into 'Train Surrogate Models', another rounded rectangle, where machine learning models like Neural networks and Radial Basis Functions are trained on the sampled data. Following this, the process moves to 'Multi-objective optimization', again in a rounded rectangle, utilizing algorithms NSGA-II and MGDA to find optimal solutions. The next stage is a diamond-shaped decision node labeled 'Validate Approximations', which evaluates whether the current approximations meet the required accuracy. If validation fails ('No'), a feedback loop is triggered: an arrow curves leftward and upward, connecting back to 'Train Surrogate Models'. Alongside this arrow, a vertical label reads 'sample additional points (kmeans) from MOP Pareto Set', indicating that new training points are selected via k-means clustering from the existing Multi-objective Optimization Problem (MOP) Pareto set to improve model accuracy. If validation passes ('Yes'), the process proceeds downward to the final rounded rectangle labeled 'Pareto Frontier', representing the set of non-dominated solutions obtained. All boxes are black-outlined with white fill, and all text is black, sans-serif, and centered within each element. Arrows are solid black lines with classic arrowheads, indicating the direction of the workflow. The figure is cleanly structured, emphasizing a systematic, iterative approach to achieving accurate Pareto frontiers through adaptive surrogate modeling.
