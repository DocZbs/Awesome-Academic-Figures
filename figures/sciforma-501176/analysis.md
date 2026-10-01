# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Transferable and Forecastable User Targeting Foundation Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12468

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comprehensive framework for a user targeting foundation model, divided into two main sections: (a) User Targeting Foundation Model Pre-training and (b) Model Inference for User Targeting. Section (a) is further split into two stages: (I) Self-Supervised User Modeling Stage and (II) User-Text Alignment Stage. In stage (I), inputs include Behavioral Sequence V (represented by colored blocks for B, M, S), Tabular T (a numerical matrix), and Searching Text R (a TXT icon). These inputs feed into a green rectangular 'User Encoder', which outputs to a pink rectangle labeled 'Self-Supervised Learning'. In stage (II), inputs from period 1 (Previous Behavioral Sequence V_t1, Tabular T, Searching Text R) again go through the User Encoder, producing embeddings e^(V), e^(tab), e^(r), which are fused via an 'Attention-based Feature Fusion' module (yellow rectangle). The output e^(f) is then used in period 2, where Future Behavioral Sequence V_t2 is paired with a Text Template Q (e.g., 'Purchase {item1},{item2}, for more than {num} dollars with {payment successful}') to generate a prompt. This prompt is processed by an LLM Encoder (purple rectangle) combined with LoRA (orange rectangle), producing e^(q). The feature fusion module computes a loss L_CP based on alignment between e^(f) and e^(q), visualized as a grid with blue shaded cells indicating attention weights. Section (b) shows inference methods. Under (I) Zero-shot User Targeting, User Candidates U (silhouettes) pass through the User Encoder and Attention-based Feature Fusion, while One-sentence Demands (e.g., 'Please Select potential 3C buyers') undergo Query Rewriting before being processed by LLM Encoder + LoRA, resulting in similarity scores (0.9, 0.2, 0.8, 0.1) assigned to candidate users (red/black silhouettes). Under (II) Few-shot User Targeting via Prompt-tuning, Seed Users (+/-) are encoded and fused, with learnable prompts [V]1...[V]k (highlighted with flame icons) fed into LLM Encoder + LoRA. Forward flow (black arrows) and gradient flow (red arrows) are shown, with the loss function L_Tri(e^(f)+, e^(f)-, e^(q)) computed for training. The diagram uses distinct colors: green for User Encoder, yellow for Attention-based Feature Fusion, purple for LLM Encoder, orange for LoRA, pink for Self-Supervised Learning, and blue for Query Rewriting. Shapes are primarily rectangles with rounded corners, except for the grid in stage (II) and user silhouettes. All modules are connected by directed arrows indicating data flow, with dashed lines separating periods and stages.
