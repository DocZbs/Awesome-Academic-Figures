# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Novel Approach to Balance Convenience and Nutrition in Meals With Long-Term Group Recommendations and Reasoning on Multimodal Recipes and its Implementation in BEACON — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17910

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural workflow of the BEACON prototype, a meal recommendation system that integrates multiple input sources and methodologies to generate personalized meal plans under specified constraints. The global layout is left-to-right, beginning with data sources on the far left, progressing through user inputs and recommendation methods in the center, and concluding with output evaluation on the right. The structure is modular, with distinct blocks representing data, user interaction, recommendation logic, constraint handling, and evaluation.

On the left side, two primary pathways feed into the system: 'Manual-Based' and 'LLM-Based'. Both originate from 'Recipe Plain Text', depicted as a red book icon with a chef’s hat. The 'Manual-Based' path is symbolized by a gear icon with a hand adjusting it, indicating human curation or manual processing. The 'LLM-Based' path is marked with an 'LLM' label inside a circular node, suggesting large language model processing. These two paths converge into the 'R3 Recipe Database', represented by a blue cylindrical database icon with an orange 'R3' badge. From this database, 'R3 Recipes' flow via a labeled arrow to the central component.

In the middle, the 'User' is shown as a group of three stylized human figures. This entity provides four types of input to the 'Meal Recommender': 'Duration of Recommendation', 'Meal Configuration', 'User Preferences (Optional)', and 'Health Conditions (Optional)'. These inputs are conveyed via separate arrows branching from the User to the recommender module.

The 'Meal Recommender' is a large rounded rectangle containing three distinct methods: Method 1: Random/Baseline, represented by a brown box with a question mark and exclamation mark; Method 2: Rule-Based Approach, shown as a red book with 'RULES' written on it; and Method 3: Learning-Based Approach, illustrated by a blue gear with interconnected nodes and a neural network-like pattern. Each method is labeled clearly within the recommender block.

To the right of the recommender, 'Output Constraints' are introduced via a downward arrow from a clock-and-warning-icon composite, indicating time-sensitive or restrictive conditions. These constraints feed into the 'Meal Plan' generation step, symbolized by a clipboard with a bowl and utensils. The resulting 'Meal Plan' is then passed to an 'Evaluator', depicted as a clipboard with a magnifying glass, which assesses the plan and outputs a 'Goodness Score'. This score is visualized as a semi-circular gauge with stars above it, ranging from low (red) to high (green), indicating quality assessment.

All connections are directed arrows, showing the flow of information from left to right and top to bottom where applicable. The arrows are labeled with the nature of the data being transferred (e.g., 'R3 Recipes', 'Duration of Recommendation'). The diagram uses consistent icons and color coding: blue for databases and learning components, red for rules and manual inputs, and neutral tones for user and evaluator elements. The overall design emphasizes modularity, flexibility in recommendation approaches, and systematic evaluation.
