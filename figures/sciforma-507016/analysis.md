# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BoundingDocs: a Unified Dataset for Document Question Answering with Spatial Annotations — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03403

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an experimental framework for evaluating vision and text language models using various prompting strategies. The layout is divided into two main sections: on the left, a vertical stack of four prompt configurations under the heading 'Prompts', and on the right, a flowchart illustrating model training and evaluation processes.

In the left section, the topmost prompt group, labeled 'Vision LLMs' in blue, contains a dashed blue rectangle enclosing an 'Image' (depicted as a scanned document) and a 'Rephrased Question', connected by a plus sign. Below this, three prompt groups are grouped under 'Text LLMs' in red, each enclosed in a dashed red rectangle. The first Text LLM prompt combines 'Page Text Content' with a 'Template Question'. The second combines 'Page Text Content' with a 'Rephrased Question'. The third combines 'Page Text Content', 'Rephrased Question', and 'Bounding Boxes', with all three elements linked by plus signs.

On the right side, the process begins with two green rounded rectangles: 'Base Models' and 'Instruct Models'. An arrow from 'Base Models' points to a black rectangular box labeled 'Supervised FineTuning', which then connects via an arrow to a light green vertical cylinder labeled 'Models'. A direct arrow also connects 'Instruct Models' to the same 'Models' cylinder. From the 'Models' cylinder, a horizontal arrow leads to a gray vertical cylinder labeled 'Test', indicating the final evaluation phase.

The overall structure shows that both base and instruct models are used to generate the final set of models, with base models undergoing supervised fine-tuning. All models are then tested. The left-side prompts are visually aligned with the right-side model pipeline, suggesting that these prompt types are applied during the test phase to evaluate the models' performance. The color coding—blue for vision LLMs and red for text LLMs—distinguishes the two model categories and their corresponding prompt designs.
