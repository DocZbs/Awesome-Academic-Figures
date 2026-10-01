# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Correcting Large Language Model Behavior via Influence Function — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16451

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparative methodology for evaluating the safety of large language models (LLMs) under different training regimes and adversarial attacks. The global layout is a horizontal flowchart with two parallel training paths originating from an initial LLM box on the far left. The top path trains a 'Safe Model' using only safe data, while the bottom path trains an 'Impure Model' using both safe and unsafe data (with 'unsafe' highlighted in red). Both models are represented as solid black-bordered rectangles with bold black text. From each model, dashed arrows labeled 'Generate' point to behavior outputs: the Safe Model generates 'Safe Behavior', depicted as a light green dashed rectangle, while the Impure Model generates 'Unsafe Behavior', shown as a pink dashed rectangle. A bidirectional dashed arrow labeled 'Attack' connects the Safe Model and Impure Model, indicating an adversarial interaction between them. Additionally, a rounded rectangle labeled 'Prompts' is positioned to the right, connected by a dotted oval labeled 'Influence Query' that encloses the Prompts box and the Unsafe Behavior output, suggesting that prompts are used to elicit or influence unsafe behavior. The overall structure emphasizes the contrast between safe and unsafe training data and their resulting behaviors, with visual cues such as color (green for safe, pink for unsafe), border styles (solid for models, dashed for behaviors), and arrow types (solid for training, dashed for generation/attack, dotted for influence query) to differentiate functional roles and relationships.
