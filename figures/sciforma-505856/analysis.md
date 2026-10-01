# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Disentangling Preference Representation and Text Generation for Efficient Individual Preference Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20834

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of three approaches for personalizing large language models (LLMs): prompting LLMs with individual instructions, aligning LLMs with individual feedback, and the proposed method, which uses aligned latent variables. The layout is vertically segmented into three main sections, each enclosed in a dashed rectangular box, representing one method. At the bottom, a table compares these methods across two criteria: 'Learn from Feedback' and 'Flexible and Efficient', using checkmarks and crosses to indicate performance.

In the top section, labeled 'prompting LLMs with individual instructions', a black silhouette of a human user provides a text prompt in a speech bubble: 'You serve as [...] Your mission is to [...] You should [...] and ensure [...]', indicating a direct instruction format. This is followed by a blue arrow pointing to a robot icon with a wavy signal symbol on its chest, labeled 'Got it' in blue text, signifying the model's understanding. This method does not involve feedback learning, as shown in the table below.

The middle section, titled 'aligning LLMs with individual feedback', shows the same human user providing three responses—'Response A', 'Response B', and 'Response C'—in a speech bubble, with corresponding feedback icons: a red thumbs-down for 'DISLIKE' under Response A, a green thumbs-up for 'LIKE' under Response B, and another red thumbs-down for 'DISLIKE' under Response C. Below this, a label 'individual feedback' connects to a robot icon with a multicolored body (red, yellow, green), which then transforms via a blue arrow into a robot with a solid blue body, labeled 'fundamental aligning'. This illustrates a process where the model learns from explicit feedback but lacks flexibility, as indicated by the table.

The bottom section, labeled 'prompting LLMs with aligned latent variables (ours)', mirrors the feedback setup of the middle section: the same human user provides the three responses with identical feedback (DISLIKE, LIKE, DISLIKE). However, the robot receiving this feedback has a black body with a wavy signal and is surrounded by glowing lightbulbs, symbolizing latent variable learning. A blue arrow leads to a similar robot, now adorned with multiple glowing lightbulbs, labeled 'flexible aligning'. This signifies the proposed method’s ability to learn from feedback while maintaining flexibility and efficiency.

At the bottom, a comparison table lists the three methods: 'Prompting LLMs', 'Aligning LLMs', and 'Ours'. For 'Learn from Feedback', 'Prompting LLMs' has a red cross, 'Aligning LLMs' and 'Ours' have green checkmarks. For 'Flexible and Efficient', 'Prompting LLMs' and 'Ours' have green checkmarks, while 'Aligning LLMs' has a red cross. This highlights that the proposed method uniquely combines both advantages.

The overall structure emphasizes a progression from rigid instruction-based prompting to feedback-driven alignment, culminating in the proposed approach that integrates feedback learning with flexible, efficient adaptation through latent variables.
