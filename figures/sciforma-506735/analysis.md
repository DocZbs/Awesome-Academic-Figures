# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Context Aware Lemmatization and Morphological Tagging Method in Turkish — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02361

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the encoder architecture of a neural network model designed for lemmatization and morphological tagging tasks. The overall layout is structured as a multi-stream encoder that converges into a shared representation before feeding into a decoder. The diagram is organized horizontally into three parallel input streams: Word Input on the left, BERT Input in the center, and Morp Input on the right, all converging toward a central Concatenate layer. Each stream processes its respective input through distinct modules before merging.

In terms of visual modules and attributes, each component is represented by a rounded rectangle with distinct colors and labels. The Word Input and Morp Input streams begin with light yellow boxes labeled 'Word Input' and 'Morp Input', respectively. These feed into light green 'Embedding' layers. Following embedding, both streams pass through light blue 'Stacked Bi-directional LSTM' layers. The central BERT Input stream starts with a light yellow 'BERT Input' box, which feeds into a lavender-colored 'BERT Model' module. All three streams converge at a dark gray 'Concatenate' layer, which merges their outputs. Below this, a salmon-pink 'Feed Forward Network' processes the concatenated features, leading to an orange 'Decoder' at the bottom. The dashed arrow originating from the leftmost Stacked Bi-directional LSTM points directly to the Decoder, indicating that the hidden state from the final layer of this LSTM is passed to the Decoder independently, alongside the main processed signal.

Connections and arrows are solid black lines indicating forward propagation of data between layers, except for one dashed black line. Solid arrows show the flow from inputs through embeddings, LSTMs or BERT, concatenation, feed-forward processing, and finally to the Decoder. The dashed arrow specifically denotes the hidden state output from the last layer of the left Stacked Bi-directional LSTM being sent directly to the Decoder, bypassing the Concatenate and Feed Forward Network stages. This suggests a mechanism for incorporating contextual memory directly into decoding. The caption clarifies that solid arrows represent layer outputs, while the dashed arrow represents the hidden state output of the last Bi-LSTM layer. The diagram does not include any mathematical equations or LaTeX expressions, focusing purely on the architectural flow.
