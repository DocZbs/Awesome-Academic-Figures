# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GraphAvatar: Compact Head Avatars with GNN-Generated 3D Gaussians — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13983

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive overview of the GraphAvatar framework, its architectural design, qualitative outputs, and quantitative performance comparison on the INSTA dataset. The global layout is horizontally structured into four main sections: input data, the core GraphAvatar model architecture, output visualization, and a performance evaluation chart.

In the first section, labeled 'Tracked Mesh', three sequential facial mesh frames are shown vertically, representing dynamic facial expressions. These serve as input to the GraphAvatar model. The second section illustrates the GraphAvatar architecture, depicted as a graph-based neural network. It consists of two stacked, parallel blocks of gray rectangular layers, each containing four circular nodes of distinct colors: orange, yellow, green, and blue. These nodes represent different feature representations or latent states within the graph. The nodes are interconnected by solid lines forming a graph structure, with dashed lines indicating the boundaries of the layer stacks. A central 'Hidden Layers' component, represented by a small black rectangle, connects the two blocks via curved arrows: an orange arrow from the top node, a yellow arrow from the second node, a green arrow from the third, and a blue arrow from the bottom node, symbolizing information flow through hidden layers. The model is labeled 'GraphAvatar' in bold above the central connection.

The third section displays the outputs: on the left, under '3D Gaussians', three sets of colorful, elliptical 3D Gaussian distributions are shown, corresponding to each input frame. On the right, under 'Rendered Images', three photorealistic facial renderings are presented, matching the expressions of the input meshes. Dashed lines link each input mesh to its corresponding 3D Gaussian and rendered image, indicating the generative pipeline.

The fourth section contains a scatter plot titled 'Quantitative Results on the INSTA Dataset'. The x-axis represents PSNR (Peak Signal-to-Noise Ratio), ranging from 26 to 31, and the y-axis represents SSIM (Structural Similarity Index), ranging from 0.940 to 0.970. Data points for various methods are plotted, including GraphAvatar (Ours), GaussianAvatars, Gaussian Head Avatar, FlashAvatar, INSTA, IMAvatar, and NHA. Each point's size corresponds to the model size in MB, as indicated in the legend. The legend lists the methods with their respective sizes: GraphAvatar (10.80 MB), GaussianAvatars (71.30 MB), Gaussian Head Avatar (43.10 MB), FlashAvatar (13.25 MB), INSTA (523.70 MB), IMAvatar (22.70 MB), and NHA (90.80 MB). GraphAvatar is highlighted in red and positioned at the top-right of the plot, indicating the highest SSIM and PSNR values, while also having the smallest point size, emphasizing its superior performance and minimal model size. The caption below the plot clarifies that point size corresponds to model size in megabytes.

Overall, the figure demonstrates that GraphAvatar uses graph neural networks to process tracked facial meshes, generating 3D Gaussians that are rendered into high-fidelity images, achieving state-of-the-art quality with the most compact model size.
