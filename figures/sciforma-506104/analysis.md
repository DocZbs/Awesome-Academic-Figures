# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

VoxVietnam: a Large-Scale Multi-Genre Dataset for Vietnamese Speaker Recognition — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00328

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a six-stage data construction pipeline designed for building a structured dataset from video content, particularly focusing on speaker-related information and utterance classification. The layout is horizontal and sequential, with stages arranged from left to right in the top row, followed by a vertical flow from stage 4 to stage 5, then to stage 6, and finally to a central data storage component at the bottom. The global structure follows a clear linear workflow, with the exception of the final step which feeds into a dataset repository.

The visual modules consist of rectangular boxes for each processing stage, except for the final data storage, which is represented as a light blue cylinder labeled 'Dataset'. The first four stages (1 to 4) are enclosed in beige rectangles with orange borders, while stages 5 and 6 are in white rectangles with black borders, visually distinguishing the initial preprocessing steps from the later classification and combination phases. Each module contains bold, black text describing the stage: '1. Videos Crawling', '2. Audio Segmentation', '3. Speaker Clustering', '4. Visual-aid Speaker Cleansing', '5. Speaker Combination', and '6. Utterance Genre Classification'.

Connections between modules are indicated by solid black arrows, showing the direction of data flow. The process begins with 'Videos Crawling' (stage 1), which outputs to 'Audio Segmentation' (stage 2). This is followed by 'Speaker Clustering' (stage 3), then 'Visual-aid Speaker Cleansing' (stage 4). From stage 4, the flow descends vertically to 'Speaker Combination' (stage 5), which then proceeds horizontally to 'Utterance Genre Classification' (stage 6). Finally, an arrow points from stage 6 to the 'Dataset' cylinder, indicating that the classified utterances are stored in the dataset. There are no feedback loops or branching paths; the entire pipeline is unidirectional and sequential.

The figure does not include any mathematical equations or LaTeX expressions, but the caption explicitly states it is an 'overview of the proposed data construction pipeline', emphasizing its role in organizing raw video data into a structured, speaker- and genre-labeled dataset. The design uses color and shape to differentiate between preprocessing (beige) and post-processing/classification (white) stages, enhancing readability and logical separation of tasks.
