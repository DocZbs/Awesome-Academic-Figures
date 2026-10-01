# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Video Is Worth a Thousand Images: Exploring the Latest Trends in Long Video Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18688

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a 3D-VQ-based masked generative video model architecture designed for multiple video editing tasks including Frame Prediction, Central Outpainting, Dynamic Inpainting, and Frame Interpolation. The global layout is structured into three main horizontal sections: task inputs and encoding, token combination and masking, and transformer-based reconstruction. At the top, raw video frames are shown as a sequence of images depicting birds on grass, which are first cropped and padded before being processed by a 3D-VQ Encoder and Decoder pair. This encoder-decoder setup is also applied to each of the four task-specific input sequences, represented as green parallelograms with varying internal patterns indicating different mask regions for each task. Each task input is encoded into a sequence of discrete tokens using a 3D-VQ Encoder, producing token grids where yellow cubes represent condition tokens and gray cubes represent masked or target tokens. These token sequences are then combined at a sampled ratio: condition tokens from one task, [MASK] tokens from another, and target tokens from a third, forming a composite token sequence. This combined sequence undergoes COMMIT Masking, a process symbolized by a large blue trapezoid, which randomly masks portions of the tokens. The resulting masked token sequence is fed into a Bidirectional Transformer, depicted as a central blue rectangle. The transformer performs two key operations: predicting the masked tokens (denoted by L_mask) and refining the condition tokens (L_refine), indicated by dashed arrows. Additionally, the transformer reconstructs the target tokens (L_recons), shown by a dashed arrow pointing back to the output token grid. The final output is a reconstructed sequence of tokens, fully filled with blue cubes, representing the generated video content. The entire pipeline emphasizes a masked modeling approach where the model learns to predict missing tokens conditioned on task-specific inputs and context, enabling flexible multi-task video generation. The visual modules include green parallelograms for encoders, blue cubes for tokens, and a blue trapezoid for masking, with color coding distinguishing condition (yellow), masked (gray), and target (blue) tokens. Text labels such as 'Task prompt', 'Class token', and loss terms like L_mask, L_refine, and L_recons are clearly annotated to guide the interpretation of the model's training objectives.
