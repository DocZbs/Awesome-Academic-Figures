# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Classification of Financial Data Using Quantum Support Vector Machine — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10860

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparative framework for classical and quantum classification methods, showing two parallel pathways from raw data to final prediction. The global layout is horizontal, with input data on the left, processing modules in the center, and output prediction on the right. The structure is divided into two main branches: one representing the classical approach and the other the quantum approach, both converging into a shared classical device for final decision-making.

In the visual modules, the input data is represented as an irregularly shaped cloud containing red square and blue circular points, symbolizing two classes. From this input, two distinct feature mapping paths diverge. The upper path, labeled 'Classical Feature Map', leads to a rectangular box titled 'Classical Feature Space', which contains a 2D scatter plot of the same red squares and blue circles, now arranged in a separable pattern. This module feeds into an oval-shaped node labeled 'Classical Kernel', which then connects to a rounded rectangle labeled 'Classical Device'.

The lower path, labeled 'Quantum Feature Map', leads to a large rounded rectangle labeled 'Quantum Device'. Inside this device, there is an oval labeled 'Hilbert Space' containing a 2D plot with the same data points, but now clearly linearly separable by a diagonal line, indicating enhanced feature representation. From this Hilbert Space, an arrow points to a small rounded rectangle containing the mathematical expression 'κ(x,x')', representing the quantum kernel function. This kernel output also feeds into the same 'Classical Device' as the classical kernel.

The connections are shown as solid black arrows indicating the direction of data flow. Both the classical and quantum kernels converge into the 'Classical Device', which processes the kernel outputs to produce a final prediction. This prediction is visualized on the far right as a bar chart with two bars: a green hatched bar labeled 'Q' (for quantum) and a red hatched bar labeled 'C' (for classical), with a horizontal dashed line at 0.5 indicating the decision threshold. The green bar is taller than the red, suggesting the quantum approach yields a higher confidence or probability for the predicted class. The entire diagram emphasizes how quantum feature mapping can lead to better separability in Hilbert space, resulting in improved kernel-based classification performance compared to the classical feature space.
