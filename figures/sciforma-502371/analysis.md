# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Affordance-Aware Object Insertion via Mask-Aware Dual Diffusion — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14462

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a four-stage pipeline for constructing the SAM-FB dataset, designed to automatically convert any input image into a high-quality tetrad output consisting of foreground, background, mask, and bounding box or point annotations. The overall layout is horizontal, progressing from left to right across four main modules labeled ① through ④, each enclosed in a rounded rectangular box with a dashed border, connected by gray arrows indicating the flow of data.

Stage ①, 'Foreground Mask Generation', begins with multiple input images shown in a grid. These images are processed by SAM (Segment Anything Model), represented by a blue infinity symbol logo, which generates initial segmentation masks. The outputs include various segmented regions such as buildings, phones, and other objects. Non-Maximum Suppression (NMS), indicated by a blue square icon with a white cross, is applied to refine the masks by removing overlapping segments. The result is a set of candidate foreground masks displayed below the input images.

Stage ②, 'Foreground Filter', refines these masks using two filtering approaches. First, a 'Rule-based filter' (light blue box with a blue funnel icon) applies criteria including Relative Size, Component Number, Aspect Ratio, and Color Standard Deviation to eliminate low-quality masks. Second, a 'Model-based filter' (light blue box with a red and blue model icon) uses a binary classifier trained on 2000 annotated samples to further select high-quality foregrounds. The filtered masks are shown as smaller, more coherent segments, with some rejected masks depicted outside the main flow.

Stage ③, 'Background Inpaint', processes the remaining image regions after foreground removal. The mask is enlarged to ensure complete coverage of the foreground object, then fed into LAMA (a neural network for image inpainting, represented by a multicolored star icon) to reconstruct the background. The output is a filled-in background region, shown alongside the original image for comparison.

Stage ④, 'Background Filter', evaluates the quality of the reconstructed background using Structural Similarity Index (SSIM). Two examples are shown: one with an SSIM score of 0.85 (high quality) and another with 0.69 (low quality). A blue funnel icon labeled 'SSIM Filter' indicates that only backgrounds meeting a threshold are retained. The final output is directed to the 'SAM-FB Dataset' section on the far right.

The 'SAM-FB Dataset' box (light blue background) displays the final tetrad components: a clean background image, a foreground image (e.g., a church), a corresponding mask (shown as a blue silhouette), and annotation types including a bounding box and a point. Arrows from stages ①, ②, ③, and ④ converge to this final output, emphasizing the pipeline's end-to-end nature. The entire process ensures high-quality foreground and background retention through automated segmentation, filtering, inpainting, and quality control.
