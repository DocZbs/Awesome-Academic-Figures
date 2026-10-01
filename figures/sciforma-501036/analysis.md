# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlockDoor: Blocking Backdoor Based Watermarks in Deep Neural Networks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12194

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic diagram illustrating a watermarking scheme for machine learning models using backdooring, where trigger samples are employed for verification. The global layout is structured as a horizontal workflow from left to right, divided into three main stages: model training, watermarking (backdooring), and verification. The process begins on the far left with 'Data Domain D', represented by a cylindrical database icon, which feeds into two distinct data sets: 'Train data' and 'Test Set'. The 'Train data' is depicted as a blue folder and is used for 'Model Training', symbolized by a green human head with gears, resulting in a 'Trained Model' shown as a black grid of squares. Concurrently, a 'Key Generation' phase, enclosed in a dashed oval, produces a 'Trigger Set' consisting of 'Trigger Samples' (purple folder) and 'Trigger Labels' (purple document), which are later used for verification.

The central part of the diagram shows the 'Marking (Backdooring)' stage, also enclosed in a dashed oval. Here, the 'Trained Model' undergoes a 'Watermarking' process, indicated by a green padlock icon, transforming it into a 'Watermarked Model', visually distinguished by a fingerprint overlay on the grid. This stage is connected to the 'Trigger Set' via a dashed line, indicating that the trigger information is embedded during watermarking.

Following this, the diagram branches into three parallel inference and verification paths. The first path shows the 'Trained Model' being tested on the 'Test Set' (blue folder and document) through 'Inference', leading to a decision diamond labeled 'Accuracy as Expected?', which is followed by a green thumbs-up icon if successful. The second path mirrors this for the 'Watermarked Model', also testing on the 'Test Set' and verifying accuracy. The third path, labeled 'Verification' and enclosed in a dashed oval, tests the 'Watermarked Model' specifically on the 'Trigger Set' (purple folder and document) to confirm the presence of the watermark. This verification step also includes an 'Inference' arrow and leads to the same decision diamond and thumbs-up icon, ensuring the model responds correctly to trigger inputs.

Visual modules include icons for data (folders and documents), models (grids), processes (head with gears, padlock, magnifying glass), and decisions (diamonds). Colors are used to differentiate data types: blue for general test/train data, purple for trigger-specific data, and green for processes and success indicators. Arrows indicate the flow of data and control, with solid lines for direct processing and dashed lines for auxiliary or conditional connections. The diagram emphasizes that the watermarking process should not degrade normal performance (as shown by accurate test set results) while enabling reliable verification via trigger samples.
