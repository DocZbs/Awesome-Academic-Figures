# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deliberative Alignment: Reasoning Enables Safer Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16339

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an end-to-end methodology for training a safety-aligned language model, divided into two main stages: Supervised Fine-Tuning (SFT) Data Generation and Reinforcement Learning (RL) Training, with an overview workflow at the bottom connecting them. The global layout consists of two large zoomed-in boxes at the top — left for SFT Data Generation and right for RL Training — and a simplified flowchart at the bottom showing the overall pipeline.

In the SFT Data Generation section (top-left), the process begins with a safety specification (SPEC), represented as a red rectangular block with a dotted pattern, which is fed into a base generative model (G_base), depicted as a rounded rectangle with a light pink fill. G_base generates multiple (PROMPT, CAT) pairs, where CAT denotes safety categories, shown as white rectangles with a diagonal striped pattern. For each pair, G_base produces a Chain-of-Thought (COT) and an OUTPUT, along with a SCORE. These outputs are then evaluated by a reward model (G_RM), another light pink rounded rectangle, which uses the SPEC to assign scores. A filtering step, indicated by a dashed line and labeled 'FILTERING' with small square icons, selects high-quality (PROMPT, COT, OUTPUT) tuples. The filtered data is stored as SFT DATA, shown as a table icon.

The RL Training section (top-right) shows the fine-tuned model G_SFT, also a light pink rounded rectangle, receiving a PROMPT and CAT input. It generates a COT and OUTPUT, which are sent to the same G_RM model, now acting as a reward function. The SPEC is again provided to G_RM to guide scoring. The reward signal from G_RM, along with the generated COT and OUTPUT, is fed into an RL STACK, a large rounded rectangle, which updates the model parameters through reinforcement learning.

The bottom-level workflow connects these stages. It starts with SFT prompts with safety categories and a SPEC, feeding into the SFT DATA GENERATION module (a diamond-shaped box). This module outputs SFT DATA, which, together with the initial G_base model, feeds into the SFT TRAINING module (another diamond). The result is G_SFT. This model, along with RL prompts with safety categories and the SPEC, enters the RL TRAINING module (diamond), producing the final safety-aligned model G_spec, shown as a red dotted rounded rectangle. All connections are solid black arrows indicating data or control flow, except for the dashed arrow representing the filtering step. Text labels are clear and placed near relevant components, with consistent color coding: red for SPEC, light pink for models, and white for data inputs/outputs.
