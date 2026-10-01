# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Semi-supervised Credit Card Fraud Detection via Attribute-Driven Graph Representation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18287

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a typical credit card fraud detection process used by a card issuer, structured as a sequential workflow with decision branches and feedback loops. The global layout is horizontal and left-to-right, beginning with an 'Online Payment' initiation on the far left and progressing through multiple stages of validation, prediction, and auditing before reaching final outcomes. The diagram uses rectangular boxes with bold black borders to represent major processing steps, icons to denote specific actions or statuses, and gray arrows to indicate the flow direction.

The process starts with an 'Online Payment' icon, depicted as a POS terminal and a smartphone with a credit card and dollar symbol, labeled accordingly. This triggers the first step: 'Account Check', represented by a black-bordered rectangle containing the questions 'Sufficient Balance?' and 'Blocked Account?'. From here, two paths diverge based on the outcome: if the account check fails, a gray arrow leads to a 'Rejected' box at the top right, accompanied by a green gear icon with a checkmark and a red credit card with a prohibition symbol. If the account check passes, the flow continues downward to the 'Predictive Model' box.

The 'Predictive Model' box contains an icon of a person under an umbrella writing on a notepad, symbolizing risk assessment or fraud detection. An arrow from this box points to a horizontal color gradient bar labeled 'Score', transitioning from green (low risk) to red (high risk), indicating the output of the model. Below this score bar, a red circular warning icon with an exclamation mark signifies potential fraud. From the score output, two paths emerge: one leads to a 'Manual Audit' box, shown as a document icon with a person and upward arrow, which then connects to a clipboard icon with a red checkmark, representing successful transaction approval. The other path from the score bar loops back to the 'Feedback' box, which is a simple black-bordered rectangle. This feedback loop feeds into the 'Predictive Model', suggesting continuous learning or model refinement.

Additionally, there is a direct arrow from the 'Manual Audit' stage back to the 'Feedback' box, reinforcing the idea that audit outcomes contribute to improving the predictive model. The entire diagram emphasizes a real-time, automated fraud detection system where initial account checks are followed by machine learning-based scoring, with human intervention reserved for high-risk cases, and all outcomes contributing to model improvement via feedback.
