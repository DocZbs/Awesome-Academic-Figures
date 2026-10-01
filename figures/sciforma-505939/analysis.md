# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Verbosity-Aware Rationale Reduction: Effective Reduction of Redundant Rationale via Principled Criteria — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21006

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the VARR and VARR+ frameworks for verbosity-aware rationale reduction in large language models. The diagram is divided into three main sections: two upper panels illustrating likelihood calculation with complete and reduced rationales, and a lower panel detailing the verbosity identification and training process.

In the top-left panel, labeled 'Calculate Likelihood with Complete Rationale', a gray box labeled 'Question (q)' feeds into a dark gray rectangular module titled 'Large Language Model' (marked with a snowflake icon). This model generates a full rationale R, depicted as a sequence of green boxes containing step-by-step reasoning text (e.g., 'Let F be the number of shots Jordan blocked...', 'In the second period, he blocked 2 * 4 = 8...'). The rationale R is connected via a dashed line to the model output, which produces both a 'Ground Truth Answer (y_g)' in a blue box and a 'Wrong Answer (y_w)' in a pink box. The likelihood is expressed as log p_θ(y | R, q).

The top-right panel, 'Calculate Likelihood with Reduced Rationale', mirrors the left panel but uses a reduced rationale R'. Here, the initial sentence ('Let F be the number of shots...') is omitted from the rationale chain, leaving only the subsequent reasoning steps. The same Large Language Model (with snowflake icon) processes the question and reduced rationale to produce the same ground truth and wrong answers, with the likelihood expressed as log p_θ(y | R', q).

The bottom section, titled 'Verbosity Aware Rationale Reduction', details the core mechanism. On the left, 'Verbosity Identification' defines verbosity(y) as log(p_θ(y|R',q)/p_θ(y|R,q)), enclosed in a dashed box. Below this, two constraints are shown: 'VARR' requires verbosity(y_g) ≥ 0, and 'VARR+' adds the constraint verbosity(y_w) - verbosity(y_g) ≤ 0. These constraints are used to identify redundant sentences.

On the right side of the bottom section, a Large Language Model (marked with a flame icon) receives the question and a rationale R' that has been pruned based on verbosity criteria. The rationale R' now excludes the initial verbose sentence, showing only the essential steps. The model outputs the ground truth answer y_g = 4 (in a blue box), and the training loss is defined as -log p_θ(y_g, R'|q), shown in a dashed box. The flow indicates that after identifying and removing verbose sentences, the model trains using the more concise rationale R'.

The overall layout uses light blue backgrounds for each major section, with consistent color coding: gray for input questions, green for rationale steps, blue for correct answers, and pink for incorrect answers. Arrows indicate data flow from inputs through the model to outputs, with dashed lines representing rationale generation and solid lines indicating direct computation paths.
