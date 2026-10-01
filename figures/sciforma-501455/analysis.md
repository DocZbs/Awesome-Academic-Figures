# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DSGram: Dynamic Weighting Sub-Metrics for Grammatical Error Correction in the Era of Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12832

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the DSGram method, a framework for evaluating sentence corrections using large language models. The global layout is a left-to-right flowchart, starting from the input on the far left and progressing through two main processing stages before converging to an overall score on the right. The entire process is structured into distinct modules connected by directed arrows indicating data flow.

On the left, the process begins with 'Input a Pair of Sentences', represented by an icon of a document with a pencil, labeled with 'Original sentence' and 'Corrected sentence'. This input flows into a module labeled 'Large Language Models', depicted as a colorful speech bubble, with examples such as GPT-4 and LLaMA3 listed above it. From this module, two parallel pathways diverge: one leads to a parallelogram labeled 'Judgement Matrix', and the other enters a dashed rectangular box titled 'Generate Scores of Sub-Metrics'.

Within the 'Generate Scores of Sub-Metrics' box, three parallelograms represent individual sub-metrics: 'Semantic Coherence', 'Edit Level', and 'Fluency'. Below these, the label 'Output Scores' indicates the result of this stage. These scores are then passed to a final parallelogram labeled 'Overall Score'.

The second major pathway proceeds from the 'Judgement Matrix' into another dashed rectangular box titled 'Generate Dynamic Weights'. Inside this box, a grid of four colored squares—blue (labeled '1'), orange ('3'), red ('1/3'), and dark blue ('1')—is shown under the label 'Consistency Check'. An arrow from this grid points to a gray calculator icon labeled 'Call Calculator', with the intermediate step labeled 'Calculate Weights'. From the calculator, an arrow labeled 'Normalization' leads to a parallelogram labeled 'Dynamic Weights', with the label 'Output Weights' beneath it. This module outputs the dynamic weights, which are then fed into the computation of the 'Overall Score'.

The final 'Overall Score' parallelogram receives inputs from both the 'Output Scores' of the sub-metrics and the 'Output Weights' from the dynamic weight generation module, indicating that the overall score is computed as a weighted combination of the sub-metric scores using the dynamically generated weights. All connections are represented by solid black arrows, clearly showing the direction of information flow. The visual elements use consistent shapes (parallelograms for data outputs, rectangles for processes, icons for inputs and tools), colors (primarily black and white with color accents in the LLM icon and weight grid), and clear textual labels to convey the method’s logic.
