# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bidirectional Topic Matching: Quantifying Thematic Overlap Between Corpora Through Topic Modelling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18376

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic outline of a bidirectional topic matching procedure designed to calculate the thematic closeness factor between two corpora, labeled Corpus 1 and Corpus 2. The global layout is a top-down flowchart with a central processing path flanked by parallel branches for each corpus, converging into shared evaluation steps. The structure begins at the top with two distinct data sources: Corpus 1 and Corpus 2, each represented as a light blue cylinder. From each corpus, a downward arrow leads to a rectangular process box labeled 'Train Topic Model 1' and 'Train Topic Model 2', respectively, indicating the initial step of training separate topic models on each corpus. These boxes are light purple with black text and have rounded corners.

From each trained model, two output arrows emerge, labeled 'Topic 11' and 'Topic 21' from Model 1, and 'Topic 12' and 'Topic 22' from Model 2, symbolizing the extraction of specific topics. These topic outputs are then directed to two parallel assignment processes: 'Assign Topic Pair to Each Document in Corpus 1' and 'Assign Topic Pair to Each Document in Corpus 2'. These assignment steps are also light purple rectangles, positioned side-by-side, and they feed into a central node labeled 'Calculate Topic Co-Occurrences', which aggregates co-occurrence data across both corpora.

From this central node, the flow diverges into two parallel analytical paths. The left path leads to 'Calculate Topic Similarity: Topic Ranking Based on Frequent Co-Occurrence', while the right path leads to 'Calculate Outlier Topics: Select Unique Topics Based on Outlier Criteria'. Both of these are light purple rectangles. A dotted arrow extends from the left path to an external box on the far left labeled 'Evaluate Topic Similarity: Calculate Cosine Similarity', indicating an optional supplementary analysis not part of the core pipeline. The two main analytical paths converge into a single box labeled 'Calculate Corpus Closeness Factor', which synthesizes the results from topic similarity and outlier detection.

Finally, the process concludes with a bottom-most box titled 'Combined Evaluation & Validation: Combine Analytical Results with Qualitative Analysis', representing the final stage where quantitative findings are integrated with qualitative insights. All connections are solid black arrows except for the optional cosine similarity evaluation, which uses a dashed line. The entire diagram uses consistent visual attributes: light purple rounded rectangles for processes, light blue cylinders for data inputs, black text, and black lines for connections. The figure is structured to emphasize a symmetric, bidirectional approach to topic modeling and comparison, culminating in a comprehensive evaluation of thematic closeness.
