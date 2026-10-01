# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

VisTabNet: Adapting Vision Transformers for Tabular Data — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00057

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architectural design of VisTabNet, a multimodal model that integrates vision and tabular data for joint classification. The global layout is divided into two main vertical streams: the left side represents the Vision Transformer architecture, and the right side handles the tabular input. Both streams converge at the image embedding space before being processed by a shared Transformer module and separate MLP heads for final classification.

On the left, the Vision Transformer architecture begins with a grid of nine small images arranged in a 3x3 pattern, representing the visual input. These images are fed into a red trapezoid-shaped module labeled 'Linear projection of patches', which converts image patches into a sequence of embeddings. This output flows into a rectangular box labeled 'Image embedding space'. Below this, within a rounded rectangle labeled 'Pretrained backbone', lies a teal-colored rectangular block labeled 'Transformer', which processes the embeddings. The output from the Transformer is passed to a blue trapezoid labeled 'MLP head', which produces a circular node labeled 'Image class' as the final prediction.

On the right, the tabular input is represented by a horizontal row of seven white rectangular boxes under the label 'Tabular input'. These are connected to a yellow trapezoid labeled 'Adaptation layer', which transforms the tabular features into a format compatible with the image embedding space. An arrow from this adaptation layer points directly to the 'Image embedding space' box on the left, indicating that the tabular features are projected into the same embedding space as the visual features.

From the 'Image embedding space', a horizontal arrow leads to the 'Transformer' block within the pretrained backbone, showing that both modalities are jointly processed by the same Transformer. After processing, the Transformer's output splits into two paths: one continues down the left stream to the blue 'MLP head' for image classification, and the other branches rightward to a purple 'MLP head' for tabular classification. Each MLP head outputs a circular node labeled 'Image class' and 'Tabular class', respectively.

All connections are represented by solid gray arrows indicating the direction of data flow. The figure uses distinct colors and shapes to differentiate components: red for linear projection, yellow for adaptation, teal for the Transformer, blue for the image MLP head, and purple for the tabular MLP head. The overall structure emphasizes the fusion of heterogeneous data types through shared embedding and processing layers, enabling joint learning and classification.
