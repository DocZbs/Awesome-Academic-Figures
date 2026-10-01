# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting the Reliability of an Image Classifier under Image Distortion — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the construction of a training set R for evaluating or training a model based on the reliability of image distortions. The global layout is a left-to-right dataflow diagram, starting from a search space C and ending with the constructed training set R. On the far left, a blue oval labeled 'search space C' feeds into a table with columns 'Rotation' and 'Brightness', representing sampled distortion parameters c1, c2, c3, etc., each with specific values (e.g., c1: rotation=20, brightness=1). An arrow labeled 'sampling' connects the search space to this table. From this table, an arrow points to a stack of images labeled 'verification set D', indicating that these distortion parameters are applied to the images in D. Three separate stacks of distorted images, labeled D'_c1, D'_c2, and D'_c3, branch out from the verification set, each corresponding to one sampled distortion parameter. These distorted image sets are then fed into a green-bordered rectangular box labeled 'image-classifier T', which outputs accuracy scores for each distortion level (e.g., 0.82, 0.96, 0.77). A blue box labeled 'h = 0.95' represents a threshold value; arrows from the accuracy scores point to a 'label' column where each accuracy is compared to h to assign a binary label: 0 ('non-reliable') if accuracy < h, and 1 ('reliable') if accuracy ≥ h. For instance, 0.82 yields label 0, 0.96 yields label 1, and 0.77 yields label 0. The final step combines the original distortion parameters (c1, c2, c3) with their assigned labels into a table labeled 'training set R', which contains rows of (sample, label) pairs such as (c1, 0), (c2, 1), (c3, 0). The visual modules include ovals for abstract spaces, tables for structured data, image stacks for datasets, and a green rectangle for the classifier. All text is black except for headers in blue. Arrows indicate the direction of data flow, with solid black lines connecting all components. The diagram is designed to show how distortion parameters are sampled, applied to images, evaluated by a classifier, and labeled based on performance to form a training dataset.
