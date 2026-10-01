# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FactEHR: A Dataset for Evaluating Factuality in Clinical Notes Using LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12422

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end pipeline for generating and evaluating fact decompositions from clinical notes using large language models (LLMs). The layout is divided into two main horizontal sections: the top section details the fact decomposition process and its evaluation, while the bottom section describes the dataset and validation approach.

In the top-left, under 'Fact decomposition with LLMs', a stack of clinical notes is shown feeding into a gray box labeled 'NOTE', which contains sample text including admission/discharge dates and a history of present illness describing a 58-year-old right-hand dominant white female with hypertension. An arrow points from this note to a black diamond-shaped icon labeled 'LLM' with a neural network motif, indicating the model processes the note. From the LLM, an arrow leads to a light blue box titled 'FACTS', listing seven atomic facts extracted from the note, such as 'Patient is 58 year old.' and 'Blood pressure was 132/82.'

To the right, under 'Evaluating entailment of generated facts', two evaluation metrics are shown: 'Fact precision' and 'Fact recall'. In the 'Fact precision' section, each generated fact (hypothesis) is paired with the original note (premise), and a green checkmark or red X indicates whether the hypothesis is entailed by the premise. For example, 'Patient is 58 year old.' is entailed (✓), but 'Patient is an Asian female.' is not (✗). This section includes icons of a GPT logo and a human expert, indicating automated and human evaluation.

In the 'Fact recall' section, the original note (premise) is compared against composite hypotheses formed from multiple facts. For instance, a hypothesis combining several facts ('The patient is a 58-year-old right-hand dominant white female...') is entailed (✓), while another ('On physical examination, the patient is in no acute distress...') is not (✗), again with both automated and human evaluation icons.

The bottom row shows a general data processing flow: raw notes are transformed into structured fact sets, followed by an expert icon and a green box asking about 'Completeness?', 'Correctness?', and 'Clinical atomicity?' with checkmarks for correctness and atomicity, and a red X for completeness. To the right, a yellow banner labels the 'FACT-EHR Dataset', specifying it contains 1 million premise-hypothesis pairs plus 3.4k expert-annotated pairs. The entire figure uses consistent color coding—gray for notes, light blue for facts, green for correct entailment, red for incorrect—and clear directional arrows to indicate data flow and evaluation steps.
