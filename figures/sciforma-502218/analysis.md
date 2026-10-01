# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AnySat: One Earth Observation Model for Many Resolutions, Scales, and Modalities — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14123

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Scale-Adaptive Patch Encoding process, structured as a left-to-right data flow pipeline. The global layout consists of four main stages connected sequentially by arrows, each representing a transformation step in the encoding process. The initial input is a patch denoted as x_p^m, represented as a black square with dimensions labeled Δ_m × Δ_m × T_m × C_m, indicating spatial resolution, temporal dimension, and channel count. This input is processed through a series of operations: splitting, encoding, and merging.

In the first stage, the input patch is split into smaller sub-patches of fixed size δ_m pixels, as indicated by the label 'split in sub-patches' and the accompanying text 'size: δ_m pixels'. This operation results in a grid of sub-patches, visually depicted as a 2×2 arrangement of white squares embedded within two vertical black bars, symbolizing the partitioned structure. The output dimensions at this stage are specified as (Δ_m/δ_m)^2 × (δ_m^2 × T_m × C_m), reflecting the number of sub-patches and their individual feature volume.

The second stage involves encoding these sub-patches using a modality-specific projector, denoted as ℙ (mathcal{P}). This is shown as an arrow labeled 'encode sub-patches' leading to a 2×2 grid of cyan squares, each representing an encoded sub-patch. The output dimensions here are (Δ_m/δ_m)^2 × E, where E is the embedding dimension, indicating that each sub-patch is transformed into a fixed-size E-dimensional vector.

The third stage merges all encoded sub-patches using a shared spatial transformer module, denoted as ℒ (mathcal{T}), as indicated by the label 'merge sub-patches'. This module processes the entire set of sub-patch embeddings and outputs a single vector of size E, represented as a white square labeled f_p^m. The final output is thus a compact, E-dimensional representation of the original patch, independent of the input resolution Δ_m, since the sub-patch size δ_m remains constant across scales.

The visual modules are distinguished by color and shape: the input patch is a black square, sub-patches are white squares, encoded sub-patches are cyan squares, and the final output is a white square. All modules are connected by solid black arrows indicating the direction of data flow. The figure includes mathematical annotations above each stage to specify the tensor dimensions at each step, ensuring clarity on the transformation of data shapes. The caption explains that the fixed sub-patch size allows the same network to handle patches of varying resolutions, making the architecture scale-adaptive.
