# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RoundTripOCR: A Data Generation Technique for Enhancing Post-OCR Error Correction in Low-Resource Devanagari Languages — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15248

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a sequential data generation pipeline named RoundTripOCR, designed to create artificial post-OCR error correction training data. The global layout is a vertical flowchart with five distinct stages arranged top-to-bottom, connected by downward-pointing arrows indicating the progression of data through the system. Each stage is represented by either a rectangular box or an oval, with text labels describing the component or operation.

Starting at the top, the first module is a rectangular box labeled 'Sentence from monolingual corpus <Text T>', representing the initial input: a plain text sentence denoted as T. This flows into the second module, an oval-shaped node labeled 'Image generation using PIL', which signifies the process of converting the text into an image using the Python Imaging Library (PIL). The output of this step is captured in the third module, another rectangular box labeled '<Text T, Image I>', indicating a paired dataset consisting of the original text T and its corresponding generated image I.

From here, the data proceeds to the fourth module, an oval labeled 'OCR using Tesseract', representing the application of the Tesseract optical character recognition engine on the generated image I to produce a recognized text output. Finally, the fifth and last module is a rectangular box labeled '<Text T, Image I, OCR output T'>', which denotes the complete triplet output of the pipeline: the original text T, the generated image I, and the OCR-generated text T'. As per the figure caption, in this triplet, the original text T serves as the ground truth or corrected OCR output, while T' represents the noisy OCR output that may contain errors, making this dataset suitable for training error correction models.

All connections between modules are simple, straight, downward-pointing arrows, indicating a strictly linear, unidirectional workflow without any feedback loops or branching paths. The visual style is minimalistic, using black outlines and black text on white backgrounds, with no color coding or additional graphical embellishments. The shapes consistently differentiate between data states (rectangles) and processing operations (ovals), providing clear semantic distinction throughout the diagram.
