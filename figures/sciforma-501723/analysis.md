# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Zero-Shot Low Light Image Enhancement with Diffusion Prior — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13401

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall pipeline of a method designed for Low-Light Image Enhancement (LLIE) and Auto White Balance (AWB), structured as a bidirectional diffusion process with adaptive latent manipulation. The global layout is horizontal, divided into two parallel workflows: an upper forward sampling path (DDIM Sampling) and a lower inverse inversion path (DDIM Inversion), connected by a central adaptive normalization step. The entire process is framed as a four-step procedure: preprocessing, inversion, AdaIN adjustment, and denoising using self-attention features.

In the upper path, starting from a noisy latent variable z_T^* (represented as a chaotic, multicolored texture), DDIM Sampling progresses through multiple diffusion steps (indicated by orange arrows and ellipses) via a series of green-and-blue hourglass-shaped modules symbolizing denoising steps. Each module contains a small lock icon, indicating a fixed or frozen component. These modules receive guidance from self-attention features (q_t^l, k_t^l, v_t^l) shown as small color-coded feature maps within blue-bordered boxes. The process culminates in a clear, realistic image z_0^*, depicted as a well-lit indoor scene with furniture and plants.

The lower path represents DDIM Inversion, shown with gray arrows. It begins with a target image z_0^c (a dimly lit version of the same indoor scene) and proceeds backward through the same hourglass modules (now operating in reverse) to generate a noised latent z_T^c. This latent is then fed into an AdaIN block (a rounded rectangle labeled 'AdaIN'), which transforms it into z_T^s ~ N(0, I), a standard normal distribution latent, using a reference latent z_T^* from the upper path. The AdaIN block is visually connected to both z_T^c and z_T^*, emphasizing its role in aligning the latent space.

A key innovation is the Self-Attention Replacement, indicated by a dashed blue arrow connecting the self-attention features from the inversion path (q_0^l, k_0^l, v_0^l) to the denoising modules in the sampling path. This allows the model to reuse attention features learned during inversion to guide the generation process, eliminating the need for external priors or constraints. The visual modules are consistently styled: hourglasses for diffusion steps, rounded rectangles for operations like AdaIN, and small feature map icons for attention components. Text labels such as 'z_T^*', 'z_0^*', 'z_T^c', 'z_0^c', and 'z_T^s ~ N(0, I)' are placed near corresponding inputs/outputs. The legend on the right clarifies the meaning of arrow colors: orange for DDIM Sampling, gray for DDIM Inversion, and dashed blue for Self-Attention Replacement.
