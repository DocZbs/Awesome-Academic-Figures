# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Leveraging Self-Training and Variational Autoencoder for Agitation Detection in People with Dementia Using Wearable Sensors — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19254

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part system architecture for classifying AA in PwD, combining a Variational Autoencoder (VAE) with self-training semi-supervised learning. The global layout is divided into two main rectangular sections, each enclosed in a rounded border, positioned side-by-side. The left section is titled 'Variational Autoencoder (VAE)', and the right section is titled 'Self-Training Semi-Supervised Learning'. A horizontal line connects the output of the VAE to the input of the self-training module, indicating data flow from feature extraction to classification.

In the VAE section, the workflow begins with 'Input Data', represented by a tall blue rectangular prism. This flows into the 'Encoder' block, depicted as a dashed-line hexagon containing two green rectangular prisms, symbolizing layers or operations. The encoder compresses the input into 'Encoded Features', shown as a small orange cube at the center. From there, the data passes to the 'Decoder', another dashed-line hexagon with two green prisms, which reconstructs the data into the 'Output', a tall yellow rectangular prism. The components are arranged linearly from left to right, with clear directional flow indicated by implicit connections between blocks.

The self-training section on the right illustrates a semi-supervised learning loop. It starts with two parallel inputs: 'Labeled data' and 'Unlabeled data', both shown as rounded rectangles with dashed borders and light orange fill. The labeled data feeds into a 'Learning Algorithm' (light green rounded rectangle with dashed border), which is trained on it. The same learning algorithm produces a 'Prediction Model' (also light green, dashed border), which processes the unlabeled data. The prediction model's output is passed to 'Selection criteria' (purple rounded rectangle with dashed border), which filters predictions to form a 'Pseudo label Set' (another purple rounded rectangle). This pseudo label set is then used to 'Retrain' the learning algorithm, creating an iterative loop. A vertical arrow labeled 'Add Labels' connects the pseudo label set back to the labeled data input, indicating the augmentation of the training set over time. All connections are solid black arrows with classic arrowheads, clearly showing the direction of data and control flow. The entire diagram uses consistent visual styling: dashed borders for all modules, distinct colors for different functional types (blue for input, green for processing, orange for data, purple for selection/pseudo-labeling), and clear, bolded labels for each component.
