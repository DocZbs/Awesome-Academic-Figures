# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Finance-Informed Neural Network: Learning the Geometry of Option Pricing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12213

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the FINN (Financial Neural Network) model design, structured as a flowchart illustrating the data processing pipeline from input generation to option price prediction. The global layout is horizontally oriented, divided into three main stages: input generation on the left, core neural network processing in the center enclosed by a red dashed rectangular boundary labeled 'FINN', and output prediction on the right. The central FINN module contains four interconnected components arranged in a feedback loop structure.

Visual modules are represented as rounded rectangles with distinct colors and labels. On the far left, a red-colored box labeled 'Stock Price Simulator' feeds into a blue-colored box labeled 'Model Input Generator'. Both boxes have black text centered within them. The central FINN region includes three blue-colored boxes: 'Neural Network', 'Loss Function', and 'Gradient Computation', all with black text. The final output stage on the right consists of a blue-colored box labeled 'Option Price Prediction'. All boxes share a consistent gradient blue fill with darker borders, except for the 'Stock Price Simulator', which uses a solid red fill to distinguish it as the initial data source.

Connections are depicted using solid black arrows indicating the direction of data or control flow. From the 'Stock Price Simulator', an arrow points upward to the 'Model Input Generator'. Two curved arrows emerge from the 'Model Input Generator': one curves rightward into the 'Neural Network' within FINN, and another curves directly into the 'Loss Function'. Inside the FINN boundary, a straight arrow connects 'Neural Network' to 'Loss Function'. A downward arrow from 'Neural Network' leads to 'Gradient Computation', while another arrow from 'Loss Function' also points to 'Gradient Computation'. From 'Gradient Computation', two arrows originate: one loops back to 'Neural Network', forming a feedback path for parameter updates, and another loops back to 'Loss Function', completing the training cycle. Finally, a straight arrow extends from 'Neural Network' outside the FINN boundary to the 'Option Price Prediction' box, indicating the forward pass output after training. The overall structure emphasizes a training phase within FINN involving iterative optimization via gradient computation, followed by inference for option pricing.
