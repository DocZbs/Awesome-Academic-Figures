# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Modeling COVID-19 spread in the USA using metapopulation SIR models coupled with graph convolutional neural networks — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02043

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hybrid deep learning model architecture designed for predicting daily confirmed cases of an infectious disease across multiple regions using a metapopulation SIR framework. The overall layout is left-to-right, depicting a data processing pipeline from input features through several neural network modules to final predictions.

[1] Global Layout and Structure:
The diagram is structured into four main horizontal zones: input features on the top-left, a central processing backbone composed of stacked spatiotemporal layers, a graph learning module below the input, and the metapopulation SIR module at the bottom center. The output is shown on the bottom-right as predicted daily confirmed cases. The flow proceeds from left to right, with feedback loops and concatenation operations connecting different stages.

[2] Visual Modules and Attributes:
On the top-left, 'Input Node Features' are represented as a layered graph with nodes containing wavy lines indicating time-series features; this is labeled with the mathematical notation χ ∈ ℝ^(N×T_in×C), where N is the number of regions, T_in is the input time steps, and C is the feature dimension. An arrow labeled 'Features' points to this block.

A full connection (FC) layer follows, feeding into a sequence of 'ST layer' blocks. Each ST layer contains two components: a 'Gated TCN' (Temporal Convolutional Network) and a 'GCN' (Graph Convolutional Network), enclosed within a dashed box labeled 'ST layer'. These are connected via a 'gated fusion' mechanism, which is visually depicted as a small diagram showing element-wise multiplication and addition operations. The gated fusion outputs feed into subsequent ST layers via 'Gated Dense Connection', indicated by arrows looping back to earlier layers.

Each ST layer is followed by an FC(ReLU) layer. Outputs from multiple ST layers are concatenated horizontally into a single vector, then passed through another FC(ReLU) and FC(Sigmoid) layer, producing two outputs: β ∈ ℝ^(N×T_out) and γ ∈ ℝ^(N×T_out), representing transmission and recovery rates respectively.

Below the input, a 'Graph Learning Module' is shown as a rounded rectangle, with an arrow pointing to the metapopulation SIR module. This module likely learns dynamic graph structures or edge weights between regions.

The 'Metapopulation SIR Module' is a large hexagonal block at the bottom center. It receives β, γ, and H (from the Graph Learning Module) as inputs. Inside this block, a dashed box contains the differential equations of the SIR model: dS_n^t+1/dt = -β_n^t+1 * Σ(h_mm^t+1/P_m + h_nm^t+1/P_n) * I_m^t, dI_n^t+1/dt = β_n^t+1 * Σ(...) * I_m^t - γ_n^t+1 * I_n^t, and dR_n^t+1/dt = γ_n^t+1 * I_n^t. These equations model the dynamics of susceptible (S), infected (I), and recovered (R) populations across regions n over time t.

A feedback loop labeled 'Update S, I, R' connects back to the SIR module, indicating iterative updates of the population states.

On the bottom-right, the output is visualized as a series of graphs with red-highlighted nodes, labeled 'Predicted Daily Confirmed Cases', with the mathematical notation Ŷ ∈ ℝ^(N×T_out).

[3] Connections and Arrows:
Arrows indicate the direction of data flow. From Input Node Features → FC → ST layer → gated fusion → next ST layer, forming a sequential chain. Gated dense connections loop from later layers back to earlier ones. Outputs from each ST layer pass through FC(ReLU) before concatenation. The concatenated output feeds into FC(ReLU) and FC(Sigmoid) to produce β and γ. Both β and γ, along with H from the Graph Learning Module, enter the Metapopulation SIR Module. The SIR module outputs the predicted cases, and a self-loop updates the internal state variables S, I, R. A dashed arrow from the SIR module to the equations box indicates the underlying model being implemented.
