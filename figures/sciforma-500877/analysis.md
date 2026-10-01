# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Advancing Comprehensive Aesthetic Insight with Multi-Scale Text-Guided Self-Supervised Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11952

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage training procedure for a model involving a Multi-Feature Attention Module (MFAM) and a Large Language Model (LLM). The layout is divided into two main horizontal sections: 'Pre-Training Stage' on the left and 'Fine-Tuning Stage' on the right. Each stage contains two parallel workflows, represented as horizontal sequences of modules connected by arrows.

In the Pre-Training Stage, the top workflow begins with an input labeled 'U' (unlabeled images), enclosed in a dashed black rectangle. A dashed arrow points from 'U' to a green trapezoid module containing a blue snowflake icon, symbolizing the MFAM. This is followed by a yellow rectangular module with a brick-like texture, featuring three vertical blocks (two orange, one gray) and a small red flame icon at the bottom-right, representing the LLM. An arrow leads from the LLM to a light blue rounded rectangle with a blue snowflake icon, indicating the output or loss function. The bottom workflow starts with 'G' (generic image-text pairs), also in a dashed black rectangle, connected via a solid arrow to an identical green MFAM module. This feeds into another yellow LLM module, this time with three gray blocks and a red flame icon, followed by a light blue output box with a blue snowflake.

In the Fine-Tuning Stage, the top workflow begins with 'C' (aesthetic image-comment pairs) in a dashed black rectangle, connected by a solid arrow to the same green MFAM module. The output flows to a yellow LLM module with two orange and one gray block, and a larger red flame icon, indicating active refinement. The final output is a light blue box with a red flame icon, suggesting a different loss or objective. The bottom workflow starts with 'S' (aesthetic image-score pairs), connected to the MFAM, which then feeds into a yellow LLM module with three orange blocks and a large red flame, leading to a light blue output box with a red flame.

All connections between modules are solid black arrows, except for the dashed arrow from 'U' to the MFAM in the pre-training stage, indicating that unlabeled data is used only for pre-training the MFAM. The visual attributes include distinct shapes (dashed rectangles for inputs, trapezoids for MFAM, textured rectangles for LLMs, rounded rectangles for outputs), colors (green for MFAM, yellow for LLM, light blue for outputs), and icons (snowflakes for MFAM-related outputs, flames for LLM-related outputs or losses). The figure emphasizes that during pre-training, only the MFAM is trained using U and G, while during fine-tuning, both the MFAM and LLM are refined using C and S.
