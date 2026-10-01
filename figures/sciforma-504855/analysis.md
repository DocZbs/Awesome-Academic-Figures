# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MTCAE-DFER: Multi-Task Cascaded Autoencoder for Dynamic Facial Expression Recognition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18988

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart titled 'Multi-Task Label Data Preprocessing Flow-Chart', illustrating the end-to-end data preprocessing pipeline for facial expression classification using video data from the RAVDESS dataset. The global layout is top-down, starting at the 'Start' node and ending at the 'End' node, with a clear sequential flow of operations connected by directed arrows. The structure is modular, with distinct stages: dataset acquisition, video loading and resizing, model-based face processing, and label generation.

The visual modules are primarily rectangular boxes representing functions or processes, with rounded rectangles for start and end points. A cylinder-shaped box labeled 'HuggingFace DataBase' represents the external data source, while another cylinder labeled 'MTCNN Model' denotes an external pre-trained model used for face detection and landmark extraction. Text annotations are placed alongside arrows to indicate data dimensions or inputs/outputs, such as '(2, 1440)' or '(96, 1280, 720, 3)'.

The process begins at 'Start', which leads to 'Get_Dataset()', receiving 'Data Name' as input. This function retrieves data from the 'HuggingFace DataBase' under the 'RAVDESS Dataset' label. The output is a dataset of size (2, 1440), which is then passed to 'Set_Dataset()'. This step partitions the data into training, validation, and test sets, explicitly labeled as 'Train_Set: (720, 2)', 'Val_Set: (360, 2)', and 'Test_Set: (360, 2)'.

From 'Set_Dataset()', the flow proceeds to 'Load_Dataset()', which outputs 'Video Path' to 'Read_Video()'. The video data is then processed by 'Video_Resize()', which resizes frames to dimensions (96, 1280, 720, 3), followed by 'Downsample()', reducing the resolution to (16, 224, 224, 3). Concurrently, 'Load_Model()' loads the 'MTCNN Model' to perform two parallel tasks: 'Face Detection()' and 'Face Landmark()'. These produce outputs of dimensions (16, 4) and (16, 5, 2), respectively.

Both outputs from face detection and landmark extraction are fed into 'Labelized()', which combines them with the previously partitioned dataset to generate labeled data. The output of this step includes 'Train_Label: (720, 3)', 'Val_Label: (360, 3)', and 'Test_Label: (360, 3)', indicating the final labeled datasets for each split, with three classes corresponding to 'Facial Expression Class'. The entire pipeline concludes at the 'End' node.

All connections are represented by solid black arrows indicating the direction of data flow. The diagram uses consistent font and line styles, with no color coding; all elements are monochrome. The flowchart is logically structured to reflect a real-world machine learning preprocessing pipeline, emphasizing data transformation, model integration, and label generation for multi-task learning.
