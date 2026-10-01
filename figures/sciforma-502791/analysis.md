# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DisEmbed: Transforming Disease Understanding through Embeddings — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15258

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a workflow for creating a synthetic dataset using ICD-10 codes and the GPT-4o-mini language model. The global layout is a directed flowchart arranged from left to right and top to bottom, depicting a sequential process starting with input data and ending with structured output pairs. The structure begins at the top-left with a light blue rounded rectangle labeled 'ICD 10 Codes', which feeds into a central processing step via an arrow annotated with '70,000+ Diseases'. This indicates that the ICD-10 codes represent over 70,000 distinct diseases. The next major component is a light green rounded rectangle labeled 'GPT-4o mini', positioned to the right of the ICD-10 box, signifying the use of this specific large language model to process the disease inputs.

From the GPT-4o-mini box, an arrow points downward to a light blue rounded rectangle labeled 'Generate Symptoms/Descriptions & QA Pairs', indicating that the model generates symptom descriptions and question-answer pairs for each disease. A feedback loop or iterative connection is shown from this generation box back to the GPT-4o-mini box, suggesting possible refinement or multiple passes through the model. From the generation box, another arrow leads to a light teal rounded rectangle labeled 'Manual Cleaning', representing a human-in-the-loop step where generated content is reviewed and refined. Following manual cleaning, a black arrow points to a small rectangular label containing '2,25,245 rows', specifying the number of processed entries after cleaning. Finally, an arrow from this count leads to a yellow rounded rectangle labeled '(Anchor, Positive)', which represents the final output format — structured pairs likely used for training or evaluation purposes.

On the far right, a gray rectangular note box contains two bullet points providing technical implementation details: 'Received responses in JSON format using {type: "json_object"} and processed them.' and 'Used async connections for time-saving in dataset creation.' These notes clarify that the model outputs were structured as JSON objects and that asynchronous connections were employed to improve efficiency during dataset generation. All boxes are connected by solid black arrows indicating the direction of data flow, and the entire diagram uses consistent rounded rectangles with distinct background colors to differentiate stages: light blue for input and generation, light green for the LLM, light teal for human intervention, and yellow for the final output. Text within boxes is centered and clearly legible, with annotations on arrows providing quantitative context.
