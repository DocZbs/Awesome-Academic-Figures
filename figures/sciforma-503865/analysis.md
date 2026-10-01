# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Feasibility of Vision-Language Models for Time-Series Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17304

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a pipeline overview for running multiple scenarios from the UCR Time Series Archive, structured as a directed workflow diagram with distinct modules connected by arrows indicating data or control flow. The global layout is left-to-right, starting with scenario definition on the left, progressing through data generation and model training in the center, and concluding with model evaluation on the right. The diagram is organized into five main stages, each represented by rectangular or document-shaped nodes with specific colors and labels.

In the first stage, a beige rectangle labeled 'Scenario Generator' initiates the process. It outputs a stack of yellow document-shaped nodes labeled 'Scenario1', 'Scenario2', and 'Scenario3', representing multiple generated scenarios. These scenarios are then fed into a light green rectangle labeled 'Experiment Launcher', which acts as a control module to trigger the subsequent steps.

From the Experiment Launcher, a single arrow points to a light blue rectangle labeled 'Data Generation', indicating that the launcher initiates the data creation process for each scenario. The Data Generation module produces two separate output files: one light cyan rectangle labeled 'train.json validation.json' and another light cyan rectangle labeled 'test.json'. These represent the split datasets used for training/validation and testing, respectively.

The train and validation dataset file is connected via an arrow to a beige rectangle labeled 'LLaVA Training', signifying that this data is used to train the LLaVA model. The trained model is then passed to a light pink rectangle labeled 'Model Evaluation', which receives input from both the LLaVA Training module and the test.json file. This indicates that the evaluation step uses the trained model and the test dataset to assess performance.

All connections are represented by solid black arrows, showing unidirectional flow. The visual attributes include color-coded modules: beige for generators and training, light green for launching, light blue for data processing, light cyan for data files, and light pink for evaluation. Text within each node is centered, using a clear sans-serif font. The overall structure emphasizes a modular, sequential pipeline where scenarios are defined, data is generated, models are trained, and results are evaluated in a controlled, reproducible manner.
