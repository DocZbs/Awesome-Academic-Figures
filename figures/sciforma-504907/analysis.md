# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TrajGEOS: Trajectory Graph Enhanced Orientation-based Sequential Network for Mobility Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19092

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of TrajGEOS, a trajectory prediction model composed of three main modules: Graph Learning, Trajectory Embedding, and Predicting Module, each enclosed in a dashed rectangular boundary. The global layout is left-to-right, with data flowing from historical and current trajectory inputs through graph-based feature extraction, temporal embedding, and finally to dual prediction outputs for category and location.

In the Graph Learning module on the left, 'Historical Trajectories' (a light blue rectangle) feed into an EGraphSAGE model, represented as a complex, colorful network graph with nodes and edges. This produces a set of node embeddings {z_i}_{i=1}^M, visualized as a horizontal bar of purple blocks. Below this, a GraphSAGE model (a simplified graph with orange and blue nodes connected by lines) processes the same historical data, followed by a 'Readout' step, generating long-term user representations {u_i^{long}}_{i=1}^N, shown as a horizontal bar of pink blocks. These two sets of embeddings are passed to the next module.

The central Trajectory Embedding module processes both current and recent trajectories. The 'Current trajectory' (S_i^p), depicted as a sequence of three light blue circles connected by lines, is converted into 'Current records' — vertical bars with gradient colors (purple to red) representing time and category features. These records are fed into a GRU (Gated Recurrent Unit), shown as a light blue rounded rectangle, which outputs a short-term representation u_{i,p}^{short} (a purple block). Simultaneously, the 'Input trajectory' (a sequence of orange and blue circles) is split into 'Recent trajectory' [S_i^{p-2}, S_i^{p-1}], shown as a sequence of orange circles. This is transformed into 'Recent records' (vertical bars with gradient colors) and passed to an 'Orientation module'. This module includes 'Position Embedding' (a series of vertical bars) and an 'Attention' mechanism (a light blue rectangle), which generates a mid-term representation u_{i,p}^{mid} (a red block). The long-term representation u_i^{long} (pink block) from the Graph Learning module is also fed into this module.

In the Predicting Module on the right, the short-term, mid-term, and long-term representations (u_{i,p}^{short}, u_{i,p}^{mid}, u_i^{long}) are combined via element-wise addition (indicated by a ⊕ symbol). The resulting vector, along with the 'User ID' (a green block), is input into two separate 'Predictor' blocks (light orange rounded rectangles). One predictor outputs the predicted category at time T+1, denoted as \hat{cat}_i^{T+1}, while the other outputs the predicted location, \hat{loc}_i^{T+1}. The connections between modules are indicated by solid black arrows, showing the direction of data flow. The figure uses distinct colors and shapes to differentiate components: light blue for graph and recurrent layers, light orange for predictors, purple and pink for different embedding types, and green for user ID.
