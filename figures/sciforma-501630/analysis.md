# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ORFormer: Occlusion-Robust Transformer for Accurate Facial Landmark Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13174

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part architectural overview of a method for generating occlusion-robust facial heatmaps. Part (a) illustrates the pre-training phase: an input image I is processed by an Encoder E, producing a feature cube Z. This feature is passed to a Code Selection module, which selects discrete codes S from a Codebook C, resulting in a quantized feature representation Z_Q. Z_Q is then decoded by a Decoder D to generate an edge heatmap H. The Codebook C is depicted as a vertical stack of colored rows indexed 0 to N-1, and the Code Selection module is shown as a dashed box receiving both Z and the Codebook. The Codebook is also connected to a small grid labeled S, indicating the selected indices.

Part (b) shows the inference phase with occlusion handling. An occluded input image I' is fed into the same Encoder E, yielding a feature cube Z'. This is then broken down into patches P, which are processed by ORFormer—a large, rounded rectangular module with an orange border. ORFormer outputs two code sequences, S_I and S_M, and an occlusion mask α. These are used to index into the same Codebook C (now marked with a snowflake icon, indicating it is frozen), producing two quantized feature cubes Z_I and Z_M. The occlusion mask α, represented as a red-highlighted patch grid, is used in a Feature Recovery module (yellow rounded rectangle) to merge Z_I and Z_M into a recovered feature Z_rec. Z_rec is then decoded by the same Decoder D (also marked with a snowflake) to produce the final occlusion-robust heatmap H_rec. The Decoder in part (b) is identical in structure to that in part (a), emphasizing that only the ORFormer and the feature recovery process are new components introduced for occlusion handling. The entire diagram uses consistent visual elements: encoders and decoders are trapezoidal, feature cubes are 3D grids, and codebooks are vertical stacks of color-coded entries. Arrows indicate data flow, with solid lines for primary connections and dashed lines for auxiliary or selection processes.
