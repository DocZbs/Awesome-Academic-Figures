# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CALA: A Class-Aware Logit Adapter for Few-Shot Class-Incremental Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the CALA method, divided into two main stages: (a) Base Class Pre-train and (b) Pseudo-train → FSCIL. The global layout is horizontal, split by a vertical dashed line into left and right sections. On the left, stage (a) begins with 'Base Classes' represented as a group of four sample images (e.g., birds and animals), feeding into a gray rectangular block labeled 'Backbone' (denoted as f_θ), marked with a fire icon indicating trainable parameters. This backbone outputs a sequence of green rectangular blocks labeled 'Prototypes' (W^0), followed by a single green block labeled 'Logits' (Z). On the right, stage (b) starts with two parallel branches: an upper branch labeled 'Fake Novel Classes' and a lower branch labeled 'Novel Classes'. The upper branch shows a Mixup operation combining two base class images (bird and dog) to produce a blended image, symbolizing synthetic novel classes. Both branches converge into a gray backbone block (f_θ), now marked with a snowflake icon indicating frozen parameters. From this backbone, a sequence of green, purple, and yellow blocks labeled W^t emerges, representing updated prototypes. Below this, a similarity matrix is shown as a grid of colored squares (purple, gray, yellow), connected to a neural network diagram labeled g_φ (with a fire-to-snowflake arrow indicating state switching from trainable to frozen). The output of g_φ is a vector β, which is element-wise added (indicated by a ⊕ symbol) to the logits Z to produce the final adjusted logits Ž. The figure includes a legend at the top: fire icon = trainable parameters, snowflake = frozen parameters, ⊕ = element-wise addition, blue arrow = stage or module state switching. The overall workflow illustrates pre-training on base classes, then using mixed-up data to pseudo-train a class-aware logit adapter, which is later used during real FSCIL to adapt logits via similarity-based correction.
