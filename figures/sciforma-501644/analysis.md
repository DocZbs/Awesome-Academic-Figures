# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CoMPaSS: Enhancing Spatial Understanding in Text-to-Image Diffusion Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13195

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of cross-attention mechanisms in two diffusion model variants: Diffusion UNet and MMDiT, highlighting how token ordering information is injected via positional encodings. The layout is divided into two main vertical sections separated by a dashed gray line, each enclosed in a rounded rectangular box with a light purple background. The left section is labeled 'Diffusion UNet' and the right section 'MMDiT'. Both sections depict a 'Cross Attention' module, but with differing internal structures.

In the Diffusion UNet section, the module begins with query (Q) and key (K) inputs. The key input is combined with 'Positional Encodings' using an element-wise add operation (denoted by ⊕), producing K_TENOR. This K_TENOR is then matrix-multiplied (⊗) with Q to produce attention scores A. These scores are element-wise multiplied (⊙) with the value input V to yield the final output. All components are represented as white rectangles with black borders, and the operations are indicated by symbols at the bottom legend: ⊕ for Element-wise Add, ⊗ for Matrix Multiply, and ⊙ for Element-wise Multiply.

The MMDiT section, labeled 'Double Stream Block', shows a more complex structure designed for joint text-image processing. It features two parallel streams: one for query inputs (Q_image and Q_text) and another for key inputs (K_text and K_image). The query stream combines Q_image and Q_text via element-wise addition to form Q_TENOR. Similarly, the key stream combines K_text and K_image to form K_TENOR. Positional encodings are added to both Q_TENOR and K_TENOR via element-wise addition. The resulting Q_TENOR and K_TENOR are matrix-multiplied to produce A_text&image. Simultaneously, the original K_image is passed directly to form part of the key input for the attention computation. The attention scores A_text&image are then element-wise multiplied with V_text&image to produce the output. The diagram uses dashed lines within the Q and K boxes to visually separate the text and image components before fusion.

The figure’s caption indicates that this architecture, referred to as \peName{}, injects token ordering information into every text-image attention operation in both UNet- and MMDiT-based diffusion models. The visual design emphasizes the integration of positional encodings into the attention mechanism, particularly through the TENOR (Token Encoding Ordering Representation) concept, which fuses text and image tokens before attention computation. The consistent use of white boxes with black outlines and light purple backgrounds maintains visual coherence across both architectures, while the distinct flow paths highlight the evolution from a simple cross-attention block to a double-stream, multimodal attention block.
