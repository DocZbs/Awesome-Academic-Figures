# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AV-DTEC: Self-Supervised Audio-Visual Fusion for Drone Trajectory Estimation and Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16928

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the AV-DTEC architecture, a multimodal deep learning framework designed for UAV detection using audio-visual data and LiDAR-based pseudo-labels. The global layout is divided into three main vertical streams: visual input processing on the left, audio-visual fusion in the center, and LiDAR-based pseudo-label generation on the right. These streams converge toward a shared detection head, with auxiliary teacher-student modules for training guidance.

On the left, the visual stream begins with an input image R, which is split into patches and flattened. This is followed by a Position Embedding (light blue box) and fed into Vim (Vision Mamba), a vision encoder represented by a light blue dashed box. The output of Vim includes a learnable visual token C_v (pink rectangle), which is passed to a teacher-student module. The teacher component uses Faster R-CNN to predict UAV position and existence probability, while the student component receives feedback via an AAM (Attention Adjustment Module) that modulates the visual feature contribution based on the existence probability α. This modulation is implemented via element-wise multiplication (indicated by ⊗ symbol).

Below the visual stream, the audio input is processed through a spectrogram S generated from raw audio waveforms. The spectrogram is split spectrally and flattened, then embedded with Patch Embeddings (teal rectangles) before being fed into SMamba (Spectral Mamba), a light purple dashed box. Concurrently, the audio signal undergoes temporal patch splitting and flattening, producing temporal embeddings (teal rectangles) and an extra learnable token C_t (pink rectangle), which are processed by TMamba (Temporal Mamba), a pink dashed box. Together, SMamba and TMamba form the AVMamba module, responsible for multimodal feature extraction.

The outputs from Vim (C_v), SMamba, and TMamba (C_t) are combined in two Feature Enhancement Modules (pink boxes) within the Neck section. The first module receives k,v from Vim and q from SMamba; the second receives k,v from SMamba and q from TMamba. These modules fuse cross-modal features and produce a unified feature representation C_t, which is then fed into the Head section.

The Head consists of Classification and Regression Heads (pink boxes) that output detection results, visualized as 3D trajectories labeled M300. During training, these outputs are compared with pseudo-labels generated from LiDAR data. The LiDAR input is processed by DBSCAN clustering (pink box) to generate point cloud clusters, which are then converted into pseudo-labels (3D trajectory visualization). These pseudo-labels guide the training process by providing ground truth for the detection head.

The legend at the bottom clarifies the color coding: light blue for Position Embedding, teal for Patch Embedding, pink for Extra Learnable Token, and the ⊗ symbol for Element-Wise Multiplication. The entire architecture is structured to enable effective multimodal fusion, with dynamic adjustment of visual feature weights during inference based on UAV existence probability, as described in the caption.
