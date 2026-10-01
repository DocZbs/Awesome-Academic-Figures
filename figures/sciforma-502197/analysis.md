# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SEKE: Specialised Experts for Keyword Extraction — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14087

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a neural network architecture designed for token-level sequence labeling, such as named entity recognition, using a hybrid approach combining a pre-trained language model with an expert-based routing mechanism and recurrent processing. The global layout is vertically structured, progressing from top to bottom: starting with an input sequence at the top, passing through multiple processing stages, and ending with output sequence labels at the bottom. The architecture is divided into distinct functional modules, each represented by specific shapes and colors, connected by directed arrows indicating data flow.

At the top, the input sequence is shown as a horizontal bar labeled 'Input sequence', containing individual tokens like 'bottleneck', 'stent', 'and', 'the', 'timing', 'of', 'myocardial', 'infarction', etc., enclosed in rounded rectangles. This sequence feeds into a purple rounded rectangle labeled 'DeBERTa', representing a pre-trained transformer-based encoder that processes the entire input sequence to generate contextualized embeddings.

Below DeBERTa, a large light-blue rectangular container encapsulates a routing module. At the center of this container is a diamond-shaped node labeled 'topK', which acts as a selector or router. From this node, multiple arrows branch out to N expert modules, labeled 'Expert 1', 'Expert 2', ..., 'Expert N-1', 'Expert N', each represented as a small rounded rectangle. These experts are likely specialized sub-networks or heads that process different parts of the embedding space based on the top-K selection criterion.

The outputs from all experts are then fed into a purple rounded rectangle labeled 'Reassemble sequence', which combines the processed outputs from the selected experts back into a coherent sequence representation. This reassembled sequence is then passed to another purple rounded rectangle labeled 'LSTM', indicating a Long Short-Term Memory network that further processes the sequence to capture temporal dependencies.

The outputs from both the 'Reassemble sequence' and 'LSTM' modules converge at a circular node with a cross inside, symbolizing a fusion operation—likely element-wise addition or concatenation—combining the two representations into a unified feature vector.

This fused representation is then passed to the final module, a purple rounded rectangle labeled 'Token classification head', which performs the actual classification task for each token in the sequence. The output of this head is shown as a horizontal bar labeled 'Output sequence labels', mirroring the input format but with predicted labels such as 'B' (beginning of an entity) and 'I' (inside of an entity), displayed in green-colored tokens for entities and white for non-entity tokens. The labels correspond to the input tokens, indicating the model's prediction for each position in the sequence.

All connections are represented by solid black arrows pointing downward or horizontally, indicating the direction of information flow. The color coding is consistent: purple for major processing blocks (DeBERTa, LSTM, Reassemble sequence, Token classification head), light blue for the expert routing group, yellow for input/output sequences, and green for labeled entity tokens in the output. The diagram clearly visualizes a multi-stage pipeline where contextual embeddings are routed through specialized experts, reassembled, enhanced with recurrence, fused, and finally classified.
