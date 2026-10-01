# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AnySat: One Earth Observation Model for Many Resolutions, Scales, and Modalities — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14123

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of AnySat, a multimodal learning framework designed for satellite imagery analysis using data from GeoPlex. The global layout is left-to-right, depicting a data processing pipeline starting from raw input and progressing through encoding, combining, prediction, and teacher-student interaction stages. On the far left, a gray square labeled 'GeoPlex Tile' represents the input data source under the heading 'GEOPLEX'. This tile feeds into two vertical black bars representing modality-specific patch encoders; these bars contain multiple small squares—green ones at the top indicating one modality, and blue ones below indicating another—symbolizing spatially aligned patches extracted from the tile.

From these patch encoders, the flow splits into two parallel branches: the 'STUDENT' branch, enclosed in a light blue rounded rectangle, and the 'TEACHER' branch, enclosed in a light red rounded rectangle. Both branches consist of triangular modules representing neural network components. In the STUDENT branch, the first triangle is labeled φ_S^patch (blue), indicating the student’s patch encoder. It connects via a solid arrow to a small red square, symbolizing a masking/dropping operation. From there, a solid arrow leads to the next triangle labeled φ_S^comb (blue), representing the student’s modality combiner. A final solid arrow connects this to φ_S^pred (blue), the student’s predictor module.

In the TEACHER branch, the corresponding modules are colored red: φ_T^patch and φ_T^comb. These modules receive inputs from the student’s counterparts via dashed arrows labeled 'EMA', indicating that the teacher’s weights are updated as an Exponential Moving Average of the student’s weights. Notably, the teacher branch does not include the red square masking/dropping component, meaning it processes the full set of patches without perturbation.

Connections between modules are shown with solid arrows for forward propagation within the student branch and dashed arrows for weight updates from student to teacher. The overall workflow reflects a self-supervised learning paradigm where the student learns to reconstruct masked patches, guided by the stable teacher model. The caption clarifies that this is a simplified placeholder figure, and colors/shapes follow a legend described elsewhere in the paper.
