# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TinySubNets: An efficient and low capacity continual learning strategy — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10869

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a model-agnostic continual learning workflow for evolving a neural network architecture through three sequential stages: pruning, quantization, and fine-tuning. The global layout is a horizontal pipeline of four rounded rectangular modules, each representing a stage in the transformation of the network structure, connected by rightward arrows labeled with the corresponding stage name.

In the first module, the initial fully connected neural network is depicted with three layers of brown circular nodes (representing neurons) arranged vertically. Each node in the middle layer connects to all nodes in the top and bottom layers, forming a dense, fully connected structure with black lines indicating connections.

The second module shows the result of 'pruning', where many connections have been removed. The same three-layer structure remains, but only a sparse subset of connections (black lines) remain between the layers, indicating the removal of redundant or less important weights.

The third module represents 'quantization'. The same sparsified network structure is shown, but now the remaining connections are color-coded: blue, green, red, and yellow. These colors correspond to different clusters from a codebook, as explained by two small tables below this module. Each table maps 2-bit codes (00, 01, 10, 11) to specific floating-point values (e.g., 00 → 0.4576, 01 → 0.3456, etc.), with each code assigned a distinct color. The left table shows the original quantized values before fine-tuning, while the right table shows updated values after fine-tuning, indicating a shift in the codebook’s mapping.

The fourth and final module shows the outcome of 'fine-tuning'. The network structure is identical to the quantized version, but some connections have been pruned again (i.e., removed), resulting in an even sparser network. The remaining connections retain their color-coding, reflecting the updated codebook values from the second table. This stage emphasizes that fine-tuning involves additional weight pruning without retraining the entire model, allowing adaptation to a new task while maintaining efficiency.

The figure visually conveys the progression from a dense model to a highly efficient, task-adapted network through structured sparsity and low-bit quantization, with the color-coded edges providing insight into the quantization process and its refinement during fine-tuning.
