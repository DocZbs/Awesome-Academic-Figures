# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

WHAT-IF: Exploring Branching Narratives by Meta-Prompting Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10582

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for generating interactive fiction games by creating alternate storylines from an original plot. The global layout is structured as a flowchart with a primary vertical sequence on the left and a detailed, iterative process enclosed in a dashed purple box on the right labeled 'Create Branch'. The entire process begins with the 'Original Plot P', represented as a blue note-shaped box with the mathematical notation P = [p₁, p₂, ..., pₙ], indicating a sequence of plot points. This original plot feeds into step ①, 'Plot-to-tree', a teal rounded rectangle, which converts the linear plot into a tree structure. From this point, two paths diverge: one continues vertically down to step ⑦, 'Narrate and generate game', while the other enters the 'Create Branch' module.

Within the 'Create Branch' module, the process is iterative and marked at the top with the label 'For each storyline'. Step ②, 'Extract key events', takes the original storyline as input and outputs 'Key events', which are passed to step ③, 'Generate meta-prompts'. These meta-prompts are then used in step ④, 'Generate new events p_t through p_n', to create alternative narrative events starting from a specific time point t. The output of this step is a modified plot sequence P' = [p₁, p_{t−1}, p'_t, p'_{t+1}, ..., p'_n], where the prime notation indicates altered or newly generated events. This new plot is then processed by step ⑤, another 'Plot-to-tree' block, which converts it into a tree structure. The resulting tree is merged with the original tree in step ⑥, labeled 'Merged tree', producing a new branch within the overall narrative tree.

The merged tree is then used to generate multiple 'Alternate Storylines', depicted as a stack of blue note-shaped boxes. These alternate storylines feed into step ⑦, 'Narrate and generate game', a teal rounded rectangle, which ultimately produces an 'Interactive Fiction Game', symbolized by a game controller icon below the box. The connections between steps are indicated by arrows: solid blue arrows represent the main data flow, while solid purple arrows indicate the iterative loop for each storyline within the 'Create Branch' module. A gold arrow connects the original plot directly to the final narration step, suggesting a base narrative path. The figure uses consistent visual attributes: teal rounded rectangles for processing steps, blue note shapes for data inputs/outputs, and numbered circles to denote sequential steps. The overall structure emphasizes a modular, iterative approach to narrative expansion, enabling dynamic and branching storytelling in interactive games.
