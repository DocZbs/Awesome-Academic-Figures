# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Physics-Based Adversarial Attack on Near-Infrared Human Detector for Nighttime Surveillance Camera Systems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13709

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for adversarial pattern synthesis used to attack a detector in a near-infrared (NIR) imaging context. The global layout is horizontal and sequential, progressing from left to right: starting with 2D segmentation maps, moving through binary shape patterns, adversarial pattern generation, combination with NIR backgrounds, creation of attacked images, detection via a neural network model, and finally outputting average confidence scores. The structure is organized into multiple parallel rows, each representing an independent trial or pattern variation, with vertical ellipses indicating additional intermediate steps not shown explicitly.

On the far left, a 2D segmentation map is shown as a color-coded silhouette of a person against a black background, with distinct body parts labeled in different colors. From this map, multiple binary shape patterns are generated, each represented as a sequence of 0s and 1s enclosed in light blue rectangular boxes. These binary patterns are applied to the segmentation map by assigning a value of 255 to segments where the binary value is 1, and 0 otherwise, resulting in adversarial patterns — grayscale images showing the person’s silhouette with varying high-contrast regions corresponding to the binary pattern.

Each adversarial pattern is then added (indicated by a '+' symbol) to a real NIR background image, which shows a grayscale architectural scene. The result is an 'Attacked Image' — a composite image where the adversarial silhouette is superimposed onto the background. This process is repeated for N different binary patterns, producing N attacked images.

Each attacked image is fed into a detector, visually represented as a small neural network diagram with two layers: an input layer of blue nodes connected to a hidden layer of yellow nodes, fully interconnected. The output of the detector for each image is an average confidence score, denoted as c₀, c₁, ..., c_{N−1}, which quantifies the detector's confidence in identifying the target within the attacked image. These scores are used to rank the binary patterns for further selection in the attack optimization process.

Arrows indicate the flow of data: from the 2D segmentation map to the binary patterns, then to adversarial patterns, followed by addition with the NIR background, leading to attacked images, which are processed by the detector to yield confidence scores. The entire process is repeated for multiple binary patterns, forming a parallelized evaluation framework. The figure effectively visualizes how different binary shape patterns influence the detector’s response when embedded into real-world NIR scenes.
