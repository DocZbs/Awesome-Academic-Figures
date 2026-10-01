# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Label Privacy in Split Learning for Large Models with Parameter-Efficient Training — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16669

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a distributed fine-tuning protocol involving a SERVER and a CLIENT, divided into two main sections by a vertical line. On the left, under the label 'SERVER', there are n model instances, each represented by a sequence of three identical hourglass-shaped blocks (blue, green, or red) enclosed in light beige boxes, corresponding to unique LoRA weights θ₁, θ₂, ..., θₙ. Each model instance processes data through these layers, producing activations h₁, h₂, ..., hₙ, depicted as stacked blocks of matching color (blue, green, red) with increasing height from top to bottom. These activations are then sent forward to the CLIENT side.

On the right, under the label 'CLIENT', the activations are combined using weights W₁, W₂, ..., Wₙ, each shown as a small gray box connected to a white box via a circle with a dot (⊙), symbolizing element-wise multiplication. The result is a set of weighted activations, shown as blended colored blocks (e.g., blue-gray, green-gray, red-gray), which are then summed together via a large Σ symbol to produce a single activation vector h′, represented as a stack of light gray blocks. This h′ is passed through a series of local layers (three horizontal beige bars labeled 'local layers'), followed by a model head denoted by a square containing the symbol ℒ, representing the loss function.

Arrows indicate the flow: from SERVER to CLIENT, labeled 'forward' and 'last layer activations from n models'; and from CLIENT back to SERVER, labeled 'backward' and 'weighted gradients to n models'. The backward pass shows gradients flowing from the loss back through the local layers and summation, then splitting to update the weights W₁ to Wₙ, which in turn influence the original models on the SERVER. The entire process is designed to enable efficient fine-tuning across multiple model instances with shared computation on the CLIENT side.
