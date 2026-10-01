# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards a Universal Synthetic Video Detector: From Face or Background Manipulations to Fully AI-Generated Content — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12278

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural overview of a deep learning model designed for DeepFake detection, structured as a vertical pipeline from input images to final classification score. At the bottom, a sequence of video frames depicting a person in traditional attire is shown as input data. These frames are fed into a green rectangular module labeled 'SigLIP-So400m Vision Encoder', which is marked with a blue snowflake icon indicating frozen parameters. The output of this encoder is combined with positional encoding (PE), represented by a gray circular node with a wavy line, via a purple plus sign node. This combined feature vector then enters a transformer-based encoder block, outlined in yellow and labeled 'Encoder Block'. Inside this block, there are four stacked layers: a light blue rectangle labeled 'Multi-Head Attention', followed by a yellow rectangle 'Add & Norm', then a pink rectangle 'MLP', and another 'Add & Norm' layer. Each of these layers has a residual connection looping back to the previous Add & Norm layer. The entire encoder block is repeated four times, as indicated by the '4x' label on the left side. The output of the final Add & Norm layer feeds into a beige rectangular module labeled 'Classifier Layers', which is marked with a flame icon indicating trainable parameters. From this module, a solid blue arrow points upward to a green double-circle labeled 'score', representing the final prediction output. On the right side of the diagram, two dashed red vertical lines indicate backpropagation paths: one labeled 'L_AD' (Attention-Diversity Loss) extending from the encoder block to the input, and another labeled 'L_CE' (Cross-Entropy Loss) extending from the classifier layers to the encoder block. A legend box on the right clarifies symbols: L_CE denotes Cross-Entropy Loss, L_AD denotes Attention-Diversity Loss, PE denotes Positional Encoding, the flame icon represents trainable parameters, the snowflake icon represents frozen parameters, solid blue arrows represent forward propagation, and dashed red arrows represent backpropagation. The overall layout is hierarchical and sequential, emphasizing the flow of data through the network and the distinction between frozen and trainable components, as well as the dual loss functions guiding training.
