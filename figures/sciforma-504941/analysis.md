# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLIP-GS: Unifying Vision-Language Representation with 3D Gaussian Splatting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19142

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the CLIP-GS framework, designed for multimodal alignment between text, images, and 3D Gaussians (3DGS), enabling tasks such as zero-shot and few-shot classification, as well as cross-modal retrieval. The global layout is divided into two main sections: the left side illustrates the overall pipeline integrating text, image, and 3DGS modalities, while the right side provides a detailed breakdown of the CLIP-GS module.

On the left, a cylindrical container labeled 'Triplets' holds three modalities: Text (represented by a document icon), Images (by stacked photos), and 3DGS (by layered 3D shapes). Each modality feeds into a dedicated encoder: CLIP-T (blue trapezoid with snowflake icon, denoted F^T) for text, CLIP-V (blue trapezoid with snowflake icon, denoted F^I) for images, and CLIP-GS (orange trapezoid with flame icon, denoted F^G) for 3DGS. These encoders output features that are aligned in a central 'Alignment' block (gray rectangle), which enables downstream tasks listed below: Image ↔ 3D retrieval, Text ↔ 3D retrieval, Zero-shot classification, and Few-shot classification.

The right section, enclosed in an orange box titled 'Details of CLIP-GS', elaborates on the internal structure of the CLIP-GS encoder. It begins with a 3DGS input, which is processed via two parallel sampling methods: kNN (top path) and FPS (Farthest Point Sampling, bottom path). Both paths generate multiple circular patches labeled GS_p, representing Gaussian patches extracted from the 3DGS. These patches are then fed into the 'GS Tokenizer' module.

Inside the GS Tokenizer, each patch undergoes Linear & Norm. processing, followed by an 'Order indicator' step visualized as a grid with scattered red ellipses (representing Gaussians) and blue lines indicating spatial ordering. This is followed by a 'GS refinement block' (marked with a flame icon), which refines the token representations. The output of this block is a sequence of blue rectangular tokens labeled ĜS_t.

This sequence is then passed through N stacked Transformer layers (each marked with a flame icon), which are pre-trained on point cloud data. The final output of these layers is the Gaussian feature vector F^G, which is used for alignment with text and image features in the main pipeline.

Connections are indicated by arrows: from Triplets to encoders, from encoders to Alignment, and from 3DGS to the CLIP-GS details. Within the CLIP-GS module, arrows show the flow from sampling (kNN/FPS) to GS Tokenizer, then to the Transformer stack, culminating in F^G. The flame icons consistently denote the CLIP-GS-specific processing blocks, distinguishing them from standard CLIP components.
