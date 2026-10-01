# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BERT4MIMO: A Foundation Model using BERT Architecture for Massive MIMO Channel State Information Prediction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01802

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of BERT4MIMO, a model designed for processing Channel State Information (CSI) matrices in MIMO systems. The global layout is a top-down flowchart, structured into distinct stages: input, embedding, transformer encoding, classification, and output. The diagram is vertically organized, with data flowing from the top CSI Matrix input to the final Enhanced CSI Matrix output at the bottom.

At the top, a light green rounded rectangle labeled 'CSI Matrix [Real(H), Imag(H)]' serves as the input. This input splits into two parallel paths: one leading to a gray rounded rectangle labeled 'Feature Embedding F_emb(x)', and the other to a light blue rounded rectangle labeled 'Time Embedding T_emb(x)'. Both embedding modules are connected by thick black arrows to a central light green rounded rectangle labeled 'Combined Embedding', which merges the two embeddings.

Below this, a horizontal orange bar labeled 'Embedding' spans the width of the diagram, indicating the transition to the next stage. The combined embedding feeds into a large peach-colored rounded rectangle labeled 'Transformer Encoder 12 Layers, 12 Heads'. This module processes the input and produces multiple outputs, represented by five light yellow rounded rectangles arranged horizontally: 'Output O_1', 'Output O_2', 'Output O_3', 'Output ...', and 'Output O_n'. Each output is connected via a downward arrow to the next stage.

A second horizontal bar, this time light blue and also labeled 'Embedding', separates the encoder outputs from the subsequent layer. All outputs from the Transformer Encoder feed into a single pink rounded rectangle labeled 'Classification Layer Fully Connected + GELU + Norm'. This layer aggregates the encoded features and applies a fully connected transformation followed by GELU activation and normalization.

Finally, a thick black arrow leads from the Classification Layer to the bottom-most light green rounded rectangle, labeled 'Enhanced CSI Matrix [Real(H), Imag(H)]', which represents the model's final output. The entire architecture emphasizes a sequential, hierarchical processing pipeline, starting with dual embedding of feature and temporal information, followed by deep transformer-based encoding, and concluding with a classification layer that generates an enhanced version of the original CSI matrix. The visual design uses color-coded blocks to distinguish functional components: green for input/output, gray and blue for embedding types, peach for the encoder, yellow for intermediate outputs, and pink for the classification layer.
