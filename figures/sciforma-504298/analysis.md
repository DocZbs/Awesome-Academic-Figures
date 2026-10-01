# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LangYa: Revolutionizing Cross-Spatiotemporal Ocean Forecasting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18097

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the comprehensive architecture of the LangYa forecasting system, designed for multi-variable, multi-scale weather and climate prediction. The global layout is divided into five main sections: (A) the overall system pipeline, (B) the time embedding module based on a large language model, (C) an asynchronous cross-iterative random sampling strategy, (D) a stable convergence module using cosine attention, and (E) an adaptive loss function for thermocline forecasting.

In section (A), the input consists of atmospheric variables (e.g., 200 hPa, 500 m) and ocean variables, represented as global maps, which are combined with time information (date '03') processed through a time embedding module. This module generates a time series trajectory, which is then merged with the spatial data. The combined input undergoes patch embedding before entering the deep feature extraction block. This block comprises five sequential blocks (Block 1 to Block 5), each with specified dimensions (e.g., [510 × 1080 × C]), alternating between downsampling and upsampling operations. Block 1 is expanded to show its internal structure: it includes layers of Layer Normalization (LN), Window-based Multi-Head Self-Attention (W-MSA), MLP, and Shifted Window-based Multi-Head Self-Attention (SW-MSA), with residual connections. A separate inset details the W-MSA/SW-MSA mechanism, showing multi-head attention with Earth-specific position encoding, followed by normalization and feed-forward layers. The output is a sequence of forecasted global maps for days 1 to 7, with a calendar icon indicating forecast time '10'.

Section (B) details the time embedding module, which uses a large language model (LLM, specifically Llama 3) to process global ocean status for a given year (e.g., 2023) and extract annual coefficients. These are combined with monthly (N_M=12), daily (N_D=31), and step embeddings (for forecast steps) to form a complete time embedding vector. Each embedding type is visualized as a tokenized sequence, with corresponding mathematical notations (e.g., e_Y ∈ ℝ^D/3).

Section (C) illustrates the asynchronous cross-iterative random sampling strategy. It shows atmospheric variables (labeled -8 to 0) and ocean variables (labeled 0 to 5) being randomly sampled across iterations, with colored lines indicating dynamic connections between them, enabling flexible and non-synchronized data interaction.

Section (D) describes the stable convergence module based on cosine attention. It features a multi-head attention block where query (Q), key (K), and value (V) vectors pass through linear layers before undergoing scaled cosine attention. The outputs from multiple heads are concatenated and passed through another linear layer, followed by normalization, a feed-forward network, and another normalization. The diagram also notes architectural choices like pre-norm, residual post-norm, and dot product to scaled cosine attention.

Section (E) presents the adaptive loss function for thermocline forecasts. It shows two heatmaps representing true and forecasted thermocline states, connected via a neural network-like structure. The loss is computed as a weighted sum of MAE terms for different variables (MAE_i) and additional terms Loss_T and Loss_S, which involve normalized partial derivatives of temperature (T) and salinity (S) with respect to depth (z). A graph below compares the true and forecast distributions, highlighting the error region.

All components are interconnected with arrows indicating data flow, and color coding (blue for time, green for feature extraction, orange for attention) helps distinguish functional modules. The entire system emphasizes temporal context, spatial feature learning, and robust training through adaptive loss and stable attention mechanisms.
