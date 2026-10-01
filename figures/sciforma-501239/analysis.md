# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

When to Speak, When to Abstain: Contrastive Decoding with Abstention — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12527

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a four-stage pipeline for constructing a final dataset from test data, designed to evaluate models based on parametric and contextual knowledge. The global layout is a horizontal flowchart divided into four main stages: Initial Dataset Construction, Parametric Knowledge Estimation, Contextual Knowledge Estimation, and Final Dataset Construction. Each stage is enclosed in a rounded rectangular box, with arrows indicating the forward progression of data through the pipeline. A legend at the top left indicates that white boxes represent selected samples, while hatched boxes denote samples not used.

In the first stage, 'Initial Dataset Construction', a database icon labeled 'Test Data' feeds into a large white rectangle labeled D_init, representing the initial dataset. This dataset is then processed in the second stage, 'Parametric Knowledge Estimation'. Here, D_init is split into three components based on a threshold r relative to η: a white box labeled D_P=0 (r=0), a hatched box (not used), and another white box labeled D_P=1 (r>η). These are combined into a central white box labeled D_P, which represents the parametric knowledge subset. Text annotations clarify that D_P=0 corresponds to 'Without parametric knowledge p_i=0' and D_P=1 to 'With parametric knowledge p_i=1'.

The third stage, 'Contextual Knowledge Estimation', takes D_P and further processes it using train data from a database icon. This stage splits samples into two categories: those with relevant context (D_C=1, r>η, white box) and those with irrelevant context (D_C=0, r=0, hatched box). The relevant context samples are marked with a document icon labeled 'Irrelevant Context Candidate'. The two subsets are combined via a '+' symbol, indicating their union.

In the final stage, 'Final Dataset Construction', the output from the previous stage is processed to balance the number of samples, resulting in a final dataset D, represented by a white box. From this final dataset, four scenario types are derived and listed in a box titled 'Answerable Scenarios' and 'Unanswerable Scenario'. These scenarios are defined by combinations of parametric (P) and contextual (C) knowledge flags: ① P=1, C=1: {x_i, c_i^+, y_i, p_i=1}; ② P=1, C=0: {x_i, c_i^-, y_i, p_i=1}; ③ P=0, C=1: {x_i, c_i^+, y_i, p_i=0}; ④ P=0, C=0: {x_i, c_i^-, y_i, p_i=0}. The relevant context c_i^+ is highlighted in blue, and irrelevant context c_i^- in red, visually distinguishing them. Dotted lines connect the final dataset D to these scenario definitions, indicating their derivation. The entire process emphasizes filtering and categorizing samples based on their parametric and contextual knowledge properties to construct a balanced, scenario-specific testbed.
