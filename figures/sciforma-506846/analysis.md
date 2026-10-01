# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Are GNNs Actually Effective for Multimodal Fault Diagnosis in Microservice Systems? — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02766

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the DiagMLP architecture, a multi-modal data processing framework designed for fault detection, localization, and classification tasks. The global layout is a vertical pipeline with four main stages, labeled ① through ④, progressing from raw data input at the bottom to final task output at the top. On the right side, a detailed breakdown of the Fusion MLP block is shown as an inset, providing internal structure of the model components.

Stage ①, 'Embedding of Multi-modal Raw Data', is represented as a gray rectangular box at the base. It receives three types of raw data: Metrics (symbolized by a gauge chart), Logs (represented by a document icon with 'LOG'), and Traces (depicted as a cloud-connected network). These inputs are transformed into embeddings, visualized as sequences of colored circles (blue, gray, pink, dark gray) per modality, with a 'Learnable Position Embeddings' vector added to each sequence, indicated by a blue circle pointing to the first position in each sequence.

Stage ②, 'Modal Fusion MLP', is a light green rectangle above stage ①. It processes the embedded modalities by receiving the sequences of embeddings from stage ①. The input sequences are shown feeding into this block, which then outputs a set of fused representations, depicted as four distinct colored ovals (olive, blue-gray, purple, brown) arranged horizontally. A label 'Node-wise concatenation' points to these ovals, indicating that the outputs from different modalities are concatenated along the node dimension.

Stage ③, 'Node Fusion MLP', is another light green rectangle above stage ②. It takes the node-wise concatenated outputs from stage ② as input. This block further fuses the information across nodes and modalities, preparing it for the final task.

Stage ④, 'Fault Detection/Localization/Classification Tasks', is a teal rectangle at the top, receiving the output from stage ③. This represents the final downstream task module where predictions are made.

On the right, the 'Fusion MLP' block is expanded to show its internal layers. It begins with 'Modal / Nodal Concatenation' (yellow box), followed by a 'Linear' layer (light blue), then 'LayerNorm' (light green), 'ReLU' (pink), and finally 'Dropout' (orange). These layers are connected sequentially with solid arrows pointing upward, indicating the forward pass. A dashed line connects the 'Node Fusion MLP' (stage ③) to the 'Fusion MLP' block, suggesting that the internal structure of stage ③ is defined by this Fusion MLP architecture.

All connections between stages are represented by solid black arrows, indicating the flow of data. The dashed line from stage ③ to the Fusion MLP inset indicates a structural relationship rather than direct data flow. The color coding of the blocks (gray for input, light green for fusion stages, teal for output, yellow/orange/pink/light blue for internal layers) helps distinguish functional components. The figure caption clarifies that DiagMLP replaces GNN modules and operates between embedding and task modules, processing multimodal features without relying on graph topology.
