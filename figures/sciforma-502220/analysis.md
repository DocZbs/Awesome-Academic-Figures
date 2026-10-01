# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

jinns: a JAX Library for Physics-Informed Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14132

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the typical user workflow for the jinns framework, structured as a central computational engine surrounded by five interconnected modules: loss, parameters, data, utils, and validation. The global layout is centered around a hexagonal node labeled 'jinns.solve(...)', which represents the core optimization routine responsible for minimizing the global loss function L(ν, θ) via JIT-compilation. This central node receives inputs from three primary sources: loss, parameters, and data, indicated by solid black arrows pointing toward it. Additionally, a dashed arrow from the validation module points to the central solver, suggesting optional or feedback-based interaction.

The 'loss' module, depicted as a rounded rectangle with a pinkish background, contains a list of loss components including dynamic loss (N₀[uₙ] ≈ 0), boundary and initial condition (BC + IC) losses, and normalization terms. These contribute to the 'Global Loss' L(ν, θ), shown as a smaller nested box within the loss module, which feeds into the solver.

The 'parameters' module, represented as a large purple oval with a dashed outline, houses two rectangular submodules: 'ν nn_params' and 'θ eq_params', indicating neural network parameters and equation-specific parameters respectively. These are passed directly to the solver.

The 'data' module, a green rounded rectangle, includes three subcomponents: 'collocation', 'Observations', and 'Parameters', representing different types of input data used during training. These also feed into the solver.

The 'utils' module, a gray rounded rectangle on the lower left, lists auxiliary functionalities such as network types (PINNs, Separable PINNs, HyperPINNs), saving/loading mechanisms, and plotting tools. A solid arrow connects this module to the solver, indicating that these utilities support or configure the solving process.

Finally, the 'validation' module, a light blue rounded rectangle on the lower right, includes 'Custom validation score' and 'Validation set'. It connects to the solver via a dashed arrow, implying that validation is an optional or post-processing step, possibly used for monitoring or evaluating model performance during or after training.

All modules are visually distinct through color coding and shape: rounded rectangles for functional blocks, a hexagon for the solver, and ovals for parameter containers. Text labels are clear and concise, with mathematical notation (e.g., L(ν, θ)) and LaTeX-style formatting used where appropriate. The diagram emphasizes a modular, flexible design where users can customize loss functions, parameters, data sources, and validation strategies while leveraging the core jinns.solve() routine for optimization.
