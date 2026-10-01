# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3D Registration in 30 Years: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13735

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a general framework for an iterative paradigm in unsupervised 3D pairwise coarse registration methods, divided into two main sections: the top section depicting the data processing pipeline, and the bottom section showing the training architecture with feedback loops.

[1] Global Layout and Structure:
The diagram is vertically split into two distinct parts. The upper part outlines the forward pass of the registration process, where two 3D point clouds (one blue, one red) are processed through feature extraction, alignment state computation, and transformation estimation, followed by an update step that feeds back into the input. The lower part presents the training setup, where two 3D scans (labeled P and Q, shown as colored mesh models) are fed into a registration network and auxiliary modules, with gradients flowing backward from a loss function to update the network parameters.

[2] Visual Modules and Attributes:
In the top section, two 3D point cloud inputs (blue and red) are shown on the left. Each connects to a light blue rounded rectangle labeled 'Feature Extraction'. Outputs from both feature extractors feed into a dashed-line rounded rectangle containing two stacked states: 'Feature Alignment State' and 'Geometry Alignment State'. This combined state then connects to another light blue rounded rectangle labeled 'Transformation Estimation'. A solid black arrow labeled 'Update' loops from the transformation estimation back to the red point cloud input, indicating iterative refinement.

In the bottom section, two 3D mesh models (P in cyan, Q in yellow) are shown on the left. These are connected via a cross-shaped structure to two modules: a light blue rounded rectangle labeled 'Registration Network', and a dashed-line rounded rectangle below it containing two components: 'Prior Verifier' and 'Pseudo Labeler'. The Registration Network outputs to a light blue rounded rectangle labeled 'Loss Function'. A dotted arrow labeled 'Backward' points from the Loss Function back to the Registration Network, indicating gradient propagation during training.

[3] Connections and Arrows:
In the top section, solid arrows indicate the forward data flow: from each point cloud to Feature Extraction, then to the alignment state box, then to Transformation Estimation, and finally a feedback loop labeled 'Update' returning to the red point cloud. In the bottom section, solid lines connect the 3D models P and Q to the Registration Network and the Prior Verifier/Pseudo Labeler module. The Registration Network sends output to the Loss Function, which in turn sends a dotted 'Backward' arrow to the Registration Network, signifying the backpropagation of gradients. The Prior Verifier/Pseudo Labeler also connects to the Loss Function, suggesting its role in generating pseudo-labels or verifying priors to inform the loss computation.
