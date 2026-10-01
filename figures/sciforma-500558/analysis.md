# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploring More from Multiple Gait Modalities for Human Identification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11495

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct architectural diagrams side-by-side, separated by a vertical line. On the left is the pipeline of MultiGait++, and on the right is the architecture of MultiGait^(s+p+f), as indicated in the caption.

[1] Global Layout and Structure:
The left side shows a complex dual-branch network structure with an additional commonality extraction and characteristic differentiation module at the bottom. The right side displays two parallel architectures labeled (a) MultiGait* and (b) MultiGait*+#, both featuring sequential convolutional stages followed by a fusion block and output stage.

[2] Visual Modules and Attributes:
On the left, the MultiGait++ pipeline begins with two input branches: Appearance Branch (represented by grayscale silhouette images labeled 'cat') and Motion Branch (represented by color motion maps). Each branch passes through Conv0 and Stage1 blocks, producing feature maps f_ap and f_mo respectively. These converge into a central C^2 module (gray rounded rectangle), which feeds into a Common Branch (dashed box containing Stage2 and Stage3 blocks). Outputs from the Appearance and Motion branches also feed directly into Stage2 and Stage3 blocks within the Common Branch. The outputs from these stages are fused in a Fusion block (gray rounded rectangle), followed by Stage4 and a Gait Head (rounded rectangle).

Below this main flow, two submodules are shown: (a) Commonalities Extraction and (b) Characteristic Differentiation. In (a), features f_ap and f_mo are processed through E_ap and E_mo (gray rectangles), then passed through Softmax, Min, and Min-Max Norm operations (represented by small grid icons), generating masks m_ap and m_mo. In (b), these masks are used to compute adjusted features f'_ap, f'_co, and f'_mo using equations: f'_ap = f_ap * m_ap * (1 - m_co), f'_co = (f_ap + f_mo)/2 * m_co, and f'_mo = f_mo * m_mo * (1 - m_co), where m_co represents Common Concerns and (1 - m_co) represents Different Concerns.

On the right, both architectures start with input I* or I# (square boxes) feeding into Conv0, followed by sequential stages S1, S2, S3, and S4 (trapezoidal shapes). For (a) MultiGait*, the output flows directly to S4. For (b) MultiGait*+#, two streams are shown: one from I* and another from I#, each passing through Conv0, S1, S2, S3. These streams merge into a Fusion block (large gray rectangle), which has a cloud-shaped annotation listing three fusion methods: (a) Concat, (b) Attention, (c) Addition. The fusion output proceeds to S4. Labels indicate Input-level, Middle-level, and High-level processing stages along the paths.

[3] Connections and Arrows:
In MultiGait++, arrows show data flow from inputs to Conv0 and Stage1, then to C^2. From C^2, arrows split to feed both the Common Branch and direct Stage2/Stage3 blocks. Outputs from these converge into the Fusion block, leading to Stage4 and Gait Head. Dashed arrows connect C^2 to the Commonalities Extraction and Characteristic Differentiation modules. Within these modules, arrows show transformations from f_ap/f_mo to masks m_ap/m_mo, and then to adjusted features f'_ap/f'_co/f'_mo.

In MultiGait* and MultiGait*+#, solid arrows indicate forward propagation from input to Conv0, then sequentially through S1-S4. In MultiGait*+#, two parallel streams converge into the Fusion block via arrows from S3 of each stream. The Fusion block outputs to S4. A dashed arrow from the Fusion block points upward to a Gait Head in the top diagram, indicating the final classification output.
