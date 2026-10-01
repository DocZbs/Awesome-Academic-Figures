# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an LSTM-based decoder component within a Sequence-to-Sequence (Seq2Seq) Neural Machine Translation system. The global layout is structured vertically in four horizontal layers, representing the sequential generation of target words from left to right. At the bottom layer, the input sequence consists of three tokens: 'sos' (start-of-sequence), 'guten', and 'morgen', each represented as a label beneath a yellow rectangular box. These inputs feed into the first layer of the decoder, which comprises three identical light-yellow rectangular modules arranged horizontally, each corresponding to one input token. Above this, the second layer contains three light-blue rectangular modules, representing LSTM cells, connected sequentially from left to right via rightward arrows, indicating the temporal flow of hidden states. The initial hidden state of the first LSTM cell is initialized by a red rectangular box labeled 'z', which denotes the context vector derived from the encoder (not shown). Each LSTM cell receives its input from the previous cell and produces a hidden state that propagates forward. The third layer consists of three light-purple rectangular modules, each receiving an upward arrow from the corresponding LSTM cell below, suggesting a transformation or output projection step. Finally, the topmost layer displays the generated target sequence: 'guten', 'morgen', and 'eos' (end-of-sequence), each positioned above its respective purple module and connected by an upward arrow, indicating the final output prediction. All connections are depicted as solid black arrows, with horizontal arrows between LSTM cells showing the recurrence, and vertical arrows indicating data flow from input to output through the layers. The figure visually captures the decoding process where the context vector 'z' guides the generation of the target sequence one token at a time, conditioned on the previous hidden state and current input.
