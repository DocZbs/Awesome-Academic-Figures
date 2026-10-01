# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SOUS VIDE: Cooking Visual Drone Navigation Policies in a Gaussian Splatting Vacuum — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16346

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SV-Net, a neural network system composed of three main components: a Feature Extractor, a History Network, and a Command Network, all enclosed within a large light-gray rectangular boundary. The global layout is modular and hierarchical, with data flowing from left to right, entering through multiple input streams and converging into a final output. The structure is divided into two main vertical sections: the left section contains the Feature Extractor and History Network, while the right section houses the Command Network.

In the Feature Extractor, a processed color image input I_k^proc of size [3x224x224] is fed into a dark green trapezoidal block labeled 'SqueezeNet', which outputs a feature vector of size [1000x1]. This output is then passed to a smaller dark green trapezoid labeled 'MLP' with hidden layer sizes [512,256], producing a [128x1] vector. Additionally, a set of current state variables p_zW^k, v_W^k, q_BW^k (represented as a dashed arrow) is directly connected to this same MLP, contributing a [5x1] input. The output of this MLP is then sent to the Command Network.

The History Network receives a sequence of past state differences: δt_{k-5:k-1}, δp_W^{k-5:k-1}, δv_W^{k-5:k-1}, δq_BW^{k-5:k-1}, and u_{k-5:k-1}, collectively denoted as O^k. These inputs are processed by a dark green trapezoidal MLP with hidden layers [64,32,8], which outputs a [2x1] vector labeled θ. This θ is then combined with the current state variables p_zW^k, q_BW^k (via a solid arrow) to form an [18x1] input vector, which is also sent to the Command Network.

The Command Network, located on the right, consists of a large dark green trapezoidal MLP with hidden layers [100,100]. It receives three inputs: the [128x1] output from the Feature Extractor's MLP, the [18x1] output from the History Network, and an additional [8x1] input derived from the current state variables p_zW^k, q_BW^k. These three inputs are concatenated and processed by the final MLP, which produces the output u^k, a [4x1] vector representing body-rate commands.

All connections are represented by solid or dashed green arrows, with dimensions explicitly labeled along each arrow. The modules are consistently styled as dark green trapezoids with white text, and the component names (Feature Extractor, History Network, Command Network) are written in gray rounded rectangles above or beside the relevant blocks. The overall design emphasizes a clear, sequential flow of information from sensory and historical inputs to the final control output.
