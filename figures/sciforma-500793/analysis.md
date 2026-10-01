# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UAlign: Leveraging Uncertainty Estimations for Factuality Alignment on Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11803

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is organized into four main horizontal sections, each representing a distinct category of methods for improving language model performance: Prompt-based, SFT-based, RL-based, and Inference-based. Each section contains one or more labeled subfigures illustrating specific techniques within that category.

[1] Global Layout and Structure:
The figure is vertically segmented into four major blocks, separated by thin horizontal lines. Each block has a bold orange heading indicating its category. Within each block, individual methods are presented as horizontal workflows, labeled with lowercase letters (a–h), arranged sequentially from top to bottom. The overall layout follows a left-to-right flow for each method, depicting input, processing, and output stages.

[2] Visual Modules and Attributes:
Each method uses standardized visual elements: rectangular boxes with rounded corners represent inputs (yellow background) and outputs (light peach background); robot icons symbolize different types of language models (LLMs), distinguished by color and accessories: gray robots denote 'Vanilla LLM' or 'Reference LLM', green robots represent 'SFT LLM' or 'Policy LLM', and orange robots signify 'Reward Model'. Text labels beneath icons specify model types. Some boxes include small emoji indicators (e.g., 😊 known, 😟 unknown) to denote confidence or knowledge state. In the RL-based section, a circular blue arrow labeled 'PPO' connects the Policy LLM and Reward Model, while a blue arrow labeled 'DPO' appears in the RL-DPO method. The Inference Intervention method includes a dashed box containing two bar charts comparing 'Central nervous system' and 'Peripheral nervous system' outputs, with an 'x' mark over the latter to indicate suppression.

[3] Connections and Arrows:
Arrows indicate data flow and processing direction. In (a) ICL, an arrow connects 'ICL prompts + question' to the Vanilla LLM, which then outputs the answer. In (c) Standard SFT, a blue arrow leads from the question to the SFT LLM, producing the correct answer. In (d) R-Tuning, two questions (one marked 'known', one 'unknown') feed into the SFT LLM, which generates corresponding responses. In (e) Reward Model of RLHF, the question and correct answer are fed into the Reward Model, which outputs 'True'. In (f) Reward Model of RLKF, the Vanilla LLM’s internal state is passed to the Reward Model, which outputs 'Known'. In (h) PPO for RL-PPO and RLKF, the Reference LLM and Policy LLM interact via a bidirectional PPO loop with the Reward Model. In (h) RL-DPO, the Vanilla LLM generates an incorrect answer ('Peripheral nervous system'), while the correct answer ('Central nervous system') is fed into the Policy LLM via a DPO arrow. In (h) Inference Intervention, the SFT LLM’s output is processed through a decision module (bar charts) before yielding the final correct answer.

All methods use consistent visual cues: yellow boxes for inputs, peach for outputs, and colored robot icons for models. The figure illustrates how different training and inference strategies guide LLMs toward accurate responses, with RL-based methods incorporating reward modeling and policy optimization, and inference-based methods modifying output selection during generation.
