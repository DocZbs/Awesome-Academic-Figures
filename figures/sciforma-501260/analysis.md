# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SIDE: Socially Informed Drought Estimation Toward Understanding Societal Impact Dynamics of Environmental Crisis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12575

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the SIDE (Severity-Impact Joint Estimation) framework, which integrates social and physical data to jointly predict future drought severity and societal impact. The global layout is structured as a two-branch pipeline converging into a decoder for joint estimation. On the left, two input streams are shown: 'Social Input' (represented by a blue document icon) and 'News Input' (green newspaper icon), both enclosed in a blue-bordered box. These inputs feed into a central processing module labeled 'BERTopic', which performs 'Topic-Determinant Mapping' using a cluster-like icon (yellow, green, blue dots) and a Y-shaped symbol representing mapping logic. This module outputs a grid of quantified societal impact values, denoted as M_{t-T_L:t}, with time steps t-1 and t indicated, visually represented by blue and green blocks respectively. This module is enclosed in a large blue-bordered box.

On the bottom left, a separate yellow-bordered box contains 'Drought Severity' data, symbolized by a yellow waveform icon, with the mathematical notation D_{t-T_L:t} indicating historical severity data over a lookback window. Both the quantified societal impact and drought severity streams are processed through distinct encoders: the societal impact stream passes through a blue 'Encoder', while the drought severity stream goes through a yellow 'Encoder'. These encoders feed into a yellow box labeled 'Social-Physical Cross-Attention', which combines the two modalities. The output of this cross-attention block flows into a gray 'Add & LayerNorm' block, followed by a 'Feed-Forward' block, forming a standard transformer encoder layer structure.

The outputs from the final feed-forward block and the quantified societal impact module are combined and fed into a gray hexagonal 'Decoder' block. Additionally, the drought severity input also directly connects to the decoder. The decoder produces the final joint estimation, shown in a green box labeled 'Severity-Impact Joint Estimation', with predicted outputs denoted as \hat{D}_{t+1:t+T_P} for future drought severity and \hat{M}_{t+1:t+T_P} for future societal impact over a prediction horizon T_P. The connections are color-coded: blue arrows represent the social input pathway, yellow arrows represent the physical (drought severity) pathway, and black arrows indicate the final integration and decoding process. The overall structure emphasizes a dual-encoder, cross-attention, and decoder architecture for joint forecasting.
