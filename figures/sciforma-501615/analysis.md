# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Practicable Black-box Evasion Attacks on Link Prediction in Dynamic Graphs -- A Graph Sequential Embedding Method — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13134

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a training pipeline for a Q-network integrated with a GSE (Global State Embedding) module, structured into three main stages labeled a, b, and c, each enclosed in distinct dashed borders. The global layout is horizontal and modular, progressing from left to right and top to bottom, with data flow indicated by arrows connecting components.

Stage a, outlined in red dashed lines, is titled 'Obtain the GSE state for critic'. It begins with an 'Embedding Sequence Batch' represented as a series of light cyan rectangular blocks, each containing a colored dot (blue, purple, pink), denoting individual sequence embeddings. These are fed into an LSTM-q module, depicted as stacked maroon rectangles, which processes the sequence to produce a GSE_q output — a set of three maroon blocks with corresponding colored dots. This output is labeled S^q and flows downward to stage b.

Stage b, outlined in yellow dashed lines, is titled 'Obtain Q value with GSE state and action batch'. It receives two inputs: the S^q state from stage a and an 'Action Batch' (a_b), shown as three beige rectangular blocks with colored dots, generated from a 'Shared Buffer Under Multi-environment' — a vertical stack of three colored squares (blue, purple, pink) feeding into a tall white rectangle. These two inputs are combined and fed into a 'Q network', visualized as a multi-layered neural network with interconnected white circles. The output of this network is 'Q Values', represented as three pink rectangular blocks with colored dots, which then proceed to stage c.

Stage c, titled 'Train the Q network and LSTM-q module', involves computing a loss function. The Q Values from stage b are compared with a 'Reward Batch' (r_b), shown as three light pink rectangular blocks with colored dots, using an MSE (Mean Squared Error) node — a black circle labeled 'MSE'. The resulting loss is defined as MSE(Q, r_b). This loss is used to update both the Q network (Q -> Q') and the LSTM-q module (LSTM-q -> LSTM-q'), as indicated by upward arrows from the MSE node to a box listing these updates. The entire process forms a closed-loop training cycle where the Q network and LSTM-q are iteratively refined based on the discrepancy between predicted Q values and actual rewards.

All components are clearly labeled with text annotations, and the color-coding of dots within blocks consistently tracks the correspondence of data across modules. The diagram uses solid black arrows to indicate data flow and dashed borders to group related operations, providing a clear, step-by-step visualization of the training procedure.
