# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlockDoor: Blocking Backdoor Based Watermarks in Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12194

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the BlockDoor architecture, which employs a Wrapper function designed to detect and eliminate trigger samples containing adversarial noise before they reach a potential watermarked model. The global layout is a rectangular box labeled 'Wrapper' that encapsulates the entire processing pipeline. The flow begins from the left with an 'Input' arrow entering the wrapper, leading to a red rectangular module labeled 'Modified ResNet'. This module processes the input and produces one of two outputs: if the output is an adversarial image (indicated by a small blurred image thumbnail and the label 'Output is Adv Image'), a red arrow branches upward to a second red rectangular module labeled 'Autoencoder'. The Autoencoder then reconstructs the image, producing a 'Reconstructed Image' (shown as a slightly clearer thumbnail), which is fed via a red arrow into the next stage. If, instead, the Modified ResNet outputs a normal image (indicated by a clear fish image thumbnail and the label 'Output is Normal Image'), a teal-colored arrow proceeds directly to the next module. Both paths converge at a purple rectangular module labeled 'Potential Watermarked Model', which receives either the reconstructed image or the original normal image. From this module, a black arrow leads to the right, labeled 'Label', indicating the final classification output. The decision point between the two paths is marked with the word 'if', signifying a conditional routing based on whether the output from Modified ResNet is adversarial or normal. The visual modules are color-coded: Modified ResNet and Autoencoder are red, the Potential Watermarked Model is purple, and the conditional path is teal. All text labels are in black sans-serif font, except for 'Input' and 'Label', which are in red. The figure's purpose, as stated in the caption, is to depict a system that detects adversarial noise and mitigates its impact by reconstructing corrupted images before they are processed by a potentially watermarked model.
