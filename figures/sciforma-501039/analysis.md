# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlockDoor: Blocking Backdoor Based Watermarks in Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12194

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the BlockDoor architecture, specifically focusing on a Wrapper function designed to detect and mitigate randomly labeled samples that may serve as trigger samples in adversarial or watermarking contexts. The global layout is structured as a flowchart enclosed within a large gray-bordered rectangle labeled 'Wrapper', which receives an input image from the left. This input is processed through two parallel pathways within the wrapper.

The first pathway begins with a red rectangular block labeled 'VGG16 BN', representing a VGG16 model with batch normalization. Its output, labeled 'Convolutional Layer Output', is fed into a second red rectangular block labeled 'Secondary Model'. This Secondary Model produces an output labeled 'Label y'.

The second pathway branches directly from the VGG16 BN block to a purple rectangular block labeled 'Potential Watermarked Model'. This model generates an output labeled 'Label x'.

Both labels, 'Label y' and 'Label x', are compared via a conditional decision point represented by the text 'If label y = label x'. If the condition is satisfied, the flow proceeds to a green checkmark icon inside a dark gray box labeled 'Label X', indicating successful identification of a legitimate sample. If the condition is not met, the flow leads to a red cross icon inside a dark gray box labeled 'Random Image Label (Not X)', indicating detection of a randomly labeled or potentially malicious sample.

All connections between components are depicted using solid gray arrows, indicating the direction of data flow. The visual modules are distinguished by color: red for the primary feature extraction and secondary classification path (VGG16 BN and Secondary Model), and purple for the potential watermark detection path (Potential Watermarked Model). The decision outcome boxes use standard icons (green check for success, red cross for failure) to visually communicate the result of the comparison. The entire process is encapsulated within the 'Wrapper' module, emphasizing its role as an overarching detection mechanism.
