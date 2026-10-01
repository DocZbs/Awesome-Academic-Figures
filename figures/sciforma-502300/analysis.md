# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Split Learning in Computer Vision for Semantic Segmentation Delay Minimization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14272

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a deep neural network architecture for computer vision semantic segmentation, structured as an encoder-decoder framework with skip connections and additional index data transmission. The global layout is horizontally oriented, divided into two main sections by a vertical dashed line: the left side represents the encoder (downsampling path), and the right side represents the decoder (upsampling path). The input data, labeled as C_in × H × W, enters from the left and passes through a convolutional layer (Conv), followed by a series of stacked Basic Modules (BM), each represented as a blue-bordered rectangle. These BMs are connected sequentially with arrows indicating forward propagation. After each stack of BMs, a red oval labeled 'Downsampling MaxPooling' is shown, accompanied by a green cloud icon indicating feature transformation: channel count increases (C ↑), while height and width decrease (H ↓, W ↓). This downsampling process is repeated across multiple levels.

In the encoder, at each level, a local feature extraction mechanism is depicted: a 2×2 kernel window (K_h × K_w) is shown with four elements e1, e2, e3, e4. The maximum value within this window (e.g., e2 or e3) is selected and passed to a subsequent BM stack via a blue curved arrow. The selected element's index (e.g., 2 or 3) is also transmitted as part of 'Additional Transmitted Index Data', shown at the bottom of the diagram as a dashed black line connecting the encoder to the decoder. This index data is crucial for reconstructing features during upsampling.

The decoder mirrors the encoder structure but in reverse. It begins with 'Upsampling MaxUnpooling', indicated by a red oval and a green cloud showing C ↓, H ↑, W ↑. Each upsampling stage is followed by a stack of BMs. The key innovation lies in the reconstruction process: the transmitted index data (e.g., 2 or 3) is used to place the corresponding feature value (e.g., e) back into the correct position within a 2×2 kernel window in the upsampling stage. For instance, if index 2 is received, the value 'e' is placed in the top-right position (e2) of the kernel; if index 3 is received, it is placed in the bottom-left position (e3). This is visually represented by blue arrows from the index boxes (red squares labeled 2 or 3) to the respective positions in the kernel grid.

The final output of the decoder is processed through a FullConv layer, producing the output data of size C_out × H × W. The entire architecture emphasizes the preservation of spatial information through the transmission of index data, enabling more accurate feature reconstruction during upsampling. The visual modules include rectangular BM blocks (blue borders), kernel windows (dashed grids with labeled elements), index boxes (red squares), and functional ovals (red for pooling/unpooling, green for feature transformation). Connections are shown with solid orange arrows for main data flow, blue curved arrows for feature selection, and dashed lines for index data transmission.
