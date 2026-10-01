# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLO-UniOW: Efficient Universal Open-World Object Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20645

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the process of known/wildcard learning in a visual classification framework, structured as a flow from left to right. On the far left, two input groups are shown: 'Frozen Previous Known' (blue dashed box containing two blue circles) and 'Current Known' (red dashed box containing three red circles), representing fixed and trainable class embeddings respectively. These inputs feed into a central processing region, depicted as a large light-gray rectangular area with multiple overlapping bounding boxes of varying sizes and confidence scores. Within this region, green solid outlines denote 'Ground Truth' boxes, while gray solid outlines represent 'Pseudo Label' boxes, as indicated by the legend at the bottom. Specific confidence scores are displayed inside these boxes: 0.8 (green), 0.6 (gray), 0.3 (gray), 0.5 (gray), and 0.2 (green), with additional low-confidence scores like 0.001 shown in dashed gray boxes. Dashed boxes indicate filtered-out predictions—either due to low confidence or high Intersection over Union (IoU) overlap with known class ground truths. To the right of the central region, two vertical dashed boxes labeled 'Well-tuned Wildcard' (with a solid gray triangle) and 'Unknown Wildcard' (with a striped gray triangle) receive feedback from the central region via left-pointing arrows, indicating that the well-tuned wildcard’s predictions generate pseudo labels used to supervise the unknown wildcard. The overall layout follows a left-to-right data flow: known class embeddings (frozen or updated) are processed to produce detection outputs, which are then filtered and used to train wildcard representations. The visual design uses color-coded shapes (blue/red circles for inputs, green/gray boxes for ground truth/pseudo labels) and dashed lines to distinguish between active and filtered components, emphasizing the filtering mechanism based on confidence and IoU.
