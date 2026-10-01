# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Symbolic Disentangled Representations for Images — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19847

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of ArSyD (Architecture for Symbolic Disentanglement), a method for manipulating generative factors in images through symbolic feature exchange. The global layout is a horizontal pipeline divided into two parallel input streams (Target Image and Donor Image) converging into a central Feature Exchange module, followed by a shared Decoder producing a Reconstructed Image. The Target Image, shown as a red cylinder on a gray surface within a red-bordered frame, and the Donor Image, shown as a purple cylinder in a blue-bordered frame, are processed independently at first. Each image passes through an orange trapezoidal Encoder block, which extracts high-level features. The output of each encoder is then fed into a light-blue rectangular GF Projection block, which maps the features into a set of Hyperdimensional Vectors (HVs) representing generative factors. These HVs are displayed as white rectangular boxes containing attributes: 'Cylinder', color ('Red' or 'Purple'), size ('Large'), material ('Metal'), and spatial coordinates ('X coord.', 'Y coord.'). The Target Image’s HVs show 'Red' in bold red text, while the Donor Image’s HVs show 'Purple' in bold purple text. The central green rectangle labeled 'Feature Exchange' contains a single merged HV box that receives inputs from both sets. Black arrows indicate that all attributes except color are transferred from the Target to the merged HV, while a distinct purple arrow shows the color attribute being replaced by the 'Purple' value from the Donor. This exchange modifies only the differing generative factor (color), preserving all others. The resulting modified HV set is then passed to a shared orange trapezoidal Decoder, which reconstructs the image. The final output, labeled 'Reconstructed Image' and framed in red, displays the original target scene but with the cylinder now colored purple, demonstrating successful feature transfer. The visual design uses consistent shapes and colors to denote functional modules: trapezoids for encoders/decoders, rectangles for projections and HVs, and a large green rectangle for the exchange module. Text labels are clear and positioned adjacent to their respective components. The overall flow is left-to-right, emphasizing the transformation from input images to reconstructed output via symbolic manipulation of disentangled generative factors.
