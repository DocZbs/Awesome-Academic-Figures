# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unsupervised Tomato Split Anomaly Detection using Hyperspectral Imaging and Variational Autoencoders — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02921

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pre-processing pipeline for extracting hyperspectral imaging (HSI) regions of interest (ROIs) corresponding to individual tomatoes from a full HSI capture of a tomato bunch. The global layout is left-to-right, depicting a sequential workflow starting from raw HSI data and ending with isolated HSI ROIs for each tomato. The structure is modular, divided into distinct stages: input HSI data, RGB image extraction, object detection using YOLOv8, ROI extraction, and final HSI ROI generation.

On the far left, a 3D cube labeled 'HSI' contains an image of a cluster of red tomatoes, symbolizing the full hyperspectral dataset. From this cube, two paths diverge: one downward to a stack of three colored bars (red, green, blue) labeled 'R,G,B bands', representing the spectral decomposition into RGB channels; the other horizontal path leads directly to an 'RGB Image' — a grayscale-like representation of the tomato bunch. This RGB image serves as input to the next stage.

The central component is the YOLOv8 model, depicted as two vertical rectangular blocks (blue and orange), indicating a deep learning-based object detector. An arrow from the RGB image points to YOLOv8, which outputs a processed image enclosed in a green box labeled 'RGB ROIs'. Inside this box, the original tomato bunch image is shown overlaid with yellow bounding boxes precisely outlining each individual tomato, demonstrating successful detection.

From the RGB ROIs, four separate cropped images of individual tomatoes are extracted and arranged vertically. Each of these crops is connected via blue arrows to a corresponding 3D cube within a red-bordered box labeled 'HSI ROIs'. These cubes mirror the initial HSI cube but now contain only one tomato each, indicating that the spatial coordinates from the RGB detection have been mapped back to the original HSI volume to extract the corresponding hyperspectral data for each detected tomato.

The connections are represented by solid blue arrows, indicating the flow of data and processing steps. A feedback loop is implied by a blue arrow returning from the HSI ROIs box to the initial HSI cube, suggesting potential iterative refinement or contextual reprocessing. All visual elements use consistent color coding: green for RGB ROI processing, red for final HSI ROIs, and blue for data flow. Text labels are placed directly beneath or beside components for clarity. The overall design emphasizes the integration of RGB-based detection with HSI data for precise, per-object spectral analysis.
