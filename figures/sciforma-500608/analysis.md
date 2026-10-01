# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PyPotteryLens: An Open-Source Deep Learning Framework for Automated Digitisation of Archaeological Pottery Documentation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11574

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The diagram illustrates a comprehensive workflow for processing PDF documents using computer vision and machine learning techniques, structured into four main stages: Document Processing, Model Processing, Post-Processing, and Tabular Data Management, culminating in Outputs. The global layout is hierarchical and left-to-right, with clear modular boundaries and directional arrows indicating data flow.

In the top-left, an 'Input PDF' rectangle initiates the process. This connects to the 'Document Processing' module, which contains two components: a process box labeled 'PDF2imgs Conversion' and a rounded rectangle labeled 'Quality checking'. The output from this module flows to a diamond-shaped decision node labeled 'Images', which serves as an input to the next stage.

The 'Model Processing' module follows, starting with 'Model selection' (rectangle), which receives input from 'YOLO Vision Models' (rectangle) and feeds into 'Adjustable parameters' (rounded rectangle). These parameters influence the 'Images' node, leading to 'Segmentation Masks' (rectangle). A parallel path includes 'Manual Checking' (process box) feeding into 'Segmentation Masks', which then leads to 'Enhanced Segmentation Masks' (rectangle). From here, a feedback loop connects to 'Self-Annotation' (process box), which in turn feeds back into 'YOLO Vision Models', forming a self-improving cycle.

The 'Post-Processing' module begins with 'EfficientNet Classifier Model' (rectangle), which processes the 'Enhanced Segmentation Masks' to produce 'Extracted Instances' (diamond). This is followed by another 'Manual Checking' (process box), resulting in 'Enhanced Instances' (diamond).

Simultaneously, the 'Tabular Data Management' module runs in parallel, starting with 'PDF Metadata' (rectangle), flowing through 'Metadata Association' (process box) to form an 'Enriched Dataset' (rectangle). This dataset connects to the 'Enhanced Instances' node, integrating metadata with processed content.

Finally, the 'Outputs' section at the bottom contains three diamond-shaped nodes: 'PDF Report', 'Extracted Images', and 'CVS Metadata', all receiving input from 'Enhanced Instances'. The entire diagram uses black lines and standard shapes: rectangles for processes or models, diamonds for data or decision points, and process boxes (with double vertical lines) for manual or specific operations. All text is black, sans-serif, and centered within each shape. The diagram is monochromatic, with no color coding, and uses solid arrows to indicate unidirectional data flow, except for the feedback loop from 'Self-Annotation' to 'YOLO Vision Models'.
