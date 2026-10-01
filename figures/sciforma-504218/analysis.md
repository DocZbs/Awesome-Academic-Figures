# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Extracting and Following Paths for Robust Relational Reasoning with Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17963

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates seven distinct types of synthetic noise applied to a toy example graph, designed to evaluate robustness in graph-based reasoning tasks. The global layout is hierarchical and structured: on the left, a dashed-boxed 'Toy example' displays a baseline graph with five nodes (A–E) connected sequentially by four directed edges. Nodes A, B, C are colored red, indicating they are relevant to answering the query '?(A, C)', while nodes D and E are green, marking them as irrelevant. This baseline serves as the reference for all subsequent noise perturbations.

To the right, the main body of the diagram branches into three primary noise categories—'Flip', 'Add', and 'Replace'—each further subdivided into specific noise types labeled type_A through type_G. These are arranged vertically under their respective categories, with connecting lines indicating hierarchical grouping.

Under 'Flip', only one noise type is shown: type_A, which introduces an irrelevant edge by reversing the direction of an existing edge (specifically, from E→D instead of D→E), altering the graph’s structure without adding new nodes.

Under 'Add', two subcategories exist: 'New node' and 'Irrelevant edge'. The 'New node' category includes type_B (adding a new purple node F at either end of the chain, connected via a blue arrow) and type_C (adding a purple node F with conflicting edges pointing to both B and E, creating a branching structure). The 'Irrelevant edge' subcategory includes type_D (adding a blue curved edge from E back to D, forming a cycle) and type_E (adding a blue curved edge from C back to A, introducing a backward connection within the red-relevant segment).

Under 'Replace', type_F shows an irrelevant edge replacement where the original edge D→E is replaced with a blue arrow from D to E (visually identical but possibly implying a different semantic or structural meaning), though this appears redundant with the baseline; likely intended to denote a substitution operation.

Finally, 'Disconnected edges' (type_G) shows the graph split into two disconnected components: the original A–B–C–D–E chain and a separate purple node pair F→G, illustrating isolation noise.

All noisy elements—new nodes and altered edges—are consistently marked in purple, while original edges remain red or green based on relevance. Blue arrows denote newly introduced or modified connections. The diagram uses circular nodes with labels (A–G), directed edges with arrowheads, and clear textual annotations for each noise type. The visual hierarchy emphasizes the taxonomy of noise operations, guiding the viewer from the clean baseline to increasingly complex perturbations.
