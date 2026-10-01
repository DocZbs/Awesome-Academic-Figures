# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unlocking LLMs: Addressing Scarce Data and Bias Challenges in Mental Health — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12981

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the end-to-end pipeline for developing the IC-AnnoMI dataset, which is designed for mental illness (MI) dialogue annotation. The global layout is a horizontal workflow from left to right, with two parallel processing streams converging toward the final dataset. The process begins on the far left with the 'MI Dataset', represented by a circular icon containing three stacked database disks in purple, yellow, and orange, symbolizing raw data sources. An arrow leads from this to a rectangular module labeled 'Data Processing', depicted with an illustration of a woman using a laptop, indicating human-in-the-loop preprocessing steps.

From the 'Data Processing' stage, two distinct pathways emerge. The upper pathway proceeds to 'MISC based annotation scheme development', shown with an illustration of a man sitting thoughtfully, suggesting expert design or conceptualization of the annotation framework. This scheme then feeds into 'MI expert annotation based on MISC', represented by another person using a laptop, indicating human experts applying the developed scheme to annotate data. This stream concludes with the output: the 'IC-AnnoMI Dataset', visualized as two dark blue database stacks with a yellow star icon, emphasizing its curated and valuable nature.

The lower pathway from 'Data Processing' leads to 'MI Dialogues Generation', which is powered by a large language model (LLM) symbolized by the green square with the interlocking hexagon logo (resembling OpenAI's GPT). This module is further enhanced by 'Progressive Prompting', indicated by a black double-headed arrow with red text, suggesting iterative refinement of prompts to improve dialogue quality. The generated dialogues are then fed upward into the 'MI expert annotation based on MISC' step, integrating AI-generated content into the human annotation process.

Connections are color-coded: black arrows denote primary data flow, orange arrows represent the annotation scheme development and application path, and blue arrows indicate the AI-assisted dialogue generation path feeding into expert annotation. The figure emphasizes a hybrid approach combining human expertise with AI augmentation to build a high-quality, annotated mental illness dialogue dataset.
