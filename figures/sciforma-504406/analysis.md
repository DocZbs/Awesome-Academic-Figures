# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Conditional Deep Canonical Time Warping — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18234

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed CDCTW (Conditional Dynamic Time Warping) model, designed for aligning and embedding time-series data from two different modalities or sources. The global layout is a horizontal flowchart with two parallel processing streams, one for input X and one for input Y, converging at a final alignment stage. On the far left, a light green dashed rectangle contains the raw inputs: matrix X and temporal context T_x for the top stream, and matrix Y and temporal context T_y for the bottom stream. Each stream begins with a pink rounded rectangle labeled 'Gating network'—the top one denoted by φ(t_x) and the bottom by ψ(t_y)—which processes the respective temporal context T_x or T_y. These gating networks output gate vectors z_x(t) and z_y(t), represented as black text labels on arrows. These gate vectors are then combined with the original input matrices X and Y via circular nodes with a dot in the center, symbolizing element-wise multiplication, producing modified inputs X̂ and Ŷ. The modified inputs are passed to blue rounded rectangles labeled 'Embedding network', with the top one denoted f(x) and the bottom g(y), which transform the data into feature representations. The outputs of these embedding networks are then fed into a tall orange rounded rectangle labeled 'Dynamic Time Warping', which performs alignment between the two sequences. Finally, an arrow leads from the DTW block to a small 3D scatter plot labeled 'Warped CCA embedding space', showing aligned points in red and teal, indicating the result of the alignment process. The connections are solid black arrows indicating the direction of data flow, with no feedback loops. The figure uses distinct colors to differentiate components: pink for gating, blue for embedding, orange for alignment, and green for input context. Text labels are clear and placed inside or adjacent to each module, with mathematical notation used for functions and variables as specified in the caption and LaTeX context.
