# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Auto-bidding in real-time auctions via Oracle Imitation Learning (OIL) — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11434

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Real-Time Bidding (RTB) simulation framework, structured as a horizontal workflow from left to right. The global layout consists of four main stages: impression opportunities, advertisers, bids, and a second-price auction mechanism. On the far left, a vertical green-bordered column labeled 'Impression opportunities' (denoted by μ_t,i) contains multiple blue-shaded rectangular blocks, representing data points from a dataset. Each block corresponds to an impression opportunity for an advertiser. These are fed into a series of robot icons labeled 'Advertisers', arranged vertically. The top robot is highlighted in blue and labeled 'Agent', indicating the active agent in the simulation; the remaining robots are gray, representing other advertisers. Each robot processes its input and outputs a bid, shown as a vertical column of red-shaded rectangles labeled 'b_t,i'. The top bid column is outlined in yellow, signifying it is 'Generated' (as per the legend), while the others are green, indicating they are from the 'Dataset'. The generated bid from the agent replaces the original bid of the impersonated advertiser, while the bids of other advertisers remain unchanged. These bid columns are then combined via curved black arrows into a matrix-like structure, symbolizing the aggregation of all bids for the auction. This matrix is followed by an ellipsis and a single vertical red-shaded column, leading to the final stage: a 'Second-price auction' block. This block displays a heatmap-style grid where the top D winning bids are highlighted in a blue rectangle, and the corresponding next-top bids (used to determine prices) are highlighted in a red rectangle. The legend at the bottom right clarifies that green borders denote 'Dataset' elements and yellow borders denote 'Generated' elements. The entire process simulates how an agent, by impersonating an advertiser, influences the bidding landscape and affects the outcome of a second-price auction, where winning slots and prices are determined based on the highest and second-highest bids respectively.
