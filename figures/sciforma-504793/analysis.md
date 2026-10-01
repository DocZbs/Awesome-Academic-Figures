# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates PRISM's approach to improving key-value (KV) cache utilization through two alternative memory update strategies: 'In-Place Memory' and 'Amendments'. The global layout is structured as a top-down workflow. At the top, two inputs are shown: the current memory state m_i, represented as a tuple of key-value pairs ((k1,v1), (k2,v2), (k3,v3)), and a revision request r_i, specified as (k1, update, v4). Both inputs feed into a central rectangular module labeled 'Validate and revise', which processes the update. From this module, a solid blue arrow points downward to the output memory state m_{i+1}, which is then depicted in two parallel representations below.

The left representation, labeled '1. In-Place Memory', shows the updated memory state as ((k1,v4), (k2,v2), (k3,v3)) within a rounded rectangle. The key-value pair (k1,v4) is highlighted in red, indicating that it has been modified from the original (k1,v1), while (k2,v2) and (k3,v3) remain unchanged and are shown in green. A dashed purple arrow connects the 'Validate and revise' box to this memory state, emphasizing the transformation.

The right representation, labeled '2. Amendments', presents the same updated state but as a composite structure. It contains two lines: the first line repeats the original memory state ((k1,v1), (k2,v2), (k3,v3)) entirely in green, indicating the longest matching prefix with the previous state. Below it, a second line adds the amendment ((k1,v4)) in red, representing the new information that must be encoded. This structure preserves the original memory and appends the change, allowing for efficient comparison and encoding.

The visual modules are primarily rectangular boxes with rounded corners, using black borders and black text. The key-value pairs are color-coded: green for unchanged or matching elements, and red for modified or newly encoded elements. The connections include solid gray arrows from inputs to the validation module, a solid blue arrow from the module to the output state, and dashed purple arrows linking the output state to its two representations. The figure emphasizes that amendments reduce the number of tokens requiring re-encoding by preserving the unchanged prefix, albeit at the cost of increased memory size.
