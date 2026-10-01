# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ARTInp: CBCT-to-CT Image Inpainting and Image Translation in Radiotherapy — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2502.04898

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=515600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a translation network designed to convert axial CBCT (Cone Beam Computed Tomography) slices into synthetic CT (sCT) slices, using a 16-bit format. The overall layout is divided into two main horizontal pathways: the top pathway represents the generator network responsible for translating CBCT to sCT, and the bottom pathway represents the discriminator network used for adversarial training to distinguish between real and synthetic images.

In the top pathway, the input is an NIfTI volume containing CT or CBCT data, which is then converted into a 256x256x1 TIFF 16-bit image representing a single axial CBCT slice. This input feeds into the generator network, which consists of a series of downsampling blocks (colored purple) followed by upsampling blocks (colored yellow). Each block is represented as a vertical rectangle, with dimensions labeled at the top (e.g., 128x128, 64x64) indicating spatial resolution and numbers below (e.g., 64, 128) indicating feature channel count. The downsampling blocks progressively reduce spatial resolution from 128x128 to 2x2 while increasing feature channels up to 512. A 1x1 convolutional layer (labeled '1x1') with 512 channels connects the last downsampling block to the first upsampling block. The upsampling blocks then gradually increase spatial resolution back to 128x128, reducing feature channels from 512 down to 64. Skip connections (indicated by black arrows) link corresponding layers in the downsampling and upsampling paths, allowing feature maps to bypass intermediate layers. The final output is a 256x256x1 TIFF 16-bit sCT image.

In the bottom pathway, the discriminator network takes as input a pair of 256x256x2 images: one original CT slice and one synthetic sCT slice, stacked together. This input passes through a series of downsampling blocks (colored blue), each reducing spatial resolution and increasing feature channels (from 64 to 512). The final output is a binary classification: 'Real/Fake', indicating whether the input pair contains real or synthetic data.

The legend on the right clarifies the visual elements: red arrows denote convolution operations (4x4 kernel, stride 2), blue arrows denote deconvolution (or transposed convolution) operations (4x4 kernel, stride 2), black arrows represent skip connections, purple rectangles are generator downsampling blocks, yellow rectangles are upsampling blocks, and blue rectangles are discriminator downsampling blocks. The entire diagram is structured to show the end-to-end flow from raw CBCT data to generated sCT, with the discriminator providing feedback for adversarial training.
