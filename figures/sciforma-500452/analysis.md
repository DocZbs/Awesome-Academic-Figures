# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BiM-VFI: Bidirectional Motion Field-Guided Frame Interpolation for Video with Non-uniform Motions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11365

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of BiM-VFI with Knowledge Distillation for VFI-Centric Flow Supervision (KDVCF), comprising two parallel processes: Student Process P_s (top, beige background) and Teacher Process P_T (bottom, purple background, used only during training). The global layout is horizontally structured from left to right, showing data flow through multiple modules, with vertical alignment between corresponding components in student and teacher processes. On the far left, an 'Image Pyramid' is shown with multiple levels (0 to L-1), each containing three images (I_0^l, I_t^l, I_1^l) representing frames at different scales. These pyramid levels feed into feature extraction modules: MFE (Motion Feature Extractor) for the student process and CFE (Content Feature Extractor) for the teacher process. Both are depicted as gray trapezoids producing features F_0^{l,m}, F_t^{l,m} (student) and F_0^{l,c}, F_1^{l,c} (teacher). 

The core of the architecture consists of BiMFN (Bidirectional Motion Field Network) modules, shown as salmon-colored rectangles. In the student process, a single BiMFN takes input features (F_0^{l,m}, F_t^{l,m}) and motion masks M_{t→0,1}^{l,uni} and M_{t→0,1}^{l,P_s} (from Eq. 1) to generate motion vectors V_{t→0}^{l+1,P_s}, V_{t→1}^{l+1,P_s}, and output O^{l+1,P_s}. These motion vectors are then processed by CAUN (Cross-Attention Upsampling Network), a blue trapezoid, which also receives content features (F_0^{l,c}, F_1^{l,c}) as input. CAUN outputs refined motion vectors V_{t→0}^{l,P_s} and V_{t→1}^{l,P_s}, which are fed into SN (Synthesis Network), a green trapezoid. SN combines these with input frames (I_0^l, I_1^l) and content features to produce the final interpolated frame ŷ^{l,P_s} and optical flow O^{l,P_s}. 

In the teacher process, two BiMFNs are stacked vertically. The top BiMFN processes features (F_0^{l,m}, F_t^{l,m}) with motion masks M_{t→0,t}^{l,P_T} and zero vectors for other inputs, generating motion vectors V_{t→0}^{l+1,P_T} and O^{l+1,P_T}. The bottom BiMFN processes features (F_t^{l,m}, F_1^{l,m}) with motion masks M_{t→t,1}^{l,P_T} and zero vectors, generating V_{t→1}^{l+1,P_S} and O^{l+1,P_S}. These motion vectors are passed to CAUN (dashed outline, indicating training-only) and then to SN (also dashed), producing ŷ^{l,P_T} and O^{l,P_T}. Dashed lines indicate connections active only during training, while solid lines represent inference-time paths. A stop-gradient symbol (#) is defined in the legend, indicating where gradients are blocked. The teacher process provides supervisory signals (motion vectors and features) to the student process via dashed arrows, enabling knowledge distillation. The figure includes visual representations of intermediate outputs like motion fields (colorful heatmaps) and synthesized frames, enhancing interpretability.
