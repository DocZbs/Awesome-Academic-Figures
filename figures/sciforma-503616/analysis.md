# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Multi-modal Approach to Dysarthria Detection and Severity Assessment Using Speech and Text Information — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16874

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-encoder neural network architecture designed for the detection and severity assessment of dysarthria, combining speech and text modalities. The global layout is vertically structured, with two parallel input streams — one for speech and one for text — converging into a shared cross-attention mechanism before proceeding to a final prediction module. The left side of the diagram represents the 'Speech encoder', while the right side represents the 'Text encoder'. Both encoders feed into a central 'Cross Attention' block, followed by a Bi-GRU and Dense layer to produce final 'Predictions'.

In the Speech encoder (enclosed in a blue rounded rectangle), the input is a spectrogram visualized as a colorful 2D heatmap (blue, yellow, green gradients), representing acoustic features. This input first passes through a 'Conv2D' layer, depicted as a light blue rounded rectangle. The output then flows into a 'Bi-GRU' layer, shown as a salmon-pink rounded rectangle, which captures temporal dependencies. This is followed by a 'Dense' layer, represented as a gray rounded rectangle, for feature compression or transformation.

On the right, the Text encoder (enclosed in a red rounded rectangle) takes raw 'Text' as input, indicated by a label at the top. The text is first processed by a 'Character embedding' layer, shown as a yellow rounded rectangle, converting characters into dense vectors. This is followed by a 'Bi-GRU' layer (salmon-pink) to model sequential context, and then a 'Dense' layer (gray) to extract high-level features.

The outputs from both encoders are fed into a 'Cross Attention' module, displayed as a large purple rounded rectangle. This module enables interaction between the speech and text representations, allowing the model to focus on relevant parts of each modality. The result of this cross-modal fusion is passed to another 'Bi-GRU' layer (salmon-pink), which further refines the combined representation. Finally, a 'Dense' layer (gray) produces the final output labeled 'Predictions', indicating the model's decision on dysarthria detection and severity.

All connections are represented by solid black arrows pointing downward, indicating the forward pass direction of data flow. The diagram uses distinct colors to differentiate components: blue for speech-specific layers, yellow for text-specific embedding, salmon-pink for Bi-GRU units, gray for Dense layers, and purple for the cross-attention block. The encoders are grouped with rounded rectangles and labeled vertically along the sides ('Speech encoder' on the left, 'Text encoder' on the right). The overall structure emphasizes a multimodal fusion approach where speech and text are independently encoded before being jointly processed to make predictions.
