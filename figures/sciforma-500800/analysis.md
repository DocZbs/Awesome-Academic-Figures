# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Optimal Gradient Checkpointing for Sparse and Recurrent Architectures using Off-Chip Memory — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11810

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of Backpropagation Through Time (BPTT) and several gradient-checkpointing strategies used in training recurrent neural networks or sequence models. The layout is horizontally structured into two main sections: the top section illustrates 'Plain BPTT', while the bottom section details 'Standard Checkpointing' along with associated execution traces and memory characteristics.

In the top section, labeled 'Plain BPTT', a linear sequence of 9 circular nodes (s_in, s_0 through s_7) is connected by solid red arrows, representing the forward pass through time steps. Each node is a light green circle with black text, symbolizing a state at a given time step. This section includes a caption on the right stating: '1 Forward Pass, 1 Backward Pass, Local Mem. Requirement: T', indicating that this method requires storing all intermediate activations, leading to O(T) memory complexity.

The bottom section, labeled 'Standard Checkpointing', shows a similar sequence of states but with strategic recomputation points. The sequence begins with s_in, followed by s_0, s_1, s_2, s_3, etc., up to s_7. However, only certain states (s_in, s_2, s_3, s_5, s_7) are marked as 'Recomp' (recompute), indicated by green circles, while others are shown as white circles within dashed rectangular boxes, signifying they are not stored locally but recomputed during backward pass. These dashed boxes represent chunks of computation that are recomputed when needed.

Below the state sequence, there are three horizontal arrows illustrating the computational flow: a black arrow labeled 'Forward' indicates the initial forward pass; a blue arrow labeled 'Re-Forward₁' and another labeled 'Re-Forward₂' show the recomputation steps during backward propagation; and a red arrow labeled 'Backward' represents the gradient backpropagation phase. A legend clarifies the symbols: dashed rectangles denote 'Chunk', green circles denote 'Local' storage, and pink circles (not present in this specific diagram) would denote 'Remote' storage.

The caption for this section reads: '1 Forward Pass, 1 Recomp. Pass, 1 Backward Pass, Local Mem. Requirement: √T', highlighting the reduced memory footprint achieved by recomputing intermediate states instead of storing them all.

The overall figure is titled 'Figure 1: Comprehensive overview of Backpropagation Through Time (BPTT) and various gradient-checkpointing strategies.' The visual design uses consistent node shapes and colors, with clear directional arrows and annotations to convey the workflow and memory trade-offs between plain BPTT and standard checkpointing.
