# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Real-time Bangla Sign Language Translator — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16497

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating the methodology of a real-time hand gesture recognition system designed for rendering Bengali text using the Banla font. The global layout is vertically oriented, starting from the top with a 'Start' node and progressing downward through a sequence of processing stages, with feedback loops and parallel branches. The structure follows a clear data pipeline: from input capture and feature extraction, through machine learning inference, to output visualization.

The visual modules are represented by distinct shapes and colors. The process begins with a teal oval labeled 'Start', indicating the initiation point. This connects to a blue rectangle labeled 'Mediapipe holistic hand detection', which represents the initial step of detecting hand and body landmarks using the Mediapipe framework. Following this, another blue rectangle labeled 'Extracting keypoints value' denotes the extraction of numerical coordinates from detected landmarks. A parallelogram labeled 'input camera for data collection' signifies the live video input source, positioned as a data acquisition stage. From here, the flow splits into two paths: one leads to a blue rectangle labeled 'DATA processing and labeling', which prepares the extracted data for training; the other continues directly to a teal oval labeled 'Realtime detection', representing the live inference phase. The processed data then flows into a blue rectangle labeled 'LSTM architecture', indicating the use of a Long Short-Term Memory neural network for sequence modeling and classification. The output of the LSTM feeds into a blue rectangle labeled 'Banla font rendering', which converts the predicted gesture into rendered Bengali text using the Banla font. This rendered text is then fed back into the 'Realtime detection' module, suggesting an interactive or display loop. Finally, a downward arrow from 'Realtime detection' points to a rectangular image at the bottom, showing a person with hand gestures being tracked (with green face mesh and purple hand keypoints), and Bengali text displayed at the bottom of the screen, visually demonstrating the system's output.

Connections are indicated by solid black arrows, showing the direction of data or control flow. The main vertical path proceeds from 'Start' → 'Mediapipe holistic hand detection' → 'Extracting keypoints value' → 'input camera for data collection'. From 'input camera for data collection', there is a branch to 'DATA processing and labeling' → 'LSTM architecture' → 'Banla font rendering' → 'Realtime detection'. Additionally, a feedback loop exists from 'Realtime detection' back to 'Mediapipe holistic hand detection', enabling continuous real-time operation. Another connection from 'Extracting keypoints value' directly to 'Realtime detection' suggests that raw keypoint data can also feed into the real-time inference module, possibly for testing or direct processing. The final output is visualized in the embedded image, which serves as a real-world demonstration of the system in action, with the detected hand and face landmarks overlaid on the user and the corresponding Bengali text rendered at the bottom.
