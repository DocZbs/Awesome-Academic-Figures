# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Progressive Transformer for Unifying Binary Code Embedding and Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11177

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the complete architecture of a multi-task learning model for binary code analysis, built upon a RoBERTa backbone. The global layout is divided into three main sections: the Embedding Module at the bottom left, the Backbone Model – RoBERTa in the center bottom, and the Task Heads at the top, which are further subdivided into Sequence Classification (left) and Token Classification (right) branches.

In the Embedding Module, input tokens X₁ through X₃₆ are combined with positional encodings P₁ through P₃₆ and special tokens ([CLS], [SEP]) to form input embeddings. These are then passed to the Backbone Model – RoBERTa, which processes them and outputs sequence embeddings E₁ through E₃₆. The output embedding E₁ is directed to the Sequence Classification task head, while E₂ through E₃₆ are used for the Token Classification task head.

The Sequence Classification task head, enclosed in a dashed box, contains a Feedforward Network that takes E₁ and produces predictions for four tasks: Function Signature (predicted 'Int / 3' vs ground-truth 'Float / 3', loss: Cross-entropy), Function Name ('Calculate_Average' vs 'Compute_mean', loss: BCELogitLoss), Compiler Provenance ('GCC-01' vs 'GCC-01', loss: Cross-entropy), and Malware Classification ('Ramnit' vs 'Simda', loss: Cross-entropy). Each prediction is compared to its ground-truth using the specified loss function.

The Token Classification task head, also enclosed in a dashed box, uses a separate Feedforward Network that takes E₂ through E₃₆. It performs three token-level classification tasks: MLM (Masked Language Modeling, predicting '4B' vs '5F'), Instruction Boundary (predicting 'Start' vs 'Start'), and Function Boundary (predicting 'End' vs 'Start'), all using Cross-entropy loss. Additionally, this branch includes a Function Similarity task (labeled ⑤), where the output of the Feedforward Network is used to compute a Function Embedding via CosineEmbeddingLoss, comparing it against a Candidate Function Embedding.

All components are color-coded: input/output embeddings are light orange, the RoBERTa backbone is beige, Feedforward Networks are light green, predicted outputs are cyan, ground-truths are purple, and task labels are black text with numbered circles. Arrows indicate data flow from inputs through the backbone to the various task heads, with loss functions explicitly labeled between predicted and ground-truth values. The figure is captioned 'The model architecture of \system'.
