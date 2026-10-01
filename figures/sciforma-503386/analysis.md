# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Adapting Whisper for Code-Switching through Encoding Refining and Language-Aware Decoding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16507

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an encoder refiner and a language-aware adaptation module for a multilingual speech-to-text system. The global layout is divided into two main vertical sections: the left side represents the Encoder Refiner, and the right side shows the language-aware adaptation component. Both components are enclosed in dashed rectangular boundaries, indicating modular design.

On the left, the Encoder Refiner begins at the bottom with a '2 x Conv1d' layer, depicted as a light blue trapezoid. This feeds into a stack of four blocks, each containing a core module (Self Attention, MLP, adapter, or LSTM) followed by a residual connection symbolized by a circular '+' node. The first block contains 'Self Attention', followed by an 'adapter' (blue rectangle), then 'MLP', and another 'adapter'. These blocks are stacked vertically within a large light blue dashed rectangle. Above this stack, an 'LSTM' block (dashed rectangle) receives input from the final adapter via a residual connection. The output of the LSTM is fed into a final '+' node, which connects to a dashed box labeled 'CTC' at the top, indicating Connectionist Temporal Classification as the loss function or output layer.

On the right, the language-aware adaptation module is structured as a dual-path network, processing Chinese ('zh') and English ('en') inputs separately but in parallel. At the bottom, two prompts '<zh> prompt' and '<en> prompt' feed into separate 'Self Attention' blocks. Each path then passes through a 'Cross Attention' block, which receives input from both paths. Following this, an 'MLP' block processes the combined features. Each path then branches into a dedicated adapter: 'zh adapter' (light green) and 'en adapter' (light orange). These adapters are connected via residual connections to the previous layers. The outputs of both adapters are summed via '+' nodes and fed into a 'fusion module' at the top. This fusion module consists of a 'linear' layer (pink rectangle) followed by a 'SoftMax' layer (also pink), producing a final output sequence represented by tokens like '你', 'big', and '...'.

Above the fusion module, two output sequences are shown: one labeled 'sot zh trans nots' for Chinese, and another 'sot en trans nots' for English, indicating start-of-token, language, translation, and end-of-token markers. Dashed arrows connect the fusion module's output to these sequences, suggesting the generation of tokenized outputs for both languages.

Connections throughout the diagram are represented by solid black arrows indicating data flow direction. Residual connections are marked with circular '+' symbols, denoting element-wise addition. The color coding distinguishes modules: blue for general adapters in the Encoder Refiner, light green for Chinese-specific adapters, light orange for English-specific adapters, and pink for the fusion module components. All major blocks are outlined with dashed borders, while the entire Encoder Refiner and adaptation module are enclosed in larger dashed rectangles.
