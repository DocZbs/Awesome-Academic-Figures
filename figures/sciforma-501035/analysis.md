# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlockDoor: Blocking Backdoor Based Watermarks in Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12194

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the BlockDoor framework, designed to detect and thwart backdoor attacks on watermarked machine learning models by identifying three distinct types of trigger-based attacks. The global layout is divided into two main sections: the left side shows the initial setup and detection process, while the right side details the three specific trigger types and their corresponding detection mechanisms within the BlockDoor system.

On the left, a 'Watermarked Model' is depicted as a black grid with a green fingerprint icon, symbolizing a model protected by a watermark. This model is subjected to a 'Check for watermarks' process, represented by a red question mark. If the check fails, a red padlock icon appears, indicating a compromised or potentially backdoored model, which then triggers an alert shown by a running stick figure carrying a bag, symbolizing an attack or breach.

Two data sets are input into the system: the 'Test Set', containing test samples and labels (represented by blue folder and document icons), and the 'Trigger Set', containing trigger samples and labels (represented by purple key and document icons). These are used in two parallel paths: 'Inference' and 'Verification'.

The 'Inference' path uses the Test Set to evaluate the model's performance. A diamond-shaped decision node labeled 'Accuracy as Expected?' checks if the model’s accuracy meets expected standards. If yes, a green thumbs-up icon indicates success; if not, it may suggest tampering.

The 'Verification' path, marked by a red magnifying glass, routes the Trigger Set through a pink rectangular module labeled 'Wrapper', which contains the 'BlockDoor' system. Inside this wrapper, the same 'Accuracy as Expected?' decision node is applied to the Trigger Set. If accuracy is not as expected, a red thumbs-down icon appears, signaling a detected backdoor.

On the right side, three detailed diagrams illustrate the three types of triggers that BlockDoor can detect:

1. **Adversarial Trigger**: Shown in a white box with a purple border, this trigger uses a modified input that passes through an autoencoder. The output is either an adversarial image (if the model is compromised) or a normal image. The reconstructed image is then fed to a 'Potential Watermarked Model' to predict a label. The presence of an adversarial output indicates a backdoor.

2. **Out-of-Distribution (OOD) Trigger**: Depicted in a green-bordered box, this trigger uses an OOD detection model. An image input is classified as either OOD or from the original distribution. If the model outputs a label for an OOD sample, it suggests a backdoor, as the model should not respond to out-of-distribution inputs.

3. **Random Labels Trigger**: Shown in a white box with a purple border, this trigger uses a secondary model (e.g., VGG16 BN) to generate a label y from convolutional layer outputs. The potential watermarked model produces a label x. If label y does not equal label x, the system flags a backdoor. A random image with a label (e.g., 'Label (Not X)') is shown with a red 'X' if mismatched, or a green checkmark if matched, indicating whether the model is behaving correctly.

The entire system is designed to verify the integrity of a watermarked model by testing its response to both normal and trigger inputs, using the BlockDoor wrapper to detect anomalies in accuracy, thereby preventing backdoor attacks.
