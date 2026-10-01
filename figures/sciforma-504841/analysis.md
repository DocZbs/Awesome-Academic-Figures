# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Evaluating deep learning models for fault diagnosis of a rotating machinery with epistemic and aleatoric uncertainty — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18980

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a deep ensemble model named De2, which consists of four distinct base learners arranged vertically in separate dotted rectangular boxes. Each base learner processes an identical input, labeled 'Input (burst)', represented by a vertical blue oval on the left side of each learner’s block. The overall layout is modular and hierarchical, with each base learner operating independently but sharing the same input type.

Base learner 1 and Base learner 2 have identical architectures: they begin with a light blue cube labeled 'Conv+Pool', followed by a black arrow pointing to a label 'Flatten'. This is then connected via another arrow to a white rounded rectangle labeled 'Dense layer', which feeds into a final white rounded rectangle labeled 'Output layer'.

Base learner 3 and Base learner 4 also share an identical architecture, which is more complex than the first two. They start with a light blue cube labeled 'Conv+Pool', followed by a second light blue cube also labeled 'Conv+Pool'. An arrow connects these two convolutional blocks, leading to a light green cube labeled 'LSTM'. From the LSTM block, an arrow points to a white rounded rectangle labeled 'Dense layer', which then connects to a final white rounded rectangle labeled 'Output layer'.

All connections between modules are represented by solid black arrows indicating the forward flow of data. The visual attributes include color-coded blocks: blue ovals for inputs, light blue cubes for Conv+Pool layers, light green cubes for LSTM layers, and white rounded rectangles for Dense and Output layers. The entire ensemble is enclosed within a thick black border, and the label 'De2' is placed vertically along the left margin outside the main structure, indicating the name of the ensemble model. There are no explicit equations or mathematical notations in the diagram, and all text labels are in black sans-serif font. The figure emphasizes parallel processing through four diverse neural network structures within a single ensemble framework.
