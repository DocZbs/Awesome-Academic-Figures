# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15190

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive data preparation and filtering pipeline for generating question-answer (QA) instruction pairs from satellite imagery and OpenStreetMap (OSM) labels. The global layout is structured vertically in a top-down flow, beginning with two primary input sources at the top: 'Satellite imagery' on the left and 'OSM labels and coordinates' on the right. These inputs feed into two parallel filtering stages—'Label-based filtering' and 'Image-based filtering'—which converge to produce high-quality image-label pairs. These pairs are then processed by the InternLM-XComposer2-VL 7B model to generate QA pairs using a predefined prompt template.

In the top section, the 'Satellite imagery' box contains six example satellite images arranged in a 2x3 grid, depicting various land cover types such as urban areas, forests, and water bodies. Adjacent to it, the 'OSM labels and coordinates' box displays a grid with three labeled features: Feature A (red), Feature B (blue), and Feature C (green dashed), indicating spatially referenced OSM data points.

The data flows downward via thick gray arrows. The first processing stage is 'Label-based filtering', where satellite images are evaluated based on the number of associated OSM labels. Three examples are shown: an image with 3 labels (accepted, green), one with 2 labels (rejected, red), and one with 4 labels (accepted, green). This stage filters out images with fewer than 3 labels.

Parallel to this, the 'Image-based filtering' stage assesses image quality. Three example images are shown: one cloudy (rejected, red), one with insufficient coverage (rejected, red), and one clear (accepted, green). This stage removes low-quality images regardless of label count.

After both filtering stages, the accepted images are combined with their associated OSM labels. On the left, a filtered image is paired with a list of labels (e.g., Label 1, Label 2, ...). On the right, the same image is shown alongside a placeholder for generated QA pairs (e.g., Question 1, Answer 1; Question 2, Answer 2; ...).

These processed image-label pairs are then fed into the InternLM-XComposer2-VL 7B model, represented by a logo with Chinese characters (书生) and the model name. The model uses a prompt template shown at the bottom: a green box containing '<ImageHere>' followed by the instruction 'Write a question and answer pair about this satellite image ...'. The prompt also includes the list of labels and specifies which label’s QA pair should be generated. The entire process is designed to produce high-quality, instruction-following QA data for training vision-language models.
