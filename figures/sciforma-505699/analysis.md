# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Aggregation and Segregation of Representations for Domain Adaptive Human Pose Estimation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20538

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-hypothesis network architecture designed to model and analyze discrepancies between different pose estimation hypotheses. The global layout is structured into three main vertical sections: 'Input' on the left, 'Network' in the middle, and 'Output' on the right. The 'Input' is represented by a single purple square, which feeds into two parallel processing branches labeled 'Hypothesis 1' and 'Hypothesis 2'. Each hypothesis branch consists of a trapezoidal module (orange for Hypothesis 1, green for Hypothesis 2) that processes the input and produces an output sequence of keypoints. These outputs are depicted as rectangular blocks (orange for Hypothesis 1, green for Hypothesis 2), each labeled with a sequence of body parts from 'head' to 'right ankle', indicating a full pose representation.

In the 'Output' section, three types of discrepancies are defined and visually annotated with colored arrows and corresponding textual explanations on the far right. The red arrow labeled r₁ connects the orange and green output blocks vertically, representing the 'r₁ discrepancy: discrepancy between inter-hypothesis identical keypoints'. This measures how similar the same keypoints (e.g., head, right ankle) are across different hypotheses. The blue double-headed arrow labeled r₂ connects the two orange output blocks horizontally, denoting the 'r₂ discrepancy: discrepancy between intra-hypothesis non-identical keypoints'. This captures the variation within a single hypothesis across different body parts. The gray arrow labeled r₃ points diagonally from the orange output block to the green output block, indicating the 'r₃ discrepancy: discrepancy between inter-hypothesis non-identical keypoints', which evaluates differences between distinct keypoints across different hypotheses.

The visual modules are color-coded to distinguish between the two hypotheses: Hypothesis 1 uses orange for both its processing module and output block, while Hypothesis 2 uses green. All connections are directed arrows, with colors matching the discrepancy type they represent. The figure emphasizes that while existing methods focus only on r₁, this work introduces r₂ and r₃ to improve consistency within hypotheses and discrimination between them, respectively. The overall structure follows a feed-forward pipeline from input through dual hypothesis branches to output, with post-processing discrepancy analysis applied to the outputs.
