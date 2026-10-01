# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlockDialect: Block-wise Fine-grained Mixed Format Quantization for Energy-Efficient LLM Inference — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01144

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of a quantization technique named FormatBook, which operates by matching activation patterns with pre-defined format variants during inference. The global layout is structured horizontally into three main components: an input 'Activation' block on the left, a central 'FormatBook' module, and an output 'Weight' block on the right. These components are connected via arrows indicating data flow and assignment logic.

On the left, the 'Activation' block, labeled as 'Online quantization', contains a grid of fine-grained blocks. Each block is a colored rectangle labeled with a 'Dialect' number (e.g., Dialect 1, Dialect 2, etc.), representing different quantization formats applied dynamically during inference. The colors—light blue for Dialect 1, orange for Dialect 2, yellow for Dialect 3, and teal for Dialect 4—visually distinguish the dialects. The block structure suggests a matrix-like arrangement where each cell corresponds to a specific activation tensor segment.

In the center, the 'FormatBook' is enclosed in a rounded rectangular container and serves as a lookup table or registry of standard format variants. It lists four dialects vertically: Dialect 1 (light blue), Dialect 2 (orange), Dialect 3 (yellow), and Dialect 4 (teal), with ellipsis below indicating more dialects may exist. This module acts as a reference for selecting the optimal format variant based on activation patterns.

On the right, the 'Weight' block, labeled as 'Offline quantization', mirrors the structure of the Activation block but represents pre-quantized model weights. It also consists of colored rectangles labeled with dialect numbers, arranged in a grid. The colors correspond to the same dialects as in the Activation block, ensuring compatibility between online and offline quantization steps.

Connections between these modules are represented by lines originating from each fine-grained block in the Activation section and pointing to multiple dialect entries in the FormatBook. Among these, one connection per block is highlighted in bold black, indicating the selected best dialect assigned to that activation block. The remaining connections are gray, suggesting alternative or less preferred matches. These assignments are guided by the text label beneath the FormatBook: 'Assign the best dialect (standard format variant)', emphasizing the selection process.

Finally, a large multiplication symbol 'X' is placed between the Activation and Weight blocks, symbolizing the element-wise multiplication operation performed during inference, where the assigned dialects from the FormatBook guide how activations interact with weights. The overall workflow implies that FormatBook enables dynamic, efficient quantization by aligning runtime activations with pre-defined, optimized weight formats, thereby balancing accuracy and computational efficiency.
