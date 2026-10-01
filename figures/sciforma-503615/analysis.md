# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Teaching LLMs to Refine with Tools — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16871

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of refining Chain-of-Thought (CoT) solutions using Prompt-of-Thought (PoT) solutions during both alignment and inference phases. The diagram is divided into two main horizontal sections: 'ALIGNMENT' at the top and 'INFERENCE' at the bottom. Each section is further partitioned vertically into two columns labeled 'PoT' and 'CaP', representing different refinement strategies. Within each column, the alignment phase is subdivided into 'SFT' (Supervised Fine-Tuning) and 'DPO' (Direct Preference Optimization) stages, indicated by dashed-line boxes.

In the ALIGNMENT section, under PoT, the SFT stage shows a yellow square labeled 'Q' (question) above a purple square labeled 'P' (PoT), which has a green dashed rectangle beneath it indicating a positive critic. An arrow points from this structure to the DPO stage, where the same Q-P pair appears alongside a second P block with a pink dashed rectangle below, representing a negative critic. This illustrates the transition from supervised learning to preference-based optimization.

Under CaP in the ALIGNMENT section, the SFT stage displays two identical vertical stacks: each consists of a yellow 'Q' block, a beige 'C' block (CoT), and a green dashed rectangle (positive critic) beneath the C. Below each stack is a purple 'P' block with a green dashed rectangle. In the DPO stage, these are transformed into two pairs: one retains the green critic and the other switches to a pink critic, with corresponding P blocks below. This reflects the application of preference optimization on CoT-enhanced prompts.

The INFERENCE section demonstrates two distinct modes. On the left, under PoT, a single 'Q' block is shown above four 'P' blocks arranged horizontally; the first 'P' has a solid green rectangle below (indicating active positive critic), while the others have dashed green or pink rectangles (inactive critics). This represents PoT inference with critic selection.

On the right, under CaP, two scenarios are shown. Scenario ① features a 'Q' block above four 'C' blocks (CoT), with only the first having a solid green rectangle below (active critic). Scenario ② shows a stacked 'Q-C' block with a solid green rectangle below (active critic), followed by four 'P' blocks with alternating green and pink dashed rectangles below. This illustrates how CoT solutions are refined using PoT during inference, with critics guiding the selection of optimal responses.

A legend at the bottom-left clarifies the color coding: light green for positive critic, pink for negative critic, yellow for question (Q), purple for PoT (P), and beige for CoT (C). All blocks are rectangular with black borders, and dashed rectangles denote inactive or potential critic states. Arrows indicate transitions between stages, emphasizing the flow from SFT to DPO in alignment and the different inference pathways.
