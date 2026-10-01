# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enabling Region-Specific Control via Lassos in Point-Based Colorization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13469

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end framework for interactive image colorization, structured into two main stages: Step 1. UI Simulation and Step 2. Forward Process. The global layout is horizontally segmented, with Step 1 on the left depicting user interaction simulation, and Step 2 occupying the central and right portions, illustrating the neural network architecture and data flow. A dashed vertical line separates these two steps.

In Step 1, UI Simulation, two sampling methods are shown: Lasso Sampling and Color Hint Sampling. Both use the same grayscale fruit-and-drink image as input. In Lasso Sampling, users draw freeform lassos (highlighted in red, yellow, green, orange) around regions of interest; small colored squares inside indicate sampled points. In Color Hint Sampling, users click on specific pixels within the image to extract color hints, represented by colored squares at those locations. These interactions produce paired data: lassos define spatial regions, and color hints provide target colors for those regions.

Step 2 begins with the Forward Process. The grayscale image is divided into patches, forming a grid. Each patch corresponds to a token in the model. The Localization Attention Mask module generates a mask M_l, where each element in the mask corresponds to a patch and is colored differently (e.g., green, pink, yellow) based on whether the patch falls within a lasso region. This mask is then applied during attention computation.

Below this, the Hint Encoder processes the color hints. It receives two types of tokens: unconditional tokens T_u (orange rectangles) and conditional tokens T_c (light green rectangles), which are passed through a Linear Projection Layer. The output of the Hint Encoder produces key (K) and value (V) vectors for cross-attention.

The core of the forward process is the Transformer’s Decoder-only Architecture, specifically a localized cross-attention mechanism. The query (Q) comes from the grayscale image tokens T_g (pink rectangles), which are processed via a Linear Projection + Positional Embedding layer. The Q, K, and V are used to compute the attention score QK^T, scaled by √d, and passed through Softmax. The resulting attention map is then element-wise multiplied (⊙) with the localization attention mask M_l, ensuring that only relevant color hints influence the corresponding image regions.

This modulated attention output is fed into the Decoder, which generates an ab-channel color prediction Î_ab ∈ ℝ^{H×W×2}. This is then added to the original grayscale image I_g to produce the final predicted color image I_pred ∈ ℝ^{H×W×3}, shown as a vibrant, fully colored version of the input image.

Connections are indicated by arrows: dashed blue lines link the sampled lassos and color hints to their respective processing modules. Solid black arrows show the data flow from the Hint Encoder and grayscale tokens into the cross-attention block, and from there to the Decoder. The final output is shown with a ⊕ symbol indicating addition with the grayscale image to form the full-color result.
