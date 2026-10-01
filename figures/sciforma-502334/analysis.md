# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

HA-RDet: Hybrid Anchor Rotation Detector for Oriented Object Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14379

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage process for computing orientation-aware features in an anchor-based object detection framework, specifically designed to improve performance in tasks like aircraft detection where orientation matters. The global layout consists of three sequential panels arranged horizontally, each depicting a grid-based image space containing an airplane, with bounding boxes and feature points overlaid. Arrows between panels indicate progression from initial offset computation to final feature generation.

In the first panel, a red diamond-shaped 'Ground-truth box' encloses the airplane, while a green rectangular 'Anchor box' is positioned nearby. A blue rectangular 'Rectangularized Ground-truth target' is also shown, representing a transformed version of the ground-truth box. Small arrows—blue for 'Shape offset' and red for 'Orientation Offset'—emanate from points on the anchor box toward corresponding points on the ground-truth box, indicating the direction and magnitude of adjustments needed. Green dots represent 'Convolution Feature' points extracted from the anchor box region.

The second panel shows the intermediate state after applying the shape and orientation offsets. The green anchor box has been adjusted to better align with the red ground-truth box, guided by the offset vectors. Blue dots now appear, labeled as 'Shape Computed Feature', indicating features derived from the shape offset application. The red orientation offset arrows remain, suggesting that orientation adjustment is still being processed.

In the third panel, the final state is shown. The anchor box is further refined, and red dots labeled 'Final Computed Feature' are distributed within the adjusted region, representing the combined result of both shape and orientation offset computations. A black arrow labeled 'w_learn' points from the final computed features to the top-right corner, symbolizing the learned weights or parameters used in the subsequent training phase of the anchor-based refinement stage.

A legend on the right side of the figure clarifies all visual elements: red square = Ground-truth box, green square = Anchor box, blue square = Rectangularized Ground-truth target, blue arrow = Shape offset, red arrow = Orientation Offset, green dot = Convolution Feature, blue dot = Shape Computed Feature, red dot = Final Computed Feature. The caption explains that shape offsets are computed based on anchor size, while orientation offsets use the ground-truth orientation. Together, these produce orientation-aware features that significantly boost the performance of the HA-RDet model.
