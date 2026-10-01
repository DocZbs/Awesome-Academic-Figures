# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Model-driven deep neural network for enhanced direction finding with commodity 5G gNodeB — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10644

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the iterative framework of the MoDL-SSR (Model-Based Deep Learning for Spatial Spectrum Reconstruction) module, presented in two parts: (a) an overview of the entire iteration process, and (b) a detailed breakdown of the alternating optimization between a 1D-CNN calibrator and a spatial spectrum reconstruction step across multiple iterations.

In part (a), the global layout begins with an input coarray spectrum η, represented as a smooth curve labeled with the equation ŷ = Pη. This input is processed by a 1D-CNN composed of Q layers, each containing a convolutional layer (Conv), batch normalization (BN), and ReLU activation, depicted as stacked rectangular blocks with red, white, and teal colors respectively. The output of this CNN is denoted as z. This calibrated signal z is then fed into an SCG-Based Spatial Spectrum Reconstruction block, visualized as concentric circular contours representing an optimization landscape. Within this block, a dashed arrow indicates the conjugate gradient direction, a green dot represents sparsity modification, and a red star marks the sparse solution. The result of this reconstruction is the updated spatial spectrum η^(i+1), shown as a sharp peak on a spectrum plot. A large blue feedback loop connects the output back to the CNN input, indicating iterative refinement.

Part (b) expands on the iterative structure, showing three stages: 1st iteration, i-th iteration, and l-th iteration, enclosed within dashed boxes. Each stage consists of two main modules: a 'Calibrator' implemented as a 1D-CNN with identical architecture (three stacked blocks: Conv, BN, ReLU) and labeled C_w, followed by a 'Spatial Spectrum Reconstruction' block. The input to each iteration is η^i, which is transformed into z^i by the calibrator, then processed by the reconstruction module to produce η^(i+1). These stages are connected sequentially via arrows, forming a chain of iterations. A prominent blue box labeled 'Shared Weights' sits below the iterations, with upward arrows linking it to each calibrator, emphasizing that the same CNN weights are reused across all iterations. The initial input is again ŷ = Pη, and the final output after l iterations is η^l. The figure includes a legend at the bottom of part (a) defining symbols: dashed arrow for Conjugate Gradient, green circle for Sparsity Modification, and red star for Sparse Solution. The overall structure emphasizes an alternating optimization scheme where the CNN calibrates the spectrum and the SCG-based reconstruction refines it iteratively, with shared weights ensuring consistency across iterations.
