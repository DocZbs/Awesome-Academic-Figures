# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SentiQNF: A Novel Approach to Sentiment Analysis Using Quantum Algorithms and Neuro-Fuzzy Systems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12731

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure consists of two main parts: (a) a flowchart depicting the preprocessing pipeline for sentiment analysis, and (b) a tabular illustration showing concrete examples of how each preprocessing step is applied to sample tweets.

Part (a) presents a structured flowchart enclosed within a dashed rectangular boundary labeled 'PREPROCESSING' at the top center in bold white text on a black rounded rectangle. The flowchart follows a left-to-right and top-to-bottom sequence of processing stages, represented by rounded rectangular boxes with gray borders and black text. The process begins with 'Expanding Contraction', which feeds into 'Removing Punctuations'. This is followed by 'Cleaning with ‘re’', which leads to 'Stop - words Removal'. From this point, the flow splits: one path proceeds to 'Tokenization', then to 'Stemming'; another path from 'Stop - words Removal' also connects to 'Tokenization'. After 'Stemming', the next step is 'Calculate Term Frequency', which leads to 'Frequency Matrix', and finally to 'Feature Selection'. All connections between these modules are indicated by solid black arrows pointing in the direction of data flow.

Part (b) displays a table-like structure with five columns, each representing a preprocessing step: 'Data Cleaning', 'Expanding', 'Stemming', 'Stopwords', and 'Tokenization'. Each column header is in a purple rounded rectangle with white text. Below each header, there are three rows corresponding to three example tweets, each enclosed in a purple-bordered box with black text. The first row shows a tweet about Amazon deliveries during the pandemic; the second discusses donating to food banks; the third references a UK consumer poll on COVID-19 impact. For each tweet, the subsequent columns show the transformed output after applying the respective preprocessing step. For instance, under 'Data Cleaning', punctuation and URLs are removed; under 'Expanding', contractions like 'don’t' become 'don't'; under 'Stemming', words are reduced to root forms such as 'struggl' from 'struggling'; under 'Stopwords', common words like 'to', 'for', 'the' are filtered out; and under 'Tokenization', the remaining words are split into individual tokens. The entire layout is clean and organized, using consistent colors and shapes to differentiate steps and examples.

The caption below the figure states: '(a) Flowchart illustrating the preprocessing steps for sentiment analysis, and (b) represents an example of preprocessing steps applied to tweets for sentiment analysis.' This clarifies that part (a) outlines the general methodology while part (b) provides specific instances demonstrating the application of those steps.
