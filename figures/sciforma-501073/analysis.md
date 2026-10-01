# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EDformer: Embedded Decomposition Transformer for Interpretable Multivariate Time Series Predictions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12227

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall architecture of EDformer, a time series forecasting model that decomposes input data into trend and seasonal components before processing them through an encoder for prediction. The global layout is structured as a left-to-right workflow, beginning with the 'Time Series Input' on the top-left, which is visually represented as a black jagged line overlaid with a smoother blue curve indicating the underlying trend. This input undergoes decomposition via a labeled arrow pointing to two separate outputs: the 'Seasonal Part', shown as a yellow oscillating waveform, and the 'Trend-cyclical part', depicted as a blue wavy line. The seasonal component is then processed through a multivariate domain transformation: it flows rightward into an oval-shaped module labeled 'Embedding', which converts it into a multivariate representation. From there, a downward arrow labeled 'Reverse' leads to a stacked plot of three time series labeled 'Frame-1', 'Frame-2', and 'Frame-3', each represented by distinct colored lines (cyan, teal, yellow) plotted against axes labeled 'Value' (vertical) and 'Time' (horizontal), with dashed horizontal lines separating the frames.

These frames are then fed into the main encoder block, which occupies the lower central portion of the diagram and is enclosed within a large rounded rectangle labeled 'Encoder'. Inside this encoder, the frames first pass through a 'Multivariate Self-Attention on Frames' module, visualized as a sequence of colored blocks (green, blue, purple, pink, light blue) connected by arrows, indicating sequential processing with attention mechanisms. Following this, the output is passed through a 'Layer Norm' block, represented by stacked teal and yellow cubes. Next comes a 'FFN on series' module, depicted as a neural network diagram with interconnected nodes in purple, orange, and pink, leading to a green output node. Another 'Layer Norm' block follows, again shown as stacked cubes. Finally, the output from the encoder is combined with the 'Trend part' (the blue wavy line from the initial decomposition) via a 'Projection' operation symbolized by a circle with a plus sign inside. This combined signal is then directed to the 'Forecasting' box on the far left, indicated by a thick black arrow pointing leftward, completing the predictive pipeline.

Visual modules include rectangular boxes for inputs and outputs, ovals for embedding, stacked cubes for layer normalization, neural network diagrams for FFNs, and multi-colored block sequences for attention mechanisms. Colors are used consistently: yellow for seasonal components, blue for trend components, and varied colors (cyan, teal, yellow) for the multivariate frames. Text labels are placed adjacent to or inside each module for clarity. Connections are primarily unidirectional arrows indicating data flow, with explicit labels such as 'Decompose', 'Reverse', 'Projection', and 'Forecasting' to denote operations. The diagram also includes a clear hierarchical structure: decomposition precedes encoding, and the encoded features are fused with the trend component before forecasting.
