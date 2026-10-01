# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Simple is not Enough: Document-level Text Simplification using Readability and Coherence — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18655

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a text simplification (TS) model based on a T5-Model, which is trained using a multi-objective loss function combining simplification, coherence, and readability components. The global layout is left-to-right, starting with two input sources on the far left: one labeled 'simplify: complex' and another labeled 'read classify: simple', both represented by blue document icons with orange checkmarks. These inputs are fed into a central orange rounded rectangle labeled 'T5-Model', which shares the same encoder for both tasks, as indicated by the annotation '(same encoder)' above it. From the T5-Model, three outputs emerge: 'simplified'' (predicted simplified text), which is sent to two separate modules — 'Simplification Loss' and 'Coherence Model'; and 'readability label'' (predicted readability label from the simple text), which is directed to the 'Readability Loss' module. The 'Simplification Loss' module receives an additional input from above labeled 'gold-reference (simple)', which serves as the ground truth for simplification. Similarly, the 'Readability Loss' module receives 'gold-reference (readability label)' from below. The 'Coherence Model' outputs a 'score' that contributes to the final 'Model Loss'. Both 'Simplification Loss' and 'Readability Loss' output 'loss' values that are also fed into the 'Model Loss' module, which is depicted as a blue rounded rectangle on the far right. All three blue modules — 'Simplification Loss', 'Coherence Model', and 'Readability Loss' — are visually consistent in color and shape, indicating they are distinct but related components in the loss computation pipeline. The connections between modules are shown as black arrows with clear labels ('loss', 'score') to indicate the type of data being passed. The overall structure reflects a training framework where the T5-Model generates predictions that are evaluated against gold-standard references and coherence scores, and these evaluations are aggregated into a combined 'Model Loss' to guide optimization. The caption clarifies that the model takes complex text for simplification and simple gold-standard text for readability classification, uses predicted simplifications for loss and coherence evaluation, and uses predicted readability labels for readability loss, culminating in a combined loss function.
