# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LTX-Video: Realtime Video Latent Diffusion — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the LTX-Video Video-VAE architecture, divided into two main components: (a) the Causal Encoder and (b) the Denoising Decoder. The global layout presents these two components side by side, each as a vertical stack of processing modules, with input and output data represented as 3D volumes (cubes) at the bottom and top respectively. The Causal Encoder on the left processes an input video volume (labeled with dimensions h, w, f) through a series of operations to produce a compressed latent representation z (with dimensions h/32, w/32, (f+7)/8). The Denoising Decoder on the right takes this latent representation and reconstructs the original video volume, incorporating diffusion-timestep conditioning.

In the Causal Encoder, the input video is first passed through a 'Patchify' module, which likely divides the video into patches. This is followed by a sequence of blocks: a 'CausalConv3D In' layer (pink), then four 'ResBlock x 4' layers (blue), each consisting of multiple residual blocks. These are interspersed with 'Downsample' layers (yellow) to reduce spatial and temporal resolution. After three more sets of 'ResBlock x 3' (blue) and 'Downsample' (yellow) layers, the final 'CausalConv3D Out' layer (pink) produces the latent representation z. A detailed inset labeled 'ResBlock' shows the internal structure of a single residual block, which contains two 'CausalConv3D' layers (pink), each followed by a 'SiLU' activation (light gray) and 'PixelNorm' (light gray). A dashed blue line indicates a skip connection within the ResBlock, combining the input hidden state with the output of the second CausalConv3D layer via an addition operation (blue circle with plus sign).

The Denoising Decoder begins with the latent representation z, which is processed by a 'Conv3D In' layer (pink). It then passes through a series of 'CondResBlock' layers (blue), grouped in sets of 5, 6, and 8, which are interspersed with 'Upsample' layers (yellow) to gradually increase the resolution back to the original size. A detailed inset labeled 'CondResBlock' reveals its internal structure: it includes 'Noise Inject' layers (purple), 'Conv3D' layers (pink), 'SiLU' activations (light gray), and 'Scale, Shift' operations (teal). The 'Scale, Shift' blocks receive conditioning from a 't emb.' (time embedding) module, which is fed the diffusion timestep t. This conditioning allows the decoder to adapt its denoising process based on the current step in the diffusion schedule. The final output of the decoder is passed through an 'UnPatchify' module before being output as the reconstructed video volume. The entire Denoising Decoder is designed to perform iterative denoising, with noise injected at multiple layers, guided by the time embedding.
