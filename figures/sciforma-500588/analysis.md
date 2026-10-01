# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SP$^2$T: Sparse Proxy Attention for Dual-stream Point Transformer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11540

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of three proxy-based methods for point cloud processing: (a) PointASNL (Dual-Stream), (b) SPOTr (Single-Stream), and (c) SP²T (Dual-Stream), arranged horizontally from left to right to illustrate an evolutionary progression in design and performance. Each method is structured into two main vertical components: 'Sample Method' at the bottom and 'Interaction Method' at the top, separated by a dashed horizontal line. The entire diagram uses rectangular blocks with rounded corners, color-coded to distinguish functional modules, and connected by solid black arrows indicating data flow or dependency.

In (a) PointASNL (Dual-Stream), the Sample Method employs a gray box labeled 'Proxy Sample FPS-based', which feeds into the Interaction Method. The Interaction Method consists of a dual-stream structure: a light green box on the left labeled 'Point → Point MLP' and a blue box on the right labeled 'Proxy → Point Dense Attention'. Below this, a blue box labeled 'Point → Proxy MLP' receives input from the sample module and feeds into the dense attention block. A feedback loop from the top of the interaction block returns to the input of the Point → Point MLP. The entire interaction block is repeated N times, indicated by '×N' above it. This method is marked with red '× Rough Interactions' and '× Susceptible' annotations, indicating limitations.

In (b) SPOTr (Single-Stream), the Sample Method uses a gray box labeled 'Proxy Sample Learning-based', which takes input from a light green box below it labeled 'Point → Point: MLP'. The Interaction Method is a single stream with two blue boxes: 'Point → Proxy Dense Attention' feeding into 'Proxy → Point Dense Attention'. The same feedback loop and '×N' repetition are present. This method is annotated with red '× Heavy Computation' and '× Inexplicable', highlighting its computational cost and lack of interpretability.

In (c) SP²T (Dual-Stream), the Sample Method features a gray box labeled 'Proxy Sample Spatial-wised', which connects to the Interaction Method. The Interaction Method is again dual-stream: a light green box on the left labeled 'Point → Point Dense Attention', and on the right, a stack of three boxes — a blue 'Point → Proxy: SPA', a pink 'Proxy → Proxy Dense Attention', and a blue 'Proxy → Point: SPA'. The 'SPA' notation indicates a specialized attention mechanism. The feedback loop and '×N' repetition are retained. This method is marked with green checkmarks and labels: '✓ Refined Interaction', '✓ Effective Computation', '✓ Robust', and '✓ Interpretable', signifying improvements over the previous methods.

The transitions between the three architectures are indicated by large light blue arrows pointing right, suggesting a design evolution. The figure’s caption emphasizes that SP²T improves upon prior methods through three key advances: (1) advanced sampling, (2) efficient interaction, and (3) an enhanced dual-stream framework.
