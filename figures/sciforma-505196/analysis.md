# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RecConv: Efficient Recursive Convolutions for Multi-Frequency Representations — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19628

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of the RecNeXt model, comprising five subfigures labeled (a) through (e), illustrating the overall structure, downsampling mechanism, block composition, partial-channel block design, and attention module details.

[1] Global Layout and Structure:
The figure is organized into five main sections: (a) Overall Architecture, (b) Downsample, (c) Four Partial-Channel MetaNeXt Blocks and One Shared-Channel MetaNeXt Block, (d) Partial-Channel MetaNeXt Block, and (e) RecLinear Attention. Section (a) shows a sequential pipeline divided into four stages, each containing a MetaNeXt block followed by a downsampling module. Sections (b)–(e) provide detailed breakdowns of components used in (a).

[2] Visual Modules and Attributes:
In (a), the pipeline begins with a gray rectangular 'Stem' module, followed by four stages. Each stage consists of a cyan 'MetaNeXt' block (with multiplicity N₁×, N₂×, etc.) and a light blue 'Downsample' block. Below each MetaNeXt block, spatial dimensions are annotated: C₁×H/8×W/8, C₂×H/16×W/16, C₃×H/32×W/32, and C₄×H/64×W/64.

In (b), the 'Downsample' module is shown as a composite unit: a teal 'DWConv' block feeds into a light blue 'MLP', whose output is element-wise added to the input via a ⊕ symbol.

In (c), the structure of a stage is expanded to show four partial-channel MetaNeXt blocks (each with a distinct color: gray, pink, yellow, gray) followed by one shared-channel MetaNeXt block (four parallel blocks: gray, yellow, pink, gray). Each partial-channel block processes C/4 channels, indicated by labels inside rectangles. The blocks are connected via element-wise addition (⊕), channel-wise MLP (σ), and RepDWConv (*), forming a residual-like structure.

In (d), the 'Partial-Channel MetaNeXt Block' is detailed: an input splits into two paths — one with Cp channels processed by 'RecLinear Attention', and another with C−Cp channels passed through identity. These are concatenated channel-wise (⊙), fed into an MLP, and then element-wise added to the original input.

In (e), 'RecLinear Attention' is shown as a module with a 'Linear Attention' block, preceded by spatial downsampling (↓) and followed by nearest interpolation (↑), with outputs combined via element-wise addition (⊕) and RepDWConv (*).

[3] Connections and Arrows:
In (a), arrows indicate forward flow from Stem → Stage 1 → Stage 2 → Stage 3 → Stage 4. Each stage connects MetaNeXt to Downsample, and Downsample to the next MetaNeXt.

In (b), an arrow from DWConv to MLP, and then to ⊕, which combines with the input.

In (c), each partial-channel block receives input, applies operations (RepDWConv, σ, ⊕), and passes output to the next block. The final shared-channel block receives inputs from all four partial-channel blocks, processes them in parallel, and combines via ⊕.

In (d), the input splits; one path goes through RecLinear Attention, the other through identity. Outputs are concatenated, processed by MLP, and added back to input via ⊕.

In (e), input flows through ↓, then Linear Attention, then ↑, and finally ⊕ with the RepDWConv output.

Legend symbols: ↓ = DWConv Downsample, * = RepDWConv, σ = Channel-wise MLP, ↑ = Nearest Interpolation, ⊕ = Element-wise Addition.
