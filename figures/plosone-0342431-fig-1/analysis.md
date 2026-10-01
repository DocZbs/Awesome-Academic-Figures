# Source record: Figure 1

Redefining multi-target weather forecasting with a novel deep learning model: Hierarchical temporal convolutional long short-term memory with attention (HTC-LSTM-Attn) in Bangladesh — PLOS ONE 2026.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

Source caption (as supplied, not independently transcribed):

Overview of the data preprocessing pipeline for multi-target weather forecasting. Starting from raw monthly weather data (1961–2022, 24 stations) from the Bangladesh Agricultural Research Council (BARC), the process includes missing data handling via KNN imputation (k = 5), integration of seasonal features (e.g., Month_sin, Month_cos) and lagged statistics (e.g., 1-3 month lags, rolling means/std), outlier detection using IQR with replacement by nearest non-outlier values, correlation-based feature selection (removing highly correlated features with Pearson’s > 0.9), data normalization (Min-Max scaling to [0,1]), and quality validation (e.g., using Matplotlib and Seaborn). The data is split temporally and spatially: training (1961–2012), validation (2013–2015), and test (2016–2022) sets, sorted by station code and year, with exclusion of flat stations (e.g., Tangail, Syedpur, Mongla etc.). This ensures no information leakage and prepares sequential inputs (time steps = 12) for the HTC-LSTM -Attn model.

Paper: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0342431

Index: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13008104/fullTextXML
