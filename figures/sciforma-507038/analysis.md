# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Text to Band Gap: Pre-trained Language Models as Encoders for Semiconductor Band Gap Prediction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03456

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive overview of a band gap prediction framework using large language models (LLMs) trained on materials data. The layout is divided into four main sections labeled a, b, c, and d, each illustrating a different aspect of the methodology.

Section a outlines the global pipeline: starting from the 'Aflow Dataset', it proceeds through 'Feature Selection' to form a refined 'Dataset'. This dataset is then fed into a 'Predictive Language Model', described as a pre-trained language model with an added regression head, which ultimately outputs the predicted 'Band Gap'. All components are represented as rounded rectangles connected by gray arrows indicating the flow direction.

Section b details two distinct input representation formats. The first, 'String-based', is shown in a light yellow box and contains structured data such as compound name (e.g., Bi1Dy1Ni1), species list, composition, density, and valence_cell_iupac. The second, 'Description-based (GPT-3.5 turbo)', is displayed in a light green box and provides a natural language description of a compound (e.g., Cr1O3Ta1) including its atomic composition and density. Both representations are enclosed within a dashed border labeled 'b'.

Section c illustrates the model fine-tuning workflow. The process begins with 'Input: String/Description' (white rectangle), which flows into 'Tokenization' (light blue rectangle). The tokenized input is then processed by 'Multiple Model Architectures' (light green rounded rectangle containing four sub-models: RoBERTa Encoder-only, T5 Encoder-Decoder, MatSciBERT Encoder-only, and Llama3.2-1B Decoder-only, each in white rounded boxes). The output from these models is passed to a 'Regression Head' (orange rectangle) composed of additional linear, ReLU, and Dropout layers, culminating in the 'Band Gap' prediction (orange rectangle). Gray arrows connect all stages.

Section d provides a schematic of the Transformer encoder's core component: the multi-head attention mechanism. It begins with 'Input embedding' (gray rectangle), which feeds into a module labeled 'input' (gray rectangle). From this, three vectors—Query (Q, blue square), Key (K, green square), and Value (V, yellow square)—are derived. These are used in a computation block (peach-colored rectangle) that applies Softmax to the scaled dot product of Q and K (divided by the square root of embedding size), then multiplies the result by V. The output of this block is labeled 'output' (gray rectangle), which then goes to 'Multi-head concatenation' (light blue rectangle), and finally to 'Output embedding' (gray rectangle). The entire attention mechanism is enclosed in a dashed blue border.

All visual elements use consistent shapes (rounded rectangles for modules, squares for Q/K/V), colors (white, light blue, light green, orange, gray, peach), and directional arrows to convey the logical flow of data and processing steps.
