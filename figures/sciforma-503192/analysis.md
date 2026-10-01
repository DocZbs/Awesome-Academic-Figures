# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Online High-Frequency Trading Stock Forecasting with Automated Feature Clustering and Radial Basis Function Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16160

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a fully automated online processing protocol, structured as a flowchart with distinct stages and parallel pathways. On the far left, a visual representation of 'Overlapping Feature Sets' is shown using three stacked rectangular blocks—two light blue dashed outlines and one solid dark blue block—indicating multiple, partially overlapping data subsets. These feature sets feed into a central 'Input' node, represented as a white rounded rectangle with black border, which serves as the entry point for the processing pipeline.

From the 'Input' node, two main branches diverge, each encapsulated within a large, light orange rounded rectangular container. The top container is labeled 'Simple', and the bottom one 'Extended', indicating two parallel processing strategies or configurations. Each container contains two identical sub-pipelines running side-by-side, representing two competitive methods: 'MDI' (Mean Decrease in Impurity) and 'GD' (Gradient-based method), both depicted as white rounded rectangles with black borders.

Within each container, the 'MDI' and 'GD' nodes each connect via solid black arrows to a 'Clustering' node, also a white rounded rectangle. This indicates that both methods generate feature importance vectors, which are then used to inform the clustering process. The 'Clustering' step computes an optimal number of clusters based on a correlation distance-based matrix, weighted by the feature importance vectors from either MDI or GD.

Following the 'Clustering' node, each path leads to an 'RBFNN' (Radial Basis Function Neural Network) node, again a white rounded rectangle. This final stage uses the cluster results to define the centroids and standard deviations of the RBF neurons. Importantly, the number of clusters is dynamically adjusted online, adapting to the most recent input feature set.

The entire diagram flows from left to right, emphasizing a sequential, automated workflow. The two main containers ('Simple' and 'Extended') suggest different levels of complexity or scope in the processing, but both follow the same internal structure: two parallel feature importance methods feeding into clustering, which then feeds into RBFNN construction. All connections are directed with solid black arrows, indicating unidirectional data flow. No mathematical equations or LaTeX expressions are present in the diagram itself, but the caption clarifies the underlying computational logic, particularly the dynamic, online nature of clustering and RBFNN adaptation.
