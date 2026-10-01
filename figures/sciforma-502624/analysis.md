# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Head and Neck Tumor Segmentation of MRI from Pre- and Mid-radiotherapy with Pre-training, Data Augmentation and Dual Flow UNet — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14846

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a CNN-based cross attention block designed to integrate secondary feature information f_pre into primary feature information f_mid, producing a mixed output f_mix. The global layout is horizontal, left-to-right, with two main processing branches: Spatial Attention and Channel Attention, each enclosed in dashed rectangular boxes. The input f_mid, represented by a blue-bordered rectangle, flows directly to the first multiplication operation (denoted by a gray circle with an 'X' symbol). Simultaneously, the input f_pre, shown in an orange-bordered rectangle, enters the Spatial Attention module. This module consists of two vertically stacked light green rectangles labeled '1x1x1 Conv' and 'Sigmoid', connected by a rightward arrow. The output of the Sigmoid layer feeds into the first multiplication operation via an orange arrow. The result of this multiplication is then split: one branch continues to the second multiplication operation, while the other feeds into the Channel Attention module. The Channel Attention module contains three vertically stacked light green rectangles labeled 'AvgPool', '1x1x1 Conv', and 'Softmax', connected sequentially by rightward arrows. Its output connects to the second multiplication operation via a brownish-purple arrow. The output of the second multiplication is combined with the original f_mid via a gray circle with a '+' symbol (element-wise addition), resulting in the final output f_mix, displayed in an orange-bordered rectangle. All connections are directed arrows, with color-coded lines indicating data flow: blue for f_mid, orange for f_pre, and brownish-purple for intermediate outputs from the attention modules. The structure emphasizes a dual-path attention mechanism where spatial and channel-wise attention weights are computed independently from f_pre and applied multiplicatively to f_mid before summation.
