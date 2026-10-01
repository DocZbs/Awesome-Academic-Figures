# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BiM-VFI: Bidirectional Motion Field-Guided Frame Interpolation for Video with Non-uniform Motions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11365

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the proposed BiM-Guided FlowNet (BiMFN) at the l-th pyramid level, depicting a multi-branch architecture designed for optical flow estimation with bidirectional motion guidance. The global layout is horizontally structured, divided into two main processing streams: one for forward flow estimation from frame F₀ˡ˒ᵐ to F₁ˡ˒ᵐ, and another for backward flow estimation from F₁ˡ˒ᵐ to F₀ˡ˒ᵐ. These streams converge into a central module called BiM-MConv, which integrates motion features using bidirectional motion guidance.

On the left side, input features F₀ˡ˒ᵐ and F₁ˡ˒ᵐ are processed through separate branches. Each branch receives initial flow estimates vₜ→₀ˡ⁺¹,ᵈ and vₜ→₁ˡ⁺¹,ᵈ, respectively, which are downsampled via 'd' (bilinear downsampling) and then warped backward using 'w' (backward warping) to align features across frames. The warped features are combined with cost volume construction ('cv') modules, which generate cost volumes by comparing features from both frames. These cost volumes are further processed through convolutional layers ('Conv', green rectangles) to extract refined flow features.

The central part of the diagram highlights the BiM-MConv module, enclosed in a beige box. This module takes three feature inputs: F_R, F_Φ, and F_V, each processed independently through a ResBlock (orange rounded rectangles). The outputs of these ResBlocks are multiplied element-wise (*) and then summed (+) before being passed through a final Conv layer, producing refined flow estimates ṽₜ→₀ˡʳᵉˢ and ṽₜ→₁ˡʳᵉˢ.

Below the main flow, a legend defines symbols: 'd' for bilinear downsampling, 'w' for backward warping, '+' for residual connection, '*' for elementwise multiplication, and 'cv' for cost volume construction. Additionally, two auxiliary modules—DEM (red rectangle) and AEM (pink rectangle)—feed into the BiM-MConv block via F_R and F_Φ, respectively, where R and Φ_IN are their respective inputs.

The output of the BiM-MConv block is combined with the original flow estimates vₜ→₀ˡ⁺¹,ᵈ and vₜ→₁ˡ⁺¹,ᵈ through addition (+), yielding the final refined flows ṽₜ→₀ˡ and ṽₜ→₁ˡ. The entire structure is repeated N times, indicated by an arc labeled 'N ...', suggesting iterative refinement across multiple stages. The diagram uses arrows to indicate data flow, with solid lines for primary connections and dashed or colored lines (e.g., purple, blue) for auxiliary or feedback paths, such as those feeding into cost volume construction or residual connections.
