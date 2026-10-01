# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards the Anonymization of the Language Modeling — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02407

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the process of model memorization during training and its potential exploitation during testing, particularly in the context of masked language modeling. The global layout is divided into three main sections: Training on the left, Model Memorization in the center, and Testing on the right. The Training section shows two stacked instances of a 'Masked Language Modeling' block, each represented as a light blue rectangle with black text. These blocks receive input sequences composed of tokens labeled w1 through w6, where one token is replaced by 'MASK' (highlighted in red). In the top training instance, the sequence is w1, w2, w3, MASK, w5, and the output predicted is w4. In the bottom training instance, the sequence shifts to w2, w3, w4, MASK, w6, with the output predicted as w5. A dashed arrow labeled 'iterations' connects these two blocks vertically, indicating repeated training steps over different masked positions. The central part of the figure features a stylized brain icon labeled 'Model Memorization', containing the tokens w1, w2, w3, w4, w5, w6, with w4 and w5 highlighted in red, suggesting these are the tokens most strongly memorized due to being frequently predicted during training. The Testing section mirrors the training setup with another 'Masked Language Modeling' block receiving the sequence w1, w2, w3, MASK, w6, predicting w4. Above this block, a cartoon figure with a magnifying glass and a thought bubble labeled 'w4=u1?' represents an adversary attempting to infer whether a specific token (u1) was part of the training data based on the model’s prediction. All arrows are solid black lines pointing upward from inputs to the model blocks, indicating the flow of information. The figure uses consistent visual attributes: light blue rectangles for model components, black text for labels except for 'MASK' which is red, and simple black outlines for the brain and adversary icons. The overall workflow demonstrates how repeated exposure to masked tokens during training leads to memorization, which can then be exploited in testing to infer membership in the training set.
