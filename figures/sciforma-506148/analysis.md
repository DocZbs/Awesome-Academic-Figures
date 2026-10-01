# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Boundary Loss for the Hierarchical Panoptic Segmentation of Plants and Leaves — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00527

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an adapted Mask2Former architecture designed for hierarchical segmentation of plants and their leaves. The global layout is left-to-right, depicting a sequential processing pipeline starting from image input through feature extraction and decoding to final segmentation outputs. The structure is modular, with distinct components arranged horizontally: Backbone → Pixel Decoder → Query Features → Plant Decoder and Leaf Decoder → Outputs.

Visual modules include: (1) a trapezoidal 'Backbone' module in light blue, which extracts 'Image Features'; (2) a parallelogram-shaped 'Pixel Decoder' module, also in light blue, containing four progressively larger gray parallelograms representing multi-scale feature maps; (3) a vertical stack of four colored squares (green, red, blue, orange) labeled 'Query Features', indicating learnable query embeddings; (4) two separate decoder blocks, each enclosed in a rounded rectangle with light blue background — 'Plant Decoder' and 'Leaf Decoder'. Each decoder consists of three connected gray rectangular layers, suggesting transformer-based decoding stages; (5) output modules: two light blue rectangles labeled 'Plant Mask' and 'Class' for plant-level predictions, and similarly 'Leaf Mask' and 'Class' for leaf-level predictions.

Connections and arrows show data flow: Image features from the Backbone feed into the Pixel Decoder. The Pixel Decoder outputs multi-scale feature maps that are cross-connected via multiple horizontal lines to both the Plant Decoder and Leaf Decoder. The Query Features are split and fed into both decoders as initial queries. Within each decoder, the three gray layers process the inputs sequentially. Outputs from the Plant Decoder are combined with a feature map via a circular '×' symbol (indicating element-wise multiplication or fusion) before producing the Plant Mask and Class. Similarly, outputs from the Leaf Decoder are fused with another feature map via a '×' symbol to produce Leaf Mask and Class. Notably, the Pixel Decoder’s feature maps are also directly connected to the fusion points of both decoders, enabling feature refinement. The diagram emphasizes parallel processing for plant and leaf segmentation, with shared backbone and pixel decoder but separate decoders for hierarchical prediction.
