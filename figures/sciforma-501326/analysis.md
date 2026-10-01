# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What External Knowledge is Preferred by LLMs? Characterizing and Exploring Chain of Evidence in Imperfect Context for Multi-Hop QA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12632

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a CoE (Chain of Evidence) discrimination framework, structured as a left-to-right data processing pipeline. The global layout consists of four main stages: Question input, Information Extraction, Intent construction with External Knowledge, and Feature Discrimination leading to a binary decision. The entire process is visually organized in a horizontal flow from left to right, with clear modular boundaries and directional arrows indicating data flow.

Starting from the left, the 'Question' is represented by a black square icon containing a question mark and horizontal lines, symbolizing a textual query. This feeds into the 'Information Extraction' module, depicted as a blue folder icon with document-like content, labeled in bold blue text. An arrow points from the Question to this module, indicating the first step of processing.

The output of Information Extraction flows into a large rounded rectangular container labeled 'Intent' on the left side. Inside this container, multiple yellow rectangular boxes are stacked vertically, each labeled 'Evidence Node₁', 'Evidence Node₂', ..., 'Evidence Nodeₙ', representing extracted evidence elements. These nodes are connected by curved black lines to labels on the right side of the container: 'Relation₁₂', 'Relation₂ₙ', etc., indicating relationships between pairs of evidence nodes. A large curly brace on the left groups all evidence nodes under the 'Intent' label. Below this container, the text 'External Knowledge' is shown alongside three blue book icons, suggesting that external data sources are integrated into the Intent construction phase. A line connects the External Knowledge to the Intent container, indicating its contribution.

From the Intent container, a thick black arrow leads to the next stage: 'Feature Discrimination', labeled in bold blue text at the top. This stage is represented by a light blue rounded rectangle containing a vertical list of features: 'Intent', 'Entailment + Evidence Node', 'Containment + Evidence', 'Relation Inference'. Above this box, a small blue magnifying glass icon with a yellow handle symbolizes analysis or scrutiny. A horizontal line extends from this module to a decision point labeled 'CoE Existed?' in bold blue text.

From this decision point, two paths diverge: one leads to a green checkmark (✓), indicating a positive outcome (CoE existed), and the other to a red cross (✗), indicating a negative outcome (CoE did not exist). These are standard symbols for binary classification results. The overall structure emphasizes a sequential, logic-driven process where raw questions are transformed through extraction and integration of evidence and relations, then analyzed via feature-based discrimination to determine whether a valid Chain of Evidence exists.
