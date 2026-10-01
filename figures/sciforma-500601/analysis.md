# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RADARSAT Constellation Mission Compact Polarisation SAR Data for Burned Area Mapping with Deep Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11561

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a processing pipeline for generating a Log-Ratio Image from pre- and post-fire Compact-pol GRD (Ground Range Detected) data using ESA SNAP software. The global layout is a top-down flowchart with two input sources at the top, followed by sequential filtering steps, a branching path for pre-fire data processing, and a final computation step leading to the output. All nodes are rendered in light gray with dark gray borders and black text, maintaining consistent visual styling throughout.

At the top, two rounded rectangular nodes represent the inputs: 'Post-Fire Compact-pol GRD' on the left and 'Pre-Fire Compact-pol GRD' on the right. Both inputs feed into a diamond-shaped decision node labeled 'Filter on Beammode SC30MCP[A-D]', indicating a filtering operation based on specific beam modes. From this node, the flow proceeds downward to another diamond-shaped node labeled 'Filter on Orbit [asc/dec]', which applies an orbit-based filter distinguishing ascending and descending passes.

From the 'Filter on Orbit' node, the workflow splits into two paths. The right branch leads to a rounded rectangle labeled 'Median of Pre-Fire Image', representing a statistical processing step applied specifically to the pre-fire dataset. The left branch continues directly from the orbit filter to a circular node, symbolizing a computational operation. The median pre-fire image and the filtered post-fire data converge at this circular node, where they are combined to compute the log-ratio.

Finally, the output of the circular node is directed to an oval-shaped node labeled 'Log-Ratio Image', signifying the final product of the pipeline. This oval shape visually distinguishes the output from intermediate processing steps. All connections between nodes are represented by solid black arrows indicating the direction of data flow, ensuring clarity in the sequence of operations. The diagram emphasizes a structured, sequential workflow with conditional filtering and a merge operation before producing the final log-ratio image.
