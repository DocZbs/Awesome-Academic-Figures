# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploring Physics-Informed Neural Networks for Crop Yield Loss Forecasting — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00502

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a physics-informed recurrent neural network (PI-RNN) framework for yield-loss forecasting, labeled as '(a) Physics-Informed Model'. The overall layout is enclosed within a large dashed rectangular boundary labeled 'PI-RNN', indicating the entire model architecture. On the left side, the input data X is represented as a set containing two components: 'Sentinel-2' and 'Weather', visually depicted as a multi-channel input block connected by vertical lines to the core processing modules. These inputs feed into a sequence of three vertically stacked, light-blue rounded rectangles labeled 'RNN', arranged horizontally and connected by rightward arrows, forming a recurrent architecture. Below this RNN sequence, a horizontal white box labeled '[ETa, Ky]' collects outputs from each RNN unit, representing predicted actual evapotranspiration (ETa) and crop susceptibility to water scarcity (Ky). This output layer feeds into a final calculation block on the far right, which contains the equation 'Ŷl = Ky(1 - ETa/ETx)', representing the predicted yield loss. Parallel to the RNN sequence, a separate green shaded region contains three vertically aligned dark-green rounded rectangles labeled 'PB', standing for physics-based modules. These PB units receive inputs from the same initial data source (via vertical lines from the input block) and collectively produce an output labeled '[ETx]', representing the maximum potential evapotranspiration. This [ETx] output is then fed into the final yield loss calculation block alongside [ETa, Ky]. The connections are indicated by solid black arrows: from the input block to both the RNN and PB modules; from each RNN to the next and to the [ETa, Ky] output; from each PB module to the [ETx] output; and finally, from both [ETa, Ky] and [ETx] to the yield loss formula. The diagram emphasizes the integration of data-driven learning (RNN) with physics-based modeling (PB) to inform the final prediction, leveraging prior knowledge about the relationship between water use and yield loss.
