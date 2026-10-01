# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Region-Based Optimization in Continual Learning for Audio Deepfake Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11551

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the RegO (Region-Adaptive Optimization) architecture for continual learning in audio processing tasks. The overall layout is divided into two main horizontal sections: the upper section represents the current task training phase (Task T_k), while the lower section depicts the post-training phase after completing the previous task (T_{k-1}). A horizontal orange timeline labeled 'Task Sequence' spans across the bottom, indicating progression from left to right, with yellow dots marking transitions between tasks.

In the upper section, an audio waveform input flows into an 'Audio Encoder', represented as a trapezoidal block with a snowflake icon, symbolizing feature extraction. The encoded features are fed into a 'Neural Network' block (light purple rectangle with dashed border), which outputs a classification decision labeled 'Real / Fake'. This network is trained during the current task T_k, indicated by a flame icon and the label 'Current T_k training'.

Two major modules are shown above the neural network, enclosed in dashed red borders: 'Region-Adaptive Optimization' (RAO) on the left and 'Ebbinghaus Forgetting Mechanism' (EFM) on the right. These modules interact during backward propagation, indicated by thick dark red arrows labeled 'Backward'.

The RAO module contains a 3D surface plot illustrating gradient optimization. The surface has axes X, Y, Z, with color gradients from blue to green to yellow. Vectors labeled g_o, βg_p, g_p, and ĝ represent different gradient components. The optimization process adjusts gradients based on regions: Region A (fine-tuning), Region B (projection direction), Region C (orthogonal direction), and Region D (adaptive update based on sample count).

The EFM module shows a memory structure with four regions (A, B, C, D) represented as colored blocks within a larger grid. Historical region matrices R_1 to R_{k-1} are processed through 'Combine Ops' and passed through a forgetting function φ(t), depicted as a vertical green rectangle. The output φ_{k-1} is combined with the current state to produce E_k, which is then fused with the historical region matrix R_{k-1} via an element-wise operation (⊕) to generate the updated region matrix R̄_k. This R̄_k feeds back into the neural network for gradient adjustment.

The lower section, labeled 'Importance Region Localization' (IRL), activates after training T_{k-1}. It receives audio inputs from two sources: human (orange avatar) and robot (blue robot icon), each with distinct waveforms. These inputs pass through 'FIM Neuron Localization', a beige rectangular block, which computes two binary masks L^0_{k-1} and L^1_{k-1}, represented as 2x2 grids with values 0 or 1. These masks are summed (⊕) to form the region matrix R_{k-1}, visualized as overlapping colored regions A, B, C, D, which are then used in subsequent tasks.

The figure uses consistent visual coding: pink for human-related data, blue for robot-related data, and dashed red borders for modular components. The workflow logically progresses from data input → encoding → neural processing → region localization (post-task) → forgetting mechanism → adaptive optimization (during next task), forming a closed-loop continual learning system.
