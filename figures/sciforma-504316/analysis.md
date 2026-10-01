# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AIGT: AI Generative Table Based on Prompt — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18111

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training strategy for a model called AIGT, which processes tabular data using a prompt-based approach. The global layout is vertically structured, showing a top-down flow from input components at the bottom to output and loss computation at the top. At the base, two parallel horizontal rectangular blocks represent the inputs: a green block labeled 'Prompt' containing the text 'The dataset is about finance, ...', and a light blue block labeled 'Tabular Row Data' containing 'Income is >=50K, Age is 28, Education is PHD, ...'. These two inputs feed into a central yellow rectangular block labeled 'AIGT', indicating the core model or processing unit. An arrow from each input points upward to the AIGT block, signifying that both are combined or processed by it. The output of AIGT is a sequence of tokens represented as a horizontal row of boxes: the first few are green and labeled '-100', followed by several purple boxes labeled 'ids'. This output sequence is split into two parts: the green '-100' tokens are grouped under a brace labeled 'Prompt Loss', indicating that these positions are ignored during loss calculation (as per the caption, prompt losses are not computed). The purple 'ids' tokens are connected via an arrow to a larger purple rectangular box at the top, labeled 'Label Prioritization', which contains the same text as the Tabular Row Data: 'Income is >=50K, Age is 28, Education is PHD, Occupation is ...'. This suggests that the model's output for the label features is being compared or prioritized against the ground truth labels. A feedback loop is shown with a purple arrow curving from the Label Prioritization box back to the input side, implying that the prioritized labels may influence the training process or serve as a reference for the model. The visual modules are color-coded: green for prompt-related elements, light blue for tabular data, yellow for the AIGT model, and purple for label-related outputs and prioritization. All text is in black, and the connections are solid arrows, except for the feedback loop which is a curved arrow. The figure’s caption clarifies that prompt losses are not calculated, the label feature is fixed, and other features are pre-mutated randomly, which explains why the prompt tokens are masked with -100 and only the label tokens are used for supervision.
