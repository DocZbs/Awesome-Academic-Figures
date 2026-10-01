# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Semantic Segmentation for Sequential Historical Maps by Learning from Only One Map — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01845

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-step training pipeline for a UNet model, designed for age-based tracing of historical maps, with a focus on iterative self-supervised learning using pseudo-labels. The global layout is vertical, structured into three main stages: Pre-training, Tracing Step 1, and Tracing Step 2, with an implied continuation indicated by ellipses. A large vertical arrow labeled 'Fine-tuning by Age-Tracing' runs along the left edge, indicating the progression from pre-training to successive fine-tuning steps. Each stage follows a consistent horizontal flow: input data (Historical Map) enters a UNet model, which produces a prediction; this prediction is compared to segmentation labels (either ground-truth or pseudo-labels) via Focal Loss for backpropagation. The UNet model is represented as a gray, hourglass-shaped network with internal horizontal lines denoting layers, and the label 'UNet' is centered within it. The input Historical Map is shown as a light blue rectangle, while the output Prediction is an orange rectangle. The loss function is depicted as a gray circle labeled 'Focal Loss'. Ground-truth Segmentation Labels (y) are shown in a light green rectangle at the top right, feeding into the first step. Pseudo Label Generators, shown as light green rounded rectangles, are positioned below each Prediction block and generate pseudo-labels (L^0, L^{0,1}, etc.) from the current prediction and previous pseudo-labels. These pseudo-labels are then used as targets for the next training step. The connections are color-coded: black arrows indicate forward propagation of data through the network and loss computation, while green arrows represent the flow of pseudo-labels generated and fed into subsequent steps. Dashed vertical arrows labeled 'Copy' connect the UNet models across steps, indicating that the same model architecture is reused and updated iteratively. Input vectors are labeled x^0, x^1, x^{0,1}, x^2, etc., with x^0 being the initial input and subsequent inputs incorporating information from prior steps. The process begins with Pre-training/Tracing Step 0, where the UNet is trained on ground-truth labels y. In Tracing Step 1, the model is fine-tuned using pseudo-labels L^0 generated from the previous step's prediction. In Tracing Step 2, it uses pseudo-labels L^{0,1} generated from both the current prediction and L^0. This iterative process continues, allowing the model to progressively learn from its own predictions, effectively tracing the evolution of features over time.
