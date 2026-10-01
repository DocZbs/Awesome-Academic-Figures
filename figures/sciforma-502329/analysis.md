# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ECG-Byte: A Tokenizer for End-to-End Generative Electrocardiogram Language Modeling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14373

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of traditional two-stage methods and a proposed end-to-end method for ECG language modeling. The layout is divided into three main vertical sections: 'Traditional Methods: 2 Stages' on the left, split into Stage 1 and Stage 2 by a dashed vertical line, and 'Our Method: End-to-End' on the right. A legend at the top-left corner defines visual symbols: a red flame indicates trainable components, a blue snowflake denotes frozen components, diagonal stripes represent masking, and a black plus sign signifies concatenation.

In Stage 1 of the traditional approach, raw ECG signals (depicted as wavy lines in a light peach rectangle) are processed by a trainable ECG Encoder (orange trapezoid with red flame), producing latent representation z_e (orange circle). Simultaneously, an Original Diagnostic Report (light blue rectangle) is fed into a frozen Text Encoder (blue trapezoid with snowflake), yielding z_o (blue circle). These representations are combined via contrastive loss L_CL (purple circle) using an 'And / Or' logic box. Alternatively or additionally, the ECG signal may undergo masked image modeling (MIM) where a portion of the signal is masked (striped region) and the ECG Encoder (trainable) produces a latent feature z_e, which is used to compute L_MIM (purple circle).

Stage 2 of the traditional method takes the ECG features from Stage 1 (z_e) and passes them through a trainable Projection Layer (orange rectangle with red flame) to obtain z'_e (orange circle). Concurrently, a Natural Language Prompt (light blue rectangle) is encoded by a frozen Large Language Model Embedding (green trapezoid with snowflake) to produce z_t (green circle). The projected ECG features z'_e and text features z_t are concatenated (indicated by a black plus sign) and fed into a Large Language Model (green rounded rectangle with red flame), which generates output text tokens (three blue rectangles labeled 'Text').

The 'Our Method: End-to-End' section shows a unified pipeline. Raw ECG signals (wavy lines) are processed by a trainable ECG-Byte module (red rectangle with red flame), while a Natural Language Prompt (light blue rectangle) is tokenized by a Text Tokenizer (gray rectangle). The outputs from both modules are concatenated (black plus sign) and directly fed into a Large Language Model (green rounded rectangle with red flame), which generates text output (three blue rectangles labeled 'Text'). This end-to-end design eliminates intermediate stages and uses ECG-Byte as a dedicated ECG tokenizer, allowing joint training of all components.
