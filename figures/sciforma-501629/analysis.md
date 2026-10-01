# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ORFormer: Occlusion-Robust Transformer for Accurate Facial Landmark Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13174

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a method for occlusion-aware feature recovery in image processing, structured into three main stages labeled (a), (b), and (c), progressing from input image patches to recovered heatmap features.

[1] Global Layout and Structure:
The diagram flows horizontally from left to right, divided into three distinct sections by vertical dashed lines. Section (a) shows the input: a grid-divided face image with individual patches labeled P_i. Section (b) represents the initial processing stage involving attention computation. Section (c) details the occlusion detection and feature recovery pipeline, culminating in the output: a heatmap of recovered facial features.

[2] Visual Modules and Attributes:
In section (a), the input image is segmented into a 4x4 grid of patches; one patch is highlighted with a blue square and labeled P_i. Below this, two rectangular tokens are shown: a blue rectangle labeled X_i (representing the patch token) and a red rectangle labeled M_i (the learnable occlusion token). In section (b), an orange rounded rectangle labeled 'Attention' receives inputs from X_i and M_i. Its outputs are two new tokens: a blue rectangle labeled X_i' (modified patch embedding) and a red rectangle labeled M_i' (modified occlusion embedding). In section (c), a green rounded rectangle labeled 'Occlusion Detection' takes X_i' and M_i' as inputs. A yellow rounded rectangle labeled 'Feature Recovery' follows, receiving inputs from both Occlusion Detection and M_i'. The final output is a heatmap visualization of facial features, displayed as a grid with glowing outlines of eyes, nose, and mouth, where the purple square highlights the recovered region corresponding to the original P_i patch.

[3] Connections and Arrows:
Arrows indicate data flow. From (a) to (b), arrows connect P_i to X_i and M_i. Both X_i and M_i feed into the Attention module. From Attention, arrows lead to X_i' and M_i'. In (c), X_i' and M_i' both feed into Occlusion Detection. An arrow from Occlusion Detection points to Feature Recovery, and another arrow from M_i' also points to Feature Recovery. The output of Feature Recovery connects via a purple arrow to the recovered heatmap, specifically to the region corresponding to the original P_i patch. Additionally, a feedback loop exists from Feature Recovery back to Occlusion Detection, suggesting iterative refinement or contextual feedback during occlusion assessment.
