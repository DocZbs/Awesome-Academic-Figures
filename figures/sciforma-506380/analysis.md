# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploiting Latent Properties to Optimize Neural Codecs — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01231

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram of a state-of-the-art neural codec architecture, structured into two main horizontal sections: an upper reconstruction path and a lower latent processing path, both enclosed within light green rectangular regions with blue dashed inner borders. The overall layout is left-to-right, with data flowing from an input image on the far left to a reconstructed output image on the far right.

In the upper section, the process begins with an input image denoted as 'x', represented by a small square icon containing a mountain-like line drawing. This input is fed into a green trapezoidal block labeled 'g_a(·; φ)', which acts as an analysis transform (encoder). The output of this block is a latent representation 'y'. This 'y' is then passed through a black pixelated cross-shaped module symbolizing quantization and entropy encoding, producing a quantized latent 'ŷ'. The quantized latent 'ŷ' is then processed by another green trapezoidal block labeled 'g_s(·; θ)', serving as a synthesis transform (decoder), which generates the reconstructed image 'x̂', also shown as a mountain icon, matching the input format.

The lower section handles the latent space processing. The latent 'y' from the upper encoder is fed into a green trapezoidal block labeled 'h_a(·; Φ)', which functions as a hyper-encoder. Its output is a latent 'z'. This 'z' is then passed through a similar black pixelated cross-shaped module for quantization and entropy encoding, resulting in 'ẑ'. The 'ẑ' is then processed by a green trapezoidal block labeled 'h_s(·; Θ)', acting as a hyper-decoder, which outputs parameters 'μ, σ'—presumably mean and standard deviation for a probability distribution. These parameters are used to define a probability mass function (PMF) for the latent 'ẑ', denoted as 'p_f(·; Ψ)', represented by a smaller green trapezoid below the quantization module. A feedback loop connects the output 'μ, σ' back to the quantization module, indicating that the entropy model is adaptive and informed by the hyper-decoder's output.

Crucially, there is a feedback connection from the lower path to the upper path: the 'μ, σ' parameters from the hyper-decoder are sent to the quantization module in the upper path, suggesting that the entropy model for the main latent 'y' is also informed by the hyper-decoder's output. Additionally, the quantized 'ẑ' is fed into the PMF block 'p_f(·; Ψ)', which in turn influences the quantization process, completing the feedback loop for the side latent.

All five green trapezoidal blocks are trainable neural network components, while the black pixelated modules represent non-trainable quantization and entropy coding/decoding operations, driven by the PMFs defined by the entropy models. The diagram emphasizes the separation of main and side latents, with the side latent being used to condition the entropy model for the main latent, enabling more efficient compression.
