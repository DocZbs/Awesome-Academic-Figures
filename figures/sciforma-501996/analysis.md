# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13746

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two contrasting RAG (Retrieval-Augmented Generation) training paradigms: (a) Traditional RAG Training Paradigm and (b) Preference-Aligned RAG Training Paradigm. The global layout is divided into two main sections, each illustrating a distinct workflow for training a Retrieval-Augmented Language Model (RALM), with visual elements arranged to show data flow, model transformations, and evaluation outcomes.

In section (a), the traditional paradigm begins with a user query composed of a 'Question' and retrieved 'Docs'. The 'Question' asks about the final voting results in seven key U.S. swing states. The 'Docs' include four snippets, some containing relevant facts (e.g., states won by Trump) and others containing harmful or irrelevant content (e.g., labeling Trump as a 'hateful racist'). These inputs are fed into an 'Original RALM', which generates a response. This response contains factual inaccuracies ('Harris won all the remaining ones') and noise, marked with a sad face emoji and labeled 'Unfaithful'. A red arrow labeled 'SFT' (Supervised Fine-Tuning) points from the Original RALM to an 'SFT RALM', indicating a training step using a 'Training Set' composed of Question, Docs, and Response triples. The SFT RALM produces a response that is factually correct but includes harmful content ('Donald Trump as a hateful racist'), marked with a neutral face emoji and labeled 'Correct but insufficient'.

Section (b) illustrates the preference-aligned paradigm. It starts similarly with a 'User Query' containing 'Question' and 'Docs'. The 'Original RALM' generates multiple responses, shown as 'Response 1 (Rejected)' and 'Response 2 (Chosen)'. Response 1 includes harmful content ('hateful racist'), while Response 2 is factually accurate and cites source [1]. Both responses are evaluated by a 'Reward Model', which receives feedback from a human 'Judge' indicated by a hand icon pointing to green (positive) and red (negative) emojis. The Reward Model outputs scores that guide the alignment process. A red arrow labeled 'Align' connects the Original RALM to an 'Aligned RALM'. The Aligned RALM generates a final response that is both factually accurate and free of harmful content, citing sources appropriately and providing detailed voting percentages for states like Pennsylvania and North Carolina. This response is marked with a heart-eyed smiley emoji, indicating high quality. The feedback loop from the Judge to the Reward Model emphasizes iterative improvement based on human preferences.

Visual modules include rounded rectangles for models (Original RALM, SFT RALM, Aligned RALM, Reward Model), dashed boxes for input groups (Question, Docs, Training Set, User Query), and light blue boxes for responses. Text within responses uses color coding: pink highlights harmful content, green highlights factual content from documents, and black denotes neutral text. Arrows indicate data flow and training processes, with red arrows specifically denoting alignment or fine-tuning steps. The figure effectively contrasts the limitations of supervised fine-tuning with the benefits of preference-based alignment in producing safe, accurate, and comprehensive responses.
