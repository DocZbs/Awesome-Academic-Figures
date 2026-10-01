# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

No More Adam: Learning Rate Scaling at Initialization is All You Need — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11768

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative visualization of local gain behaviors across four optimization methods—Adam-mini, Adam(W), SGD, and SGD-SaI—during the training process, using a Vision Transformer (ViT) as an example. The layout is structured along a horizontal timeline from Step 0 to Step t, indicating progression through training steps. At Step 0, the initial gradient g₀ is shown, derived from the model’s blocks (e.g., Block.0.QK, Block.0.V, etc.), partitioned into two schemes: 'Adam-mini Partition' and 'PyTorch Default Partition'. The Adam-mini partition groups parameters per block component (QK, V), while the PyTorch default partitions them as QKV units. A visual representation of a block's gradient matrix highlights individual gradient elements versus the whole block gradient. These gradients feed into the calculation of local gains α₀, which are then used to compute the update direction D₀.

The central part of the figure categorizes the optimizers into two groups: Adaptive Gradient Methods (Adam-mini, Adam(W)) and Non-Adaptive Gradient Methods (SGD, SGD-SaI). For adaptive methods, local gains are continuously recalculated at each step. Adam-mini computes partition-wise adaptive local gains based on its specific partitioning, shown as color-coded grids (yellow, red, green) representing different gain values per partition. Adam(W) calculates adaptive local gains per element based on PyTorch defaults, also visualized as varied color grids. In contrast, non-adaptive methods have fixed local gains. SGD uses fixed local gains pre-defined by PyTorch defaults, shown as uniform light blue grids. SGD-SaI computes partition-wise pre-conditioned local gains once at the start, depicted with dashed borders and distinct color patterns.

At Step t, the figure shows how these local gains evolve. For Adam-mini and Adam(W), local gains vary across partitions and change over time, indicated by bidirectional arrows and text stating 'Different local gains throughout training, and vary across partitions.' For SGD and SGD-SaI, local gains remain fixed throughout training but still vary across partitions, as noted by 'Fixed local gain throughout training, and vary across partitions.' The visual modules use consistent color-coding: green for Adam-mini, yellow for Adam(W), light blue for SGD, and pink for SGD-SaI. Each module contains grid representations of local gains, with colors indicating magnitude or type. The figure includes explanatory text boxes and arrows connecting gradients to local gain calculations and then to update directions, emphasizing the dynamic nature of adaptive methods versus the static nature of non-adaptive ones. The overall structure clearly contrasts the adaptivity of local gain computation across the four methods, supporting the caption’s claim about their differing behaviors during training.
