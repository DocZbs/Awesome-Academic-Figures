# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Branch Mutual-Distillation Transformer for EEG-Based Seizure Subtype Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15224

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a vanilla Vision Transformer (ViT) architecture adapted for EEG signal classification. The global layout is left-to-right, depicting a sequential data processing pipeline from raw EEG signals to classification output. On the far left, three raw EEG waveforms are shown in blue, purple, and teal. These signals undergo a 'patchify' operation, which divides each waveform into smaller, fixed-length segments represented as individual rectangular patches. These patches are arranged in a grid format, with multiple rows corresponding to different channels or time segments, and each patch retains its original color to indicate channel identity. Below this grid, a horizontal sequence of colored rectangles represents the flattened patch embeddings, where each rectangle corresponds to one patch and maintains the same color coding as the original waveform it originated from.

This sequence of patch embeddings is fed into an 'Input Embedding' module, depicted as a gray rounded rectangle. The output of this module is combined with 'Positional Encoding', symbolized by a sine wave icon connected via a circle with a plus sign, indicating element-wise addition. This combined embedding serves as input to the central component: 'N× Transformer Encoder Blocks', enclosed in a large light-gray rounded rectangle. Each encoder block contains two main submodules: a 'Multi-Head Attention' layer (blue rounded rectangle) followed by an 'Add & Norm' layer (yellow rounded rectangle), and then a 'Feed Forward' network (light-blue rounded rectangle) followed by another 'Add & Norm' layer. The connections within each block show residual connections: the output of each submodule is added to its input before normalization, forming a skip connection.

The output from the final Transformer encoder block is passed to a downstream classifier. This is represented on the right side of the diagram within a light-green rounded rectangle labeled 'Classifier'. Before entering the classifier, the outputs from all positions (patches) are averaged using an 'Average' operation, symbolized by a small yellow square above a horizontal bar composed of multiple yellow rectangles, each representing a token's output. The averaged representation is then processed by a 'Linear' layer (green rounded rectangle) followed by a 'Softmax' layer (light-green rounded rectangle), which produces the final classification probabilities. A feedback loop is shown from the top of the 'Transformer Encoder Blocks' back to the 'Average' step, suggesting that the entire sequence of outputs from the encoder is used for averaging, not just the final state. All arrows indicate the direction of data flow, with solid black lines connecting modules, and the overall structure emphasizes a feed-forward architecture with residual connections within the encoder blocks.
