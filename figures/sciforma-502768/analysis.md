# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Branch Mutual-Distillation Transformer for EEG-Based Seizure Subtype Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15224

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the MBMD Transformer architecture with mutual distillation, presented in three parts: (a) training and test phases, (b) overall model structure, and (c) auxiliary data processing for a specific brainwave component (δ wave). 

In part (a), the training phase begins with raw EEG data being decomposed via Wavelet Packet Decomposition (WPD) into multiple frequency bands—labeled δ, θ, α, β, γ, and other—collectively termed 'auxiliary data'. These auxiliary signals, along with the original raw EEG data, are fed into separate MBMD Transformer Encoder modules. Each encoder processes its input and outputs a probability distribution (p_δ, p_θ, ..., p_other, p_data). A classifier is applied to each output, and the predictions are compared against ground truth labels using cross-entropy loss (L_CE). Additionally, mutual distillation is implemented: the probability distributions from each branch are used to compute Kullback-Leibler divergence losses (Σ L_kl(p_b^distill || p_data^distill) and Σ L_kl(p_data^distill || p_b^distill)), which encourage consistency between the auxiliary and main data branches. In the test phase, only raw EEG data is input to the MBMD Transformer Encoders, followed by the classifier to produce final predictions.

Part (b) details the internal structure of the MBMD Transformer. It consists of two parallel encoder blocks: a standard Transformer Encoder Block and a Multi-Branch Encoder Block. The standard block includes a Multi-Head Attention layer (blue), followed by Add & Norm (yellow), then a Feed Forward layer (light blue), and another Add & Norm. The Multi-Branch Encoder Block is more complex: it starts with Multi-Head Attention, followed by Add & Norm, then a Wavelet Attention module (pink), and finally another Add & Norm. Below the Wavelet Attention, six parallel Feed Forward Networks (FFNs) are arranged in a 2x3 grid: FFN_γ, FFN_other, FFN_α, FFN_β, FFN_δ, and FFN_θ, each corresponding to a frequency band. All these FFNs feed into the subsequent Add & Norm layer. Both encoder blocks receive input embeddings, which are combined via element-wise addition before entering the encoders. The outputs from both encoders are concatenated and passed through a Classifier composed of Linear and Softmax layers.

Part (c) focuses on how auxiliary data (e.g., δ wave) is processed within the Multi-Branch Encoder Block. The δ wave's patch embeddings are first fed into a Multi-Head Attention layer, followed by Add & Norm. Then, instead of a general Wavelet Attention, a specialized version (dashed red border) is applied, which selectively activates only the FFN_δ and FFN_θ modules (highlighted with dashed borders), while the others (FFN_γ, FFN_other, FFN_α, FFN_β) are inactive or masked. This selective activation ensures that each auxiliary branch processes only relevant frequency components. The output passes through another Add & Norm layer before being integrated into the overall model. The diagram uses consistent color coding: yellow for Add & Norm, blue for attention mechanisms, light blue for FFNs, pink for Wavelet Attention, and green for classifier components. All connections are directed arrows indicating data flow, with the mutual distillation loop shown as a feedback path in part (a).
