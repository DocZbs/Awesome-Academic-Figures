# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating LLM Reasoning in the Operations Research Domain with ORQA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17874

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a structured flowchart illustrating the components of an optimization problem for efficient parking space allocation in a property management context. The global layout is horizontal, progressing from left to right, beginning with a 'Problem Description' box on the far left, followed by a sequence of elements, data parameters, decision activities, calculations, and specifications, culminating in the objective criterion. A large black arrow connects the problem description to the main workflow, indicating the transition from problem context to solution structure.

On the left side, two 'Element' boxes are shown: 'Apartment groups' with associated set notation APT, and 'Parking spots' with set notation SPOT. These elements serve as foundational inputs. From each element, arrows extend to three 'Data Parameter' boxes: 'Parking need, number of vehicles' (DEM_j for all j ∈ APT), 'Distance between each pair of parking spot and apartment groups' (DIST_ij for all i ∈ SPOT and j ∈ APT), and 'Parking capacity, number of vehicles' (CAP_i for all i ∈ SPOT). These parameters are represented as rectangular boxes with black headers and light gray bodies, containing descriptive text and corresponding mathematical notations in dashed-line boxes below.

A central 'Decision Activity' box labeled '# of vehicles of each apartment group assigned to each parking spot' is connected to all three data parameters. This box contains the decision variable ASSIGN_ij ≥ 0 for all i ∈ SPOT and j ∈ APT, indicating non-negative integer assignments. From this decision activity, three arrows lead to 'Calculation' boxes: 'Total distance traveled by all individuals', '# of vehicles assigned to a parking spot', and '# of vehicles assigned to all parking spots from an apartment group'. Each calculation box includes a mathematical expression in a dashed-line box beneath it, such as ∑∑ DIST_ij × ASSIGN_ij for total distance, ∑ ASSIGN_ij for spot capacity, and ∑ ASSIGN_ij for apartment demand.

These calculations feed into three 'Specification' boxes: 'Capacity constraints of the parking spots is met' (∑ ASSIGN_ij ≤ CAP_i ∀i ∈ SPOT), 'Demand for parking spaces for each apartment group is met' (∑ ASSIGN_ij = DEM_j ∀j ∈ APT), and the final 'Objective Criterion' box: 'Minimize the total distance traveled, for the parking spot assignments', with the objective function min obj = ∑∑ DIST_ij × ASSIGN_ij. All specification and objective boxes have black headers and light gray bodies, with mathematical expressions in dashed-line boxes below. The connections are directed arrows, clearly showing the data flow from elements to parameters, to decision variables, to calculations, and finally to constraints and the objective. The entire diagram uses consistent visual styling: black headers, light gray content areas, dashed-line boxes for mathematical expressions, and solid black arrows for directional flow. The figure caption at the bottom states: 'An example of optimization problem components, their relationships, and corresponding mathematical formulations.'
