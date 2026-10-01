# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI-Powered Cow Detection in Complex Farm Environments — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02080

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive pipeline for cow detection model development, divided into two main stages: Dataset construction and Model building. The global layout is horizontal and modular, with the top section dedicated to dataset preparation and the bottom to model training and evaluation. The entire process flows from left to right, with clear directional arrows indicating progression.

In the Dataset construction stage, section A, labeled 'Cow data collection', displays four real-world images of cows in various environments—pasture, milking parlor, close-up of a cow’s head with a sensor, and a group in a barn—illustrating the raw data sources. This feeds into section B, 'Data augmentation', which shows five example transformations applied to cow images: Flip, Rotate, Crop, Saturation adjustment, and Brightness adjustment. These augmented images are visually represented with corresponding labels beneath each transformed sample. Section C, 'Labeling data', features three cow images overlaid with colored bounding boxes (green, red, blue), indicating manual annotation for object detection. An arrow leads from this step to a vertical stack of three yellow rectangular blocks labeled 'Training set', 'Validation set', and 'Test set', representing the data split.

Transitioning to the Model building stage, the 'Training set' block serves as input to a grouping labeled D, which contains three detection models: Mask R-CNN, YOLOv5, and YOLOv8-CBAM. These are presented as white rectangular boxes with rounded corners, stacked vertically within a large curly brace. From this group, an arrow points to section E, 'Model training', a gray-bordered box, which receives feedback optimization via a dashed orange arrow looping back from section F. The 'Validation set' is shown below 'Model training', connected by an upward arrow, indicating its role in tuning the model during training. Following training, an arrow leads to section F, 'Model test', another gray-bordered box, which is fed by the 'Test set' via an upward arrow. Finally, an arrow connects 'Model test' to 'Comparative and Analysis', a final gray-bordered box, signifying the evaluation phase where model performances are compared and analyzed.

All major components are labeled with uppercase letters (A–F) for reference. The visual modules use consistent shapes: rectangles for processes and datasets, with color coding—yellow for datasets, white for models, and gray for training/testing phases. Text labels are clear and positioned adjacent to or inside the respective modules. The feedback loop from model testing to training is emphasized with a dashed orange line labeled 'Feedback optimization'. The overall structure is clean, sequential, and logically organized to reflect the end-to-end workflow from data acquisition to model analysis.
