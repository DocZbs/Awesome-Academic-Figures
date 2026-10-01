# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters Themselves — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11509

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the proposed Skip Tuning method, which consists of two main components: Layer-wise Skipping (LSkip) and Class-wise Skipping (CSkip), designed to improve the memory and computational efficiency of fine-tuning (FT) in multimodal models like CLIP. The diagram is structured into four vertically aligned rectangular blocks, each representing a stage or variant of the method, connected by curved gray arrows labeled 'LSkip' and 'CSkip' indicating the progression from left to right.

In the first block (baseline), a visual input (an image of a cat) is fed into a pink trapezoidal module labeled E_V (vision encoder), while a text input ('a photo of a cat bird...dog') is processed by a blue trapezoidal module labeled E_T (text encoder). Both modules have a red flame icon at the top, symbolizing gradient flow. The text input includes a sequence of class tokens (cat, bird, dog) highlighted in colored boxes, with a label below indicating width = M. The outputs from both encoders are combined for loss computation via L_ITM, shown as a bidirectional arrow connecting the top of both modules. A vertical bar labeled len=N indicates the length of the feature sequences.

The second block illustrates LSkip. Here, the encoders E_V and E_T process only the suffix of the input sequences, specifically from index ω+1 to N. Below them, a gray box labeled 'Cache' contains M colored cubes numbered 1 to M, representing cached intermediate features from the ω-th layer of both encoders. These cached features are fed into smaller versions of E_V and E_T (labeled E_V[1:ω] and E_T[1:ω]) that process the prefix of the inputs (indices 1 to ω). The outputs from these prefix encoders are then concatenated with the cached features to feed into the full encoders for the suffix processing. This reduces the length of feature-gradient propagation flows (FGPFs).

The third block shows CSkip. It is similar to LSkip but introduces a 'Class Filtering' step. The visual input is again processed by E_V, while the text input undergoes similarity-based filtering: only class tokens with high similarity to the image (e.g., 'cat') are retained, while others ('bird', 'dog') are filtered out. This reduces the width of the input sequence, indicated by wid.=m (where m < M). The filtered text is then processed by E_T, which now operates on a narrower sequence. The cache mechanism remains the same as in LSkip.

The fourth block combines both LSkip and CSkip. It retains the cache mechanism from LSkip and the class filtering from CSkip. Additionally, it explicitly labels the skipping operation with a dashed box containing a skip icon and the word 'Skipping', emphasizing the reduction in both length and width of the FGPFs. The visual input is shown with a dotted line leading to the cache, suggesting the reuse of cached features even after filtering. The final loss computation L_ITM is again shown connecting the outputs of E_V and E_T.
