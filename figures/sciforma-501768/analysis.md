# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enabling Region-Specific Control via Lassos in Point-Based Colorization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13469

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the construction of a Localization Attention Mask, M_l, used in a vision model for selective attention based on user-provided color hints. The global layout is left-to-right, beginning with an input image divided into a 3x3 grid of patches, where four distinct regions are highlighted with colored lassos (red, yellow, green, orange) and marked with corresponding colored squares at their centers. These lassos represent user-specified regions of interest. An arrow points from this input to a sequence of processing steps.

The first stage involves generating multiple conditional masks, denoted M_c, one for each color hint. Each M_c is represented as a 3x3 grid of colored tiles (e.g., pink, light green, red), where the tile corresponding to a patch inside the lasso is filled with a patterned texture (dots or stripes) indicating a value of 1, while others are plain, indicating 0. Below each M_c, a grayscale version of the input image is shown with only the relevant lasso active, visually linking the mask to its source region.

Next, an unconditional mask, M_u, is generated. It is also a 3x3 grid (in peach/orange tones), where patches not covered by any lasso are marked with a dotted pattern (value 1), and those under lassos are plain (value 0). This mask captures regions outside all specified areas.

Finally, the localization attention mask M_l is formed by concatenating M_u and all M_c masks. This is depicted as a stack of overlapping grids, with M_u at the bottom and the M_c masks layered on top, each contributing its patterned regions. The concatenation operation is symbolized by a ⊕ symbol between M_u and the M_c stack.

The figure includes a legend at the bottom: 'M_c: Conditional Masks', 'M_u: Unconditional Mask', and 'M_l: Localization Attention Mask'. The overall workflow shows how user-defined regions (via lassos) are translated into structured attention masks that guide the model’s focus during inference.
