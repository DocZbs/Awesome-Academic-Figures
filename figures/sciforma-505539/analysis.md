# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine and Deep Learning for Credit Scoring: A compliant approach — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20225

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a process flow diagram illustrating a machine learning model development and evaluation pipeline, structured chronologically and logically from data preparation to performance assessment. The global layout is horizontal, progressing from left to right, with distinct stages grouped into three main vertical columns: data preprocessing and splitting on the left, model training and validation in the center, and performance evaluation on the right. Each stage is represented by rectangular or rounded rectangular boxes, with blue boxes indicating datasets or summary outputs, gray boxes denoting processing steps, and light blue ovals representing intermediate or final model states or summaries.

In the leftmost column, the process begins with an 'In-time dataset Mar 2015 - Dec 2015' (blue rectangle), which feeds into a series of preprocessing steps. The first step, 'dropping the parcel population as well as all unnecessary/irrelevant features' (gray rectangle), reduces feature dimensionality. This is followed by 'Computing the class reweighting scale' (gray rectangle), which adjusts for class imbalance. The next step, 'Train/Test split into 80% for development and 20% for validation' (gray rectangle), partitions the data. From this split, the 80% development sample is directed to the central column as 'In-time 80% dev sample' (blue rectangle), while the 20% validation portion becomes 'In-time hold out (validation) 20% sample' (blue rectangle) in the center column.

In the central column, the 'In-time 80% dev sample' undergoes 'Weight of Evidence fitting and encoding' (gray rectangle), a feature engineering technique. This processed data then enters 'Model training on the dev sample' (gray rectangle), resulting in a 'Trained model' (light blue oval). The trained model is then used for 'In-time validation' (gray rectangle) on the 'In-time hold out (validation) 20% sample', producing an 'In-time performance summary' (light blue oval).

Simultaneously, the pipeline incorporates an 'Out-of-time dataset Apr 2016 - Dec 2016' (blue rectangle) from the same left column, which is used for 'Out-of-time scoring' (gray rectangle) with the trained model. This leads to an 'Out-of-time performance summary' (light blue oval) in the rightmost column.

Connections between modules are indicated by solid arrows, showing the direction of data or process flow. The arrows originate from the output of one module and point to the input of the next, forming a clear sequence. Notably, the 'Train/Test split' step branches to both the 'In-time 80% dev sample' and the 'In-time hold out' sample, and the 'Trained model' is used in both the 'In-time validation' and 'Out-of-time scoring' steps, demonstrating reuse of the model across different evaluation phases. The diagram emphasizes temporal separation between in-time and out-of-time evaluations, ensuring robustness and generalizability of the model's performance.
