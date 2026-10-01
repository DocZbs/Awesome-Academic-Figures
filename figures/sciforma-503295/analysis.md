# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deliberative Alignment: Reasoning Enables Safer Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16339

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of four different AI alignment methodologies: RLHF (Reinforcement Learning from Human Feedback), RLAIF (e.g., Constitutional AI), inference-time refinement techniques (e.g., Self-REFINE), and Deliberative Alignment. Each method is illustrated in two phases: 'Training Data Generation' and 'Inference Time', arranged horizontally within each row.

[1] Global Layout and Structure:
The figure is organized into four horizontal rows, each dedicated to one alignment approach. Each row is split into two main columns: left for 'Training Data Generation' and right for 'Inference Time'. A thin horizontal line separates each row. The top row describes RLHF, followed by RLAIF, then inference-time refinement, and finally Deliberative Alignment at the bottom. All components are connected with arrows indicating data or process flow.

[2] Visual Modules and Attributes:
- In RLHF: Training data generation involves a 'PROMPT' and 'CONTENT POLICIES' (a salmon-colored document icon) feeding into a rounded rectangle labeled 'HUMAN', which outputs 'ANSWER OR PREFERENCE DATA' (a red-bordered box). Inference time shows a 'PROMPT' going to an 'AI MODEL' (light pink rounded rectangle) producing an 'ANSWER' (red-bordered box).
- In RLAIF: Training data generation uses 'PROMPT' and 'CONSTITUTION' (salmon-colored document) feeding into an 'AI MODEL' (light pink rounded rectangle) to produce 'ANSWER OR PREFERENCE DATA'. Inference time is shown as 'SAME AS RLHF' in a grayed-out rounded rectangle, indicating identical behavior.
- In inference-time refinement (e.g., Self-REFINE): Training data generation is grayed out with 'SAME AS RLHF' in a rounded rectangle. Inference time shows a 'PROMPT' going to an 'AI MODEL', producing an 'ANSWER', which then feeds into another 'AI MODEL' via a feedback loop, guided by 'REFINING PROMPTS' (a rounded oval above the second model).
- In Deliberative Alignment: Training data generation includes 'PROMPT' and 'SPEC' (salmon-colored document) feeding into a 'REASONING MODEL' (light pink rounded rectangle with a dotted pattern), which outputs a split box labeled 'COT' (chain-of-thought, salmon-colored) and 'OUTPUT' (white). Inference time shows a 'PROMPT' going to the same 'REASONING MODEL', which produces a split output of 'COT' and 'ANSWER'.

[3] Connections and Arrows:
All connections are solid black arrows indicating directionality. In RLHF and RLAIF, the training phase has a forked arrow from 'PROMPT' and 'CONTENT POLICIES' or 'CONSTITUTION' converging on the human or AI model. Inference time is linear: prompt → model → answer. In Self-REFINE, the inference phase has a feedback loop: the first model’s answer is fed back into a second model, with 'REFINING PROMPTS' guiding the process. In Deliberative Alignment, the training phase shows a direct path from inputs to the reasoning model, which outputs COT and OUTPUT. At inference, the same structure is used, but the output is labeled 'COT' and 'ANSWER', emphasizing the model's internal reasoning process.

The figure visually contrasts how training data is generated and how reasoning is applied during inference across these methods, highlighting that only Deliberative Alignment explicitly supervises and utilizes chain-of-thought during both training and inference, enabling the model to reason over learned safety specifications autonomously.
