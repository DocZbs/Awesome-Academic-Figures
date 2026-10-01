# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PERSE: Personalized 3D Generative Avatars from A Single Portrait — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21206

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage framework for generating animated avatars from edited portrait images and text prompts, combining a generative avatar network with a portrait animator for high-fidelity, attribute-consistent video synthesis. The global layout is horizontally structured into three main sections: input on the left, processing pipeline in the center, and output sequences on the right. The leftmost section contains two input sources: 'Edited Portraits' and 'Guidance'. The 'Edited Portraits' block displays a grid of nine portraits arranged in three rows, each showing variations of a person with different facial features (e.g., beard, lipstick, hair color, hat, clothing), accompanied by a 'Text Prompt' label indicating textual control. Below this, the 'Guidance' block shows three types of guidance signals: neutral 3D head meshes, color-coded normal maps, and sparse 3D point clouds, all used to inform the avatar model. 

In the central processing region, the pipeline begins with a 'Sapiens' module, which processes the edited portraits and text prompt to extract semantic information. This feeds into an 'Encoder' within a large light-green trapezoidal block labeled 'Avatar Network (GS)', which encodes the inputs into a latent space. From this latent representation, 'FLAME Params' are extracted and used as guidance for the subsequent stages. The Avatar Network outputs are passed to a 'Rasterizer', producing a sequence of three RGB-rendered frames shown on the top-right, where the avatar’s hair appears pixelated or noisy. These rendered frames are connected via a bracket to a reconstruction loss term, denoted as 'L_recon', indicating a training objective to minimize discrepancy between rendered and target outputs.

Below the Avatar Network, a separate beige-colored module labeled 'Portrait Animator' is shown. It receives the FLAME parameters and a small 3D avatar mesh (colored with RGB/normal data) as input. Inside this module, an 'RGB/Normal Encoder' processes the input, feeding into a 'ReferenceNet' (a diamond-shaped component) and then a 'Denoising UNet'. A snowflake icon next to ReferenceNet suggests a diffusion-based or denoising process. The Denoising UNet outputs to an 'RGB/Normal Decoder', which generates a clean, high-quality sequence of three RGB frames at the bottom-right, labeled 'RGB Sequence for the target attribute'. These frames show the same avatar with consistent, realistic curly red hair and smooth facial expressions, contrasting with the noisy output above. The entire pipeline emphasizes the synergy between the generative avatar network and the denoising-based animator to produce photorealistic, attribute-controlled animated portraits.
