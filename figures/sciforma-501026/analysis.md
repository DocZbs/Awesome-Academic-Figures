# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Regulation of Language Models With Interpretability Will Likely Result In A Performance Trade-Off — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12169

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a framework for regulatable large language models (LLMs), designed to evaluate liability in traffic scenarios based on human-defined concepts. The global layout is left-to-right, beginning with input data on the left and progressing through encoding, concept comparison, and final classification on the right. The top-left contains a 'Test Instance x', presented as a narrative text with highlighted sentences in yellow, cyan, and green, indicating different factual components. This instance is fed into an 'LLM Encoder' (denoted as f_enc), represented as a blue trapezoid, which processes the text into sentence embeddings {z_i}_{i=1}^m, shown as horizontal sequences of blue circles. Below the test instance, 'Human-Labelled Concept Data D ∈ {D_i}_{i=1}^c' is shown in a rounded box, indicating pre-defined concept prototypes sampled equally per class during training; this data also feeds into the encoder.

From the encoder, the sentence embeddings are passed to a series of 'Concept Transformations' (h_1, h_2, ..., h_n), each represented as a blue trapezoid. These transformations map the embeddings to specific human-defined concepts, such as 'IV is Liable' (yellow box), 'CV is not liable' (cyan box), and 'CV took no defensive action' (green box). Each transformation outputs a similarity score (s_1, s_2, ..., s_n) computed via a similarity function (orange circle), which compares the transformed embedding to the prototype concept. The similarity scores are then weighted using a 'Human Defined Weight Matrix W''—represented by red and blue lines connecting scores to output nodes—where blue lines denote +1 weight and red lines denote -1 weight, as indicated in the legend.

The weighted scores feed into a final classification layer consisting of three softmax output nodes (σ_1, σ_2, σ_3), labeled 'Not Liable', 'Split Liability', and 'Liable'. The connections from similarity scores to these outputs reflect the human-defined weights, allowing for interpretable regulation of model decisions. The legend at the bottom clarifies visual elements: blue lines represent +1 weight, red lines -1 weight; orange circles denote similarity functions; green circles indicate sentence encoders; yellow circles represent average class embeddings; and σ_i denotes SoftMax(.) function. The overall workflow emphasizes alignment between model outputs and human-defined regulatory concepts, enabling transparent and controllable decision-making.
