# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Dehallucinating Parallel Context Extension for Retrieval-Augmented Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14905

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a methodological framework for information aggregation from multiple documents using a negative-trained large language model (LLM), referred to as 'NegTrained LLM', followed by an information-calibrated aggregation step. The global layout is left-to-right, showing a pipeline: input documents and queries on the left, processing through the LLM in the center, and aggregation and final output on the right. The structure is modular, with distinct stages for document input, query generation, model inference, and calibrated aggregation.

On the left, three documents—Doc1 (blue border), Doc2 (red border), and Doc3 (green border)—are shown, each containing a sentence mentioning a unique special magic number: 8962302, 1447065, and 5454861, respectively. Each document is paired with an identical query box (purple border) asking: 'What are all the special magic numbers for zonked-ordinary mentioned in the provided text?'. These document-query pairs feed into the central component, the 'NegTrained LLM' (light blue rounded rectangle), which processes each input independently and outputs a probability distribution over possible answers, denoted as P1, P2, and P3 for Doc1, Doc2, and Doc3 respectively. Additionally, a combined or contextually aggregated probability Pc is also shown as an input to the next stage.

The outputs P1, P2, P3, and Pc are directed to the 'Information Calibrated Aggregation' module (peach-colored trapezoid). This module computes the Kullback-Leibler divergence D_KL(Pi || Pc) between each individual probability distribution Pi and the combined distribution Pc, indicating a calibration step based on information theory. The result of this aggregation is a final answer box (purple border) displaying: 'A: 8962302, 1447065 and 5454861.' with a green checkmark, signifying correctness and completeness.

Connections are represented by arrows: solid orange arrows from each document-query pair to the LLM; dashed arrows (blue, red, green) from each document to the corresponding answer in the final output, visually linking the source of each number. A dotted blue arrow from the LLM to the aggregation module indicates the flow of probability distributions. The aggregation module sends a solid orange arrow to the final answer box. The caption 'DePaC can switch context window for multi-hop questions' suggests that this framework supports dynamic context switching, likely enabling the model to handle complex, multi-step reasoning tasks by integrating information from diverse sources.
