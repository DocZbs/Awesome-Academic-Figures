# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MalCL: Leveraging GAN-Based Generative Replay to Combat Catastrophic Forgetting in Malware Classification — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01110

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-phase methodology for malware detection evasion, divided into 'Training' on the left and 'Deployment' on the right, separated by a vertical black line. The global layout is horizontal, with the training phase showing data ingestion and model learning, and the deployment phase demonstrating adversarial exploitation.

In the Training phase, a 'Data Repository' box, shaded light orange, contains various icons representing malware samples: red skull-and-crossbones files, blue DLL/EXE icons, and horse (Trojan) symbols, indicating diverse file types. A solid black arrow labeled '①' points from this repository to a neural network model depicted as a multi-layered graph of interconnected white circles with black edges, enclosed in a rounded light blue rectangle. Above this model, a box labeled 'New Samples' (light purple background) displays similar malware icons, with a dashed blue arrow labeled '②' pointing downward to the neural network, indicating that new samples are fed into the model for training. Another dashed blue arrow labeled '②' loops back from the neural network to the 'New Samples' box, suggesting iterative feedback or retraining.

In the Deployment phase, a box labeled 'Legacy Samples' (light peach background) contains a subset of the same malware icons, but notably excludes some newer types present in the 'New Samples' set. A dashed red arrow points from 'Legacy Samples' to a second identical neural network model (same structure and color), indicating that the model trained on new samples is now being tested or exploited using older malware. A solid red arrow extends from this model to a rectangular box labeled 'Evade Detection', signifying successful bypass of the detection system. Adjacent to the 'Legacy Samples' box is a black silhouette icon of a hooded hacker using a laptop, visually reinforcing the adversarial nature of the deployment phase.

The figure’s caption clarifies the core concept: an attacker reuses legacy malware to evade systems updated with only new malware samples, exploiting the model's lack of exposure to older variants during training. The visual contrast between the two phases—blue arrows and labels for training, red for deployment—emphasizes the shift from benign model development to malicious exploitation.
