# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SqueezeMe: Mobile-Ready Distillation of Gaussian Full-Body Avatars — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15171

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an end-to-end system architecture for real-time human avatar rendering, optimized for on-device execution using dedicated hardware units. The global layout is a left-to-right dataflow pipeline, divided into two main computational zones: 'On-device NPU' (Neural Processing Unit), depicted as a light blue rounded rectangle with dashed border, and 'On-device GPU', shown as a light green rounded rectangle with dashed border. These zones represent distinct hardware accelerators handling different stages of the pipeline. The final output is a rasterized 3D human avatar rendered on the far right.

The process begins with two input sources: 'Face Keypoints' and 'Body Keypoints', both represented as rounded rectangles with orange fill and dotted borders. The 'Face Keypoints' feed into a 'Face Encoder', a gray rectangular module, which processes them and outputs to the 'Linear Decoder D_LGCS' within the NPU zone. This decoder is a white rectangular box labeled with the mathematical notation D_LGCS, indicating a learned linear transformation. The decoder's output is 'Gaussian Correctives', shown as a pink rounded rectangle with dotted border, representing per-vertex corrections applied to a base mesh.

Simultaneously, 'Body Keypoints' are processed into 'Body Pose', a purple rounded rectangle with dotted border, which serves as a control signal. This 'Body Pose' feeds into two downstream modules: it is sent directly to the 'Linear Blend Skinning (LBS)' module within the GPU zone, and also provides feedback to the 'Linear Decoder D_LGCS' in the NPU zone, enabling pose-aware facial deformation.

Within the GPU zone, the 'Gaussian Correctives' from the NPU are first passed through an 'Upsampling' module (white rectangle), increasing their resolution. The upsampled correctives are then combined with the 'Gaussian Template G_t' (a pink rounded rectangle with dotted border, representing a pre-defined base mesh or Gaussian point cloud) in the 'Linear Blend Skinning (LBS)' module. LBS is a standard skinning technique used to deform the template based on the body pose and corrective offsets.

The output of the LBS module is fed to a final step labeled 'Rasterize', which produces the final rendered image of a human avatar — shown as a full-body 3D render of a person in a purple shirt and jeans, standing with hands extended forward. The entire system emphasizes efficiency through hardware partitioning: the NPU handles the neural inference for facial corrections, while the GPU performs geometric transformations and rendering, enabling real-time performance on mobile or edge devices.
