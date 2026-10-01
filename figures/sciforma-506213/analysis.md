# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Make Shuffling Great Again: A Side-Channel Resistant Fisher-Yates Algorithm for Protecting Neural Networks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00798

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a modified, protected version of the Fisher-Yates shuffle algorithm. The global layout is a vertical sequence of steps, starting at the top and flowing downward, with a loop structure that returns to an earlier step under certain conditions. The flowchart begins with a rounded rectangle labeled 'Start: Input array of N elements' in light pink, indicating the initialization phase. This is followed by a series of rectangular process boxes in light purple, each representing a computational step. The first such box sets the variable i = N - 1. Next, the algorithm picks a random nonnegative integer r, also shown in a light purple rectangle. A red-bordered box labeled 'Add protection' points to the next step, which is a light red rectangle containing the equation j = r mod (i + 1), indicating a modular arithmetic operation designed to add security or randomness protection. Following this, a light purple rectangle instructs to 'Swap elements with indices i and j', representing the core shuffling operation. Then, i is incremented by 1 in another light purple box. The flow then reaches a diamond-shaped decision node in light green, labeled 'i > 0?', which determines whether the loop continues. If the condition is 'Yes', a black arrow loops back to the 'Pick random nonnegative integer r' step. If 'No', the flow proceeds downward to the final rounded rectangle in light pink, labeled 'End: array is shuffled', marking the completion of the algorithm. All connections between nodes are represented by solid black arrows, clearly indicating the direction of execution. The visual design uses color-coding to differentiate types of steps: light pink for start/end, light purple for standard operations, light red for the protected computation, and light green for decision points. The red 'Add protection' annotation emphasizes the security enhancement introduced in the j calculation step.
