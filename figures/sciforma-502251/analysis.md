# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning from Massive Human Videos for Universal Humanoid Pose Control — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14172

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage pipeline for learning humanoid pose control from massive internet videos. The global layout is horizontal and modular, progressing from left to right, with two parallel branches merging into a final reinforcement learning stage. At the top-left, the input source is labeled 'Massive Internet Videos,' represented by logos of YouTube, DeepMind Kinetics 700, Allen Institute for AI (AI2), and Charades. A blue arrow points right to the first processing module: 'Video Clip Extraction,' depicted as a filmstrip containing three sequential frames of a woman performing exercises in a living room. Below this, a purple curved arrow leads to a parallel branch labeled 'Video Captioning,' shown in a lavender box with three corresponding video frames and a caption: 'A young woman is doing a workout in a living room, using her legs and arms to perform various exercises.' The main pipeline continues from 'Video Clip Extraction' to '3D Human Pose Estimation,' shown in a light-blue box with three frames where the same woman’s body is overlaid with a colorful 3D skeleton (green torso, pink legs, yellow arms). From here, three downward arrows lead to 'Motion Retargeting from Humans to Humanoids,' displayed in an orange box with three black humanoid silhouettes mimicking the human poses. These humanoid poses feed into the final stage: 'Goal-based Reinforcement Learning,' shown in a magenta box with a sequence of five black humanoid figures connected by a dashed curve, indicating a learned motion trajectory. A gradient-colored arrow connects the motion retargeting output to the reinforcement learning module, emphasizing the flow of data. The entire process is described in the caption as mining video clips $\mathcal{V}$, extracting text descriptions $\mathcal{T}$ and 3D human poses $\mathcal{P}_{human}$, retargeting to humanoid keypoints $\mathcal{P}_{robot}$, and finally generating robot actions $\mathcal{A}_{robot}$ via RL, resulting in 163,800 motion sample pairs. The visual modules use distinct background colors (lavender, light-blue, orange, magenta) to differentiate stages, with consistent black silhouettes or colored skeletons for human and humanoid representations. All text labels are clear and positioned above or within each module. The diagram uses solid and dashed arrows to indicate direct data flow and learned trajectories, respectively.
