# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LinguaLIFT: An Effective Two-stage Instruction Tuning Framework for Low-Resource Language Reasoning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12499

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the LinguaLIFT approach, divided into two stages: Stage-I Language Align and Stage-II Task Transfer. The layout is split vertically into two panels, each with a distinct background color—light green for Stage-I and light purple for Stage-II—to differentiate the phases. Each panel contains a flowchart illustrating the model architecture and data flow, along with example inputs and outputs at the top and bottom.

In Stage-I (Language Align), the process begins with a Code-Switched Input, shown as a Bengali-English mixed sentence: 'It (টেক্স Tom 3 ঘন্টা) to মও the entire লন! He can মও each (সেকশন) in 30 মিনিট! How many (সেকশনস) does his লন have?'. This input is processed by a Multilingual Encoder, depicted as a blue rounded rectangle with a snowflake icon, which feeds into a Language Alignment Layer, shown as a pink rounded rectangle with a flame icon. Simultaneously, an Instruction ('Translate the following code-switched Bengali sentence to pure English:') is passed through an Embedding Layer, represented as a blue rounded rectangle with a snowflake icon. The outputs from both layers, labeled H_enc and H_ins respectively, are concatenated via a yellow chain-link icon labeled 'concatenation' and fed into a Large Language Model, shown as a light blue rounded rectangle with a snowflake icon. The output is a fully translated English sentence: 'It takes Tom 3 hours to mow the entire lawn. He can mow each section in 30 minutes. How many sections does his lawn have?'.

In Stage-II (Task Transfer), the same architectural components are reused but with different inputs and purposes. The Language Alignment Layer is now shown in light blue with a snowflake icon, indicating it is frozen. The input is a Task-Specific Input: 'It takes Tom 3 hours to mow the entire lawn. He can mow each section in 30 minutes. How many sections does his lawn have?', accompanied by a math icon. The Instruction is 'Solve the following math problem:', processed by the same Embedding Layer. The Multilingual Encoder processes the task-specific input, and its output H_enc, along with H_ins from the embedding layer, are concatenated and fed into a Large Language Model, now shown in pink with a flame icon, indicating fine-tuning. The output is a step-by-step solution: 'To find out the number of sections Tom’s lawn has, we need to determine how many 30-minute intervals are in 3 hours. There are 60 minutes in 1 hour. So, 3 hours will have 3 * 60 = 180....'

Connections between modules are indicated by black curved arrows, showing the direction of data flow. The concatenation step is visually emphasized with a yellow chain-link icon. The figure uses consistent visual attributes: rounded rectangles for modules, colored backgrounds for stages, and icons (snowflake for general processing, flame for active/fine-tuned layers) to denote functionality. Text labels such as 'H_ins', 'H_enc', and 'concatenation' clarify intermediate representations and operations. The overall structure emphasizes a two-phase training strategy: first aligning multilingual representations via code-switched tuning, then transferring task-solving capabilities to low-resource languages by fine-tuning on English-only instruction data while keeping the alignment layer fixed.
