# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

One-Shot Multilingual Font Generation Via ViT — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11342

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural architecture for glyph generation that integrates content and style information using a Vision Transformer (ViT)-based framework enhanced by a Retrieval-Augmented Generation (RAG) module. The global layout is vertically structured, progressing from inputs at the bottom to the final generated output at the top. On the left side, a pink-bordered box labeled 'RAG Module' contains a blue rectangular block labeled 'RAG retriever', which receives a green-bordered Chinese character '乎' as input and outputs an orange-bordered character '久' as the style input. This style input feeds into the 'Vit style encoder', a trapezoidal yellow block positioned above it. On the right side, a green-bordered Chinese character '乎' serves as the 'content Input', feeding into the 'Vit content encoder', another trapezoidal yellow block. Both encoders produce feature representations that are processed further. The output of the 'Vit style encoder' passes through a circular node marked with a multiplication symbol (×), indicating element-wise multiplication or modulation, before being fed into a rectangular yellow block labeled 'Avg & norm', which performs averaging and normalization. Simultaneously, the output of the 'Vit content encoder' is directly routed to a circular node labeled 'concate', which combines the normalized style features with the content features via concatenation. The concatenated result is then passed to the 'Vit decoder', a trapezoidal yellow block at the top, which generates the final output: a grid-based representation of the Chinese character '乎' in a stylized form, shown as a black stroke within a 3x3 grid. The connections between modules are represented by solid black arrows, indicating the flow of data. The RAG module is explicitly noted as an add-on component, separate from the core ViT-based pipeline, designed to retrieve a suitable style representation based on the content input. The green boxes denote content inputs, while the orange box denotes the retrieved style input, emphasizing the distinction between content and style sources.
