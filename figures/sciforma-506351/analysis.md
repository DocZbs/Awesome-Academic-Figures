# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TED: Turn Emphasis with Dialogue Feature Attention for Emotion Recognition in Conversation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01123

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed model TED, which is designed for emotion detection in dialogue. The global layout is vertically structured, progressing from input at the bottom to output at the top, with a clear flow from raw dialogue tokens through multiple processing layers to an emotion label prediction. At the bottom, the input consists of concatenated utterances from past, current, and future turns, separated by special tokens such as 'TURN' and 'SEP', forming a sequence processed via the Concat Utterance with Special Token (CUST) module. This sequence is fed into a pretrained model, specified as RoBERTa, which generates contextualized token representations. These representations are then grouped by turn, with each turn's tokens averaged to produce a turn-level representation denoted as h̃^c for the c-th turn. These turn representations are passed through N stacked transformer layers, each containing a Multi-Head Self-Attention (MHSA) block followed by an Add & Norm layer. The MHSA block is highlighted in light green, while the Add & Norm blocks are white rectangles. The entire stack of N layers is enclosed in a gray box, with labels indicating the N-th layer and N-1 layers above it. At the topmost layer, a Dialogue Feature Attention module, shown as a wide beige rectangle, receives inputs from the final Add & Norm layer and also incorporates external speaker information and turn priority, which are provided as a separate beige box on the left. This module adjusts attention scores based on speaker identity and turn priority, as described in the caption. The output of this module is a current turn vector, highlighted in light blue, which is then passed through another Add & Norm layer before being fed into a Linear & Softmax layer to predict the emotion label y^c. The current turn is visually emphasized throughout the diagram with light blue coloring for the corresponding tokens, turn representation, and output vector. The figure uses consistent visual cues: black arrows indicate data flow, rectangular boxes represent modules or operations, and color coding distinguishes between different components—beige for speaker/turn metadata, light blue for current turn elements, and light green for the MHSA block. The structure reflects a hierarchical processing pipeline where low-level token representations are aggregated into turn-level features, processed through multiple attention layers, and finally refined with dialogue context to make an emotion prediction.
