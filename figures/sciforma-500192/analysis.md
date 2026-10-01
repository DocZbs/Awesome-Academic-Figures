# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Quantifying Extreme Opinions on Reddit Amidst the 2023 Israeli-Palestinian Conflict — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10913

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flow diagram illustrating the computational pipeline for calculating an 'Extremism Score' from Reddit data, structured as a top-down process. At the top, a cloud icon labeled 'Reddit API' feeds into a green, rounded rectangular box titled 'Data Set Storage', which contains a database symbol, indicating the initial data acquisition and storage phase. From this storage, a solid black arrow leads downward to a light blue, rounded rectangular block labeled 'Preprocessing & Preparation'. This module lists four sub-processes: Cleaning, Lowercasing, Upvote-count, and Flair-filtering, arranged horizontally within the block.

From the preprocessing stage, three solid black arrows branch out to three distinct colored modules representing different sentiment and similarity feature extractions. The leftmost is a red rounded rectangle labeled 'Anger Score (α) via vaderSentiment'. The center is a yellow rounded rectangle labeled 'Polarity Score (p) via TextBlob'. The rightmost is a light yellow rounded rectangle labeled 'Similarity Score (s) via TextBlob'.

The Polarity Score (p) flows into a gray square box containing the absolute value operator '|·|', producing an output labeled '|p|'. This value then enters a gray circular node with a cross symbol, which combines it with inputs from the Anger Score (α) and Similarity Score (s), resulting in an output labeled 'χ'.

A dashed blue line connects the Anger Score (α) to a gray rectangular box labeled 'mean(·)', which in turn connects via another dashed blue line to a gray circular node with a cross symbol. This node also receives input from a gray box labeled '1/(·)', forming a feedback loop or normalization path. The output of this loop is connected by a dashed blue line to the main 'χ' node, suggesting a dynamic adjustment or normalization factor.

The main 'χ' output proceeds to another gray circular node with a cross symbol, producing 'χ_norm'. This is followed by a purple rounded rectangle labeled 'Length weighting', yielding 'χ_norm^l'. Then, a dark blue rounded rectangle labeled 'Upvote weighting' processes this to produce the final output.

The final result is displayed in a light green, rounded rectangular box at the bottom, labeled 'Extremism Score, χ_norm^{l,u}', indicating the fully weighted and normalized extremity metric. Solid black arrows denote direct data flow, while dashed blue lines indicate auxiliary or feedback connections, such as normalization or mean-based adjustments, contributing to the robustness of the scoring mechanism.
