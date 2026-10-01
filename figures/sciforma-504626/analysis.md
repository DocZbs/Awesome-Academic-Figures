# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Simple is not Enough: Document-level Text Simplification using Readability and Coherence — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18655

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an SBERT-based model architecture designed for coherence classification, presented as a left-to-right sequential pipeline. The global layout is linear and horizontal, with components arranged in a clear flow from input to output, emphasizing a feedforward neural network structure. The process begins on the far left with an input representation: a blue document icon labeled 'abstract', symbolizing the textual input, accompanied by an orange circular badge with a white checkmark, indicating validated or processed input data. This input is directed via a black arrow to the first processing module.

The first module is a large orange rounded rectangle labeled 'Sentence Embedding (sBERT)' in bold white text. This component represents the initial stage where abstract sentences are encoded into dense vector representations using the Sentence-BERT (sBERT) model, a pre-trained transformer-based architecture specialized for sentence-level semantic embeddings. The orange color distinguishes it as the primary embedding layer.

From this module, a black arrow leads to the next component: a blue rounded rectangle labeled 'BiLSTM' in bold white text. This denotes a Bidirectional Long Short-Term Memory network, which processes the sequence of sentence embeddings in both forward and backward directions to capture contextual dependencies across the entire abstract. The blue color is consistent with subsequent processing layers, visually grouping them as core neural network components.

Following the BiLSTM, another black arrow connects to a second blue rounded rectangle labeled 'Linear Layer' in bold white text. This represents a fully connected layer that projects the BiLSTM's output into a lower-dimensional space, typically for classification purposes. The consistent blue color reinforces its role as part of the core neural network stack.

The output of the Linear Layer is passed through a green circular node labeled 'sigmoid' in black text below it. This signifies the application of a sigmoid activation function, which transforms the linear layer’s output into a probability score between 0 and 1, suitable for binary classification.

Finally, a black arrow points from the sigmoid node to the output box: a rectangular box with a light blue border and white background, containing the text 'Coherence (1/0)' in bold black font. This indicates the final binary prediction—whether the abstract is coherent (1) or incoherent (0).

All connections are represented by solid black arrows pointing rightward, clearly indicating the unidirectional data flow through the model. The visual design uses distinct colors (orange for embedding, blue for core layers, green for activation, and light blue for output) to differentiate functional modules while maintaining a clean, minimalistic style typical of deep learning architecture diagrams. The caption 'SBERT-based model architecture' confirms the purpose and context of the diagram.
