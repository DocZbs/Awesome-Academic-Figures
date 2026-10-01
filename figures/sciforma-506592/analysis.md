# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Accuracy Can Lie: On the Impact of Surrogate Model in Configuration Tuning — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01876

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct methodologies for configuration tuning, categorized as (a) Model-free tuners, (b) Batch model-based tuners, and (c) Sequential model-based tuners, each depicted within a dashed rectangular boundary. The global layout consists of three side-by-side panels, each illustrating a different tuning paradigm through a cyclic workflow involving a 'Tuner' and a 'System', with optional inclusion of a 'Model' component.

In panel (a), the model-free tuner approach is shown as a simple feedback loop between a 'Tuner' and a 'System'. The 'Tuner' is represented by a black gear icon with a spiral pattern inside, labeled 'Tuner' beneath it. The 'System' is depicted as a stack of three blue horizontal rectangles with a smaller gear icon attached to the bottom right, labeled 'System'. A curved arrow from the 'Tuner' to the 'System' is annotated with 'measuring configurations', indicating the tuner sends configurations to the system for evaluation. A reverse curved arrow from the 'System' back to the 'Tuner' completes the loop, representing feedback from measurement results.

Panel (b) illustrates batch model-based tuning. It includes the same 'Tuner' and 'System' icons as in (a), along with an additional central component: a 'Model' represented by a red cube with a blue inner cube and four small arrows pointing outward from its sides, labeled 'Model'. The workflow begins with the 'Tuner' sending configurations to the 'System' via an arrow labeled 'evaluating configurations'. The 'System' then feeds measured data to the 'Model' through an arrow labeled 'training model with a set of measured configurations'. The 'Model' subsequently provides insights or recommendations back to the 'Tuner', completing the cycle.

Panel (c) shows sequential model-based tuning, which extends the batch approach with an iterative update mechanism. The components are identical to those in (b): 'Tuner', 'System', and 'Model'. The process starts with the 'Tuner' sending configurations to the 'System' via an arrow labeled 'evaluating configurations'. The 'System' measures these configurations and sends the results to the 'Model' through an arrow labeled 'updating model with initially measured configurations or a newly measured configuration(s)'. The 'Model' then returns updated recommendations to the 'Tuner'. Additionally, a new arc from the 'System' to itself, labeled 'measuring one (or more) new configuration(s)', indicates that the system may measure new configurations in subsequent steps, emphasizing the sequential nature of the tuning process. This creates a dynamic, iterative loop where the model is continuously refined based on new measurements.
