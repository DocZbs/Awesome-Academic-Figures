# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GAMED: Knowledge Adaptive Multi-Experts Decoupling for Multimodal Fake News Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12164

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural framework of GAMED, a multimodal decision-making system that processes image and text inputs through parallel modality-specific pipelines before fusing them for final classification. The global layout is horizontally segmented into four main stages: Feature Extraction, Expert Review & Opinions, Distribution Adjustment, and Decision Making. Vertically, the architecture is divided into four parallel modules: Image Pattern Module (yellow), Image Semantic Module (peach), Fusion Module (light blue), and Text Module (light green), each processing distinct input modalities or fused representations.

Each module follows a consistent workflow: feature extraction via specialized models, followed by expert-based refinement using MMoE-Pro (represented by three stylized human icons), coarse prediction, and adaptive normalization via AdaIN. The Image Pattern Module begins with a Filter feeding into IRNv2, producing feature vector f_ip, which is projected to r_ip. This feeds into Coarse Prediction, generating output o_ip. An MLP computes mean μ_ip and standard deviation σ_ip, which are used by AdaIN to produce e_ip. The Image Semantic Module uses DA (Data Augmentation) followed by MAE-ViT to extract f_is, which is processed by MMoE-Pro to yield two branches r_is^0 and r_is^1. These feed into Coarse Prediction to produce o_is, followed by MLP and AdaIN to generate e_is.

The Text Module receives text input (shown as a word cloud) and passes it through KE (Knowledge Enhancement) and ERNIE2.0 for feature extraction f_t. MMoE-Pro splits this into r_t^0 and r_t^1, leading to Coarse Prediction (o_t), MLP (μ_t, σ_t), and AdaIN to produce e_t.

The Fusion Module integrates outputs from the three modality modules. It takes concatenated features from the previous stages and processes them through MMoE-Pro to generate r_mm^0 and r_mm^1. These are fed into Consistency Learning, producing o_mm. An MLP computes μ_mm and σ_mm, which are used by AdaIN to generate e_mm. Additionally, a separate branch labeled r_x leads to e_x.

All coarse predictions (o_ip, o_is, o_mm, o_t, and o_mix) are collected in a dashed box labeled 'Coarse Predictions'. These are concatenated with e_mix (from a separate dashed box containing MMoE-Pro and Coarse Prediction for mixed features) and fed into a gradient-colored 'Veto Voting' block. This block produces the final predicted label ŷ, symbolized by a circled y.

The diagram includes visual cues such as rectangular blocks for models (e.g., IRNv2, MAE-ViT, ERNIE2.0), rounded rectangles for processing steps (e.g., Coarse Prediction, AdaIN), small 3D cubes for feature vectors (f, r, e), and arrows indicating data flow. The color coding distinguishes modules: yellow for image pattern, peach for image semantic, light blue for fusion, and light green for text. The bottom horizontal axis labels the stages of the pipeline, while the left side shows input datasets (image and text) feeding into the respective modules.
