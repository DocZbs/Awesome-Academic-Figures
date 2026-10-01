# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Chained Tuning Leads to Biased Forgetting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16469

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative experimental setup for model fine-tuning, illustrating two distinct sequential tuning pathways starting from a common Base Model. The global layout is horizontal and split into two parallel workflows, arranged vertically: the top row represents one tuning order, and the bottom row represents the reverse. Each workflow consists of three rectangular modules connected by directed arrows indicating the sequence of operations.

In the top pathway, the process begins with a tall, light yellow rectangle labeled 'Base Model' on the far left. An arrow labeled 'Safety Tuning' points rightward to a medium blue square labeled 'Model A'. From there, another arrow labeled 'Capability Tuning' leads to a light green square labeled 'Model AB', signifying the final model after both stages of tuning.

In the bottom pathway, the same 'Base Model' (identical in color and position) is used as the starting point. An arrow labeled 'Capability Tuning' points to a light pink square labeled 'Model B'. Subsequently, an arrow labeled 'Safety Tuning' connects to a light peach-colored square labeled 'Model BA', representing the final model after the reversed tuning order.

All text labels are in bold black font, centered within or above/below the respective arrows. The modules are uniformly sized squares or rectangles with thin black borders. The color coding distinguishes the intermediate and final models: blue for Model A, green for Model AB, pink for Model B, and peach for Model BA. The figure visually emphasizes the contrast between tuning safety first versus capability first, as described in the caption: 'Task ordering experimental set up. Finetuning on a safety task first and then a capability task, and vice versa.' This design allows for direct comparison of the outcomes of different tuning sequences.
