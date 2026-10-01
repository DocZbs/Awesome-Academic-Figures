# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SAFERec: Self-Attention and Frequency Enriched Model for Next Basket Recommendation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14302

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a frequency-aware user-item relevance scoring model, structured into two main parts: an upper architectural diagram and a lower data flow visualization. The global layout is divided horizontally, with the top section showing the high-level model components and their interactions, and the bottom section depicting the data processing pipeline from basket sequences to predicted next items.

In the upper part, the model begins with an 'item' input (gray rounded rectangle), which branches into three paths. One path feeds into 'ItemEmbeddings2' and 'FrequencyEmbeddings' within a purple rounded rectangle labeled 'Frequency Module'. These embeddings are concatenated via a 'Concat' block (white rounded rectangle) with inputs 'history' (gray) and 'i2+f' (blue), then passed through 'FC Layers' (blue). Another path from 'item' goes to 'ItemEmbeddings1' (blue), which combines with the output of a separate branch starting from 'W_u' (gray) — passing through 'FC Layers' and a 'Transformer Layer' (both blue) — to form 'u_h @ i1' (blue). The outputs of the Frequency Module and the 'u_h @ i1' block are summed via a circular '+' node, producing the final 'User-item relevance score' (red rounded rectangle). A legend indicates blue blocks represent model components and gray blocks represent input data.

The lower part visualizes the data flow. On the left, a grid of 'Basket multi-hot vectors' (labeled S1 to Sn) represents sequential shopping baskets, each row corresponding to an item (symbolized by icons like apple, burger, pizza, etc.). Each basket vector is processed by an 'FC Layer' (white rounded rectangle), feeding into a 'Transformer' (white). The Transformer's output passes through 'FC Layers' to generate a 'User vector', which is then combined with 'Item Embeddings' in a 'Frequency-aware module' (white). This module produces 'Relevance scores' (vertical stack of blue squares), which are used to predict the next item 'Sn+1' (rightmost column of icons). Dashed lines group the basket vectors into sequences, and solid arrows indicate forward propagation. The entire process models user behavior over time, incorporating item frequency information to enhance relevance scoring.
