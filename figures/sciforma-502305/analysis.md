# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SAFERec: Self-Attention and Frequency Enriched Model for Next Basket Recommendation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14302

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the SAFERec model, which is designed for recommendation systems and consists of three main modules: the History Encode Module, the User Representation Module, and the Frequency-aware Module. The global layout is left-to-right, showing a sequential data flow from input history to final relevance scores and objective function evaluation.

On the far left, the History Encode Module receives a sequence of user purchase baskets, represented as multi-hot vectors. Each basket (labeled b1, b2, ..., bn-1, bn) is visualized as a row of four light blue square placeholders, indicating encoded items. To the left of these rows, icons of food items (apple, burger, pizza, chicken, carrot, cake, fish) represent the actual items in the baskets. These basket multi-hot vectors are fed into the History Encode Module, which outputs a set of history vectors.

These history vectors are then passed to the User Representation Module, which is enclosed in a rounded rectangle. Inside this module, a Transformer block processes the history vectors, followed by Fully Connected (FC) Layers. The output of this module is labeled 'User representation', a vector capturing the user’s interests based on their transaction history.

The User representation is then sent to the Frequency-aware Module, which also receives the history vectors directly from the History Encode Module. This module performs analysis of user-item interaction frequencies and produces two outputs: 'Item Embeddings' and a set of 'Relevance scores'. The Relevance scores are shown as a vertical stack of seven light blue squares, each corresponding to a potential item in the next basket (bn+1), which is displayed on the far right with the same food icons as the input baskets.

The Relevance scores are then used in an 'Objective function' block, which compares them against the ground truth next basket (bn+1) to compute loss or evaluate performance. The objective function is connected back to the Relevance scores and the next basket, indicating a training loop where the model is optimized to predict the correct next items.

All modules are represented as rounded rectangles with black borders and black text. The data flow is indicated by solid black arrows. The input baskets and output next basket are visually aligned with item icons, while intermediate representations are shown as light blue squares. The entire diagram uses a clean, monochromatic color scheme with black text and light blue for data placeholders, emphasizing clarity and modularity.
