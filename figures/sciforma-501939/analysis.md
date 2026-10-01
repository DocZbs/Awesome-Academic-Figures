# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Typhoon 2: A Family of Open Text and Multimodal Thai Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for generating a labeled dataset focused on Thai sensitive topics. The global layout is a top-down flowchart with five rectangular modules connected by directed arrows, indicating a sequential process from input to output. The structure begins at the top left with an initial input module and proceeds through intermediate processing steps to a final output module on the right.

Visual modules are represented as rectangles with distinct colors and labels. The first two modules, 'Thai Sensitive Topic' and 'Thai Sensitive Sub Topic', are light purple rectangles, indicating the hierarchical breakdown of sensitive topics into more specific sub-topics. The third module, 'Text / Instruction', is also a light purple rectangle, signifying the generated content derived from the sub-topic. Below this, a light gray rectangle labeled 'LLM' represents the large language model used for scoring. The final module, 'Dataset', is a light yellow rectangle, denoting the output product of the pipeline.

Connections between modules are shown via black arrows with solid lines and arrowheads pointing in the direction of data or process flow. The first arrow connects 'Thai Sensitive Topic' to 'Thai Sensitive Sub Topic', indicating a refinement step. A second arrow points from 'Thai Sensitive Sub Topic' to 'Text / Instruction', labeled 'LLM generate text from topic', which describes the action of using an LLM to produce text or instruction based on the sub-topic. From 'Text / Instruction', an arrow leads to 'Dataset', labeled 'Label using score', showing that the generated text is labeled based on a score. Additionally, a feedback loop is implied: an arrow from 'LLM' points upward to 'Text / Instruction', labeled 'Generate score', indicating that the LLM evaluates the generated text to produce a score, which is then used for labeling. This creates a closed-loop process where the LLM both generates and scores content, enabling automated dataset creation.

The figure's caption, 'Pipeline of Thai topic data generation', confirms the purpose of the diagram: to depict a systematic approach for creating a labeled dataset of Thai-sensitive content using an LLM for both text generation and scoring. The visual design emphasizes clarity and logical progression, with color-coding helping to distinguish between input topics, generated content, the model component, and the final dataset.
