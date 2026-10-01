# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unsupervised Class Generation to Expand Semantic Segmentation Datasets — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02264

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-path pipeline for generating a synthetic image and extracting a semantic mask for a specified object within it. The global layout is horizontal, divided into an upper path for image generation and a lower path for attention-based segmentation and mask extraction. The upper path begins on the left with a text prompt y = “Urban bus in front of a hotel”, which is fed into a blue 3D rectangular block labeled 'Stable Diffusion' via an arrow labeled τθ(y). A green input vector zt also enters the Stable Diffusion block from below, labeled Q(zt). The output of this block is a generated image showing a red bus in an urban setting with tall buildings in the background. This generated image flows rightward to the next stage.

In parallel, the lower path starts with the same text prompt y, which is processed to produce attention maps for the word “Bus”. These are visualized as a grid of colored squares, where warmer colors (orange/yellow) indicate higher attention in specific regions corresponding to the bus. From this grid, an orange arrow leads to a heatmap labeled 'Aggregated attention', which shows a blurred, green-yellow region highlighting the bus area. This is further refined into a 'Dense Attention' map, depicted as a sharp yellow region on a dark purple background, precisely outlining the bus.

The dense attention map is then used to generate 'Point Proposals'—small yellow dots placed on the bus in the original generated image. These points are fed into a dark blue 3D block labeled 'SAM' (Segment Anything Model), which processes them to produce two outputs: a 'Cutout RGB' image showing only the isolated red bus against a black background, and a 'Cutout Semantic Label' image displaying a solid blue mask of the bus’s shape on a black background. The connections between modules are indicated by arrows: blue arrows represent data flow in the upper generation path, orange arrows denote attention computation in the lower path, and green arrows show latent space inputs. The entire diagram illustrates how text-to-image generation is combined with attention-guided segmentation to isolate and label objects in synthetic images.
