# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLMs are Also Effective Embedding Models: An In-depth Overview — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12591

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of three prominent pre-trained language models: ELMo, BERT, and OpenAI GPT, illustrating their structural differences in processing input sequences and generating output embeddings. The layout is divided into three vertically aligned panels, separated by vertical lines, each dedicated to one model. Each panel follows a consistent vertical structure from bottom to top: input embeddings, multiple hidden layers, and output embeddings.

In the leftmost panel labeled 'ELMo', the architecture is depicted as a bidirectional LSTM network with two layers. At the bottom, orange rectangular boxes labeled E₁, E₂, ..., Eₙ represent the input embeddings. These feed into two parallel LSTM stacks: one forward (left-to-right) and one backward (right-to-left), both spanning layer 1 and layer 2. Each LSTM unit is shown as a yellow rectangle with 'LSTM' inside, connected sequentially within each direction. The outputs from both directions at each position are combined and projected upward to produce output embeddings T₁, T₂, ..., Tₙ, represented as yellow rectangles at the top. The bidirectional nature is emphasized by arrows pointing both left and right within each LSTM stack, and connections from both stacks converge to form the final output.

The central panel, labeled 'BERT', shows a stacked transformer-based architecture. Input embeddings E₁, E₂, ..., Eₙ (orange rectangles) are fed into multiple identical layers (layer 1, layer 2, ..., layer n), each consisting of yellow rectangular blocks representing transformer layers. Within each layer, there are cross-connections between positions, indicated by diagonal arrows connecting different positions (e.g., from E₁ to E₂, E₂ to E₃, etc.), reflecting self-attention mechanisms. The output from the topmost layer (layer n) is passed through an upward arrow to produce output embeddings T₁, T₂, ..., Tₙ (yellow rectangles). The architecture emphasizes bidirectional context via these intra-layer connections across all positions.

The rightmost panel, labeled 'OpenAI GPT', illustrates a unidirectional transformer architecture. Similar to BERT, it has input embeddings E₁, E₂, ..., Eₙ (orange rectangles) feeding into multiple layers (layer 1 to layer n), each composed of yellow rectangular blocks. However, the connections within each layer are strictly unidirectional, with arrows pointing only from earlier to later positions (e.g., from E₁ to E₂, E₂ to E₃, etc.), indicating autoregressive processing. This reflects the causal masking used in GPT, where each token can only attend to previous tokens. The output from the top layer is projected to generate output embeddings T₁, T₂, ..., Tₙ (yellow rectangles).

All three architectures share a common visual style: input embeddings are orange rectangles, hidden layers are yellow rectangles with labels or content, and output embeddings are yellow rectangles. The flow is consistently top-down for inputs and bottom-up for outputs. The figure visually contrasts bidirectional (ELMo, BERT) versus unidirectional (GPT) processing, and recurrent (ELMo) versus transformer (BERT, GPT) architectures.
