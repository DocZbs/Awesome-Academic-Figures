# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Symbolic Disentangled Representations for Images — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19847

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two contrasting methodologies for obtaining a symbolic disentangled representation of an object, labeled as (a) and (b), illustrating the difference between traditional HDC approaches and the proposed ArSyD framework.

In part (a), the global layout shows a symbolic input description of an object — specified as Shape = Cylinder, Color = Red, Size = Large, Coordx = X, Cordy = Y, Material = Metal — being processed through separate item memory modules for 'Shape' and 'Material'. Each module contains a grid of memory slots (orange rectangles) indexed by G₁ to Gₖ, where each slot holds a vector V (e.g., V₁ᴳ¹, V₂ᴳ¹, ..., Vₖᴳ¹ for Shape). The relevant memory slot corresponding to the object’s attribute (e.g., 'Cylinder' for Shape, 'Metal' for Material) is highlighted with a red border. From each memory module, the selected vector is extracted and multiplied element-wise (denoted by ⊗) with a corresponding global gate vector G (purple rectangle). The resulting vectors from both modules are then summed (+) to produce the final output vector O (blue rectangle).

Part (b) illustrates the ArSyD approach, which grounds symbolic representations in raw visual data. The process begins with an image of Object I (a red cylinder) fed into an Encoder (pink trapezoid), producing a feature vector O′ (red rectangle). This is projected via a GF Projection block (light blue rectangle) into multiple latent representations V′₁ to V′ₙ (light blue rectangles), one per attribute group. These projections feed into two parallel GF Representation modules — one for Shape and one for Material — each structured similarly to part (a) but now incorporating attention mechanisms (green rectangles) within the item memory blocks. The attention mechanism selects the most relevant memory slot based on the projected features. The selected memory vectors V*₁ and V*N (green rectangles) are then multiplied element-wise with their respective global gate vectors G₁ and Gₙ (purple rectangles), and the results are summed to produce the final output vector O (blue rectangle). The overall structure emphasizes grounding symbolic processing in perceptual input via encoding and projection, followed by attention-guided retrieval from learned memory banks.

Both diagrams share similar visual attributes: memory slots are orange rectangles, gate vectors are purple, output vectors are blue, and operations like multiplication and summation are indicated by ⊗ and + symbols respectively. The key distinction lies in the source of input — symbolic in (a), visual in (b) — and the inclusion of attention and projection layers in (b) to bridge raw data with symbolic memory.
