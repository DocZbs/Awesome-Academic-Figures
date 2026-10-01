# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Wonderland: Navigating 3D Scenes from a Single Image — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12091

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Latent Large Reconstruction Model (LaLRM), a feed-forward neural network designed to regress 3D Gaussian Splatting (3DGS) representations from a video latent and camera embeddings. The global layout is vertically structured, with two parallel input streams converging into a shared processing pipeline before producing the final output. The left stream processes the 'Video Latent' z, with shape (B, t=13, h=60, w=90, c=16), while the right stream processes the 'Camera Embedding' p, with shape (B, T=49, H=480, W=720, 6). Both inputs are processed independently through convolutional layers: the video latent passes through a light green rounded rectangle labeled 'Conv2D' with parameters (in_c=16, out_c=1024, kernel=2, stride=2), and the camera embedding passes through a light blue rounded rectangle labeled 'Conv3D' with parameters (in_c=16, out_c=1024, kernel=(4,16,16), stride=(4,16,16), pad=(2,0,0)). Each output is then flattened and passed to an orange rounded rectangle labeled 'Layer Normalization', producing outputs o_l and o_p, both with shape (B, N_l, d_l). These normalized outputs are concatenated at a circular node labeled 'C'. The concatenated feature vector is then fed into a beige rounded rectangle labeled 'Linear' with dimensions (2048, 1024). The output of this linear layer is passed to a gray rounded rectangle labeled 'Transformer Block', which is repeated 24 times as indicated by 'x 24' on a feedback loop arrow returning to the block's input. After the transformer stack, the features are passed to a light blue rounded rectangle labeled 'ConvTranspose3D' with parameters (in_c=1024, out_c=12, kernel=(5,8,8), stride=(4,8,8), pad=(2,0,0)), producing an intermediate tensor of shape (B, 49, 240, 360, 12). This is followed by a green rounded rectangle labeled 'Various Activations', leading to the final output G, which has shape (B, num_points = 4,233,600, feature = 12). All connections are represented by solid black arrows indicating the forward flow of data, with the exception of the feedback loop to the Transformer Block. The figure uses distinct colors to differentiate module types: light green for 2D convolutions, light blue for 3D convolutions and transposed convolutions, orange for normalization, beige for linear layers, gray for the transformer, and green for activation functions.
