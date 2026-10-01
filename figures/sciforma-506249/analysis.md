# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Aligning LLMs with Domain Invariant Reward Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00911

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a methodological framework for training a domain-invariant reward model using labeled source data and unlabeled target data. The layout is divided into two main vertical sections: 'DATA' on the left and 'MODEL' on the right, separated by a vertical line labeled 'MODEL'. Below these sections, a horizontal row labeled 'APPLICATIONS' illustrates four distinct use cases.

In the DATA section, the top portion shows the 'Source Domain' as a small, labeled dataset represented by a beige circular cluster of blue '+' and red '-' points. An example query 'What shape is the Earth?' with options 'Round' (thumbs up) and 'Flat' (thumbs down) is shown alongside an icon of a human annotator interacting with a laptop. Below this, the 'Target Domain' is depicted as a large, unlabeled dataset represented by a gray amorphous cloud of black dots, with examples in multiple languages such as Bengali, Thai, and Swahili, indicating diverse, unannotated data.

In the MODEL section, the source and target domains feed into a 'Train Reward Model' block, which is illustrated as a neural network with multiple layers of interconnected gray nodes. Two losses are computed: Loss 1, 'Domain Distribution Loss', uses a dashed circle to show that source prompt-response pairs (orange dot) are pushed close to target prompt-response pairs (gray dot), minimizing distributional divergence. Loss 2, 'Source Preference Loss', uses another dashed circle to show that source prompt + chosen response (blue dot) is pulled apart from source prompt + rejected response (red dot), preserving preference signals from the source domain. These two losses are combined via a '+' symbol.

The APPLICATIONS section at the bottom displays four scenarios: (1) Cross-Lingual, showing English to Bengali translation; (2) Simple-to-Complex, showing a simple math prompt evolving into a complex scientific explanation; (3) Few-shot-to-Full, showing basic arithmetic progressing to advanced algebraic expressions; and (4) Clean-to-Noisy, showing a clean sentence transforming into a noisy, misspelled version with emojis. Each application includes a source prompt-response pair with thumbs-up/down icons and an arrow pointing to the corresponding target transformation.

The overall structure emphasizes a dual-loss training strategy that enables reward modeling in target domains lacking labeled data by leveraging both distributional alignment and preference preservation from the source domain. The visual elements use color coding (beige for source, gray for target, orange/blue/red for different data types) and consistent shapes (circles for data clusters, rectangles for blocks, dashed circles for loss operations) to convey the workflow logically.
