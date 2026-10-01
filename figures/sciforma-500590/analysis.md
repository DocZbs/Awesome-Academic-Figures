# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SP$^2$T: Sparse Proxy Attention for Dual-stream Point Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the vertex-based association mechanism used in SPA (Spatial Proxy Association), illustrating how points are associated with proxies located at the vertices of a proxy cubic. The diagram is divided into two main parts: (a) Vertex-based Association and (b) Association Tuple List.

In part (a), a 3D proxy cubic is represented by a dashed rectangular boundary, with its eight vertices marked by light blue circles labeled as 'Proxy'. These proxies are arranged in two horizontal rows of four, forming the top and bottom faces of the cube. Reddish-pink circles, labeled as 'Point', are positioned outside the cubic and are connected via solid purple arrows to one or more proxy vertices, indicating a point-proxy association. Each point is linked to multiple proxies, typically those closest to it within the cubic structure. Dashed vertical lines connect corresponding top and bottom proxies, emphasizing the cubic geometry. A legend at the top clarifies the visual encoding: reddish-pink circles represent 'Point', light blue circles represent 'Proxy', and an arrow from a point to a proxy denotes a 'Point-Proxy Association'.

Part (b) displays the Association Tuple List, which is a tabular representation of the associations shown above. The table has two rows: the top row lists the 'Point' identifiers (e.g., Point 0, Point 1, ..., Point 4), and the bottom row lists the corresponding 'Proxy' identifiers (e.g., Proxy 0, Proxy 1, ..., Proxy 6). Each column represents a unique point-proxy pair, with dotted vertical lines separating entries. The table is color-coded to match the legend: the top row has a light pink background, and the bottom row has a light blue background. Dashed purple arrows extend downward from specific points and proxies in part (a) to their corresponding entries in the tuple list, visually linking the graphical representation to its structured data form.

The overall layout is hierarchical and modular, with part (a) providing a spatial visualization of the association process and part (b) offering a structured, tabular summary. The connections between the two parts are indicated by dashed arrows, reinforcing the relationship between the geometric model and its data representation. The figure effectively communicates that in SPA, each point is associated with the proxies at the eight vertices of its respective proxy cubic, and these associations are stored as tuples in a list for further processing.
