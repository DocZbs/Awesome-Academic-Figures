# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Balance-aware Sequence Sampling Makes Multi-modal Learning Better — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01470

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the BSS (Balance Score Sampling) method, divided into two main parts: (a) the multi-modal training framework, and (b) two scheduler mechanisms—(b1) heuristic and (b2) learning-based—for sequence sampling during training.

[1] Global Layout and Structure:
The figure is horizontally partitioned into two major sections: (a) on the left, depicting the end-to-end multi-modal representation learning pipeline, and (b) on the right, showing the two scheduling strategies. Section (b) is further vertically split into (b1) and (b2), each illustrating a different approach to dynamic sampling. A legend at the bottom defines key symbols: x_i^(u) and x_i^(v) denote the i-th data point from modalities u and v; s(·) is the balance score function; λ_root(·) is the pacing function; p(·) is the assignment probability; ⊕ denotes element-wise summation; and a cube represents a multi-modal sample.

[2] Visual Modules and Attributes:
In section (a), paired multi-modal samples are shown as a red filmstrip (visual modality x_i^(u)) and a blue spectrogram (audio modality x_i^(v)). These inputs are routed through a pink 'Scheduler' module, which dynamically selects one or both modalities via switches. The selected modality feeds into either Encoder 1 (peach-colored, representing visual processing) or Encoder 2 (blue, representing audio processing). Each encoder outputs a feature vector, which is then concatenated and passed to a 'Projection Head' composed of three neural network layers (each represented by a group of circles connected by lines). The projection head produces logits, which are used to compute three cross-entropy losses: L_ce^uni for unimodal branches, and L_ce^multi for the multimodal branch. The projection head uses distinct color-coded connections: orange for Encoder 1’s output, red for the concatenated input, and blue for Encoder 2’s output.

In section (b1), a yellow cylinder labeled 'Training Set' feeds into a balance score function s(·), producing a set of cubes (multi-modal samples) with numerical scores (e.g., 0.74, 0.33, 0.57). These form 'Fixed Sequences'. A pacing function λ_root(·) transforms these into an 'Imbalanced' distribution over epochs t=1 to T, where higher-scoring samples are repeatedly sampled.

In section (b2), the same 'Training Set' is processed by two functions: s_upd^k(·) and s_cur^{k+1}(·), generating 'Updated Sequences' with new scores (e.g., 0.15, 0.48, 0.62). These sequences are combined via element-wise summation (⊕) to produce an assignment probability p(·), visualized as a bar chart showing sampling probabilities for each training set index from 1 to N.

[3] Connections and Arrows:
In (a), arrows indicate data flow: from paired samples to the Scheduler, then to encoders, followed by concatenation and projection head, ending in loss computation. Dashed lines from the Scheduler to the switches show control flow. In (b1), an arrow from the Training Set to s(·) leads to fixed sequences, which are transformed by λ_root(·) into imbalanced sampling over epochs. In (b2), two arrows from the Training Set lead to updated sequences, which are summed to produce p(·), depicted as a bar chart. All arrows are solid black unless otherwise specified, and dashed lines separate the two scheduler types.
