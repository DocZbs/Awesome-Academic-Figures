# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BoundingDocs: a Unified Dataset for Document Question Answering with Spatial Annotations — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03403

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dataset construction pipeline designed to create a unified dataset called BoundingDocs from two distinct input categories: Q&A datasets and Key-Value extraction datasets. The global layout is linear and left-to-right, with a branching path for question generation that feeds back into the final output. On the far left, two stacks of document icons represent the input datasets — red for Q&A datasets and blue for Key-Value datasets — labeled accordingly beneath them. These inputs flow via a black arrow to a rectangular box labeled 'AWS OCR', indicating optical character recognition processing using Amazon Web Services' Textract service. From there, another black arrow leads to a rectangular box labeled 'Match Annotations', which aligns extracted text with corresponding document annotations. A downward blue arrow from this module connects to a blue-bordered rectangular box labeled 'Generate Questions', signifying a secondary processing step. This step is driven by an external model represented by a green oval labeled 'Mistral 7B v0.3', connected by a blue arrow, indicating that this large language model is used to generate and rephrase questions specifically for the Key-Value datasets. The output of the 'Generate Questions' module feeds into the final component via a blue arrow. The final output is a purple parallelogram labeled 'BoundingDocs', representing the consolidated, annotated dataset. A black arrow from 'Match Annotations' also points directly to 'BoundingDocs', showing that both the matched annotations and the generated questions contribute to the final dataset. The visual modules are distinguished by color and shape: red and blue document stacks for inputs, white rectangles for processing steps, a green oval for the LLM, and a purple parallelogram for the output. Text labels are clear and positioned within or near each module. The connections are primarily black arrows for primary data flow and blue arrows for auxiliary or model-driven flows, emphasizing the role of Mistral 7B v0.3 in question generation.
