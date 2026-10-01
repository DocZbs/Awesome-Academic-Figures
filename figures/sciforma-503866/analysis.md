# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Feasibility of Vision-Language Models for Time-Series Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17304

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multimodal system architecture for time series classification, specifically designed for ECG data analysis. The global layout is structured vertically in two parallel processing streams that converge into a shared language model. On the left side, a stack of three overlapping rectangular images, each containing a blue line graph representing time series data (likely ECG signals), serves as the visual input. This stream flows downward via a black arrow into a salmon-pink rectangular block labeled 'Vision Encoder'. On the right side, a stack of three overlapping rounded rectangles contains text: 'What class is this? [1,4,6,2,6,8,2 ....] Class: 1', representing a natural language prompt. This stream flows downward via a black arrow into a light purple rectangular block labeled 'Tokenizer + Embedding'. Both streams then feed into a wider, central light purple rectangular block labeled 'Language Model', indicating a shared processing unit. From this central model, two distinct output paths emerge. The left path leads to four adjacent green squares displaying numerical values: 0.3, 0.2, 0.4, and 0.1, which are collectively labeled 'Per-Class Classification' beneath them, suggesting a probability distribution over classes. The right path leads to two stacked light purple rectangles labeled 'ECG Detected' and 'Abnormal Patient', collectively labeled 'Generative Labels' below, indicating text-based diagnostic outputs. All connections between components are represented by solid black arrows pointing downward, signifying the flow of data from input to output. The figure uses color coding to differentiate modules: salmon pink for vision processing, light purple for language processing, and green for classification probabilities. The overall structure reflects a dual-input, unified-model approach where visual time series data and textual prompts are jointly processed by a language model to produce both probabilistic class scores and generative diagnostic labels.
