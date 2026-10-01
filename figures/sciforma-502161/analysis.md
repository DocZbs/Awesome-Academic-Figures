# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InstructSeg: Unifying Instructed Visual Segmentation with Multi-modal Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14006

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the Object-aware Video Perceiver (OVP), a model designed to learn temporal and object-level information from video sequences by integrating visual and textual inputs. The global layout is structured in a top-down, sequential flow: at the top, a series of reference frames—depicted as images of a cheetah interacting with prey in grassy terrain—are arranged horizontally. These frames are processed by a green rectangular module labeled 'CLIP Encoder', which is annotated with the mathematical symbol F_CLIP, indicating the feature extraction function. Below this, a light yellow background encloses a sequence of identical pinkish-beige rounded rectangles labeled 'Perceiver', representing N₁ perceiver layers arranged in a horizontal chain. These layers form the core processing unit of the model.

On the left side, a green rounded rectangle labeled 'Learnable Queries' contains two orange squares, signifying initial query embeddings that are fed into the first Perceiver layer. On the right side, a vertical dashed purple rectangle labeled 'Text Tokens' contains multiple purple squares, representing discrete textual input tokens that are fed into the last Perceiver layer. This indicates a bidirectional interaction between the visual and textual modalities within the Perceiver stack.

Each Perceiver layer outputs a pair of colored squares—dark blue for the first, medium blue for the second, and progressively lighter blue for subsequent layers—indicating the evolving feature representations or latent embeddings generated after each processing step. These outputs are aligned vertically beneath each Perceiver block, with the notation 'N₁×' placed near the first output pair to denote the number of such outputs produced across all layers. The connections are represented by solid black arrows: from each reference frame to the CLIP Encoder, from the CLIP Encoder to each Perceiver layer, from the Learnable Queries to the first Perceiver, from the Text Tokens to the last Perceiver, and from each Perceiver to its corresponding output pair. The ellipsis (...) between the reference frames and between the Perceiver layers suggests that the sequence is extended beyond what is explicitly shown. The overall structure emphasizes a multi-modal, sequential processing pipeline where visual features from reference frames and textual tokens are jointly encoded and refined through a series of Perceiver layers, guided by learnable queries, to extract rich spatio-temporal and object-aware representations.
