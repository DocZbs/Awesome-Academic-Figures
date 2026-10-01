# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Through-The-Mask: Mask-based Motion Trajectories for Image-to-Video Generation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03059

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-stage framework for image-to-video generation, labeled as 'I2V', which transforms a reference image x^(0) and a text prompt c into a coherent video sequence x̂. The overall layout is horizontal and sequential, divided into three main stages: Data Pre-processing, Image-to-Motion, and Motion-to-Video, connected by arrows indicating data flow.

In the Data Pre-processing stage on the far left, the input text prompt 'A black and tan dog rides a blue surfboard on a turquoise wave.' is fed into a large language model (LLM), depicted as a light blue rectangular box with a lock icon indicating it is pre-trained and frozen. The LLM outputs two types of prompts: a motion-specific prompt c_motion ('The dog steers the surfboard.') and local object-specific prompts c_local = {c_local^(1), c_local^(2)} ('The black and tan dog surfs.', 'The blue surfboard tilts on the wave.'), shown in red text. Additionally, the reference image x^(0) is processed to generate an initial segmentation mask s^(0) using SAM2, forming the input triplet [ε; s^(0); x^(0)] for the next stage.

The Image-to-Motion stage follows, receiving [ε; s^(0); x^(0)] and the motion prompt c_motion. The c_motion is encoded via a Text Encoder (light blue box with lock icon), whose output feeds into a multi-layered neural network block (orange rounded rectangle labeled 'M layers'). This block contains green vertical bars representing attention blocks. The output of this stage is a sequence of segmented motion trajectories ŝ, shown as a stack of red silhouettes against black backgrounds, indicating object motion paths over time.

The Motion-to-Video stage receives the concatenation of [ε; x^(0)] and ŝ, along with the original prompt c and the local prompts {c_local^(1), c_local^(2)}. The prompt c is encoded again via a Text Encoder (same style as before), while the local prompts are processed through a separate masked attention mechanism. The core module here is a dual-block architecture: the first K layers (purple vertical bars, labeled 'Masked Attention block') process the local prompts, followed by M-K layers (green vertical bars, labeled 'Attention block') processing the global prompt. These blocks are enclosed in an orange rounded rectangle. The output is the final video sequence x̂, depicted as a stack of frames showing the dog surfing on a wave.

Connections between modules are indicated by solid black arrows. A dashed vertical line separates the Image-to-Motion and Motion-to-Video stages. The trajectory ŝ is also fed back into the Motion-to-Video stage via a direct arrow. At the bottom, a legend clarifies that green bars denote 'Attention block' and purple bars denote 'Masked Attention block'.
