# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Graph-Guided Textual Explanation Generation Framework — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12318

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative visualization of two reasoning processes for natural language inference (NLI), illustrating the difference in explanation faithfulness between a standard Language Model and a modified model called G-TEX. The layout is vertically divided into two sections: the top section represents the baseline Language Model, and the bottom section represents the enhanced G-TEX model.

In the top section, the premise 'An old man poses in front of an advertisement' and the hypothesis 'A man walks by an ad' are displayed at the top. Specific tokens—'poses', 'advertisement', 'walks', and 'ad'—are highlighted with dashed gray boxes, labeled as 'token interactive explanations (unused)', indicating that although these tokens are relevant, they are not utilized in the model’s reasoning process. A solid black arrow points from this input pair to a salmon-colored rounded rectangle labeled 'Language Model'. Below this, the model outputs a contradiction judgment, annotated with a green checkmark and an orange-bordered box stating 'Contradiction because an old man is a man.' This explanation is marked with a red 'X', indicating it is incorrect or unfaithful, as it ignores the core conflict between 'poses' and 'walks'. Dotted gray arrows loop back from the output to the input tokens, visually representing unused token-level interactions.

In the bottom section, the same premise and hypothesis are shown again, but now specific tokens are highlighted with colored boxes: 'poses' and 'walks' are in green, and 'advertisement' and 'ad' are in yellow. These correspond to two types of token interactive explanations: green for 'token interactive explanation 1' and yellow for 'token interactive explanation 2', as indicated in the legend. Curved arrows connect these highlighted tokens across the premise and hypothesis: a green arrow links 'poses' to 'walks', and a yellow arrow links 'advertisement' to 'ad', emphasizing their semantic relationships. A solid black arrow leads from the input to a blue rounded rectangle labeled 'G-TEX'. The output below is a correct contradiction judgment, marked with a green checkmark and an orange-bordered box stating 'Contradiction because a man cannot pose and walk at the same time.' This explanation is also marked with a green checkmark, signifying its faithfulness and correctness. The visual structure highlights how G-TEX incorporates relevant token interactions to generate a more accurate and faithful explanation compared to the baseline model.
