# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Fifth International Verification of Neural Networks Competition (VNN-COMP 2024): Summary and Results — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19985

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a high-level architectural flow of a Boolean satisfiability (SAT) solver applied within the context of verifying deep neural networks (DNNs) against specified properties. The global layout is a directed graph composed of rounded rectangular nodes representing computational modules or stages, connected by arrows indicating data or control flow. The structure is centered around a core deduction engine labeled 'DEDUCTION', which acts as the central processing unit coordinating various decision-making and conflict-resolution steps.

At the top-left, a document-shaped node labeled 'DNN + Property' serves as the input source. This feeds into a gray rounded rectangle labeled 'Boolean Abstraction', which translates the DNN and its property into a Boolean formula suitable for SAT solving. From this abstraction step, control flows to a central module labeled 'BCP' (Boolean Constraint Propagation), depicted as a gray rounded rectangle. BCP is a key component responsible for propagating implications based on current variable assignments.

From BCP, two primary paths diverge: one leads to 'Decide', another to 'Analyze-Conflict'. The 'Decide' module, also a gray rounded rectangle, selects an unassigned variable and assigns it a value, driving the search forward. After deciding, control returns to BCP for further propagation. If propagation leads to a contradiction, the flow proceeds to 'Analyze-Conflict', another gray rounded rectangle, which identifies the cause of the conflict through clause learning. From here, the process either terminates at 'UNSAT' (unsatisfiable) — represented as a white document-shaped node — or triggers 'Backtrack', a gray rounded rectangle that undoes assignments up to a decision level where the conflict can be resolved. Backtrack then loops back to BCP to resume propagation.

The central 'DEDUCTION' module, rendered in a darker gray rounded rectangle and positioned at the bottom center, acts as a hub connecting all major components. It receives inputs from both 'Decide' and 'Analyze-Conflict', and sends outputs to BCP, forming a feedback loop essential for maintaining consistency and guiding the search. Additionally, 'DEDUCTION' directly connects to the final outcomes: 'SAT' (satisfiable), shown as a white document-shaped node on the lower left, and 'UNSAT' on the lower right. These terminal states indicate successful verification (SAT) or failure (UNSAT) of the property under consideration.

All connections are represented by solid black arrows with triangular arrowheads, indicating directional flow. The visual hierarchy emphasizes the iterative nature of the SAT-solving process: decision → propagation → conflict analysis → backtracking → repeat, with deduction serving as the overarching reasoning framework. The consistent use of gray rounded rectangles for internal modules and white document shapes for inputs and outputs enhances clarity and distinguishes between operational stages and endpoints.
