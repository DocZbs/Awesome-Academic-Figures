# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STRAP: Robot Sub-Trajectory Retrieval for Augmented Policy Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15182

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a retrieval-augmented policy learning framework, structured as a four-stage pipeline from left to right. The global layout consists of four main rectangular sections, each representing a distinct phase in the method, connected by directional arrows indicating data flow.

In the first section, two input sources are shown: 'Few-shot Demonstrations D_target' at the top, depicted as a stack of yellow-bordered video frames with the instruction 'Put the white pen in the red plastic cup', and 'Offline Dataset D_prior' below, shown as two stacks of blue-bordered video frames with instructions 'Pick up the marker and put it in the mug' and 'Push the button on the toaster'. These inputs feed into the second section, labeled 'Encode D_target, D_prior with Vision Foundation Models' (Sec. 4.3), where each dataset is processed by a green trapezoidal 'Encoder' block. The encoders are noted to use models such as DINOv2 or CLIP, transforming the visual demonstrations into embeddings.

The third section, titled 'Segment D_target into sub-trajectories' (Sec. 4.2), shows the encoded D_target being broken down into multiple yellow curved trajectories marked with points t^i_{a:b}, t^i_{b:c}, etc., representing segmented sub-trajectories. These segments are then processed by a pink rectangular block labeled 'Dynamic Time Warping' (Sec. 4.4), which aligns them with sub-trajectories from D_prior, represented as blue and magenta curved paths with circular nodes. The output of this matching process is described as 'Match segments in D_target to sub-trajectories in D_prior to obtain D_retrieval', forming a set of retrieved trajectories shown as magenta curves.

The final section, 'Retrieval-augmented Policy Learning' (Sec. 4.5), combines the original D_target (yellow trajectory) with the retrieved D_retrieval (magenta trajectories) via a union operation (∪), resulting in a combined dataset D_retrieval ∪ D_target. This merged dataset is fed into a green trapezoidal 'Policy' block, which outputs Δactions, indicating the learned action adjustments. The entire pipeline emphasizes leveraging prior knowledge through retrieval to enhance policy learning from limited demonstrations.
