# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scalable Temporal Anomaly Causality Discovery in Large Systems: Achieving Computational Efficiency with Binary Anomaly Flag Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11800

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-stage architectural diagram for a temporal anomaly causal discovery (CD) approach, designed to infer causal interactions among monitoring sensor variables using binary anomaly data. The overall layout is divided into two main vertical sections: 'Data Preprocessing' on the left and 'Anomaly Causal Graph Modeling' on the right, separated by a vertical boundary line.

In the 'Data Preprocessing' section, an orange cylindrical icon labeled 'Anomaly Flag Data' serves as the input source. This flows via a solid black arrow into a light teal rounded rectangle labeled 'Sparse Data Handling'. Above this module, within the same section, is a gray rounded rectangle labeled 'User Settings', containing a blue user icon with a yellow gear symbol, indicating configurable parameters for preprocessing.

The output of 'Sparse Data Handling' feeds into the 'Anomaly Causal Graph Modeling' section through a solid black arrow. Here, the process begins with a light teal rounded rectangle labeled 'Sparse Link Handling: Prior Link Assumption', which includes a small purple network icon depicting three connected nodes. This module receives dashed-line inputs from a gray rounded rectangle labeled 'Domain Knowledge', which contains a blue user icon with a purple network icon, suggesting expert-guided constraints or assumptions.

From 'Sparse Link Handling', a solid arrow leads to an orange rounded rectangle labeled 'Time-lagged + Contemporaneous Causal Graph Structure', also accompanied by a small purple network icon. This module represents the inferred structure of causal relationships, incorporating both delayed and simultaneous effects.

Two solid arrows emerge from this structure: one points to a light blue rounded rectangle labeled 'Time Series Data Unrolling', and another points to a pale yellow rounded rectangle labeled 'Temporal Causal Bayesian Model', which features a yellow gear icon. The 'Time Series Data Unrolling' module has a bidirectional arrow connecting it to the 'Temporal Causal Bayesian Model', indicating iterative or reciprocal processing between them.

Finally, the 'Temporal Causal Bayesian Model' feeds into a lavender rounded rectangle labeled 'Causality Inference Engine', which contains a green square icon with white gears and circuit-like patterns, symbolizing computational inference. A dashed arrow from 'Domain Knowledge' also connects to 'Time Series Data Unrolling', reinforcing the integration of expert knowledge throughout the modeling phase.

All connections are represented by solid black arrows for direct data flow and dashed black arrows for guidance or constraint inputs. The diagram uses distinct colors and icons to differentiate modules: teal for preprocessing and sparse handling, orange for causal structure, blue for data unrolling, yellow for the Bayesian model, and lavender for the final inference engine. The visual hierarchy emphasizes a sequential workflow from raw anomaly flags through preprocessing, causal structure learning, and finally to causal inference, with domain knowledge influencing multiple stages.
