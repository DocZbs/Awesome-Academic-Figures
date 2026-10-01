# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploring More from Multiple Gait Modalities for Human Identification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11495

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two architectural variants of the MultiGait model, labeled (a) MultiGait* and (b) MultiGait*+#, arranged vertically. Both architectures are feed-forward networks processing input data through sequential convolutional and feature extraction stages, with (b) introducing a multi-modal fusion mechanism.

[1] Global Layout and Structure:
The diagram is divided into two horizontal rows, each representing a distinct model configuration. The top row, (a) MultiGait*, shows a single-stream architecture where an input I* passes through a series of modules: Conv₀ followed by four successive stages S₁, S₂, S₃, and S₄, culminating in an output arrow. The bottom row, (b) MultiGait*+#, displays a dual-stream architecture. It features two parallel streams: one processing input I* and the other processing input I#. Each stream follows the same structure: Conv₀ → S₁ → S₂ → S₃. The outputs of both streams at stage S₃ are fed into a central 'Fusion' module, which then produces a final output S₄. A cloud-shaped annotation is connected to the Fusion module, listing three fusion strategies: (a) Concat, (b) Attention, and (c) Addition. Below the two streams, labels indicate the semantic levels of the features: 'Input-level' under the initial Conv₀ blocks, 'Middle-level' under S₁ and S₂, and 'High-level' under S₃ and the Fusion block.

[2] Visual Modules and Attributes:
All processing modules are represented as trapezoidal shapes, oriented with the wider base on the left, indicating a reduction in feature dimensionality or spatial resolution from left to right. The input nodes I* and I# are square boxes. The initial convolutional layer is labeled 'Conv₀'. Subsequent stages are labeled S₁, S₂, S₃, and S₄, with S₄ being the final output stage. The Fusion module is a tall, light-gray rectangle with the word 'Fusion' written vertically inside. The cloud annotation is a black-outlined, irregular cloud shape containing the three fusion options in black text. All text within the diagram is in a standard sans-serif font, and all lines and borders are black. The entire diagram uses monochrome styling with no color coding.

[3] Connections and Arrows:
In (a) MultiGait*, a solid black line connects I* to Conv₀, then sequentially to S₁, S₂, S₃, and finally to S₄, ending in a rightward-pointing arrow. In (b) MultiGait*+#, two parallel paths exist: I* connects to its Conv₀, which connects to S₁, then S₂, then S₃; similarly, I# connects to its Conv₀, then S₁, S₂, and S₃. From the S₃ outputs of both streams, solid arrows point to the Fusion module. A single arrow exits the Fusion module to S₄, which then leads to a rightward-pointing arrow. Additionally, a curved line extends from the Fusion module to the cloud annotation, indicating the available fusion methods. The connections are unidirectional, following a left-to-right data flow, and there are no feedback loops or skip connections shown.
