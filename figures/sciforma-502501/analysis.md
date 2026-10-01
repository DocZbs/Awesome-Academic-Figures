# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FRIDAY: Mitigating Unintentional Facial Identity in Deepfake Detectors Guided by Facial Recognizers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14623

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FRIDAY training process, divided into two distinct phases, each depicted in separate panels labeled (a) and (b), with a shared global layout structured horizontally across the image. The entire diagram uses a clean, modular design with rounded rectangular blocks representing neural network backbones, vertical stacks of colored boxes denoting feature embeddings, and green trapezoidal blocks symbolizing multi-layer perceptrons (MLPs). Arrows indicate data flow and connections between components, with specific loss functions labeled at the end of processing chains.

In panel (a), titled 'Phase 1: Training a face recognizer (closed-set identification)', the leftmost component is a vertical list labeled 'Closed Set', containing sample face images indexed by ID=0, ID=1, ..., ID=N. These images feed into a large light-blue rounded rectangle labeled 'Face Recognizer Backbone'. An unlocked padlock icon next to this block indicates it is trainable during this phase. The output of the backbone is a vertical stack of feature vectors, represented as a column of blue and light-blue boxes, labeled z^f. This embedding vector is then passed to a green trapezoid labeled 'MLP', which produces a predicted class label ŷ^f. This prediction is connected to a loss function labeled L_cls, indicating classification loss for closed-set identification. The background of this phase is a pale yellow rectangle, visually grouping all components.

Panel (b), titled 'Phase 2: Frozen face recognizer guides Deepfake detector training', shows a similar structure but with modifications. The 'Face Recognizer Backbone' from Phase 1 is now shown with a locked padlock icon, indicating it is frozen. Its output, again labeled z^f, is passed to a new component: a yellow rounded rectangle labeled 'Deepfake Detector Backbone'. The input to this backbone is a single face image, visually distinct from the closed-set images in Phase 1, suggesting it may be a deepfake or real image from an open set. The Deepfake Detector Backbone outputs another embedding vector, labeled z^d, represented as a vertical stack of light-blue boxes. This embedding is fed into a second green MLP, producing a prediction ŷ, which connects to a classification loss L_cls. Additionally, there is a direct connection from the frozen Face Recognizer's embedding z^f to the Deepfake Detector's embedding z^d, leading to a loss term labeled L_cos, which represents a cosine similarity loss. This connection implies that the embeddings are being pushed apart to reduce identity bias during training. The background of Phase 2 is also a pale yellow rectangle, maintaining visual consistency.

The overall layout is horizontal, with Phase 1 on the left and Phase 2 on the right, clearly demarcating the two stages of training. The color coding is consistent: blue for the face recognizer, yellow for the deepfake detector, and green for the MLPs. The use of padlock icons effectively communicates the trainable vs. frozen state of the face recognizer backbone. The figure caption below summarizes the process: Phase 1 learns a face recognizer; Phase 2 freezes it and trains a Deepfake detector while reducing identity bias.
