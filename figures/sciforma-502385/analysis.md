# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Promptable Representation Distribution Learning and Data Augmentation for Gigapixel Histopathology WSI Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14473

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive framework for Promptable Representation Distribution Learning (PRDL) applied to whole slide image (WSI) analysis, structured into four main components: (a) the overall PRDL pipeline, (b) Promptable Image Augmentation (PIA), (c) Promptable Representation Augmentation (PRA), and (d) Promptable Representation Sampling (PRS) in WSI classification.

In (a), the global layout is a dual-branch architecture with a student and teacher network. The student branch consists of a student encoder (f_θs, red trapezoid) and student head (g_θs, red trapezoid), while the teacher branch has a teacher encoder (f_θt, purple trapezoid) and teacher head (g_θt, purple trapezoid). The student encoder and head are shared between two student branches: one for representation augmentation and one for image augmentation. The teacher encoder and head are updated via Exponential Moving Average (EMA) from their student counterparts. The input is a pre-augmented histopathology image, which splits into two paths. One path undergoes PIA (yellow rounded rectangle) guided by a random prompt p_t, producing view V_t, which is processed by f_θt and g_θt to generate Z_t. The other path undergoes PIA guided by p_s, producing view V_s, processed by f_θs and g_θs to generate Z_s. Additionally, the representation augmentation student branch takes the output Z from f_θs and applies PRA (brown rounded rectangle) to produce Z_v, which is then processed by g_θs. All three outputs (Z_t, Z_s, Z_v) are fed into a loss function (green rounded rectangle) to compute the training objective. A legend on the left defines the components: f_θs (Student Encoder), f_θt (Teacher Encoder), g_θs (Student Head), g_θt (Teacher Head).

In (b), PIA is detailed. An original image is augmented using a set of operators (ResizedCrop, Flip, ColorJitter, Grayscale, Blur, Solarization) selected based on a binary prompt vector p (gray bars, with checkmarks indicating active operations). The guide p determines which augmentations are applied, resulting in an augmented view. A box lists available prompts with their activation status (e.g., ResizedCrop and ColorJitter are active, Flip and Solarization are inactive).

In (c), PRA is shown. An original representation (stacked green bars) is processed by two heads: h_μ (yellow trapezoid) to predict mean μ, and h_σ (light yellow trapezoid) to predict standard deviation σ. A set of augmentation masks (colored bars) is generated based on a guide p, which is combined into a single mask. This mask is applied to the predicted σ, and then multiplied with a sample ε drawn from a Gaussian distribution to produce the final augmented representation (stacked brown bars).

In (d), PRS in WSI classification is illustrated. A WSI is divided into patches, which are encoded into representation distributions (stacked gray bars with waveforms). A random prompt p guides the selection of an augmentation mask (yellow and white bars), which is applied to the representations to create masked distributions. These are then sampled to form augmented representations (blue and orange bars), which are fed into a WSI classifier (gray trapezoid). Dashed arrows indicate offline data flow, solid arrows indicate online data flow.
