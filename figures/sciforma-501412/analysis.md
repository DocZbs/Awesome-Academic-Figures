# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Subspace Implicit Neural Representations for Real-Time Cardiac Cine MR Imaging — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12742

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a five-stage methodological pipeline for dynamic MRI reconstruction using continuous basis representation and neural network modeling. The global layout is divided into five labeled panels (a-e), arranged in two columns: panels (a), (b), and (c) on the left column, and (d) and (e) on the right, connected by a large green curved arrow indicating progression from initialization to fine-tuning and inference.

Panel (a) 'Data acquisition' shows a 3D k-space volume with axes k_x, k_y, and time t. It depicts a continuous sampling trajectory represented by dashed lines across multiple time frames, forming a radial pattern with small angular increments—referred to as a 'tiny golden angle radial trajectory'. The data is acquired as a sequence of k-space spokes over time.

Panel (b) 'Discrete temporal basis estimation' begins with binned k-space spoke centers. These are processed via GRASP (a reconstruction algorithm) to produce low-resolution reconstructed images. Subsequently, Singular Value Decomposition (SVD) is applied to these images to extract top-k spatial and temporal basis components, shown as a set of spatial images and corresponding temporal profiles.

Panel (c) 'Initializing continuous representation of bases' takes the interpolated top-k discrete bases and feeds them into two separate neural networks: a Spatial Network (light yellow background) and a Temporal Network (light blue background), each represented as a multi-layer feedforward network with circular nodes and connecting lines. The output is initialized continuous representations of the spatial and temporal bases, depicted as smooth spatial images and temporal curves.

Panel (d) 'Fine-tuning' shows the trained networks being refined. Rotated high-resolution image grids (in x-y-t space) are used as input, with spatial coordinates (x,y) fed into the Spatial Network and temporal coordinate (t) into the Temporal Network. The outputs are rotated spatial bases and temporal bases, which are multiplied together (indicated by a multiplication symbol) to form rotated high-resolution images. These are compared to predicted spokes generated from sampled spokes via the Fourier slicing theorem. A loss function is computed between predicted and sampled spokes, and TV regularization is applied during optimization, guided by Equation ref{eq:fine_tune}.

Panel (e) 'Inference' illustrates the final reconstruction step. A regular x-y-t grid is input into the Spatial and Temporal Networks, which produce their respective outputs. These are multiplied together to yield the final reconstructed image, shown as a high-quality dynamic MRI slice.

Connections throughout the diagram are indicated by arrows: solid red arrows denote data flow or computation steps, while a large green curved arrow links the initial stages (a-c) to the fine-tuning stage (d), and another green arrow connects fine-tuning to inference (e). Text labels clearly identify each module and transformation step.
