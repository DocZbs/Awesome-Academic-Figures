# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a 3D local descriptor construction pipeline, structured as a flowchart with a clear left-to-right progression from input to output. The global layout is horizontal, beginning with an oval-shaped node labeled '3D point cloud' on the far left, which serves as the initial input. From this node, two parallel pathways diverge: one labeled 'LRF-based' and the other 'LRF-independent', both represented as rounded rectangles. These pathways represent distinct methodologies for processing the 3D point cloud.

The 'LRF-based' branch proceeds to a rounded rectangle labeled 'LRF construction', indicating the creation of a Local Reference Frame. This step feeds into a larger rounded rectangle titled 'Feature encoding', which contains two sub-methods listed vertically: 'Real-valued encoding' and 'Binary feature encoding'. This module is visually distinguished by a dashed line beneath the main title, separating it from its contents.

The 'LRF-independent' branch splits further into two sub-branches: 'LRA' and 'LRA-independent', each represented as a rounded rectangle. Both converge into another 'Feature encoding' module, identical in shape and styling to the first, but containing different sub-methods: 'Attribute-based statistical' and 'Attribute-space projection'. Again, the dashed line under the title separates the heading from its contents.

Both 'Feature encoding' modules—originating from LRF-based and LRF-independent paths—converge via solid arrows into a final oval-shaped node labeled 'Descriptor', representing the output of the entire pipeline. All connections between nodes are depicted using solid black arrows, indicating the direction of data flow. The diagram uses consistent visual attributes: all process nodes are rounded rectangles with black borders and black text; the input and output nodes are ovals with the same styling. There are no colors used beyond black and white, emphasizing clarity and simplicity. The overall structure reflects a taxonomy of methods for constructing 3D descriptors, categorized by dependency on Local Reference Frames (LRF) or Local Reference Attributes (LRA), and further subdivided by encoding strategies.
