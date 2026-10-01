# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bridge then Begin Anew: Generating Target-relevant Intermediate Model for Source-free Visual Emotion Adaptation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13577

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a masking-based feature enhancement framework involving two primary neural network models: a Source Model and a Bridge Model. The global layout is structured horizontally from left to right, with inputs on the far left, processing modules in the center, and loss computation on the right. At the bottom-left, an original image denoted as x_t is fed into the Source Model, represented as a series of light blue rectangular blocks labeled φ_s. Above it, a masked version of the same image, denoted as x_t^M, is generated using a gray rounded rectangle labeled 'Mask' that applies a checkerboard pattern to obscure parts of the image. This masked image is then input into the Bridge Model, depicted as a series of peach-colored rectangular blocks labeled φ_b. Both the Source Model and Bridge Model process their respective inputs and produce feature representations. The output from the Source Model is directed to a dashed rectangular box labeled 'Cluster adjustment', which contains a background of multicolored overlapping circles, symbolizing clustering or distribution refinement. From this cluster adjustment module, two loss terms, L_kd and L_sl, are computed and sent back to the Bridge Model via a feedback loop indicated by a yellow arrow. Additionally, a gray arrow connects the Source Model directly to the Bridge Model, suggesting alignment or guidance between the two models. The losses L_kd (knowledge distillation loss) and L_sl (self-labeling loss) are explicitly shown as outputs from the cluster adjustment step, with L_kd corresponding to the distillation from the source to the bridge model and L_sl corresponding to the self-supervised learning from the masked input. The diagram emphasizes a dual-path training strategy where the bridge model learns from both the original and masked inputs, guided by the source model, to enhance feature representation through distillation and self-labeling objectives.
