# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Towards the Anonymization of the Language Modeling — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02407

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage workflow for de-identifying clinical reports, developed by the Hospices Civils de Lyon (HCL), involving pre-trained language models and fine-tuning for named entity recognition (NER) of private data. The global layout is linear and sequential, progressing from left to right and then downward, with distinct modules representing different stages of model development and application. The top row shows the initial pre-training and domain adaptation phase, while the bottom row depicts the final fine-tuning step for privacy detection.

In the first stage, a French language model, labeled 'CamemBERT (A)', is shown as a light blue rounded rectangle. It is initialized through a fill-mask task on general French texts, represented by a purple stack of documents with an arrow pointing toward the model. This indicates the base model is trained on broad French language data. The second stage involves adapting this model to medical domains: an arrow leads from CamemBERT (A) to 'CamemBERT (A')', another light blue rounded rectangle, which is described as 'specialized on medical'. This transition is driven by a fill-mask task on medical texts, depicted by a green stack of documents above the arrow.

The third and final stage involves fine-tuning the specialized model for detecting private data using NER. A vertical arrow points downward from CamemBERT (A') to a pink rounded rectangle labeled 'token classifier (B')'. Above this arrow, the text 'fine-tuning to detect private data (NER)' is written, and a yellow stack of documents is placed beside it, symbolizing the training data used for this task. The token classifier (B') is the output component designed to identify sensitive information within clinical reports.

All connections are represented by solid arrows indicating the direction of data flow and model evolution. The visual attributes include color-coded document stacks (purple for general French, green for medical, yellow for NER training) and distinct model boxes (light blue for CamemBERT variants, pink for the final classifier). Text labels are placed directly below or adjacent to each module to clarify their roles. The entire diagram is structured to reflect a clear progression: from general language modeling to domain-specific adaptation, and finally to task-specific fine-tuning for privacy protection.
