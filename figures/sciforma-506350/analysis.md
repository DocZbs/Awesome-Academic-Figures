# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TED: Turn Emphasis with Dialogue Feature Attention for Emotion Recognition in Conversation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01123

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Turn-based Multi-Head Self-Attention (TBM) model, designed for emotion recognition in conversational contexts. The global layout is vertically structured, progressing from input at the bottom to output at the top, with a clear flow of data through multiple processing stages. At the base, the input sequence is constructed by concatenating utterances from past, current, and future turns using special tokens, labeled as 'Concat Utterance with Special Token (CUST)'. This sequence includes BOS (beginning-of-sequence), TURN, SEP (separator), and EOS (end-of-sequence) tokens, with the current turn explicitly highlighted in light blue. The input is then processed by a pretrained model, such as RoBERTa, which generates contextualized token embeddings denoted as h_BOS, h_1^c, ..., h_n^c, h_EOS for each turn. These embeddings are grouped by turn, and for each turn c, a mean pooling operation computes a turn-level representation, denoted as H̃^c, with the current turn's representation highlighted in light blue. These turn representations are fed into a multi-layered Transformer block, indicated as 'N layers', where each layer consists of a Multi-Head Self-Attention (MHSA) module, shown in light green, followed by an Add & Norm module, shown in white. The MHSA module receives all turn representations simultaneously and computes attention weights across them, enabling the model to capture contextual relationships between turns. The output of the final layer is the 'Current turn vector', highlighted in light blue, which is passed through a Linear & Softmax layer to produce the final emotion label y^c. The connections are represented by solid black arrows indicating the forward pass: from the input sequence to the pretrained model, from token embeddings to turn representations via mean pooling, from turn representations to the MHSA layers, and finally from the last layer’s output to the classification head. The diagram emphasizes the centrality of the current turn, marked in light blue throughout, and the use of special tokens to structure the input sequence. The caption notes that TBM leverages MHSA over turn-based vectors to enhance context modeling based on Turn-Based Encoding (TBE).
