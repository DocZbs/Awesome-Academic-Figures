# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Human-Guided Image Generation for Expanding Small-Scale Training Image Datasets — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16839

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage dataset expansion pipeline consisting of (a) latent perturbation and (b) image generation. The global layout is horizontal, divided into two main sections labeled (a) and (b), with a shared bottom section showing prompt handling. In section (a), an original image of strawberries is fed into an orange-bordered trapezoidal module labeled 'Image encoder', which outputs a vertical stack of light orange rectangles representing the 'Latent feature'. This latent feature is then processed by a rectangular box labeled 'Perturbation', which includes internal text listing criteria such as 'Informativeness', 'Diversity', and ellipsis indicating additional metrics. The output of this perturbation step is another vertical stack of rectangles, some shaded darker orange, indicating modified latent features. Section (b) begins with these perturbed latent features being input into a green-bordered trapezoidal module labeled 'Image decoder', which produces a generated image of a strawberry with a painterly style. Below the main flow, a prompt template is shown in a light green box: 'A [photo | picture] of [colorful | stylized] strawberry.', marked with a white circle containing 'A'. Two curved green arrows labeled 'Sampling' originate from this template: one points to a specific instantiated prompt 'A photo of colorful strawberry.' in another light green box, and the other points directly to the 'Image decoder', indicating that the decoder uses sampled prompts during generation. The entire process demonstrates how an original image is encoded, its latent representation is perturbed based on quality criteria, and then decoded into a new image using a sampled text prompt.
