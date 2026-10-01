# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Scene Graph and Layout Guided Complex 3D Scene Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20473

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a method for scene graph composition, where a hierarchical structure of objects and their relationships is transformed into a set of single-object nodes and a super-node representing an interaction. The global layout is left-to-right, showing a transformation process from a complex scene graph on the left to simplified node representations on the right. On the left, a tree-like scene graph is depicted: blue rectangular nodes represent individual objects such as 'Haystack', 'Barn', 'Fence', 'Horse', and 'Astronaut'. These are connected by edges labeled with spatial relations (in gold rectangles) like 'next to' and 'in front of', and an interaction (in brown rectangle) labeled 'riding' connecting 'Horse' and 'Astronaut'. A large blue arrow points from this graph to the right side, indicating the transformation process.

On the right, the result of this transformation is shown. Three dashed circular nodes, labeled v₁⁰, v₂⁰, and v₃⁰, represent single-object nodes O, each containing one object: 'Haystack', 'Barn', and 'Fence' respectively. These are generated via a process labeled 'Single-object node generation', indicated by a light blue arrow pointing to them. Additionally, a large orange oval encloses the 'Horse' and 'Astronaut' nodes along with the 'riding' interaction, forming a super-node S. This super-node is labeled with v₁ˢ and v₂ˢ, denoting its internal components, and is generated through a process labeled 'Super-node generation', indicated by a light orange arrow. The legend at the top left clarifies that gold rectangles denote 'Spatial relation', brown rectangles denote 'Interaction', dashed circles denote 'Single-object node O', and solid orange ovals denote 'Super-node S'. The figure caption explains that this approach uses a large language model (LLM) to construct the scene graph, with blue nodes representing single objects and orange supernodes representing interacting object pairs. The visual design uses distinct colors and shapes to differentiate between object types and relationship categories, and arrows clearly indicate the direction of the transformation from the original graph to the decomposed node representation.
