# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LogicAD: Explainable Anomaly Detection via VLM-based Text Feature Extraction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01767

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage pipeline for text feature extraction, divided into two main regions: a blue-dashed box on the left representing ROI extraction and a green-dashed box on the right representing text embedding processing. The global layout follows a left-to-right data flow, starting from an input query image denoted as X_q, which shows a close-up of two orange electrical connectors on a mesh background. This image is processed in parallel by two pathways: one directly feeds into a model labeled f_GDINO, represented as a trapezoidal block with black borders, while the other proceeds to a region marked 'ROIs' enclosed in a dashed rectangle. Inside this ROIs box, two cropped image patches are shown — one highlighting the upper connector and another the lower connector — indicating localized object detection results. These ROIs are then fed into a model labeled f_AVLM, also depicted as a trapezoidal block, which generates K text descriptions. Above this model, the text 'Fixed top_p temp' indicates that the generation process uses fixed hyperparameters for top-p sampling and temperature. The output of f_AVLM consists of multiple text descriptions, visually represented as stacked rectangular boxes labeled 'Text', enclosed within a dashed rectangle inside the green-dashed region. These text outputs are then passed to a second model, f_emb, another trapezoidal block, which performs text embedding using the text-embedding-3-large model (as cited in the caption). The final output is visualized in an 'Embedding Space' coordinate system, showing multiple green arrows originating from the origin and pointing toward a red 'X' marker, symbolizing the embedding vectors converging toward a target point. Arrows indicate the data flow: from X_q to both f_GDINO and the ROIs; from f_GDINO to the ROIs; from ROIs to f_AVLM; from f_AVLM to the Text outputs; from Text outputs to f_emb; and finally from f_emb to the Embedding Space. The entire process is structured to extract and stabilize text features from visual inputs via object detection, vision-language modeling, and embedding.
