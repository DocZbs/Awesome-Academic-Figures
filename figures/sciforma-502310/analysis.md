# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Covariances for Free: Exploiting Mean Distributions for Training-free Federated Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14326

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FedCOF (Federated Learning with COvariances for Free) framework, a federated learning method that enables clients to communicate only class-specific summary statistics to a central server for training a linear classifier. The global layout is divided into two main regions: the left side represents multiple clients (Client 1 through Client k), each processing local data, and the right side represents the FedCOF Server, which aggregates information and initializes the classifier.

On the client side, each client is enclosed in a dashed rectangular box. Within each client, a purple cylinder labeled 'Data' with subscript X_k (for Client k) feeds into a light blue trapezoidal module labeled f_θ, representing a feature extractor or encoder. A small blue star icon above f_θ indicates a trainable parameter or model. The output of f_θ is visualized as a 2D scatter plot showing two classes: one represented by red stars within a red dashed ellipse (labeled Σ₁) and another by green stars within a green dashed ellipse (labeled Σ_C). These ellipses represent the class covariances estimated locally at the client. From this visualization, the client computes and transmits the class mean estimates (denoted as hat{μ}_{k,c}) and class sample counts (n_{k,c}) to the server. This transmission is shown as an arrow from the client's plot to the server, with a small star icon indicating the transmitted data points.

The server side is enclosed in a large rounded rectangle labeled 'FedCOF Server'. It receives the class means and counts from all clients. Step (A) shows the aggregation process: the server combines the received class means to compute an unbiased estimator of the population class covariances, denoted as hat{Σ}_1 and hat{Σ}_C, which are represented by solid ellipses (in contrast to the dashed ellipses of the local estimates). The text below step (A) explicitly labels these as 'Unbiased Estimator of μ_c, Σ_c', indicating that both class means and covariances are estimated. Step (B) shows the initialization of the linear classifier: the estimated second-order statistics (hat{μ}_c, hat{Σ}_c) are fed into the same f_θ module (identical in shape and color to the client's module) to initialize the classifier. Below this, the text 'Initialize Linear Classifier' clarifies the purpose. The figure also includes a note that the between-class scatter matrix is removed during this initialization, as discussed in the referenced section.

The visual modules are consistently styled: data is a purple cylinder, the feature extractor f_θ is a light blue trapezoid with a blue star, and class distributions are shown as ellipses with stars. Dashed ellipses denote local, potentially biased estimates (Σ₁, Σ_C), while solid ellipses denote the server's unbiased estimates (hat{Σ}_1, hat{Σ}_C). Arrows indicate the flow of data and computation, with specific steps (A) and (B) labeled to guide the viewer through the server-side process. The overall structure emphasizes privacy-preserving communication (only means and counts) and the server's role in computing accurate second-order statistics for classifier initialization.
