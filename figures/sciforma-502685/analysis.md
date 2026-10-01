# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DroughtSet: Understanding Drought Through Spatial-Temporal Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15075

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of SPDrought, a model designed for forecasting multiple drought indices by integrating spatial-temporal fusion with static-dynamic feature representation and multi-task regression. The global layout is divided into three main sections: a pink-dashed box on the left labeled 'Spatial-Temporal Fusion', a light-blue-dashed box in the center labeled 'Static-Dynamic Feature Representation', and a yellow-dashed box at the bottom right labeled 'Multi-Task Regressors'. A feedback loop from domain experts to the input data completes the cycle.

In the Spatial-Temporal Fusion module, input data from DroughtSet at location (i,j) and time t is split into static and dynamic features. Static features, represented as a grid of blue tiles, are processed through weight matrices W_key and W_query to compute spatial correlation via dot product and softmax, resulting in a weight matrix. This weight matrix is then element-wise multiplied with the dynamic features (red 3D blocks) to produce an aggregated dynamic feature, symbolized by a red cube. The process uses a cross symbol (⊗) for element-wise multiplication and summation, as defined in the legend.

The Static-Dynamic Feature Representation module receives the aggregated dynamic features and combines them with static features. Numerical static features (e.g., elevation, canopy height) pass through a neural network with ReLU activation, while categorical static features (e.g., land cover) undergo one-hot encoding followed by category embedding. These are concatenated (⊕) with positional encoding applied to the dynamic features, which are also processed through dropout before entering a Transformer Encoder. The output of the encoder is combined with the static features and fed into a Transformer Decoder.

The Multi-Task Regressors module takes the output from the decoder and feeds it into three separate regressor networks: Soil Moisture Regressor, SIF Regressor, and ESI Regressor, each represented as a small neural network with orange nodes. These generate Drought Indices Predictions. Additionally, Feature Importance & Sensitivity analysis is performed on the model’s internal representations to extract interpretations, which are then presented to a domain expert (symbolized by a human head with a plant and globe). The expert provides feedback to refine the model, closing the loop.

Connections between modules are shown with solid black arrows indicating data flow. The legend at the bottom clarifies symbols: ⊕ denotes concatenation, ⊗ denotes element-wise multiplication and summation, and ⊙ denotes positional encoding. The entire architecture emphasizes interpretability and iterative improvement through expert feedback.
