# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AskChart: Universal Chart Understanding through Textual Enhancement — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19146

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture and training data pipeline for AskChart, a multimodal model designed for chart understanding and reasoning. The top half presents the model’s structural framework, while the bottom half showcases three curated datasets used for pretraining.

[1] Global Layout and Structure:
The figure is divided into two main horizontal sections. The upper section displays the end-to-end processing pipeline and model architecture, starting from input tasks and charts on the left, flowing through the model components in the center, and producing diverse answers on the right. The lower section is segmented into three vertical columns labeled (a), (b), and (c), each demonstrating a distinct dataset type with example inputs, intermediate steps, and outputs.

[2] Visual Modules and Attributes:
In the upper section, the leftmost area contains a ‘Task’ box with sample questions (e.g., 'In what year did global fertilizer consumption reach 111.3 megatons?'), accompanied by a bar chart visual. This input feeds into the model via two parallel pathways: a Text Extractor (light blue box with an 'A' icon) and a Vision Encoder (light green box). These connect to a Tokenizer (pink rectangle) and Projection layer (light green rectangle), respectively. The outputs are combined into a sequence of tokens represented by octagonal shapes. These tokens pass through a Transformer-like encoder stack consisting of Self-attention (beige rectangle), Add & Norm (beige rectangle), and a Router module leading into a MoE Layer (orange-dashed box containing multiple FFNs: FFN₁ to FFNₘ). The MoE output is processed by another Add & Norm layer before generating answers.

On the right side, under ‘Answer’, three types of outputs are shown: Numerical visual reasoning (green header), Chart-to-text (orange header), Chart-to-table (yellow header), and Open-ended question answering (purple header), each with corresponding textual or tabular responses.

In the lower section:
(a) Visual Prompt Dataset: Shows a bar chart (a3, purple border) with a visual prompt highlighting the tallest bar (55%), leading to answer (a4, yellow box: '55%').
(b) OCR-aware Data Prompt Dataset: Displays a pie chart (b2, purple border) with OCR results (b3, blue box: 'Hungary GP Results, Sebastian Vettel, Daniil Kvyat, Daniel Ricciardo, 17%, 50%, 33%') leading to answer (b4, yellow box: 'Daniel Ricciardo').
(c) Chart-to-Table Instruction Following Dataset: Features a stacked bar chart (c2, purple border) with a structured instruction (c3, yellow box) containing XML-like steps for extracting and organizing data into a table, ending with 'Answer: ...'.

[3] Connections and Arrows:
Arrows indicate data flow. From the Task/Chart input, dashed arrows point to the Text Extractor and Vision Encoder. Solid arrows connect these to the Tokenizer and Projection, then to the sequence of octagons. From there, solid arrows lead through Self-attention → Add & Norm → Router → MoE Layer → Add & Norm → Answer outputs. In the lower section, curved arrows show progression: from task (a1/b1/c1, green) to input chart (a3/b2/c2, purple border), then to OCR results (b3, blue) or visual prompts (a3), finally to answers (a4/b4/c3, yellow). A central 'Train' triangle points upward from the lower datasets to the model, indicating training data flow.
