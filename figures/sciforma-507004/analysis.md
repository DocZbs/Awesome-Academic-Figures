# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CM3T: Framework for Efficient Multimodal Learning for Inhomogeneous Interaction Datasets — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03332

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=507000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a conceptual diagram illustrating the performance of different fine-tuning strategies—full fine-tuning, CM3T, and adapters—when applied to backbones pretrained via either supervised or self-supervised learning. The global layout is a directed acyclic graph with a left-to-right flow: starting from a central 'backbone' node on the far left, two branches diverge to 'supervised learning' and 'self-supervised learning' nodes in the middle column. From these, three fine-tuning methods are shown in the rightmost column: 'full finetuning', 'CM3T', and 'adapters'. All nodes are rectangular boxes with black borders and black text, arranged in three vertical columns. The connections between nodes are solid arrows indicating directionality. From 'backbone', black arrows point to both 'supervised learning' and 'self-supervised learning'. From each of these, black arrows extend to 'full finetuning' and 'CM3T', indicating compatibility. However, the connection from 'supervised learning' to 'adapters' is highlighted in red, signifying poor performance, while the connection from 'supervised learning' to 'CM3T' is highlighted in green, indicating successful performance. Additionally, black arrows connect 'self-supervised learning' to all three fine-tuning methods, suggesting that all methods perform well when the backbone is pretrained with self-supervised learning. The figure visually emphasizes that adapters struggle with supervised pretraining (red arrow), motivating the introduction of CM3T as a solution (green arrow). The caption clarifies that self-supervised pretraining yields robust general features, enabling all fine-tuning methods to succeed, whereas supervised pretraining leads to adapter failure, which CM3T addresses.
