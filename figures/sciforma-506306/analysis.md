# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MSWA: Refining Local Attention with Multi-ScaleWindow Attention — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01039

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural combination of Linear Attention and Multi-Scale Window Attention (MSWA), structured into two main horizontal sections: the top section representing the MSWA layer and the bottom section depicting the MSWA head. The global layout is a left-to-right sequential flow, with the top row showing a series of grid-based feature maps undergoing transformations via attention mechanisms, and the bottom row displaying parallel outputs from multiple attention heads. The top row begins with an input grid, rendered as a 2D matrix of light blue cells, indicating the initial feature representation. This grid is processed through a sequence of operations, each represented by an orange rightward arrow followed by an ellipsis, suggesting iterative or repeated processing steps. After each transformation, the grid evolves to show increasingly complex patterns of dark blue highlighted cells, which represent activated or attended regions. These patterns form diagonal bands or staggered blocks, reflecting the multi-scale window attention mechanism’s focus on localized, non-overlapping or overlapping windows across different scales. Above this sequence, two labels—'Linear Attention' and 'Multi-Scale Window Attention (Layer)'—are positioned at the top, with blue downward arrows pointing to the first and subsequent grids respectively, indicating that both mechanisms contribute to the processing pipeline. The bottom section, labeled 'Multi-Scale Window Attention (Head)', is bracketed by an orange curved brace connecting the final output of the top row to three separate grid outputs below. Each of these lower grids displays a distinct pattern of dark blue highlighted cells, illustrating the parallel computation across multiple attention heads, each capturing different spatial relationships or scales within the input. The visual modules consist primarily of 2D grid matrices with varying shades of blue to denote activation levels, and orange arrows to indicate forward propagation. The connections between modules are shown via solid orange arrows for sequential flow and blue arrows for component contributions. The figure emphasizes the hierarchical and parallel nature of the attention mechanism, where linear attention provides a baseline computation, while MSWA introduces multi-scale, windowed attention at both the layer and head levels, enabling efficient and context-aware feature extraction.
