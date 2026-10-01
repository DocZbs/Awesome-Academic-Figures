# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Sign-IDD: Iconicity Disentangled Diffusion for Sign Language Production — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13609

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the Sign-IDD framework, which generates coherent sign language pose videos from a gloss sequence. The diagram is divided into two main sections: Training (left) and Inference (right), each enclosed in dashed boxes with respective headers in red and green. The global layout follows a left-to-right workflow, with the training phase further subdivided into Forward Process, Disentangle Process, and Reverse Diffusion Process, while inference mirrors the reverse diffusion path.

In the Training section, the process begins with a Gloss Sequence (e.g., 'DRUCK TIEF ... KOMMEN') input into a yellow rectangular block labeled 'Gloss Encoder', which outputs Gloss Embeddings g. These embeddings are combined via a plus symbol with a time-dependent signal t processed by an MLP (black box with rounded corners) to form a semantic condition for the Attribute Controllable Diffusion (ACD) module.

Simultaneously, the Forward Process starts with a Target Pose p₀, depicted as a 3D hand skeleton, which undergoes Gaussian Noise Sampling over time t ∈ [0,T] to produce a Noise Pose pₜ, shown as a noisy point cloud. This initiates the Disentangle Process, where the 3D Representation qⱼ = (xⱼ,yⱼ,zⱼ) ∈ ℝ³ is transformed into a 4D Representation q_b = (x̄_b, ȳ_b, z̄_b, m) ∈ ℝ⁴ via Iconicity Disentanglement (ID), illustrated in a light green box. The ID module includes a formula: (x̄_b, ȳ_b, z̄_b) = q_c - q_p / ||q_c - q_p||₂, m = ||q_c - q_p||₂, and visually shows a 3D joint graph transforming into a 4D graph with an additional scalar m (represented by a red arrow). The 3D and 4D representations are then concatenated and fed into the ACD module.

The ACD module, highlighted in light blue, consists of four vertical blocks: Pose Self-Embedding (white), Condition Integration Layer (pink), Attribute Separation Layer (light blue), and Attribute Control Layer (light blue). The Condition Integration Layer receives the gloss embeddings g. The Attribute Separation Layer outputs d_c and d_a, where d_a is further processed by a Self-MHA (Self-Multi-Head Attention) block to produce d_a^*. The Attribute Control Layer uses these to guide pose generation. The output of ACD is a sequence of poses, which undergo Optimization (indicated by a pink box with a downward arrow) applying joint and bone constraints before being labeled as Output.

In the Inference section, Gaussian Noise Sampling generates an initial noisy pose p_T at t=T. This is passed to the ID module, then to the ACD module, which now receives the gloss embeddings g (from a time-dependent MLP) as a condition. The reverse diffusion process reconstructs the pose sequence, producing the final Output, depicted as a series of coherent hand skeletons.

All connections are represented by black arrows indicating data flow. The figure uses distinct colors and shapes to differentiate modules: yellow for encoder, light green for ID, light blue for ACD, and black for MLPs. Text labels are placed near or within components to clarify function and data type.
