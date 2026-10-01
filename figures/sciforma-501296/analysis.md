# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLMs are Also Effective Embedding Models: An In-depth Overview — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12591

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Matryoshka Embedding framework, which enables adaptive retrieval and classification by generating hierarchical embeddings of varying dimensions. The global layout is divided into two main sections: 'Inference' on the left and 'Training' on the right, separated by a central vertical bar representing the embedding vector z ∈ ℝ^d. This vector is depicted as a gray rectangular column containing nested colored blocks—red, orange, blue, yellow, and gray—from top to bottom—symbolizing progressively larger sub-vectors of increasing dimensionality. These correspond to different levels of the Matryoshka structure.

On the inference side, two modules are shown within rounded beige boxes. The upper module, labeled 'Adaptive Retrieval', contains two sequential steps: 'Shortlisting' (light blue rectangle) followed by 'Re-ranking' (green rectangle), connected by a black downward arrow. The Shortlisting step receives input from the red block (z₁:d/16) via an orange arrow, while Re-ranking receives input from the blue block (z₁:d/4) via a gray arrow. Below this, the 'Adaptive Classification' module displays a visual progression of increasingly complex feature representations, starting with small red blocks and culminating in a full-length gray bar composed of all colored segments. A dashed black arrow points from the top red block to the bottom gray bar, indicating the hierarchical expansion of features. A solid black arrow connects the entire embedding vector z to this module, suggesting it uses the full embedding for classification.

On the training side, five loss functions are computed from different prefixes of the embedding vector: ℒ(z₁:d/16) from the red block (red arrow), ℒ(z₁:d/8) from the orange block (orange arrow), ℒ(z₁:d/4) from the blue block (blue arrow), ℒ(z₁:d/2) from the yellow block (yellow arrow), and ℒ(z₁:d) from the full vector (gray arrow). These losses are aggregated using a summation symbol (⊕) to form the total loss ℒ(z), indicated by a black arrow leading to the final output. At the bottom of the embedding vector, a small icon resembling a Matryoshka doll (a red bowl with a green figure inside) visually reinforces the nesting concept. The figure uses color-coded arrows to link each sub-vector to its corresponding loss function, emphasizing the multi-scale training objective. All components are arranged to show a clear separation between inference (left) and training (right), with the embedding vector serving as the central bridge.
