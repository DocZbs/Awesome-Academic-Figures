# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Distributed Inference on Mobile Edge and Cloud: A Data-Cartography based Clustering Approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16616

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical deep neural network (DNN) inference architecture distributed across three computing tiers: mobile device, edge device, and cloud. The global layout is structured horizontally into three main computational zones, each enclosed in a rounded rectangular container, representing the mobile device, edge device, and cloud respectively. Above each zone, an icon visually identifies the tier: a smartphone for mobile, stacked servers with a small cloud for edge, and a large cloud symbol for the cloud. Below these zones, a horizontal teal-colored bar labeled 'Embedding layer on Mobile device' serves as the initial processing stage for all inputs.

Three example text inputs—'This movie is best!', 'Not bad!', and 'Underwhelming yet unique!'—are shown at the bottom, feeding upward into the embedding layer. From there, based on sample complexity, each input is routed to one of the three DNN segments above. The routing is indicated by vertical arrows labeled 'Easy Sample', 'Moderate Sample', and 'Hard Sample', corresponding to the three inputs.

Within each computational zone, the DNN is represented as a sequence of rectangular blocks. In the mobile device zone, the DNN consists of 'Layer 1', 'Layer 2', ..., up to 'Layer m', followed by a green rectangular block labeled 'Classifier m'. These blocks are connected by solid arrows indicating forward propagation, with dashed lines between intermediate layers suggesting omitted layers. Similarly, the edge device zone contains 'Layer 1', 'Layer 2', ..., 'Layer n', ending with 'Classifier n'. The cloud zone contains a full DNN with 'Layer 1', 'Layer 2', ..., 'Layer l', ending with 'Classifier l'. All layers are depicted as light blue rectangles with black borders and white text; classifiers are distinctively colored green. The labels beneath each zone specify the DNN portion: 'First m layers' for mobile, 'First n layers' for edge, and 'Full DNN' for cloud.

Connections between components are shown via arrows: solid arrows denote direct data flow within each DNN segment, while dashed arrows indicate skipped intermediate layers. Vertical arrows from the embedding layer to each DNN segment represent sample routing decisions based on complexity. The overall workflow follows a tiered inference strategy: simple inputs are processed locally on the mobile device using the first m layers; moderately complex inputs are offloaded to the edge device for processing with the first n layers; and the most complex inputs are sent to the cloud for inference using the complete DNN. This design enables efficient resource utilization by minimizing data transmission and computation overhead for easier samples.
