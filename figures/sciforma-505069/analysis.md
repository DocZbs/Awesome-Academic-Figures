# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Minimal Batch Adaptive Learning Policy Engine for Real-Time Mid-Price Forecasting in High-Frequency Trading — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19372

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an experimental protocol for evaluating machine learning models on high-frequency trading (HFT) data, structured as a directed workflow from input to performance metrics. The global layout is horizontal and modular, beginning on the left with a visual representation of time-series input data, progressing through a central 'Input' node, and branching into two parallel processing pathways labeled 'Simple' and 'Extended', each enclosed in a light beige rounded rectangle. These pathways represent distinct feature engineering strategies applied to limit order book (LOB) data.

On the far left, the input is depicted as a stack of overlapping rectangular blocks shaded in varying tones of blue, transitioning from light to dark, with dashed outlines indicating sequential time steps. An arrow labeled 'Time' points diagonally downward across these blocks, emphasizing the temporal progression. Below this stack, the label 'Overlapping Feature Block Inputs' specifies that each block corresponds to a sequence of LOB states. These blocks feed into a central white rounded rectangle labeled 'Input', which serves as the entry point for the entire pipeline.

From the 'Input' node, two solid black arrows branch out to the top and bottom pathways. The upper pathway is labeled 'Simple' and the lower one 'Extended', both contained within separate beige containers. Within each container, a white rounded rectangle labeled either 'Simple' or 'Extended' branches into three parallel sub-paths, each starting with a white rounded rectangle labeled 'Raw', 'MDI', or 'GD'. These represent three types of input data: raw LOB data, MDI-adjusted features, and GD-adjusted features. Each of these three paths then connects via a solid black arrow to another white rounded rectangle labeled 'Regressors', indicating that multiple regression models (including baseline regressor, ARIMA, MLP, CNN, LSTM, GRU, RBFNN, and ALPE) are applied to each input type. Finally, each 'Regressors' block connects to a 'Metrics' block, also a white rounded rectangle, where performance is evaluated using metrics such as MSE, RMSE, and RRMSE.

All connections are represented by solid black arrows pointing rightward, indicating the unidirectional flow of data and processing. The visual modules are consistently styled as white rounded rectangles with black borders, except for the two main containers ('Simple' and 'Extended'), which are light beige with rounded corners and no internal borders. Text labels are centered within each module and written in a clear, sans-serif font. The overall structure emphasizes a comparative evaluation between the two feature sets, with identical processing pipelines applied to each, allowing for direct comparison of model performance under different feature engineering approaches. The diagram is designed to be self-contained and reproducible, capturing the full experimental design without requiring external context.
