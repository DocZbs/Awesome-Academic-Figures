# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multimodal Approaches to Fair Image Classification: An Ethical Perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12165

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage process for creating a zero-shot classifier using text-based labels and applying it to image classification. The top section, labeled '2. Create dataset classifier from label text', shows how class labels are transformed into text embeddings. A vertical stack of blue rectangular boxes represents class names such as 'plane', 'car', 'dog', and 'bird', with an ellipsis indicating additional classes. These labels are combined with a fixed text template, 'a photo of a {object}.', shown in a central blue box, forming a set of descriptive phrases for each class. This combined text input is fed into a light purple trapezoidal module labeled 'Text Encoder', which processes the text and outputs a set of N text embeddings, denoted as T₁, T₂, ..., Tₙ, each represented by a light purple rectangle. These embeddings form the classifier’s class representations.

The bottom section, labeled '3. Use for zero-shot prediction', demonstrates the inference phase. An unlabeled image is processed by a light green trapezoidal module labeled 'Image Encoder', producing an image embedding I₁, shown in a light green square. This image embedding is then compared with each of the precomputed text embeddings T₁ through Tₙ via dot product operations, resulting in similarity scores I₁·T₁, I₁·T₂, ..., I₁·Tₙ, displayed in gray rectangles. The highest similarity score, highlighted in light blue (I₁·T₃), corresponds to the most likely class. The final output is the class label associated with the highest score, shown in a blue box as 'a photo of a dog.', indicating the predicted class. The diagram uses solid black arrows to indicate data flow: from class labels to the text encoder, from the text encoder to the text embeddings, from the image encoder to the image embedding, and from the image embedding to the similarity scores, culminating in the predicted class label. The layout is horizontal and sequential, with the top row dedicated to classifier creation and the bottom row to prediction, clearly separating training-time and inference-time components.
