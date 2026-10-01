# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NoteContrast: Contrastive Language-Diagnostic Pretraining for Medical Text — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11477

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage framework for training and applying a joint diagnosis and text model using ICD-10 codes and clinical notes. The overall layout is divided into five labeled sections (A–E), arranged horizontally and vertically to depict distinct phases of the methodology.

Section A describes the diagnosis model pre-training. It begins with an input representation consisting of four parallel sequences: ICD Sequence, Dates, Position IDs, and Token Type IDs. The ICD Sequence contains ICD-10 codes (e.g., R65.20, E87.2, N18.6) grouped into past, current, and future encounters. The current encounter is highlighted in red and centered around the date 02/05, with position IDs relative to this point (e.g., -35, -19, 0, 2, 17). Token type IDs distinguish between different types of tokens. These inputs feed into a Diagnosis Encoder, which processes them and connects to a Masked Language Model (MLM) task for pre-training.

Section B outlines text model pre-training. It shows multiple clinical notes (e.g., 'Patient is a 60-year-old male who reports with severe headache and trouble breathing') feeding into a Text Encoder. This encoder also connects to an MLM task, indicating self-supervised learning on medical text.

Section C presents contrastive training between diagnosis and text models. Outputs from the Diagnosis Encoder (D₁ to Dₙ) and Text Encoder (T₁ to Tₙ) undergo linear projection and are aligned in a matrix format where each row corresponds to a diagnosis embedding and each column to a text embedding. The green-highlighted cells indicate positive pairs (e.g., Dᵢ,Tⱼ) used for contrastive loss computation, while other cells represent negative pairs.

Section D details fine-tuning with textual descriptions of ICD-10 codes. Specific codes (R65.20, E87.2, Z99.2, N18.6) are paired with their descriptive phrases (e.g., 'Severe sepsis without septic shock,' 'Acidosis,' etc.), forming a mapping used during fine-tuning to enrich code representations.

Section E demonstrates prompt-based multi-label classification. A prompt template ('Severe sepsis: [MASK]; Acidosis: [MASK]; Dialysis: [MASK]; ...') is concatenated with a clinical note. The resulting text is processed by the Text Encoder, followed by a Classifier that predicts binary labels (0 or 1) for each condition based on the masked positions. The label space includes specific ICD codes (e.g., R65.20, E87.2, Z99.2), and the output is a multi-label prediction vector.

Connections across modules are indicated by arrows: red arrows link diagnosis inputs to the Diagnosis Encoder and contrastive alignment; blue arrows connect text inputs to the Text Encoder and prompt-based classification; black arrows denote data flow in fine-tuning and classification. The MLM tasks are represented as circular nodes connected to respective encoders. All components are clearly labeled with text boxes and color-coded elements for visual distinction.
