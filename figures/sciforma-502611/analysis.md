# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Mention Attention for Pronoun Translation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14829

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural machine translation (NMT) model architecture enhanced with mention-aware components, specifically designed for tasks involving coreference or named entity translation. The global layout is divided into three main vertical sections: a left-side source processing path, a central encoder-decoder stack, and a right-side target processing path. The entire structure follows a feed-forward flow from bottom to top, with data entering at the bottom and losses computed at the top.

On the left, 'source tokens (with mention tags)' are fed into a 'Transformer Encoder' block, represented as a white rectangle. The output of this encoder is passed to a 'mention classifier' block, which is highlighted in red, indicating it is a newly introduced component. This classifier computes the 'src mention loss', also labeled in red, suggesting it is an additional training objective specific to the source side.

The central part of the diagram is a tall vertical stack enclosed in a large bounding box, representing the core decoder architecture. At the bottom, 'target tokens (with mention tags)' enter the stack. The first layer is 'self-attention', followed by 'Encoder-Decoder attention', then a 'FFNN' (Feed-Forward Neural Network) layer. Above this, a new red-highlighted block labeled 'mention attention' is introduced, which receives input from the previous FFNN and also from the 'Transformer Encoder' via a horizontal red arrow labeled 'mention masking'. This indicates that the mention attention mechanism uses masked representations from the source encoder. Following the mention attention block is another red-highlighted 'FFNN', and finally an 'output layer' at the top. The output layer produces the 'translation loss', which is the primary loss for the translation task.

On the right side, the output from the second FFNN in the central stack is sent to a second 'mention classifier' block, also highlighted in red. This classifier computes the 'tgt mention loss', again labeled in red, indicating it is a separate training objective for the target side.

All connections are represented by black arrows pointing upward, except for the 'mention masking' connection, which is a red arrow pointing horizontally from the Transformer Encoder to the mention attention block. The red color consistently denotes newly added modules and connections compared to standard Transformer NMT models, as noted in the caption. The diagram emphasizes a multi-task learning setup where translation loss is combined with source and target mention classification losses to improve mention handling during translation.
