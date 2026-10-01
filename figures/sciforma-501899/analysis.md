# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAGS: Granularity-Aware Feature Distillation for Language Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the mask fusion process during the training phase, structured into three main horizontal sections representing different granularity masks, followed by a central processing block and a final fused output. The top row contains three distinct mask regions labeled m_w (blue), m_p (green), and m_s (red), each corresponding to a different level of spatial or semantic granularity. Each region is a rectangular area filled with its respective color and contains geometric shapes (circles and triangles) with numerical labels indicating specific pixel or region identifiers. In m_w (blue), region 0 contains circle 1 and triangle 2. In m_p (green), region 3 contains circle 5 and triangle 6, with additional regions 4 and 7. In m_s (red), region 8 contains a subdivided circle (quadrants 10, 11, 12, 13) and triangle 14, with regions 9 and 16 also present. Below these three masks, a central gray rounded rectangle labeled 'Granularity weight α per pixel' serves as a weighting module. It includes a legend with three colored squares (blue, green, red) corresponding to weights α_w, α_p, α_s, respectively. Lines connect specific points within each mask—specifically, point 1 from m_w, point 5 from m_p, and point 12 from m_s—to this central module, indicating that these pixels contribute to the computation of per-pixel granularity weights. From this module, a single line leads downward to the bottom section, which displays the resulting 'Fused mask m_f'. This fused mask is a composite image combining elements from the input masks: it retains the blue background from m_w, incorporates triangle 6 from m_p (now colored green), and integrates the subdivided circle from m_s (with quadrants 10 and 12 visible, colored orange). The fused mask also includes region 7 from m_p, now appearing as a green triangular segment. The label 'Fused mask m_f' is placed below this output, presented in a gradient-colored rounded rectangle transitioning from blue to red, symbolizing the integration of the three input masks. The overall layout follows a top-down flow: three input masks → granularity weight computation → fused output mask. The connections are represented by solid black lines with small circular nodes at connection points, emphasizing the data flow from specific pixels to the weighting module and then to the final fused result. The figure visually conveys how different granularity levels are combined using learned weights to produce a unified segmentation mask.
