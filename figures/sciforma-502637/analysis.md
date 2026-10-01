# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Dehallucinating Parallel Context Extension for Retrieval-Augmented Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14905

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the DePaC framework, which comprises two main stages: (1) Negative Training and (2) Information-Calibrated Aggregation. The global layout is divided into two large green-dashed boxes representing these stages, arranged sequentially from left to right. The first stage, 'Negative Training,' shows a fine-tuning process where a Large Language Model (LLM) is trained on both positive and negative examples. Positive examples consist of a document (Doc_p, green box) paired with a question (Q, purple box) and a correct answer sequence (A_1:m, magenta box), while negative examples use a different document (Doc_n, red box) with the same question but an incorrect or unknown answer (UNK, magenta box). An orange arrow labeled 'finetune' points from these inputs to a light blue rounded rectangle labeled 'LLM'.

Below this, concrete examples demonstrate the application: three documents (Doc1, Doc2, Doc3) are shown in rounded rectangles with green, red, and pink borders respectively, each containing family relationship facts. Each document is paired with the same question, 'Who is Alice’s grandfather?', in a purple rounded rectangle. These inputs feed into a larger light blue rounded rectangle labeled 'NegTrained LLM', indicating the model after negative training.

The second stage, 'Information-Calibrated Aggregation', begins with outputs from the NegTrained LLM: multiple probability distributions P_1, P_2, P_3, and P_c, each represented as a bar chart with three categories: 'Charlie', 'Unknown', and 'Wendy'. For example, P_1 shows Charlie with probability 0.5, Unknown with 0.2, and Wendy with 0.1. These distributions are fed into a peach-colored trapezoid labeled 'D_KL(P_i || P_c) Information Calibrated Aggregation', indicating the use of Kullback-Leibler divergence for calibration. The output is a single aggregated probability distribution with Charlie at 0.5, Unknown at 0.2, and Wendy at 0.2. This leads to the final answer, 'A: Charlie.', displayed in a purple rounded rectangle with a green checkmark, signifying correctness.

Connections are shown via orange arrows: from the training data to the LLM, from the documents and questions to the NegTrained LLM, from the LLM's outputs to the aggregation module, and finally from the aggregation result to the final answer. The visual modules use distinct colors and shapes: documents are colored green, red, or pink; questions and answers are in purple; the LLMs are light blue; probability distributions are bar charts; and the aggregation module is a peach trapezoid. Text labels are clear and positioned near relevant components, including mathematical notation D_KL(P_i || P_c) within the aggregation block.
