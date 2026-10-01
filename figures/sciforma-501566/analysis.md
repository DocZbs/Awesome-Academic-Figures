# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relational Neurosymbolic Markov Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

Figure 1 presents three probabilistic graphical model representations labeled a: HMM, b: NeSy, and c: MM, illustrating distinct system architectures. The global layout is horizontal, with each model displayed side-by-side, separated by spacing, and each accompanied by a lowercase label beneath it. The caption below the entire figure clarifies that blue nodes denote hidden states and green nodes denote observations.

In subfigure a (HMM), the structure consists of two time steps, t−1 and t. At each time step, there is a blue circular node representing the state variable X_t and a green circular node representing the observation Z_t. A directed arrow points from X_{t−1} to X_t, indicating temporal state transition. Additionally, arrows point downward from each X_t to its corresponding Z_t, signifying that observations are conditionally dependent on the current state. All nodes are filled with light blue (for states) or light green (for observations), with black borders and centered black text.

Subfigure b (NeSy) shows a simpler, non-temporal structure. It contains two blue circular nodes: an upper node labeled N and a lower node labeled S. A single directed arrow labeled ϕ points from N to S, indicating a direct dependency or transformation from the neural component N to the symbolic component S. Both nodes share the same visual style: light blue fill, black border, and centered black text.

Subfigure c (MM) depicts a more complex temporal model with two time steps. Each time step includes a blue circular node labeled N_t (top) and S_t (middle), and a green circular node labeled Z_t (bottom). Directed arrows labeled g point upward from S_{t−1} to N_{t−1} and from S_t to N_t, suggesting that the neural component at each time step is influenced by the previous symbolic state. A horizontal arrow connects S_{t−1} to S_t, indicating state evolution. Downward arrows from each S_t to Z_t show that observations depend on the symbolic state. The nodes follow the same color-coding: blue for states (N_t and S_t), green for observations (Z_t), with consistent black borders and centered labels.

All connections are represented by solid black arrows with arrowheads indicating directionality. The figure uses a clean, minimalistic design with no background or grid, emphasizing clarity of the probabilistic dependencies. The overall structure conveys a progression from a standard HMM to a hybrid NeSy model and finally to a more sophisticated MM framework integrating neural and symbolic components across time.
