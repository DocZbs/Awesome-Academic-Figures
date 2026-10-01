# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ColorFlow: Retrieval-Augmented Image Sequence Colorization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11815

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall architecture of ColorFlow, a framework composed of three interconnected pipelines: the Retrieval-Augmented Pipeline (RAP), the In-context Colorization Pipeline (ICP), and the Guided Super-Resolution Pipeline (GSRP). The layout is divided into three main sections arranged horizontally and vertically, with clear directional flows indicated by arrows.

In the top-left section, the Retrieval-Augmented Pipeline (RAP) begins with a grid of black-and-white comic panels. A query is issued to a Reference Image Pool, which contains a collection of colored comic images. This retrieval process selects relevant reference images, which are then cropped to extract specific regions. These cropped images are fed into the next stage.

Below RAP, the In-context Colorization Pipeline (ICP) starts with downsampling the input black-and-white image. The downsampled image passes through a green trapezoidal module representing an encoder, followed by a pink rectangular block labeled 'Colorization Guider'. This guider consists of two orange CNN blocks, each marked with a flame icon, indicating iterative or dynamic processing. The output from the guider feeds into a series of blue rectangular modules, each containing 'QKV' labels and flame icons, suggesting multiple attention layers or transformer blocks operating over T steps. These modules process the image features and produce a colorized output, which is then upsampled to match the original resolution. A black square icon labeled 'Downsample' appears again, possibly indicating a feedback loop or alternative path. The final output of ICP is a colorized version of the input comic panel.

On the right side, the Guided Super-Resolution Pipeline (GSRP) takes the colorized output from ICP as input. It processes this image through an Encoder-Decoder structure, both represented by green trapezoids. Alongside the main flow, there are three parallel branches, each consisting of a small blue square labeled 'C' (likely for context or conditioning) connected to an orange square with a flame icon, suggesting guided refinement steps. The decoder outputs a higher-resolution, refined colorized image. This result is compared against the original image, stored in a gray-bordered box labeled 'Original Image', and also fed back into the Reference Image Pool for future iterations. A circular arrow labeled 'Next Image' indicates the pipeline's ability to process sequential frames, maintaining color consistency across the comic sequence.

Connections between modules are shown via solid arrows, indicating data flow direction. Dashed arrows denote optional or feedback paths. The entire diagram uses hand-drawn style elements, including scissors for cropping, a paint palette for colorization, and a magnifying glass for super-resolution, enhancing visual clarity. Text labels are placed directly on or near the corresponding modules, with pipeline names enclosed in colored banners at the top of each section.
