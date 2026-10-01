# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Stable-TTS: Stable Speaker-Adaptive Text-to-Speech Synthesis via Prosody Prompting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20155

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the fine-tuning process of a diffusion-based model for speech synthesis, specifically focusing on preserving learned priors during training. The global layout is divided into two main horizontal pathways: one for the target sample and another for the prior sample, which was used during pre-training. Both pathways feed into noise estimators, which are central components of the diffusion model architecture.

On the left side, the 'Target Sample' is represented by a green-bordered box containing the text 'How are you?' alongside its corresponding Mel spectrogram. Below it, the 'Prior Sample' is shown in a blue-bordered box with the text 'Hello, world.' and its Mel spectrogram. These samples serve as inputs to separate noise estimator modules.

Each noise estimator is depicted as a gray bowtie-shaped module labeled 'Noise Estimator ε'. The top estimator processes the target sample’s noisy Mel spectrogram and outputs a reconstructed Mel spectrogram labeled 'Target', which matches the original target Mel. The bottom estimator processes the prior sample’s noisy Mel spectrogram and outputs a reconstructed Mel spectrogram labeled 'Prior', matching the original prior Mel.

A bidirectional arrow labeled 'Shared Weights' connects the two noise estimators, indicating that they share the same model parameters during fine-tuning. This implies that the same noise estimation network is applied to both target and prior data, ensuring consistency across different input types.

At the bottom of the diagram, a red arrow labeled 'Prior-preservation Loss' connects the output of the lower noise estimator back to the upper one. This indicates that during fine-tuning, an additional loss term is computed to ensure that the model preserves the characteristics learned from the prior sample, preventing overfitting to the target sample alone.

In the top-right corner, a small cube icon labeled 'Frozen Diffusion' suggests that the underlying diffusion model architecture is fixed or frozen during this fine-tuning phase, with only specific components (like the noise estimator) being updated.

The overall workflow follows a diffusion-based denoising process: noisy Mel spectrograms are fed into shared noise estimators, which predict and remove noise to reconstruct clean spectrograms. Simultaneously, the prior-preservation loss ensures that the model retains knowledge from previously learned priors, balancing adaptation to new targets with retention of generalizable features.

This architecture enables efficient fine-tuning by leveraging shared weights and dual-loss optimization—diffusion loss for accurate reconstruction and prior-preservation loss for maintaining robustness and generalization.
