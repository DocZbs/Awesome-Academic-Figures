# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Robust Persian Digit Recognition in Noisy Environments Using Hybrid CNN-BiGRU Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10857

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram of a deep neural network architecture designed for processing audio signals, likely for tasks such as speech recognition or classification. The global layout is left-to-right, depicting a sequential pipeline starting from raw input and progressing through multiple stages of feature extraction and classification.

The process begins on the far left with an 'Input' represented by a blue waveform, which feeds into an 'MFCC Block' enclosed in a rounded rectangle. This block converts the raw audio signal into Mel-frequency cepstral coefficients (MFCCs), forming the initial feature representation. From the MFCC Block, data flows into a 'CNN layer', visualized as a stack of orange 3D blocks, indicating convolutional operations.

Following the CNN layer, the architecture employs a series of 'Residual CNN' modules, shown as rectangular boxes containing stacked orange blocks. These modules are arranged in a cascading fashion, with skip connections indicated by dashed lines looping back to earlier layers, characteristic of residual networks. A detailed expansion of one 'Residual CNN' module is shown below the main flow: it consists of two identical branches. Each branch includes a 'LayerNorm + GeLU' operation (represented by a gray parallelogram), followed by a 'CNN + Pooling' block (orange 3D stack). The outputs of these two branches are combined via an element-wise addition (indicated by a circle with a plus sign), forming the residual connection.

After the final Residual CNN module, the output is transformed into a 'Feature map', depicted as a stack of yellow 3D blocks. This feature map is then flattened into a 1D vector, shown as a vertical column of white squares labeled 'Flatenning'.

The flattened features are fed into 'FC layer1', represented by a set of blue circles connected to the flattened vector, indicating a fully connected layer. The output of FC layer1 is passed to a 'BiGRU BLOCK', which contains two stacked BiGRU units. Each BiGRU unit is composed of two GRU layers operating in opposite directions (forward and backward), symbolized by arrows pointing left and right within rectangular boxes labeled 'GRU'. A detailed expansion of the BiGRU BLOCK is shown below: it includes a 'LayerNorm' block (blue parallelogram) before the BiGRU unit, which itself contains two GRU layers with bidirectional flow.

The output from the BiGRU BLOCK is then processed by 'FC layers 2,3', illustrated as a multi-layer perceptron with purple hidden nodes and red output nodes labeled 0 through 9. These red nodes represent the final classification output, likely corresponding to digits or classes. The entire network concludes with an 'Output' label pointing to the final classification layer.

Connections throughout the diagram are represented by solid black arrows indicating the forward pass of data. Dashed lines are used for skip connections within the Residual CNN and for linking the expanded modules to their positions in the main diagram. The color coding is consistent: orange for CNN layers, yellow for feature maps, blue for FC layer1 and LayerNorm, purple for intermediate FC layers, and red for the final output nodes.
