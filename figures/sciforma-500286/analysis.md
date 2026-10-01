# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NITRO: LLM Inference on Intel Laptop NPUs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11053

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a high-level architectural diagram of the Meteor Lake chipset, illustrating its modular tile-based design interconnected via a central System-on-Chip (SOC) Tile. The global layout is horizontally oriented, with the SOC Tile positioned centrally as the core component, enclosed within a large light gray rectangular boundary labeled 'SOC Tile' at the bottom. To the left of the SOC Tile is the 'Graphics Tile (GPU)', depicted as a green rectangle. To the right, two tiles are vertically stacked: the upper one is the 'Compute Tile (CPU)', shown as a yellow rectangle, and below it is the 'I/O Tile', shown as an orange rectangle. These external tiles are connected to the SOC Tile through thick dark blue lines representing communication pathways.

Within the SOC Tile, three primary internal components are arranged vertically. At the top is the 'NPU', represented by a purple rectangle. Below it is the 'Network-on-chip (NOC)', shown as a light blue rounded rectangle. Further down is the 'IO Fabric', also a light blue rounded rectangle. All internal components within the SOC Tile are connected by vertical dark blue lines, indicating data flow or interconnectivity. Specifically, the NPU connects downward to the NOC, which in turn connects downward to the IO Fabric. The NOC extends horizontally to the left to connect with the Graphics Tile (GPU) and to the right to connect with the Compute Tile (CPU). Similarly, the IO Fabric extends horizontally to the right to connect with the I/O Tile.

The visual modules are distinguished by color, shape, and labeling. Rectangular shapes denote discrete functional tiles (GPU, CPU, I/O), while rounded rectangles represent internal interconnect fabrics (NOC, IO Fabric). The NPU is uniquely colored purple to differentiate it from other components. All labels are centered within their respective shapes using black sans-serif font. The connections between modules are represented by thick, solid dark blue lines, with no arrowheads, implying bidirectional communication or structural linkage rather than unidirectional data flow. The overall structure emphasizes modularity and hierarchical connectivity, with the SOC Tile acting as the central hub coordinating interactions among specialized compute, graphics, and I/O tiles via dedicated on-chip networks and fabric layers.
