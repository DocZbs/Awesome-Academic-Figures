# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EDformer: Embedded Decomposition Transformer for Interpretable Multivariate Time Series Predictions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12227

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the internal architecture of an EDformer block, designed for time series forecasting. The global layout is vertically structured, depicting a data flow from bottom to top. At the bottom, a seasonal component is shown as an orange oscillatory waveform labeled 'Seasonal Part'. An upward arrow labeled 'Reverse' indicates this seasonal part is reversed before being processed further. Above this, a multi-line plot displays three time series frames (Frame-1, Frame-2, Frame-3), each represented by a distinct color (cyan, teal, yellow), with axes labeled 'Value' (vertical) and 'time' (horizontal). These frames feed into an 'Embedding' module, depicted as a pink rectangle. From the embedding, data flows upward into a larger block labeled 'IntBlock', which contains four stacked components: 'Multivariate Attention' (orange rectangle), followed by 'LayerNorm' (light green), then 'Feed-forward' (light blue), and another 'LayerNorm' (light green). Within the Multivariate Attention module, three arrows labeled Q, K, V point upward from the Embedding, indicating query, key, and value inputs. Between the Multivariate Attention and the first LayerNorm, and between the Feed-forward and the second LayerNorm, there are skip connections represented by curved arrows merging with a circular plus symbol, indicating element-wise addition. The output of the second LayerNorm feeds into a 'Projection' module (gray rectangle) at the top, which produces the final output, indicated by an upward arrow labeled 'Output'. To the right of the Projection module, a dashed box labeled 'Trend part' contains a blue line graph showing a long-term trend with fluctuations around a horizontal dashed line, connected to the Projection via a leftward arrow, suggesting the trend component is added or combined with the projection output. The entire IntBlock is enclosed in a gray-bordered box with a label pointing to it from the right. The figure uses distinct colors for different modules: pink for Embedding, orange for Multivariate Attention, light green for LayerNorm, light blue for Feed-forward, and gray for Projection. All modules are rectangular with rounded corners, and all connections are solid black arrows except for the trend input, which is a hollow arrow. The diagram clearly shows the sequential processing within the IntBlock and the integration of seasonal and trend components.
