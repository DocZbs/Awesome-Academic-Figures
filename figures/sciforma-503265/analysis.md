# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Classification Benchmark for Artificial Intelligence Detection of Laryngeal Cancer from Patient Voice — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16267

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stream data preprocessing pipeline followed by a classification stage using grid search cross-validation. The global layout is horizontal and linear, with two parallel preprocessing branches converging into a single classifier module. The top branch processes 'Audio Features' denoted as vector $\bar{x}_1$, while the bottom branch handles 'Demographic/Symptom Data' denoted as vector $\bar{x}_2$. Both streams are encapsulated within dashed rectangular boxes labeled 'Preprocessing', indicating distinct but parallel processing paths.

In the top preprocessing stream, the input 'Audio Features' first undergoes 'Impute Missing Values (Mean)', represented as a rectangular box. This is followed by 'Z-Score Normalisation', also in a rectangle, and then 'Feature Selection (Decision Tree)', which selects relevant features from the audio data. The output of this stream is labeled $\bar{x}_1'$.

In the bottom preprocessing stream, the input 'Demographic/Symptom Data' is processed through 'Impute Missing Values (Fill value 0)', followed by 'Z-Score Normalisation'. The output of this stream is labeled $\bar{x}_2'$.

The outputs from both preprocessing streams, $\bar{x}_1'$ and $\bar{x}_2'$, are combined into a single input vector $[\bar{x}_1', \bar{x}_2']$ and fed into a 'Classifier' module, which is enclosed within a larger dashed box labeled 'Grid Search Cross-Validation'. This indicates that the classifier is optimized using grid search over hyperparameters within a cross-validation framework. The final output of the system is an oval labeled 'Predictions', signifying the model's output after classification.

All connections are represented by solid arrows indicating the direction of data flow. The figure uses consistent visual elements: ovals for inputs and outputs, rectangles for processing steps, and dashed boxes to group related modules. Text labels are clear and placed inside or adjacent to the respective shapes. The overall structure reflects a modular, pipeline-based machine learning workflow where two different data types are preprocessed independently before being fused and classified.
