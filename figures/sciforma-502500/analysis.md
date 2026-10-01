# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FRIDAY: Mitigating Unintentional Facial Identity in Deepfake Detectors Guided by Facial Recognizers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14623

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the FRIDAY (Proposed) method, designed to mitigate unintended facial identity learning in deepfake detectors during training. The global layout is a two-dimensional feature space divided into two main regions by a horizontal dashed blue line labeled 'Face Recognizer', which represents the decision boundary of a face recognition model. Above this line is a light green region representing identity ID = 1, and below it is a light orange region for identity ID = 2. Each region contains two clusters: one of circles (representing real images) and one of triangles (representing fake images), indicating the embedding distributions for real and fake samples of each identity. The ideal scenario is shown by a vertical dotted line labeled 'Ideal', which separates real and fake embeddings perfectly within each identity group. However, the actual decision boundary of the 'Deepfake Detector' is depicted as a black diagonal line crossing both identity regions, indicating that the detector is influenced by identity information. This is visually emphasized by the fact that the detector’s boundary cuts through both real and fake clusters for each ID, leading to biased predictions. To correct this, the proposed FRIDAY method applies a 'Push-away' mechanism, illustrated by a large blue curved arrow pushing the deepfake detector’s decision boundary away from the face recognizer’s boundary. This adjustment aims to decouple identity information from the deepfake detection process. Four real-world face images are included at the corners: top-left shows a real image of ID=1, top-right a fake image of ID=1, bottom-left a real image of ID=2, and bottom-right a fake image of ID=2, each connected by lines to their corresponding embedding points in the feature space. The text 'FRIDAY (Proposed)' is written in red at the top right, emphasizing the proposed solution. A small lock icon next to 'Face Recognizer' suggests that the face recognizer's identity information is being protected or leveraged securely. The overall structure illustrates a conceptual workflow where the face recognizer’s identity-aware embeddings are used to guide the deepfake detector to learn a more robust, identity-invariant decision boundary.
