# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Adapting Segment Anything Model (SAM) to Experimental Datasets via Fine-Tuning on GAN-based Simulation: A Case Study in Additive Manufacturing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11381

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture and inference pipeline of a parameter-efficient fine-tuned SAM (PEFT-SAM) model for multiclass segmentation, divided into two main parts: (a) the Conv-LoRa architecture and (b) the multiclass mask aggregation pipeline.

In part (a), the global layout shows a hierarchical flow starting from a source image at the bottom left. The source image feeds into two parallel pathways: one directly into a large blue rectangular block labeled 'Pretrained weights of Image encoder', representing the frozen backbone of SAM; the other into a green trapezoidal stack consisting of 'Encoder', 'MoE Conv', and 'Decoder', which represents the trainable, MoE-based low-rank structure introduced by Conv-LoRa. These two pathways converge via a circular plus symbol (⊕), indicating feature fusion, feeding into a green trapezoid labeled 'Multi-class Light-weight Mask Decoder'. This decoder also receives input from a blue rectangular block labeled 'Prompt encoder', which takes a 'Box' as input. The final output is a 'Prediction' shown as a small grayscale image with segmented regions. A legend box indicates that blue components are 'Frozen' and green components are 'Trainable'.

Part (b) presents a separate inference pipeline for generating multiclass semantic masks. Three yellow rectangular blocks represent individually fine-tuned SAM models: 'Finetune SAM Material Mask', 'Finetune SAM Pore Mask', and 'Finetune SAM Inclusion Mask'. Each corresponds to a binary mask for a specific class in XCT imaging. These three outputs converge into a central circular plus symbol (⊕), labeled 'Multiclass semantic mask', signifying the aggregation of individual class masks into a unified multiclass segmentation result.

The visual modules are color-coded: blue for frozen components (pretrained image encoder and prompt encoder), green for trainable components (MoE Conv, Encoder, Decoder, and lightweight mask decoder), and yellow for the fine-tuned SAM variants in the inference stage. Shapes include rectangles for modules, trapezoids for encoder/decoder stacks, circles for fusion operations, and small images for input/output data. All connections are directed arrows indicating data flow, with the dashed vertical line separating the architectural design (a) from the inference aggregation (b).
