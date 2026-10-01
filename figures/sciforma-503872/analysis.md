# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Better Knowledge Enhancement for Privacy-Preserving Cross-Project Defect Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17317

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the FedDP framework, illustrating a federated learning pipeline involving multiple clients and a central server. The global layout is divided into two main vertical sections: the left side represents individual clients (Client 1 and Client K), while the right side represents the server. A dashed red border encloses the entire system, with step labels (① through ⑧) indicating the sequential flow of operations. The process begins at the server, which distributes the initial global model and distillation data to all clients (step ①, indicated by blue dashed arrows labeled 'Distribute').

On the client side, each client performs local training. This involves a local model (represented as a neural network with pink, purple, and green nodes) trained on local data (depicted as stacked cylinders, colored green for Client 1 and yellow for Client K). Additionally, each client uses distillation data (blue stacked cylinders) to compute similarity scores (C₁ for Client 1, C_K for Client K), shown as vertical lists of numerical values (e.g., 0.844, 0.912, 0.818 for Client 1). These similarity computations are labeled as step ③. The local model is updated based on this information (step ②). After local training, clients upload both their updated local model and the computed similarity scores to the server (step ④, indicated by green arrows labeled 'Upload').

At the server, the first major module is 'Model Aggregation'. It receives the K local models (w₁ to w_K), each represented as a neural network with distinct background colors (green, beige, light blue). These are aggregated using a weighted sum formula: w = Σ(K from k=1) (n_k / n) * w_k, resulting in an 'Initial Global Model w' (step ⑤). The second module, 'Heterogeneity Awareness', processes the uploaded similarity scores C (from all clients) through a normalization step to produce 'Correlation Factors α', shown as a vertical list of normalized values (e.g., 0.087, 0.152, 0.116). This is step ⑥.

The third module, 'Knowledge Distillation', uses the Initial Global Model w as a 'Teacher Model' and the aggregated local models as 'Student Models'. The Teacher Model generates 'Soft Predictions' (bar charts), which are then multiplied element-wise by the Correlation Factors α (indicated by '*' symbols) to produce 'Weighted Soft Predictions'. These are ensembled to form 'Ensemble Soft Predictions' (step ⑦). Simultaneously, the Student Model also produces 'Soft Predictions' (step ⑦). Finally, these predictions undergo 'Knowledge Distillation' (step ⑧, orange box) to obtain the 'Final Global Model ŵ', which is then distributed back to clients (step ①, completing the cycle). The server also stores the distillation data (blue cylinder) for use in generating teacher logits. The entire process emphasizes adaptive weighting of client contributions based on data heterogeneity via correlation factors.
