# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Diffusion Model-Based Data Synthesis Aided Federated Semi-Supervised Learning — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02219

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a five-step federated learning framework called DDSA-FSSL, designed for semi-supervised learning with synthetic data generation. The overall layout is divided into five vertically stacked sections, each representing a distinct phase of the algorithm, separated by dashed horizontal lines. Each section contains a central server (labeled 'Central Server' with a base station icon) connected to multiple clients (represented as silhouettes), illustrating a client-server federated architecture. A legend in the top-right corner indicates solid arrows represent 'Upload' and dashed arrows represent 'Download'.

In Step ①, 'Train classifier on labeled data', clients hold local labeled datasets (gray databases) and train local classifiers (black neural network icons). These local models are uploaded to the central server, which aggregates them via 'Model Aggregation' (thick black arrow) to form a global classifier (orange neural network). The aggregated model parameters θ_K are then downloaded back to all clients.

Step ②, 'Perform pseudo labeling for unlabeled data', begins with the global classifier being sent to clients. Each client applies this classifier to their unlabeled data (blue databases) to generate pseudo-labeled data (green databases). The central server collects local confusion matrices M_1^t and M_K^t from clients and computes a 'Global Confusion Matrix' M_g^t (a 2x2 grid of colored squares). This global matrix guides a 'Data selection' process at each client, resulting in 'Optimized Pseudo-labeled Data' (green databases with a checkmark), which are then uploaded to the central server.

Step ③, 'Train DM on labeled and pseudo-labeled data', involves clients combining their original labeled data (gray databases) with the optimized pseudo-labeled data (green databases) to train local Diffusion Models (yellow neural networks). These local DMs are uploaded to the central server, which aggregates them into a 'Diffusion Model' (purple neural network) using 'Model Aggregation'. The aggregated DM parameters φ_K are then downloaded to clients.

Step ④, 'Generate synthetic data', shows the central server computing a 'Global Data Distribution' (red bar chart) from aggregated local data distributions |D_1^l| and |D_K^l| (gray histograms). Clients use their local Diffusion Models (purple neural networks) to generate 'Global Diffusion Synthetic Data' (pink databases), based on discrepancies between local and global distributions.

Finally, Step ⑤, 'Train classifier on labeled and synthetic data', involves clients training local classifiers (orange neural networks) on both their original labeled data and the newly generated synthetic data (pink databases). These updated models are uploaded to the central server, where they are aggregated into a final 'Global Classifier' (red neural network) through 'Model Aggregation'. The final model parameters θ_1 and θ_K are distributed back to clients. Throughout the diagram, model aggregation is consistently represented by thick black arrows, while parameter downloads are shown as dashed arrows from the central server to clients.
