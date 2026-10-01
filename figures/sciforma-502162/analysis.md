# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InstructSeg: Unifying Instructed Visual Segmentation with Multi-modal Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14006

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Vision-guided Multi-granularity Text Fusion (VMTF) module, which is designed to integrate visual features with multi-grained textual representations for enhanced multimodal understanding. The diagram is divided into two main sections by a vertical dashed line: the left side shows the VMTF module itself, while the right side details the downstream processing pipeline that utilizes the output of VMTF.

On the left, the VMTF module receives two inputs: a sequence of detailed text embeddings, denoted as E_d, represented as a series of purple rectangular blocks enclosed in a dashed purple box labeled 'Detailed Text Embed'; and an image feature vector f_img, indicated by a downward arrow. These inputs are processed within a light peach-colored rectangular block labeled 'VMTF'. The output of this module is a new sequence of embeddings called 'Multi-grained Text Embed', also shown as a series of purple rectangular blocks within a dashed purple box, indicating that the module refines or transforms the original text embeddings using visual guidance.

On the right side, the process begins with a sample question: 'What is the food that makes people feel spicy or hot?', displayed in a dashed purple box. The words 'food', 'spicy', and 'hot' are highlighted in red, orange, and yellow respectively, suggesting emphasis on key entities or concepts. Below the question, a sequence of purple rectangular blocks represents the detailed text embeddings corresponding to this query. An 'average' operation, indicated by a small red square and an arrow, computes a global text embedding from these detailed embeddings. This global embedding is labeled 'Global Text Embed' in red text within a dashed black box, while the detailed embeddings remain labeled in purple.

The global text embedding (E_g) is then concatenated with the image feature f_img, forming Concat(f_img, E_g), as shown by a horizontal arrow leading to a larger light peach-colored rounded rectangle. Inside this container, two sequential components are stacked vertically: a blue rectangular block labeled 'Cross-Atten' (short for Cross-Attention), followed by a purple rectangular block labeled 'FFN' (Feed-Forward Network). A label 'N_2×' is placed to the left of this container, indicating that this cross-attention and FFN stack is repeated N_2 times. The output of the final FFN block is directed downward, implying further processing outside the scope of this diagram.

Connections are represented by solid black arrows showing the flow of data: from the inputs to VMTF, from VMTF to the multi-grained embeddings, from the detailed text embeddings to the average operation, from the average to the global embedding, and finally from both the global embedding and image feature to the cross-attention module via concatenation. The overall layout emphasizes a two-stage process: first, vision-guided fusion of text at multiple granularities (VMTF), and second, a multi-layered cross-modal interaction between the fused text and image features to produce refined representations.
