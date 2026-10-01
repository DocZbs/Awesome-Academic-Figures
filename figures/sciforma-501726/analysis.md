# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploring Transformer-Augmented LSTM for Temporal and Spatial Feature Learning in Trajectory Prediction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13419

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end neural network architecture designed for trajectory prediction, structured as a dual-branch encoder-decoder system. The global layout is horizontal, with two parallel processing streams converging before feeding into a single decoder. The top branch processes 'Historical Trajectory' data, denoted by the input sequence X_{t-T+1}, ..., X_t, while the bottom branch handles 'Spatial Trajectory' data, represented by G_{t-T+1}, ..., G_t. Both branches begin with a rounded rectangular module labeled 'LSTM', which encodes the input sequences into hidden states: H^v_t for the historical branch and S^v_t for the spatial branch. These LSTM outputs are then fed into subsequent 'Transformer' modules, also depicted as rounded rectangles, which further refine the representations into Z^v_t (from historical data) and Z^{nbrs}_t (from spatial data). The spatial branch includes an additional component: a 'Spatial Mask' (a parallelogram-shaped node) that is applied via a circular node with a cross symbol, indicating element-wise multiplication or masking operation, producing a modified embedding labeled 'soc_enc'. This 'soc_enc' is then combined with Z^v_t at a circular node with a plus symbol, representing concatenation, forming a joint feature vector described as Concat(Z_t, soc_enc) ∈ ℝ^{B×(T+C·G)×d}. This concatenated feature is finally passed to the 'Decoder' module, a rounded rectangle, which generates the predicted future coordinates (x̂, ŷ) for the target vehicle over five time steps. All connections are directed arrows, indicating the flow of data from left to right, with clear labeling of intermediate representations and operations. The visual style uses black outlines, white fill, and standard geometric shapes: parallelograms for inputs, rounded rectangles for model components, and circles for operations. Text labels are placed inside or adjacent to each component, with mathematical notations and dimensions explicitly shown where relevant.
