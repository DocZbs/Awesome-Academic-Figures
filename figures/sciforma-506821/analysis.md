# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

From thermodynamics to protein design: Diffusion models for biomolecule generation towards autonomous protein engineering — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02680

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of AlphaFold 2 (AF2) and AlphaFold 3 (AF3), highlighting key differences in their core modules: Evoformer, Pairformer, Structure Module, and Diffusion Module. The layout is divided into four quadrants, each representing one module, with AF2 components on the left (light blue background) and AF3 components on the right (light yellow background). Each quadrant contains a flowchart illustrating data processing steps, with rectangular nodes representing operations or representations, and arrows indicating data flow.

[1] Global Layout and Structure:
The figure is organized into a 2x2 grid. Top-left: Evoformer (AF2); Top-right: Pairformer (AF3); Bottom-left: Structure Module (AF2); Bottom-right: Diffusion Module (AF3). Each module’s workflow is enclosed within dashed boxes labeled with the number of blocks (e.g., '48 blocks' for Evoformer and Pairformer, '8 blocks' for Structure Module). The bottom of the figure includes a caption: 'Differences between AF2 and AF3.'

[2] Visual Modules and Attributes:
In the Evoformer (AF2), inputs are 'MSA representation' (blue rectangle) and 'Pair representation' (blue rectangle). These feed into a sequence of operations: 'Row-wise gated self-attention with pair bias' (purple), 'Column-wise gated self-attention' (purple), and 'Transition' (gray). Outputs from these are combined via 'Outer product mean' (green) to update the pair representation. This is followed by 'Triangle update', 'Triangle self-attention', and another 'Transition' (all light blue), forming a loop over 48 blocks. Outputs are updated MSA and Pair representations.

In the Pairformer (AF3), inputs are 'Pair representation' (blue) and 'Single representation' (orange). The pair representation flows through 'Triangle update', 'Triangle self-attention', and 'Transition' (light blue), while the single representation passes through 'Single attention with pair bias' (orange) and 'Transition' (gray). Both streams converge and are output as updated representations after 48 blocks.

The Structure Module (AF2) takes 'Single representation' (orange) and 'Pair representation' (blue) as inputs. These enter an 'IPA module' (purple), which feeds into 'Predict relative rotations and translations' (green). This generates 'Backbone frames' (visualized as small clusters of dots). The process repeats over 8 blocks. The final step uses the updated single representation to 'Predict χ angles and compute all atom positions' (blue), producing a full atomic structure (visualized as a ball-and-stick model).

The Diffusion Module (AF3) begins with three input types: 'Per-token cond.' (blue), 'Per-atom cond.' (blue), and 'Rand. rot. trans.' (red dots). These feed into 'Seq.local attention (atoms) 3 blocks' (orange), then 'Global attention (tokens) 24 blocks' (blue), and finally another 'Seq.local attention (atoms) 3 blocks' (orange). The output is a 3D atomic structure (colored spheres).

[3] Connections and Arrows:
Arrows indicate data flow direction. In Evoformer, MSA and Pair representations feed into row-wise attention; outputs cascade down through column-wise attention, transition, outer product mean, and triangle operations. In Pairformer, pair and single representations split into parallel paths, recombine after processing, and output updated representations. In Structure Module, inputs flow through IPA and prediction steps, generating backbone frames iteratively, culminating in full atom position computation. In Diffusion Module, three conditionings converge into sequential local attention layers, then global attention, then final local attention, producing the final structure. All connections are solid lines with arrowheads, except for feedback loops within blocks, which are dashed.
