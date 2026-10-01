# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unsupervised Tomato Split Anomaly Detection using Hyperspectral Imaging and Variational Autoencoders — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02921

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a complete pipeline for hyperspectral image (HSI) processing using a Variational Autoencoder (VAE), structured into three main stages: Input, VAE, and Output. The global layout is horizontal, progressing from left to right, with each stage enclosed in a distinct colored box—orange for Input, light blue for VAE, and green for Output. Below the VAE block, a gray box labeled 'Latent Embeddings' captures the intermediate representation extracted from the latent space.

In the Input stage, raw HSI data is represented as a stack of grayscale images, symbolizing multiple spectral bands. An arrow labeled λ points to the preprocessing module, indicating spectral band selection or weighting. The preprocessing block contains several components: an HSI cube (colored red-green-blue), an RGB image (red-purple-blue), a YOLOv8 model (orange circular icon), and two sets of extracted features labeled 'RGB KDN' and 'HSI KDN'. These components are interconnected with lines, suggesting feature fusion or extraction processes. The output of preprocessing is labeled 'Processed HSI', depicted as a stack of grayscale images similar to the input but presumably refined.

The central VAE module is divided into Encoder, Latent Space, and Decoder. The Encoder consists of five yellow rectangular blocks labeled Conv1 through Conv5, followed by a 'Flat' layer, representing convolutional layers reducing spatial dimensions and flattening the feature map. These feed into the Latent Space, which includes two blue rectangular blocks labeled 'Fully1' and 'Fully2', connected via a reparameterization step for z (indicated by text 'Reparametrize For z'). This signifies the stochastic sampling process typical of VAEs. The Decoder mirrors the Encoder’s structure with five red rectangular blocks labeled ConvTrans1 through ConvTrans5, representing transposed convolutions that reconstruct the original image dimensions.

Connections flow from the processed HSI to the Encoder, then through the Latent Space to the Decoder, and finally to the Output stage. A downward arrow from the Latent Space leads to the 'Latent Embeddings' box, indicating that the latent representation is extracted for downstream tasks. The Output stage displays 'Reconstruction', shown as a stack of grayscale images identical in form to the processed HSI, signifying the reconstructed hyperspectral data.

All modules are visually distinct by color and shape: yellow for encoder layers, red for decoder layers, blue for latent space layers, and gray for embeddings. Text labels are placed directly on or near each component for clarity. The diagram uses solid black arrows to denote data flow, emphasizing the sequential nature of the pipeline. The overall design reflects a standard autoencoder architecture adapted for hyperspectral data, with preprocessing tailored for spectral-spatial feature extraction.
