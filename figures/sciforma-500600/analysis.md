# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RADARSAT Constellation Mission Compact Polarisation SAR Data for Burned Area Mapping with Deep Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11561

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a processing pipeline for RCM Compact-pol MLC data using ESA SNAP software, designed to generate three final output images: Ground Range Detected (GRD) image, M-chi decomposition image, and Compact-pol Radar Vegetation Index (CpRVI) image. The global layout is hierarchical and top-down, with a clear sequence of processing steps organized into distinct stages. At the top, a single rounded rectangular box labeled 'RCM Compact-pol MLC' serves as the input source. From this, three parallel processing branches diverge: 'Calibrate', 'Compact-pol Decomposition', and 'Compact-pol Radar Vegetation Index'. Each of these is represented by a light gray rounded rectangle with black text and a thin dark gray border. These three modules feed into a central processing step labeled 'Terrain Correction', which is also a light gray rounded rectangle. Following this, the data flows into 'Speckle Noise Filtering', another similarly styled box. From this final processing stage, three output boxes branch out horizontally at the bottom: 'Ground Range Detected image (GRD)', 'M-chi decomposition image', and 'CpRVI image', each in the same visual style as the other modules. All connections between modules are represented by solid black arrows pointing downward or to the right, indicating the direction of data flow. The diagram uses consistent visual attributes across all nodes—uniform size, color, and shape—to emphasize the structured, sequential nature of the workflow. There are no mathematical equations or additional annotations within the diagram itself; the entire process is described through the labeled boxes and directional arrows. The caption clarifies that this pipeline is implemented in ESA SNAP and produces the three specified output images from the initial RCM MLC product.
