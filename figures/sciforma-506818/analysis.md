# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

From thermodynamics to protein design: Diffusion models for biomolecule generation towards autonomous protein engineering — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02680

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of three distinct SE(3)-equivariant diffusion models—RFDiffusion, FrameDiff, and Genie—for protein structure generation. The global layout is vertically segmented into three main architectural blocks, each representing one model, with a shared left-side schematic illustrating the general diffusion and denoising processes. On the left, a vertical sequence shows the progression from structured protein conformations (top) through increasingly noisy, disordered states (middle) to fully denoised, structured outputs (bottom), with arrows labeled 'Diffusion process' and 'Denoise process' indicating forward and reverse steps. A central arrow labeled 'Denoiser' points from this schematic to the three models, indicating they serve as the denoising component in the diffusion framework.

In the top section, RFDiffusion uses RoseTTAFold as its core module. A pink box labeled 'RoseTTAFold' receives input x_t and produces x_0'. This output is then fed into a light blue box labeled 'interp(x_t, x_0') + ε', which generates x_{t-1}. A dashed line from x_0' loops back to RoseTTAFold, indicating self-conditioning. The pink color of RoseTTAFold signifies it is an SE(3)-equivariant block, as noted by the annotation on the right: 'Boxes in pink are SE(3) equivariant blocks'.

The middle section details FrameDiff. It takes inputs h_0 (yellow), h_l (green), z_l (light blue), and T_l (a coordinate frame). These feed into a large light-blue container labeled 'NodeUpdate', which contains a pink 'Invariant Point Attention' (IPA) block, followed by a skip connection (blue circle), concatenation (pink circle), a 'Transformer', and an 'MLP', producing h_{l+1}. Outputs also flow to 'EdgeUpdate' and 'BackboneUpdate', generating z_{l+1} and T_{l+1}, respectively. The IPA block is highlighted in pink, indicating its SE(3)-equivariance. Skip connections and concatenation are visually marked with small circles.

The bottom section describes Genie. It begins with 'Coordinates' (a graph of nodes and edges) processed by 'Frame Construction' to produce 'Frames' (a molecular structure diagram). These frames are fed into an 'Invariant Encoder', which splits into 'Single representation' (yellow) and 'Pair Representation' (purple). Both representations are combined and passed to a pink 'Equivariant Decoder', which outputs 'Updated Frames' and 'Updated coordinates'. The decoder's pink color denotes its SE(3)-equivariance. An arrow from the updated coordinates loops back to the denoiser input, completing the iterative refinement cycle.

Connections between modules are shown via solid black arrows, while dashed lines indicate feedback or conditioning paths. The figure emphasizes that all pink-colored boxes are SE(3)-equivariant, ensuring physical stability of amino acid frames during the denoising process.
