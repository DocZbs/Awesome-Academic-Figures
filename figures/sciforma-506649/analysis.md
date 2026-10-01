# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Recursive Decomposition of Logical Thoughts: Framework for Superior Reasoning and Knowledge Propagation in Large Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02026

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Recursive Decomposition of Logical Thoughts (RDoLT) framework, structured as a vertical three-tiered pipeline: Easy, Intermediate, and Final, each represented by a yellow rounded rectangle. The process begins with an 'Input' oval at the top, feeding into the 'Easy' tier. Within each tier, the input is decomposed into three parallel thought paths labeled T1, T2, and T3, each represented by a small gray rectangle. For each thought, a sequence of four evaluation modules assesses its quality: 'LOGICAL VALIDITY' (white box with black text), followed by 'COHERENCE' (light green box), 'SIMPLICITY' (light blue box), and 'ADAPTIVENESS' (teal box). Each module displays a score (e.g., SCORE = 7, 8, or 9) above its label. These scores are aggregated into a total score shown in a circular node—green if the total is 30 or above, red otherwise. For example, in the Easy tier, T1 achieves Total 32 (green), T2 Total 29 (red), and T3 Total 26 (red). A diamond-shaped decision node labeled 'Threshold >=30' determines which thoughts pass: green arrows lead to selected thoughts (T1 in Easy, T2 in Intermediate, T3 in Final), while red arrows indicate rejection. Selected thoughts are passed to the next tier via solid arrows, while rejected ones are discarded. Between each tier, a horizontal green rectangular module labeled 'KNOWLEDGE PROPAGATION MODULE' (KPM) is connected via dotted lines, indicating it receives feedback from the selection process to inform subsequent evaluations. The KPM tracks which thoughts were strong (selected) or weak (rejected) across tiers. The Final tier processes the remaining thoughts, and its output flows to a green oval labeled 'Output' at the bottom. The entire structure emphasizes a recursive, selective refinement process where only high-quality thoughts propagate forward, guided by the KPM's accumulated knowledge.
