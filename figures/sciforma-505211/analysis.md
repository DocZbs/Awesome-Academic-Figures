# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Asymmetrical Reciprocity-based Federated Learning for Resolving Disparities in Medical Diagnosis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the proposed framework for federated learning with heterogeneous clients, structured into four main vertical modules connected by data and model flows. The global layout is horizontal, progressing from left to right: starting with 'One-time Knowledge Acquisition from Foundation Models' (Sec. 3.2), followed by 'Knowledge-guided Surrogate Model Training for Small Clients' (Sec. 3.3), then 'Global Model Learning' (Sec. 3.5), and finally 'Asymmetrical Dual Knowledge Distillation for Large Clients' (Sec. 3.4). These modules are interconnected via bidirectional arrows labeled 'Download' (green) and 'Upload' (blue), indicating communication between clients and server.

In the first module, a light blue box labeled 'Foundation Model API' contains a stylized icon representing a foundation model (F_m) with a query input x_p. A black arrow labeled 'Query' points from this module to the second module, and a black arrow labeled 'Logit' returns F_m(x_p) to the second module, indicating one-time knowledge extraction.

The second module, titled 'Knowledge-guided Surrogate Model Training for Small Clients', is divided into two subcomponents: 'Public Data' (represented by a database icon) and 'Private Data' (represented by a medical cross icon). Public data feeds into an 'Auxiliary Model' (a neural network diagram with blue output nodes), which is trained using a yellow box labeled 'CE + KL' (cross-entropy plus Kullback-Leibler divergence). Private data feeds into a 'Surrogate Model' (a neural network with red output node), trained with a yellow box labeled 'CE'. A gray dashed arrow labeled 'Share Feature Extractor' connects the two models, indicating shared lower layers. Both models upload their updates (blue arrow) to the central server.

The third module, 'Global Model Learning', is a light green box containing two vertical submodules: 'Surrogate Models (Small)' and 'Proxy Models (Large)', each represented by a neural network diagram. Above them, a multi-colored neural network icon labeled 'Aggregation' receives inputs from both client types via green dashed 'Download' arrows. The aggregated model is then sent back to clients via blue 'Upload' arrows.

The fourth module, 'Asymmetrical Dual Knowledge Distillation for Large Clients', is a beige box. It includes 'Private Data' (a red hospital icon), a 'Proxy Model' (w̃_i^l, a small neural network), and a 'Large Model' (w_j^l, a brain-like icon). The proxy model receives private data and outputs logits, which are used in two distillation steps: a forward path (blue arrow) labeled 'Forward (Knowledge Distillation)' to the large model's logit, and a backward path (red arrow) labeled 'Backward (Ranking-based Knowledge Distillation)' from the large model's logit to the proxy model. The large model is trained with a yellow 'CE' box. The proxy model uploads its update to the server via a blue 'Upload' arrow.

All client modules communicate with the server via bidirectional arrows: 'Download' (green) from server to clients, and 'Upload' (blue) from clients to server. The server module is a light green rectangle labeled 'Server Update', positioned centrally above the global model learning block. The entire diagram uses consistent color coding: blue for small client components, red for large client components, and green for server and aggregation elements. Text labels are clear and placed near relevant components, with section references in parentheses for each major module.
