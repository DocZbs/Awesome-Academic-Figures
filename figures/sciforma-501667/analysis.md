# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

C2F-TP: A Coarse-to-Fine Denoising Framework for Uncertainty-Aware Trajectory Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13231

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the framework of the proposed C2F-TP model, which consists of two main components: a Spatial-Temporal Interaction Module and a Refinement Module. The global layout is left-to-right, starting with input historical trajectories on the far left, progressing through the interaction module, and ending with predicted trajectories on the far right. The entire pipeline is divided into distinct functional blocks, each enclosed in dashed borders with specific colors: yellow for the interaction module and pink for the refinement module.

On the left, the 'History Trajectory' section shows a grid of vehicles over time, with a red car representing the target vehicle, blue cars as pooling vehicles, and gray cars as unrelated vehicles. These trajectories feed into the 'Motion Encoder', which comprises an MLP (blue), an LSTM (green), and a Historical Encoding block (yellow). The encoder outputs are used to generate 'Vehicle Waves' (blue wavy lines) and 'Target Waves' (red wavy line), which are combined with a 'Position Vector' (3D blue cube) to form 'Social Encoding' (pink rectangular block).

This social encoding feeds into the 'Interaction Pooling' block, which uses a multi-head attention mechanism with Q, K, V matrices (light blue, green, orange cubes respectively) and a SoftMax layer (purple) to compute attention weights across n heads. The output is a 'Social Context' vector (blue vertical bar) and a 'Target History Context' vector (pink vertical bar). These are combined and passed to the 'Re-weighted Multimodal Trajectory Predictor'. This predictor includes an LSTM (purple), a Mapping block (red 3D grid), and two SoftMax layers for longitudinal and lateral maneuver probabilities (yellow boxes). The output is a distribution parameterized by μ and σ, from which K Sampled Trajectories are generated via Random Sampling (two blue cubes labeled μ and σ).

These sampled trajectories enter the 'Refinement Module' (pink dashed border). They are first initialized and then processed by a 'Denoising Module' (blue box) using 'Historical Trajectories' as context. The module performs 'Stepwise Denoising' (indicated by a red arrow and a sequence of red car icons with decreasing noise), producing 'Denoised Trajectories' and finally 'Predicted Trajectories' (topmost red car with a green checkmark). The entire process is designed to capture complex inter-vehicle interactions and refine noisy predictions into accurate, smooth future trajectories.
