# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Knowledge Boundary of Large Language Models: A Survey — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12472

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of three mitigation techniques—Retrieval, Editing, and Fine-tuning—for addressing model-specific unknown knowledge in large language models. The global layout is structured as a horizontal workflow divided into three parallel, vertically stacked modules, each enclosed in a dashed rectangular box. On the left side, an initial 'Query' input is shown feeding into a central model represented by a stylized neural network icon (resembling the OpenAI logo), which produces an incorrect 'Response' marked with a red 'X'. This indicates the baseline failure case before applying any mitigation technique.

On the right side, the same 'Query' is processed through the three mitigation methods, leading to a correct 'Response' marked with a green checkmark, demonstrating the effectiveness of these approaches.

Each module contains a labeled box with a distinct color: Retrieval (orange), Editing (green), and Fine-tuning (blue). These boxes are followed by visual representations of their respective inputs and processes.

In the Retrieval module, an icon depicting documents with a magnifying glass symbolizes 'External Knowledge', which is combined via a '+' sign with three blank square boxes labeled 'Parameters'. An arrow leads to three output squares labeled 'Inference', with the last one containing a double quotation mark symbol, indicating generated text or response.

In the Editing module, a molecular-like graph with a central red node represents 'Location', indicating the specific part of the model being edited. This is combined with three 'Parameters' boxes, leading to three output boxes labeled 'Model Editing', where the last box has diagonal hatching, suggesting modification or update.

In the Fine-tuning module, three document icons above a database cylinder represent 'Data', which is combined with three 'Parameters' boxes. The output consists of three hatched boxes labeled 'Supervised Fine-tuning', indicating updated parameters after training.

Arrows connect the Query to each module’s input, and from each module’s output to the final model icon on the right, which then generates the correct Response. Dashed arrows indicate the baseline path without mitigation, while solid arrows show the enhanced paths through each technique. The figure visually contrasts the failure of the unmitigated model with the success achieved through these three distinct strategies.
