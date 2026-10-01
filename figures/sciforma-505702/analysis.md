# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Aggregation and Segregation of Representations for Domain Adaptive Human Pose Estimation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20538

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proposed discrepancy loss framework for keypoint-based model training, structured as a two-tiered horizontal layout. The top row, labeled 'Inference Outputs', contains K rectangular boxes with light orange fill and brown borders, representing keypoint outputs from an inference model. The first box is marked with a gray star symbol for illustrative purposes. Above this row, labels 'Keypoint 1' through 'Keypoint K' are aligned with each box. The bottom row, labeled 'Adversarial Outputs', consists of K rectangular boxes with light green fill and dark green borders, corresponding to adversarial model outputs for the same keypoints. These two rows are vertically aligned, forming a parallel structure.

Three types of relationships between keypoints are defined using colored arrows and associated loss terms. A cyan arrow connects the first keypoint in the Inference Outputs row to the first keypoint in the Adversarial Outputs row, indicating an 'inter-hypothesis identical' relationship (r1), with the loss term L_r1 placed beside it. This represents a constraint to minimize discrepancy between corresponding keypoints across models.

A thick blue arrow spans horizontally above the Inference Outputs row, connecting Keypoint 1 to Keypoint K, with downward-pointing blue arrows targeting each box. This denotes an 'intra-hypothesis non-identical' relationship (r2), where keypoints within the same hypothesis (inference output) are expected to differ. The loss term L_r2 is placed above the middle section of this blue arrow, signifying the objective to minimize discrepancy among these intra-hypothesis keypoints.

A thick red arrow runs horizontally below the Inference Outputs row, connecting the first keypoint to the last, with downward-pointing red arrows targeting each corresponding box in the Adversarial Outputs row. This represents an 'inter-hypothesis non-identical' relationship (r3), where keypoints from different hypotheses (inference vs. adversarial) should be maximally distinct. The loss term L_r3 is placed beside the middle section of this red arrow.

On the right side of the diagram, a legend clarifies the meaning of the arrow colors: cyan arrows indicate 'Minimize Keypoint Discrepancy', while red arrows indicate 'Maximize Keypoint Discrepancy'. The blue arrow's function is implied by its context and the label L_r2, which is part of the minimization objective as described in the caption. The figure uses ellipses ('...') between the third and last keypoint boxes in both rows to denote intermediate keypoints not explicitly drawn. The overall design emphasizes a multi-objective loss function that simultaneously enforces identity preservation (cyan), intra-model diversity (blue), and cross-model differentiation (red), as formalized in Equation \eqref{eq:r123} referenced in the caption.
