# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BetaExplainer: A Probabilistic Method to Explain Graph Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11964

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the three-step workflow of the BetaExplainer method for generating edge importance scores in a Graph Neural Network (GNN) context. The global layout is structured into three main vertical stages: Step One (Initialize Inputs), Step Two (Train BetaExplainer), and Step Three (Return Edge Mask), with an overarching central processing block labeled 'Update Probabilities & Get New Masked Results' that connects Steps Two and Three. The top-left corner contains a gray cube labeled 'Trained GNN', indicating the input model, alongside a representation of the 'Original Graph' composed of yellow circular nodes connected by blue arrows, with associated parameters α and β. This section also includes the output of the trained GNN, denoted as f(X,G) = [0, 0, ..., n, n], representing node predictions or embeddings.

In Step One, the process begins with initializing inputs: the trained GNN, the original graph structure, and the Beta distribution parameters α and β. These are fed into Step Two, which is visually represented as a vertical sequence of three masked graph states, each showing progressively more edges removed (indicated by dashed lines and reduced connectivity). Each state is annotated with a vector of values: [1,1,1] at the top (fully connected), then [0.25,0.5,0.75], and finally [0.10,0.55,0.9], illustrating the iterative masking process where edge probabilities are updated. This step is labeled 'Train BetaExplainer'.

The central beige box, titled 'Update Probabilities & Get New Masked Results', describes the core optimization loop. It contains a diagram of a 'Masked Graph' with some edges dashed to indicate masking, and shows the GNN results on this masked graph as f(X,Gs) = [0, 1, ..., 1, n]. A feedback loop arrow connects the masked graph output back to itself, emphasizing iterative refinement. The objective function is explicitly stated: minimize the KL-divergence D_KL(f(X,G) || f(X,Gs)) between the original GNN output and the masked graph output, ensuring the masked graph preserves predictive performance as much as possible.

At the bottom, a light green box labeled 'Edge Mask: One Probability Per Edge' displays a sample vector [0.26, 0.91, ..., 0.45, 0.6], representing the final output — a probability score for each edge in the graph, indicating its importance. This corresponds to Step Three: 'Return Edge Mask', which concludes the process. The entire diagram uses consistent visual elements: yellow circles for nodes, blue arrows for edges, dashed lines for masked edges, and color-coded boxes (gray, beige, green) to distinguish input, processing, and output stages. Text labels are placed directly within or adjacent to the relevant components, and mathematical notation is used precisely to convey the optimization goal.
