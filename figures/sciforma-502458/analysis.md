# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Downscaling Precipitation with Bias-informed Conditional Diffusion Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14539

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall pipeline of a diffusion-based image restoration framework, divided into two main phases: the diffusion process and the denoise process. The global layout is structured horizontally across two primary sections: the upper section depicts the forward diffusion process, while the lower section details the reverse denoise process. Both sections are enclosed within distinct background colors—light green for the diffusion phase and light blue for the denoise phase—to visually separate the two stages.

In the diffusion process (top section), the input consists of three components: a high-resolution precipitation image (colorful heatmap), a low-resolution image (grayscale, pixelated), and a topography image (black-and-white, tree-like structure). These inputs are concatenated and fed into the diffusion process, which gradually adds noise over T steps. This is visualized as a sequence of grayscale images progressing from Z₀ (initial noisy image) to Zₜ (fully noisy, almost uniform gray texture), indicating increasing noise levels. The progression is marked by intermediate frames labeled '...' and 'T steps', emphasizing the iterative nature of the process.

The denoise process (bottom section) operates in reverse. It begins with an input composed of the same three components as before, but now includes an additional component labeled 'Bias from Low resolution images', which is derived from the low-resolution input and used to guide the denoising. This input is combined with a noisy image from the diffusion process via a circular fusion node (depicted as a beige circle with cross lines), symbolizing concatenation or feature merging. The resulting combined signal is fed into a 'Denoise U-Net Model', represented as a rectangular module with internal layers shown as horizontal arrows and vertical bars in alternating green and blue, indicating encoder-decoder architecture with skip connections. The U-Net outputs a predicted clean image, labeled 'Z0 pred', which is shown as a restored colorful heatmap alongside its grayscale counterpart. This output is then fed back into the denoise process through a feedback loop labeled '... T steps ...', indicating iterative refinement over multiple steps until convergence.

Connections are depicted using solid blue arrows. From the initial input, an arrow leads to the diffusion process. From the final noisy state Zₜ, an arrow points downward to the denoise process, where it connects to the fusion node. Another arrow links the fusion node to the Denoise U-Net Model. The output of the U-Net feeds back into the denoise process loop and also produces the final reconstructed image. Additionally, a direct arrow from the 'Bias from Low resolution images' box connects to the fusion node, highlighting the bias-informed sampling strategy that guides the denoising by reducing discrepancies between high- and low-resolution inputs at each step.

The figure uses color coding consistently: blue and red heatmaps represent precipitation data, grayscale images denote noisy or low-resolution inputs, and the U-Net model is highlighted with green and blue bars to indicate its internal structure. Text labels such as 'Input', 'Diffusion process', 'Denoise process', 'Z0 pred', and 'Bias from Low resolution images' are clearly placed to annotate each component. The caption clarifies that during training, the U-Net learns to predict noise in corrupted high-resolution images, while during inference, it iteratively denoises pure noise into high-resolution precipitation outputs, guided by bias correction from low-resolution inputs.
