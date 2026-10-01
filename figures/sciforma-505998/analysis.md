# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Large-Scale Study on Video Action Dataset Condensation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21197

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a conceptual visualization of three distinct dataset condensation frameworks for video data, categorized into two main types: dataset distillation methods—Trajectory Matching (a) and Distribution Matching (b)—and a sample selection method—Score Selection (c). The overall layout is divided into two main regions: on the left, a general pipeline for dataset condensation, and on the right, detailed breakdowns of the three methods within dashed rectangular boundaries.

On the left side, the process begins with a 'Real Dataset' depicted as stacked orange and blue video clips, feeding into a 'Condensation Module'. This module outputs either a 'Proxy Loss' (light blue box) or a 'Selection Index' (light green box), which are used to update a 'Condensed Dataset' represented by a black database icon. An arrow labeled 'Update' loops back from the condensed dataset to the condensation module, indicating iterative refinement. Below this pipeline, a legend clarifies visual elements: a gray circle labeled θ₀ represents 'Model Param', pink rectangles represent 'Video Clip', and a green rectangle represents 'Model Layer'.

On the right, the three methods are shown in separate colored boxes. (a) Trajectory Matching (blue box) illustrates a sequence of model parameter updates over time: θ₀ (initial state) evolves through θₜᴿ⁻¹ → θₜᴿ → θₜ⁺¹ᴿ (real trajectory, light blue circles) and θₜˢ⁻¹ → θₜˢ → θₜ⁺¹ˢ (synthetic trajectory, light red circles). A neural network icon at the top connects to θ₀, and a 'Matching' label with a downward arrow points to a 'Loss' box, indicating comparison between trajectories. The sequence repeats N times, as denoted by '× N'.

(b) Distribution Matching (blue box) shows a multi-stage process: Stage I, Stage II, and Stage III, each containing stacked green rectangles representing model layers. Each stage is followed by a 'Matching' step (purple box), with connections flowing from Stage I to Stage II, and Stage II to Stage III. The final output combines 'CE Loss + Matching Loss', suggesting classification and distribution alignment objectives.

(c) Score Selection (green box) depicts a scoring mechanism: N video clips (yellow rectangles) are processed by an 'Observer' to generate 'score' values. These scores are then used to 'select' C clips (pink rectangles) from the original set, forming a condensed dataset of size IPC × C. The selection process is visually represented by a downward arrow labeled 'select'.

Connections and arrows throughout the diagram indicate data flow and computational dependencies. Dashed lines connect the left-side pipeline to the right-side methods, emphasizing that Trajectory Matching and Distribution Matching are distillation approaches using proxy losses, while Score Selection is a direct selection approach using indices. The figure effectively contrasts these methodologies in terms of their operational mechanisms and output structures.
