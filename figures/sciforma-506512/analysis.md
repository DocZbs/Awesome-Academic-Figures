# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Crossing Language Borders: A Pipeline for Indonesian Manhwa Translation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01629

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating the end-to-end methodology for translating speech bubbles in Indonesian Manhwa panels. The global layout is vertical, with a main processing pipeline running from top to bottom, and two external pre-trained models feeding into specific stages on the left side. The structure is linear and sequential, with clear directional arrows indicating the order of operations.

The visual modules are represented as rectangular boxes with black borders and black text, arranged in a columnar fashion. At the top, the process begins with 'Indonesian Manhwa panels' as the input source. This feeds into the first processing step: 'Create bounding box and extract speech bubbles'. To the left of this step, a separate module labeled 'Trained Yolov5xu model on webcomics-text-selection_dataset' is shown, with an arrow pointing to the bounding box creation step, indicating that this model is used to detect and extract speech bubbles from the panels.

The next step in the pipeline is 'Perform OCR on extracted speech bubbles using Tesseract', which processes the extracted speech bubbles to convert the text into machine-readable format. Following this, the next stage is 'Perform translation on extracted OCR', where the OCR output is translated. On the left side, another external module, 'Trained MarianMT Machine Translation model on Opensubtitles and Identic dataset', is connected via an arrow to this translation step, signifying that this pre-trained model performs the actual translation task.

The final step in the pipeline is 'Overlay the translations back on Manhwa panels', which involves placing the translated text back into the original comic panels, likely within the same or adjusted speech bubble positions. All connections between steps are represented by solid black arrows pointing downward, indicating the forward progression of the workflow. There are no feedback loops or branching paths; the entire process is a straightforward, unidirectional sequence. The figure does not include any color coding, shading, or additional graphical elements beyond the basic rectangles and arrows. The caption 'Overview of Methodology' succinctly summarizes the purpose of the diagram.
