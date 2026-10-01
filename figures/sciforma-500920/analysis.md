# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A LoRA is Worth a Thousand Pictures — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12048

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct approaches for retrieving customized diffusion models: (a) image feature-based retrieval and (b) model weight-based retrieval. The global layout consists of two large light-blue dashed ovals labeled (a) and (b), positioned side-by-side, representing the two methodologies. Above these ovals, a central component shows a pretrained diffusion U-Net (represented as a blue banner with a lock icon, indicating it is fixed or frozen) combined with a 'Customized LoRA' (Low-Rank Adaptation), depicted as a 3x3 grid of colored squares. This combination feeds into both retrieval methods.

In section (a), 'Image feature based', the retrieval process is shown as a set of three nested functions F({image sets}), each containing three example images (e.g., portraits, landscapes, animals). These represent different image feature clusters. A magnifying glass with a question mark inside points to this set, symbolizing uncertainty or the need for inference. Red dashed arrows with clock icons indicate that generating images for feature matching requires additional computational steps, which depend on hyperparameters such as T (number of denoising steps) and w_guidance (guidance scale), shown at the top left with a thinking emoji. These hyperparameters influence the generated images used for feature comparison.

In section (b), 'Model weight based', the same pretrained U-Net + Customized LoRA setup is used, but instead of generating images, the model weights themselves are directly compared. This is visualized by multiple 3x3 grids of colored squares (representing weight matrices) within the oval. One grid is highlighted with a green checkmark under a magnifying glass, indicating successful and accurate retrieval without requiring image generation. A red dashed arrow with a clock icon points from this section back to the input, emphasizing that this approach avoids the time-consuming and hyperparameter-dependent image generation step.

The connections between components are indicated by black solid arrows for direct data flow (e.g., from U-Net+LoRA to the retrieval ovals) and red dashed arrows with clock icons for time-consuming, hyperparameter-dependent processes. The figure visually contrasts the inefficiency and dependency of image feature-based retrieval with the efficiency and accuracy of model weight-based retrieval, aligning with the caption’s emphasis on avoiding extra costs and hyperparameter selection.
