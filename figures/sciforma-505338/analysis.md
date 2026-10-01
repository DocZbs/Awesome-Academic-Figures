# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unveiling Secrets of Brain Function With Generative Modeling: Motion Perception in Primates & Cortical Network Organization in Mice — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19845

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure consists of two main panels, labeled 'a' and 'b', illustrating a hierarchical predictive coding model and its learned representations.

Panel 'a' presents a schematic diagram of a hierarchical predictive coding architecture. The global layout is linear and left-to-right, depicting a cascade of processing stages. On the far left, an 'Input' signal enters a circular node marked with a minus sign, representing an inhibitory subtraction operation. This node receives a feedback signal labeled 'Prediction (Feedback)' from the first 'Predictive Estimator' module, which is connected via a downward arrow labeled 'Inhibition'. The output of this subtraction node is a 'Feedforward Error Signal', which is directed into the first 'Predictive Estimator' block. Each 'Predictive Estimator' is represented as a rectangular box with bold black borders and centered text. The first estimator generates a 'Prediction' signal, which feeds back to the input node, and also produces an 'Error Signal' that is passed forward to the next estimator. This pattern repeats: each subsequent 'Predictive Estimator' receives an error signal from the previous stage, generates its own prediction (fed back to the prior stage), and outputs a new error signal to the next higher level. The diagram shows three such estimators in sequence, with the final error signal exiting the system. All arrows are solid black lines with standard arrowheads, indicating the direction of information flow. Text labels are in black sans-serif font, positioned near the corresponding signals or modules.

Panel 'b' displays visualizations of learned feature representations across different levels of the hierarchy. It is organized into three horizontal rows. The top row, labeled 'Level 1', contains 10 grayscale images arranged side-by-side; these appear as small, localized, blob-like patterns, some with central dark spots and surrounding bright halos, suggesting simple edge or spot detectors. The middle row, labeled 'Level 2', also contains 10 grayscale images; these are more complex, showing elongated or curved structures, often with multiple dark regions, indicative of higher-order features like oriented bars or corners. The bottom row, labeled 'Level 1 (with sparse prior distribution)', shows 20 grayscale images arranged in two rows of ten. These features are predominantly oriented line segments or edges at various angles, consistent with Gabor-like filters, and exhibit sparser activation patterns compared to the standard Level 1. All images are square, monochromatic, and displayed with uniform scaling. The labels for each row are placed above or below the respective set of images in a clear, black font.

The overall structure of the figure conveys a hierarchical generative model where predictions are made at each level, errors are computed by comparing predictions to inputs or lower-level predictions, and these errors drive learning and further prediction at higher levels. The visualizations in panel 'b' demonstrate how the model learns increasingly complex and abstract features as one moves up the hierarchy, with the bottom row showing the effect of imposing a sparsity constraint on the lower-level representation.
