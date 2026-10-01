# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Task Diversity in Bayesian Federated Learning: Simultaneous Processing of Classification and Regression — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10897

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the pFed-Mul model, divided into two main sections: a system diagram on the left and a bi-level optimization framework on the right. The left section depicts a federated learning setup with a central Server (shown as a pink rounded rectangle) coordinating multiple Clients (Client 1 in green, Client 2 in blue, and Client Z in yellow, each represented as a rounded rectangle). Below each client, a gray dashed box contains two rows of circular nodes: the top row labeled 'reg 1' to 'reg T_r' represents regression tasks, and the bottom row labeled 'cla 1' to 'cla T_c' represents classification tasks. These tasks are color-coded to match their respective clients. Above the server, a mathematical expression defines the global model Θ = MOGP(Θ, W, k_{φ₁,θ₁}, ..., k_{φ_B,θ_B}), indicating a Multi-Output Gaussian Process with hyperparameters and kernels. Data flows between the server and clients via bidirectional arrows labeled p(ω,f) and q(ω,f), representing prior and posterior distributions over model parameters ω and functions f; these arrows are color-coded to match the client they connect to (green for Client 1, blue for Client 2, yellow for Client Z). The right section, titled 'Bi-level optimization', shows an iterative loop between two orange rounded rectangles. The top rectangle contains the objective: max_{p(f)} (1/Z) ∑_{z=1}^Z ELBO_z(p(f)), representing the maximization of the Evidence Lower Bound averaged across all clients. The bottom rectangle is labeled 'Mean-field VI', indicating the variational inference method used locally. Curved arrows connect these components: one arrow from Mean-field VI to the ELBO objective is labeled with q₁(ω), q₂(f₁,...,f_T), representing the variational posteriors for weights and functions; the reverse arrow from the ELBO to Mean-field VI is labeled p₁(ω), p₂(f₁,...,f_T), representing the updated priors. This loop illustrates the alternating process of local variational inference and global hyperparameter optimization.
