# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CharacterBench: Benchmarking Character Customization of Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11912

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the CHARACTERBENCH Framework, a structured evaluation system for assessing AI-generated character responses across multiple dimensions. The global layout is vertically segmented into three main sections: the top section defines evaluation dimensions, the middle section illustrates an example of boundary consistency using a historical character, and the bottom section demonstrates target-oriented query construction and target-based evaluation.

In the top section, evaluation dimensions are categorized into two groups: 'Dense Dimensions in 2 Aspects' and 'Sparse Dimensions in 4 Aspects'. Dense dimensions—Believability, Human-likeness, Engagement—are represented in light blue boxes with a human head icon; Morality, Morality Robustness, and Morality Stability are shown in beige boxes with a justice scale icon. Sparse dimensions include Memory (light teal, with a brain icon), Memory Consistency (darker teal), Persona (light pink, with a person icon), Attribute Consistency and Behavior Consistency (darker pink), Knowledge (lavender, with a globe icon), Boundary Consistency and Fact Accuracy (purple), and Emotion (light green, with emoticon icons), Emotion Self-regulation and Empathetic Responsiveness (darker green). These dimensions are arranged horizontally within dashed rectangular groupings, with a downward arrow from the sparse dimensions leading to the example below.

The middle section, titled 'Example of Boundary Consistency', features a 'Character Profile' for Oliver Cromwell, including a portrait and bilingual text describing him as a 17th-century English political and military leader whose life and thoughts are limited to that historical context. Below this, a 'Dialogue Context' displays a multi-turn conversation between a user (represented by a generic person icon) and Cromwell (portrait icon), with alternating speech bubbles containing Chinese and English text. The dialogue explores themes of leadership, sacrifice, and personal qualities.

The bottom section illustrates the evaluation process. 'Target-oriented Query Construction' shows a green target icon labeled 'Target' pointing to a highlighted phrase from the character profile ('Cromwell's life and thoughts are limited to the historical background of England in the 17th century'), which is used to construct a query: 'Well, speaking of solving problems, are you familiar with computers in the real world?'. This query is linked via a dashed green arrow to the dialogue. Finally, 'Target-based Evaluation' presents Cromwell’s response about computers, which is evaluated as 'Worst' via a red dashed arrow pointing to a red circle with a white 'X' and the label 'Target-based Evaluation'. The entire flow emphasizes how the framework uses targeted queries derived from character constraints to evaluate response consistency, particularly boundary consistency, ensuring characters remain within their defined historical or contextual limits.
