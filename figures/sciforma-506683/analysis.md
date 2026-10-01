# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI-Powered Cow Detection in Complex Farm Environments — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02080

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural workflow of the YOLOv5 object detection model, presented as a left-to-right data processing pipeline. The global layout consists of five main stages arranged horizontally: Dataset, Input Image, Backbone, Neck, Head, and Detection, each encapsulated within distinct colored boxes with labeled borders. The flow begins on the far left with a 'Dataset' box, outlined in red, containing four small example images of cows in various farm environments, indicating the source of training or inference data. Below this, a green rounded rectangle labeled 'Input image' receives data from the dataset via a downward arrow, and then feeds into the next stage through a rightward arrow.

The second stage is the 'Backbone', enclosed in an orange dashed border. It contains three stacked orange rectangles symbolizing convolutional layers, with the label 'Extraction of features' beneath them, representing the initial feature extraction phase from the input image.

The third stage is the 'Neck', outlined in purple dashed lines. It displays three groups of stacked white squares, each group representing a level in a feature pyramid, with the label 'Elaboration in Feature Pyramids' below. This module processes multi-scale features extracted by the backbone.

The fourth stage is the 'Head', enclosed in a yellow dashed border. It contains two components: an upper section showing a small image with multiple yellow bounding boxes overlaid, labeled 'Bouding Boxes + confidence score', with one box annotated 'cow 37%'; and a lower section displaying a heat map-like image labeled 'Class probability map'. These two components converge at a central circular node, indicating fusion or integration of spatial and class information. The head outputs both localization and classification predictions.

The final stage is 'Detection', outlined in blue dashed lines. It lists three bullet points: 'Predicted bounding box', 'Confidence score', and 'Predicted object class'. A sample output image of a cow with a green bounding box and 'cow 87%' label is shown, demonstrating the final result. Two thick gray arrows originate from the Head’s central node—one pointing to the bounding box/confidence output and another to the class probability map—both leading to the Detection stage, illustrating how the head’s outputs are combined to produce the final detection result.

All connections between modules are represented by solid gray arrows, indicating the direction of data flow. The visual design uses color-coded dashed borders (red, orange, purple, yellow, blue) to distinguish each functional block, while internal elements use consistent shapes (rectangles, squares, circles) and labels to denote specific operations or outputs. The figure effectively communicates the end-to-end process of object detection using YOLOv5, from raw image input to final predicted bounding boxes and class labels.
