# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

YOLO-UniOW: Efficient Universal Open-World Object Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20645

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative analysis of four detection framework architectures, labeled (a) through (d), illustrating different approaches to open-vocabulary and open-world object detection. The layout is divided into two main sections: the left side compares two open-vocabulary detection methods, while the right side contrasts open-world and open-vocabulary detectors with a proposed unified approach.

In section (a), an open-vocabulary detector is shown with a global structure involving a Text Encoder (light blue rounded rectangle with a snowflake icon), a Detector (peach-colored rounded rectangle with a flame icon), and an Image-Text Fusion module (yellow vertical rectangle). The Text Encoder and Detector feed into the Image-Text Fusion block, which then outputs to a circular cross symbol representing a fusion or decision operation. This setup emphasizes cross-modal fusion between text and image features.

Section (b) presents an alternative, more efficient open-vocabulary detector, marked as 'our' method with Adaptive Decision Learning. It retains the same components — Text Encoder (light blue with flame icon) and Detector (peach with flame icon) — but omits the explicit Image-Text Fusion module. Instead, the outputs from both modules directly feed into the circular cross symbol, suggesting a streamlined, adaptive decision-making process without intermediate fusion.

A vertical dashed line separates the left and right sections. On the right, section (c) compares two distinct detector types. The first, an Open-Vocabulary Detector (green rounded rectangle), takes inputs from Image and Text (gray rectangles) and outputs to two oval nodes: 'Classes in Text' and 'Known Classes', indicating it can detect only classes mentioned in the text. The second, an Open-World Detector (yellow rounded rectangle), also takes Image input and outputs to 'Known Classes' and 'Unknown', signifying its ability to distinguish known from unknown classes. Both detectors are shown as separate entities, highlighting their differing capabilities.

Finally, section (d) introduces the proposed Universal Open-World Detector (a green-yellow gradient rounded rectangle), which combines the strengths of both previous types. It takes two inputs: Image (gray rectangle) and Text & Wildcard (another gray rectangle), where 'Wildcard' implies a general placeholder for unknown classes. The output is directed to two ovals: 'Classes in Text' and 'Unknown', demonstrating its dual capability to handle both open-vocabulary and open-world detection tasks. The entire figure uses consistent visual attributes: rounded rectangles for models, gray rectangles for inputs, ovals for outputs, and arrows to indicate data flow. The 'VS.' labels between (a) and (b), and between (c) and (d), emphasize the comparative nature of the diagram.
