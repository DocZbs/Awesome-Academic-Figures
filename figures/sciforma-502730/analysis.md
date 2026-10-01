# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SqueezeMe: Mobile-Ready Distillation of Gaussian Full-Body Avatars — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15171

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a system diagram illustrating the training pipeline for generating a 3D Gaussian avatar from a body video frame. The global layout is left-to-right, beginning with an input image labeled 'Body Video Frame' on the far left and ending with a rendered output labeled 'Rasterize' on the far right. The central portion of the diagram consists of a series of processing modules arranged in a flowchart structure, with arrows indicating data flow and dependencies.

On the left, the input 'Body Video Frame' shows a person in motion against a backdrop of studio lights. From this frame, two parallel pathways extract keypoints: one for 'Face Keypoints' and another for 'Body Keypoints'. These are represented as rounded rectangles with dashed orange borders and black text. The 'Face Keypoints' feed into a 'Face Encoder', while the 'Body Keypoints' feed into a 'Body Encoder'. Both encoders are depicted as solid gray rectangles with black text.

The outputs of both encoders converge into a shared 'Decoder D', also shown as a solid gray rectangle. Additionally, the 'Body Keypoints' branch off to produce a 'Body Pose' module, which is a rounded rectangle with a dashed purple border and black text. This 'Body Pose' is sent directly to the next stage.

From the 'Decoder D', the output flows to a module labeled 'Gaussian Correctives', represented as a rounded rectangle with a dashed pink border and black text. This module, along with the 'Body Pose', feeds into 'Linear Blend Skinning (LBS)', a solid gray rectangle. Another input to LBS is 'Gaussian Template G_t', shown as a rounded rectangle with a dashed pink border and black text, positioned below LBS and connected by an upward arrow.

Finally, the output of 'Linear Blend Skinning (LBS)' is directed to the 'Rasterize' stage on the far right, which displays the rendered 3D avatar against a black background, visually matching the pose and appearance of the original input frame.

All connections between modules are represented by solid black arrows, indicating the direction of data flow. The diagram emphasizes a dual-encoder-decoder architecture for facial and body features, combined with pose-driven deformation via Linear Blend Skinning using a Gaussian template and corrective terms, culminating in a rasterized 3D avatar output.
