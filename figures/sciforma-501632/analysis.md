# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ORFormer: Occlusion-Robust Transformer for Accurate Facial Landmark Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13174

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the integration of ORFormer into an existing Facial Landmark Detection (FLD) method to enhance robustness against occlusions. The global layout is horizontal, depicting a data processing pipeline from left to right: an input face image with occlusion (a hand covering part of the face) enters the system on the left, passes through the FLD method module in the center, and outputs a detected facial landmark map (blue dots overlaid on the face) on the right. Below the main pipeline, a secondary branch shows how ORFormer processes the same occluded input image to generate occlusion-aware heatmaps, which are then fed into the FLD method as auxiliary information.

The central component labeled 'FLD Method' is enclosed in a gray box and consists of a sequence of modules. It begins with a trapezoidal 'Feature extractor' (light gray), followed by a composite block composed of a blue rectangle (representing 'Feature maps') adjacent to a red rectangle ('ORFormer’s heatmaps'), indicating the fusion of standard features with occlusion-recovery cues. This fused representation is then processed by four identical 'Backbone' modules, each depicted as a diamond-shaped structure with internal horizontal lines, symbolizing deeper feature processing stages. The entire FLD method outputs the final landmark predictions.

Below the main pipeline, the ORFormer module is shown as a rounded rectangular box with an orange border and a snowflake icon, signifying its role in occlusion reasoning. It receives the occluded face image as input and produces a heatmap output—shown as a black square with glowing yellow regions highlighting facial areas not occluded (e.g., eyes, nose, mouth). An arrow connects this heatmap to the red rectangle within the FLD method, indicating that ORFormer’s heatmaps are concatenated or fused with the feature maps at the early stage of the FLD network.

A legend in the bottom-right corner clarifies the visual elements: the diamond shape represents the 'Backbone', the light gray trapezoid is the 'Feature extractor', the blue rectangle denotes 'Feature maps', and the red rectangle signifies 'ORFormer’s heatmaps'. The figure visually emphasizes that ORFormer’s heatmaps provide spatial guidance for recovering occluded facial features, thereby improving the FLD method’s performance under partial occlusion.
