# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Distilling Large Language Models for Efficient Clinical Information Extraction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00031

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage pipeline for clinical entity recognition using large language models (LLMs) as teacher labelers and a BERT model for distillation and inference. The global layout is a left-to-right workflow divided into four main phases: '2,096 clinical documents', 'Teacher labelers', 'Labeled documents', and 'Distillation & Inference'. Each phase is represented by a light blue banner with white text, indicating the progression of data through the system.

In the first stage, a stack of clinical documents is shown as a series of overlapping gray rectangles, each containing sample text describing patient medications, diseases, and symptoms. The example text includes phrases like 'metformin 500 mg BID for diabetes' and 'omeprazole 20 mg PRN'.

The second stage, 'Teacher labelers', features a vertical arrangement of multiple LLMs (labeled LLM 1, LLM 2, ..., LLM n), each depicted as a blue neural network icon with interconnected nodes. These LLMs are grouped under a large curly brace, indicating they operate collectively. Below them, an 'Ontology' is represented by a black icon of stacked horizontal bars, suggesting structured medical knowledge. Together, these components serve as the teacher models responsible for annotating entities in the clinical texts.

The third stage, 'Labeled documents', shows the same stack of documents, now with highlighted entities. Medications such as 'metformin', 'atorvastatin', and 'amlodipine' are highlighted in yellow; diseases like 'diabetes' and 'acid reflux' are in pink; and symptoms or conditions are in green. A legend on the right side explicitly maps these colors to 'medications', 'diseases', and 'symptoms'. This stage represents the output of the teacher labelers, where entities have been annotated with color-coded labels.

The final stage, 'Distillation & Inference', begins with an arrow labeled 'Fine-Tuning' pointing from the labeled documents to a black neural network icon labeled 'BERT'. This indicates that the BERT model is trained on the teacher-generated labels. Below the BERT model, another arrow leads to a stack of documents with colored highlights, representing the model's inference output on new data. The entire process is designed to transfer knowledge from powerful but computationally expensive LLMs to a smaller, more efficient BERT model, which can then be deployed for real-world inference tasks. The caption clarifies that the optimal combination of teacher labelers was selected based on F1 score, and the distilled BERT model was evaluated on both in-distribution and external validation datasets.
