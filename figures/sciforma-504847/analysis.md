# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating deep learning models for fault diagnosis of a rotating machinery with epistemic and aleatoric uncertainty — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18980

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a deep learning architecture combining convolutional and recurrent neural network components, specifically a Convolutional LSTM model with Bernoulli dropout, as indicated by the caption. The global layout is a linear, left-to-right sequential flow, representing the data processing pipeline from input to output. The structure consists of eight main modules connected by solid black arrows indicating the forward propagation direction.

Starting from the left, the first module is an elongated oval-shaped node colored light blue, labeled 'Input (burst)', which represents the raw input data, likely time-series or burst-like signals. This connects via a black arrow to the first processing block: a light blue cube labeled 'Conv+Pool', symbolizing a convolutional layer followed by a pooling operation, typical in CNNs for feature extraction. Following this, a vertical gray rectangular block labeled 'Dropout' is shown, representing a Bernoulli dropout layer used to prevent overfitting by randomly deactivating neurons during training.

This sequence repeats: another light blue cube labeled 'Conv+Pool' is connected by an arrow from the first dropout layer, followed again by a gray 'Dropout' block. This double convolution-pooling-dropping stage suggests a deeper feature hierarchy extraction.

Next, the architecture transitions to a recurrent component: a light green cube labeled 'LSTM', indicating a Long Short-Term Memory unit designed to capture temporal dependencies in the sequence of features extracted by the previous layers. From the LSTM, a black arrow leads to a vertically oriented oval-shaped node labeled 'Dense layer', representing a fully connected layer that performs non-linear transformations on the LSTM output.

Following the dense layer, another gray 'Dropout' block appears, continuing the regularization strategy. Finally, the last module is a white oval-shaped node labeled 'Output layer', which produces the final prediction or classification result.

All connections are unidirectional, solid black arrows, emphasizing the feedforward nature of the network. The color coding distinguishes functional groups: light blue for convolutional blocks, light green for the LSTM, gray for dropout layers, and white for the final output. The shapes—cubes for computational blocks, ovals for input/output and dense layers, rectangles for dropout—help visually differentiate module types. The overall design reflects a hybrid CNN-LSTM architecture with dropout regularization at multiple stages, suitable for tasks involving spatiotemporal data such as signal classification or time-series forecasting.
