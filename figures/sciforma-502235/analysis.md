# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AKiRa: Augmentation Kit on Rays for optical video generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14158

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the AKiRa training pipeline for optical video generation. The global layout is a horizontal workflow from left to right, structured into four main stages: input data, augmentation, adapter processing, and video generation. On the far left, two types of inputs are shown: 'Cameras', represented by a stylized icon of three purple triangular camera frustums, and 'Frames', depicted as a stack of three green-bordered images showing a character in a red suit riding a red vehicle, labeled with the tensor dimension ℝ^T×3×H×W. Both inputs feed into a large red rectangular module labeled 'AKiRa aug.', which performs augmentation on both camera parameters and frames. From this module, two outputs emerge: 'Cam maps', shown as a stack of colorful square heatmaps (with one prominent green gradient map), annotated with the tensor dimension ℝ^T×9×H×W, and 'Aug. frames', depicted as a stack of three distorted versions of the original frames, also labeled ℝ^T×3×H×W. These augmented frames are then combined with 'Noise', represented by a stack of three gray textured squares, via a circular '+' symbol, indicating element-wise addition. The 'Cam maps' are fed into a lavender trapezoidal module labeled 'Camera adapter', which includes a black flame icon, suggesting a trainable or adaptive component. This adapter processes the camera parameters including motion, focal length, distortion, aperture, and focus point. The output from the camera adapter, along with the noise-augmented frames, are both directed into a large blue rectangular module labeled 'Video generation backbone', marked with a snowflake icon, indicating it is frozen or pre-trained. This backbone generates the final output, 'Gen. frames', shown as a stack of three clean, high-quality frames identical in content to the input frames but presumably enhanced, labeled ℝ^T×3×H×W. The connections between modules are indicated by solid black arrows, showing the flow of data from inputs through augmentation, adapter processing, and finally to the video generation backbone for output. The diagram emphasizes that the camera adapter is trained jointly with the augmentation process, while the backbone remains fixed, forming an optical video generation model.
