# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A comprehensive GeoAI review: Progress, Challenges and Outlooks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11643

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-step workflow for automatic seasonal crop mapping, structured into two main phases: dataset creation and model training/generalization. The entire process is divided into three labeled sections by dashed red boxes: 'Step 1: dataset creation', 'Step 2: training model', and 'Step 2: generalization'.

In Step 1, dataset creation begins with three input sources: 'Phenological analysis' (light blue rounded rectangle), 'Historical authoritative crop Maps' (light yellow rounded rectangle), and 'Historical satellite data' (light gray rounded rectangle). These inputs are processed to generate two outputs: 'Timely enhanced crop maps' (light blue rounded rectangle) and 'Trained model' (light orange rounded rectangle). Specifically, 'Phenological analysis' and 'Historical authoritative crop Maps' both feed into 'Timely enhanced crop maps' via arrows labeled 'generate'. Meanwhile, 'Historical satellite data' serves as 'input data' to the 'Trained model', while 'Timely enhanced crop maps' provide 'ground truth' for training.

In Step 2, the 'Trained model' is used in two ways. First, it receives 'ground truth' from 'Timely enhanced crop maps' during the training phase. Second, in the generalization phase, the trained model is applied to new data. This phase starts with 'Current season satellite data' (light orange rounded rectangle), which is fed into a CNN model named 'FPN3D' (light gray rounded rectangle). The output of FPN3D is a sequence of 'Dynamic crop map' instances (stacked light blue rounded rectangles), representing time-series predictions. These dynamic maps are then passed to another CNN, labeled 'Aggregator' (light yellow rounded rectangle), which consolidates them into the final output: 'In-Season crop map' (light orange rounded rectangle).

All connections are represented by solid black arrows with labels indicating the nature of the data flow: 'generate', 'ground truth', 'input data'. The color coding helps distinguish between data types: light blue for intermediate or dynamic maps, light yellow for authoritative or reference data, light gray for raw or input data, and light orange for models or final outputs. The layout is left-to-right and top-to-bottom, emphasizing a clear pipeline from historical data to real-time crop mapping.
