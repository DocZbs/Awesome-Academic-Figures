# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SciFaultyQA: Benchmarking LLMs on Faulty Science Question Detection with a GAN-Inspired Approach to Synthetic Dataset Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11988

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a GAN-inspired synthetic data generation framework, structured as a generative adversarial network (GAN) architecture adapted for large language models (LLMs). The global layout is horizontally oriented, with three generator modules positioned on the left side arranged vertically, and a single discriminator module located on the right side. All components are represented as rounded rectangular boxes filled with a solid blue color and outlined with a darker blue border, with white text inside indicating their roles.

On the left, there are three identical generator modules labeled 'LLM_Gen a', 'LLM_Gen b', and 'LLM_Gen c', stacked vertically. These represent distinct LLM-based generators, possibly trained with different configurations or initializations, designed to produce synthetic data. Each generator outputs to the discriminator via a thin, light-blue arrow pointing rightward toward the central discriminator module.

The discriminator, labeled 'LLM_Dis', is a single, wider rounded rectangle positioned to the right of the generators. It receives input from all three generators simultaneously through individual arrows, indicating that it evaluates the authenticity of the generated data from each source. The discriminator's role is to distinguish between real and synthetic data, providing feedback to the generators during training.

A critical feature of the architecture is the feedback loop: a single, long, light-blue arrow extends from the output of the discriminator back to the inputs of all three generator modules. This closed-loop connection signifies an adversarial training process where the discriminator’s evaluation (e.g., confidence scores or gradients) is used to update the generators, enabling them to improve their ability to produce realistic synthetic data over time. The feedback loop is drawn as a continuous line originating from the right edge of the discriminator, curving downward and then leftward to connect to the top of the generator stack, visually emphasizing the iterative nature of the training.

All connections are represented by simple, unidirectional arrows with solid lines and small arrowheads, indicating the direction of data or signal flow. The overall structure reflects a standard GAN topology but specialized for LLMs, where multiple generators compete to fool a shared discriminator, which in turn guides their improvement. The visual design is clean and minimalistic, using consistent colors and shapes to emphasize modularity and the adversarial relationship between components.
