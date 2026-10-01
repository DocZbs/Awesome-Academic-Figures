# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

An Experimental Study on Fairness-aware Machine Learning for Credit Scoring Problems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20298

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a Bayesian network model for credit risk assessment, specifically from the PAKDD dataset, where the target class variable is labeled 'TARGET_LABEL_BAD'. The network is structured as a directed acyclic graph (DAG), with nodes representing variables and directed edges indicating probabilistic dependencies between them. The global layout is dense and non-hierarchical, with nodes distributed across the diagram in a roughly top-down and left-right arrangement, reflecting complex interdependencies rather than a linear pipeline. The central focus is on the target variable, which is highlighted in yellow, while protected attributes—AGE, SEX, and MARITAL_STATUS—are emphasized in blue, distinguishing them from other variables that are shown in red with white text. All nodes are oval-shaped with thin borders, and the edges are solid black arrows pointing from parent to child nodes, indicating causal or probabilistic influence.

The visual modules consist of 28 distinct variables, each represented by an oval node with capitalized text labels. The protected attributes—AGE, SEX, and MARITAL_STATUS—are visually distinguished by their blue fill color, while the target variable TARGET_LABEL_BAD is uniquely colored yellow. All other variables, such as QUANT_DEPENDANTS, PERSONAL_MONTHLY_INCOME, FLAG_VISA, and COMPANY, are rendered in red with white text. These variables represent diverse features including demographic information (e.g., NACIONALITY, RESIDENCE_TYPE), financial indicators (e.g., OTHER_INCOMES, PERSONAL_ASSETS_VALUE), employment details (e.g., OCCUPATION_TYPE, MONTHS_IN_THE_JOB), and banking behavior (e.g., QUANT_BANKING_ACCOUNTS, FLAG_EMAIL).

Connections between nodes are represented by directed black arrows, forming a complex web of dependencies. For example, AGE influences multiple downstream variables including FLAG_RESIDENCIAL_PHONE, PAYMENT_DAY, and PERSONAL_MONTHLY_INCOME. Similarly, SEX affects PERSONAL_MONTHLY_INCOME and FLAG_MASTERCARD. MARITAL_STATUS connects to AGE, SEX, and several financial flags. The target variable TARGET_LABEL_BAD receives incoming edges from multiple upstream variables, including AGE, SEX, MARITAL_STATUS, QUANT_DEPENDANTS, and PERSONAL_MONTHLY_INCOME, suggesting these are key predictors of credit risk. Additionally, there are numerous indirect paths through intermediate variables such as COMPANY, PRODUCT, and QUANT_CARS, which themselves are influenced by combinations of demographic and financial factors. Notably, some variables like FLAG_VISA and FLAG_AMERICAN_EXPRESS have cascading effects, influencing FLAG_DINERS and other card-related flags. The network also includes feedback-like structures, such as the connection from FLAG_EMAIL back to QUANT_SPECIAL_BANKING_ACCOUNTS, indicating reciprocal relationships within the model. Overall, the diagram captures a comprehensive probabilistic model of creditworthiness, emphasizing both direct and indirect influences among variables, with explicit highlighting of sensitive attributes and the target outcome.
