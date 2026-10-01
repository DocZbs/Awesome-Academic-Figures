# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ComMer: a Framework for Compressing and Merging User Data for Personalization — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03276

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative analysis of three approaches for adapting large language models (LLMs) to new data: Textual Prompt, ComMer (Compress & Merge), and Fine-tuning / PEFT. The global layout is structured horizontally, with the three methods arranged side-by-side from left to right. At the top, two horizontal gradient bars span the width of the figure, representing trade-offs: the upper bar transitions from green (Low training cost) on the left to red (High training cost) on the right; the lower bar transitions from red (High inference cost) on the left to green (Low inference cost) on the right. This visually positions Textual Prompt as low-cost in training but high-cost in inference, and Fine-tuning/PEFT as high-cost in training but low-cost in inference, with ComMer positioned centrally, suggesting a balanced trade-off.

Each method is accompanied by a list of four attributes, each marked with either a green checkmark (✓) for a positive attribute or a red cross (✗) for a negative one. For Textual Prompt, the attributes are: ✗ Wasteful on tokens, ✗ Sensitive to position, ✓ No training required, ✓ Fast adaptation to new data. For Fine-tuning / PEFT, they are: ✓ Frugal on tokens, ✓ Position invariant, ✗ Training required, ✗ Slow adaptation to new data. ComMer, centered between the two, lists: ✓ Frugal on tokens, ✓ Position invariant, ✓ No training required, ✓ Fast adaptation to new data. These attributes are presented in rounded rectangular boxes with light green backgrounds, and the text is black.

Two light green arrows point from the positive attributes of Textual Prompt (No training required, Fast adaptation to new data) toward the corresponding attributes in ComMer, indicating that ComMer inherits these benefits. Similarly, two light green arrows point from the positive attributes of Fine-tuning / PEFT (Frugal on tokens, Position invariant) toward the same attributes in ComMer, showing that ComMer also inherits these advantages. This visual flow emphasizes that ComMer combines the strengths of both prior approaches while avoiding their weaknesses. The central box for ComMer is slightly larger and more prominent, reinforcing its role as a unifying solution. The figure’s caption explains that the goal is to adapt LLMs to new data, and ComMer is proposed as a method that integrates the benefits of both prompt-based and weight-update-based approaches.
