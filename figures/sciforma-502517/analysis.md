# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Trainable Adaptive Activation Function Structure (TAAFS) Enhances Neural Network Force Field Performance with Only Dozens of Additional Parameters — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14655

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct neural network architectures: (a) the Deep Potential (DP) model and (b) the ANI2 model, each illustrating different approaches to energy prediction in molecular systems.

In part (a), the DP model is divided into two main components: EmbeddingNet and FittingNet, separated by a vertical dashed line. The input, labeled S_ij in an orange-bordered square, feeds into EmbeddingNet, which consists of a feedforward neural network with four hidden layers. Each layer contains multiple orange circular nodes arranged vertically within gray rectangular blocks, with full connectivity between consecutive layers indicated by black lines. The output of EmbeddingNet is passed to a purple-bordered square labeled G_i, representing the atomic embedding or representation. This G_i is then fed into FittingNet, which mirrors the structure of EmbeddingNet but uses blue circular nodes instead. The final output of FittingNet is a blue-bordered square labeled E, denoting the predicted energy. The entire DP model is labeled at the top left as '(a) DP'.

Part (b) illustrates the ANI2 model, labeled at the top right. It begins with a set of four input features q1 through q4, shown as small white boxes arranged horizontally. These inputs branch down to four atomic types: C (carbon), H (hydrogen), O (oxygen), and N (nitrogen), each represented by a colored funnel-shaped icon containing small circles—blue for C, yellow for H, green for O, and cyan for N. Below each funnel is a circular node labeled E^C_1, E^H_1, E^O_1, and E^N_1, respectively, indicating per-atom energy contributions. These four energy terms converge into a summation node Σ, depicted as a circle with the Greek letter sigma inside. The final output is a circular node labeled E^T, representing the total energy. The entire structure is labeled 'ANI2' above the input features.

The figure uses color coding to differentiate components: orange for EmbeddingNet, blue for FittingNet, and distinct colors for atomic types in ANI2. All connections are represented by solid black lines, and all nodes and boxes are clearly labeled with mathematical or chemical symbols. The layout is horizontal for both models, with a clear left-to-right data flow from input to output.
