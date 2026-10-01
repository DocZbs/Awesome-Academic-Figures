# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Online Detection of Water Contamination Under Concept Drift — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02107

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a decentralized architecture for detecting or modeling contamination in a spatial-temporal system. The global layout consists of a two-dimensional grid-like structure formed by two horizontal black lines connected by vertical black lines, creating three rectangular regions. Within this grid, three green star-shaped nodes labeled s₁, s₂, and s₃ are positioned at distinct locations: s₁ and s₂ lie on the upper horizontal line, while s₃ is located on the lower horizontal line, centered vertically between the two upper nodes. Each star node represents a sensor or monitoring point. Above each star node, there is a blue rounded rectangle, representing a local processing unit or model. These units are connected to their respective star nodes via dashed green arrows pointing upward, labeled with x₁^t, x₂^t, and x₃^t, indicating input data or observations from each sensor at time t. From each blue rectangle, a dashed blue arrow points diagonally toward an orange oval located to the right of the grid, labeled 'Contamination Region'. These arrows are labeled ŷ₁^t, ŷ₂^t, and ŷ₃^t, representing predicted outputs or estimates from each local model regarding the contamination state. The orange oval symbolizes the aggregated or inferred contamination region, which is further linked to the label 'Contamination Region' via a dashed orange arrow, emphasizing its role as the final output or inference target. The connections suggest a decentralized flow: each sensor collects data, feeds it into a local model, and the model produces a prediction that contributes to the global contamination assessment. The figure visually emphasizes the distributed nature of the system, where multiple independent units collaborate to infer a shared phenomenon without centralized coordination.
