# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Navigating limitations with precision: A fine-grained ensemble approach to wrist pathology recognition on a limited x-ray dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13884

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a plug-in module pipeline designed for fine-grained wrist pathology recognition, structured as a sequential flow from input image processing through feature extraction, noise suppression, feature combination, and final classification. The global layout is left-to-right, beginning with an input X-ray image of a wrist on the far left, progressing through a multi-stage backbone network, followed by weakly supervised selectors, a combiner, and concluding with a fully connected layer leading to a classification bar chart.

The visual modules are organized into distinct functional blocks. On the far left, the 'Input Image' is represented as a grayscale X-ray image of a wrist, labeled with 'L' indicating orientation. This feeds into a vertical stack of three rounded rectangular blocks labeled 'Backbone Block₁', 'Backbone Block₂', and 'Backbone Blockₙ', arranged sequentially from bottom to top within a large rounded rectangle. These blocks represent successive layers of a deep neural network, each producing a feature map denoted as F₁, F₂, ..., Fₙ, respectively. Each feature map is visually represented as a 3D cube with dimensions specified as ℝᴴ×W×C, where H, W, and C denote height, width, and channel dimensions.

From each Backbone Block, a feature map Fᵢ is directed to a corresponding 'Weakly Supervised Selector' module, depicted as a rounded rectangle with light purple fill and dark text. These selectors process the feature maps to identify and suppress noise areas, with arrows pointing upward or downward from each selector labeled 'Noise Area'. The outputs of these selectors are then fed into a tall vertical rectangular block labeled 'Combiner', which aggregates the processed features into a unified representation shown as a grid of pinkish-purple squares, symbolizing a flattened feature vector of size ℝᴺ×C.

Following the combiner, the aggregated features pass through a bracketed sequence of vertical bars representing a pooling or reduction operation, indicated by the notation '∑', before entering a blue rectangular block labeled 'FC' (Fully Connected layer). The FC layer outputs a classification result displayed as a horizontal bar chart with four categories: 'Bone anomaly', 'Fracture', 'Metal', and 'Soft tissue'. The 'Bone anomaly' category is highlighted with a red bar, indicating the predicted class with highest confidence.

Connections between modules are represented by solid black arrows indicating data flow direction. The backbone blocks are connected vertically via upward-pointing arrows labeled with feature maps F₁, F₂, ..., Fₙ. Horizontal arrows connect each backbone block’s output to its respective weakly supervised selector. Outputs from the selectors feed into the combiner via horizontal arrows. From the combiner, a rightward arrow leads to the pooled representation, followed by another arrow to the FC layer, and finally to the classification bar chart. The diagram uses consistent color coding: backbone blocks are light purple with blue gradients, selectors are light purple, the combiner is lavender, and the FC layer is light blue. Text labels are black and clearly legible, with mathematical notations such as ℝᴴ×W×C and ℝᴺ×C included to specify tensor dimensions.
