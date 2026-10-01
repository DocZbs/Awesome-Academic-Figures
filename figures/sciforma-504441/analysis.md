# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DeepCRCEval: Revisiting the Evaluation of Code Review Comment Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18291

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage workflow for automating code review using a deep neural network (DNN) model or retriever. The global layout is structured horizontally across three main phases, labeled numerically as ① Train / Construct, ② Generate / Retrieve, and ③ Evaluate with Text Similarity, forming a sequential pipeline from training to evaluation.

In the first stage, labeled ① Train / Construct, a 'Train Set' represented by a gray database icon with a small inset showing a document and speech bubble is used as input. An arrow points rightward to a dashed rectangular box containing two components: a neural network diagram (four interconnected nodes) and a database icon with a magnifying glass, collectively labeled 'DNN Model / Retriever'. This indicates that the training data is used to construct or train either a generative DNN model or a retrieval-based system.

The second stage, labeled ② Generate / Retrieve, begins with a 'Test Set', also depicted as a gray database icon with a similar inset. An arrow leads from this to a 'Code Snippet Case', shown as a document icon with a Java-style coffee cup logo, symbolizing a specific code example. From this, another arrow proceeds to a speech bubble icon labeled 'Generated / Retrieved Comment', indicating that the trained DNN model or retriever processes the code snippet to produce either a generated comment or retrieves an existing one.

The third stage, labeled ③ Evaluate with Text Similarity, forms a feedback loop. A thick arrow curves downward from the 'Generated / Retrieved Comment' back to the 'Test Set', signifying that the output comment is evaluated against ground-truth comments from the test set using text similarity metrics. This evaluation step completes the workflow, assessing the quality of the automated code review output.

All visual elements are rendered in grayscale with consistent iconography: databases for datasets, a document with a coffee cup for code snippets, a speech bubble for comments, and a neural network diagram for the model. The connections are solid arrows with clear directional flow, and each stage is explicitly numbered and captioned to guide the viewer through the process. The overall structure emphasizes a machine learning pipeline where training precedes inference, followed by quantitative evaluation.
