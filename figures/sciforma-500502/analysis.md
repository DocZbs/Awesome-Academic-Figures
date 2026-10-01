# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Optimized Quran Passage Retrieval Using an Expanded QA Dataset and Fine-Tuned Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11431

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a top-down workflow diagram illustrating the process of dataset expansion and subsequent model fine-tuning for question-answering tasks. The global layout is linear and hierarchical, progressing from top to bottom, with a branching structure at the fine-tuning stage leading to output components. At the top, a rectangular box labeled 'Old Dataset' contains the following text: '174 Q Train', '52 Q Test', '25 Q Development', 'Tafseer', and 'TYDI QA'. This box represents the initial dataset used in the study. A downward arrow labeled 'DS Manipulation' connects this box to a second rectangular box below it, labeled 'New Dataset', which contains identical text except for '1895 Q Train', indicating an expanded training set. From the 'New Dataset' box, a horizontal arrow points to a rectangular box labeled 'LM', representing a Language Model. An arrow labeled 'Samples' extends downward from the 'LM' box to a circular node labeled 'FineTuning'. From this circular node, two arrows diverge: one pointing downward to a circle labeled 'Question', and another pointing diagonally to the right to a circle labeled 'Answer'. A final arrow connects the 'Question' circle to the 'Answer' circle, indicating the generation of a question-answer pair. All shapes are simple black outlines on a white background; rectangles denote datasets and models, while circles represent processing stages or outputs. Text within each component is centered and written in standard sans-serif font. The diagram uses solid black lines for all connections, with arrows indicating directionality of data flow. The caption below the diagram explains that the old dataset is manipulated to create a larger set, which is then fed into various Language Models for fine-tuning, resulting in improved question-answer pairs.
