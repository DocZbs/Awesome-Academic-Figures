# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UAlign: Leveraging Uncertainty Estimations for Factuality Alignment on Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11803

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two scenarios, labeled (a) and (b), demonstrating how different uncertainty estimation strategies influence the response generation of a Policy LLM when answering a question about which country has the fourth largest land area in the world. The overall layout is divided into three main columns: 'Question', 'Uncertainty Estimations', and 'Response'. A dashed horizontal line separates scenario (a) from scenario (b).

In both scenarios, the 'Question' column features a user icon with a laptop, emitting a yellow speech bubble containing the query: 'Which country has the fourth largest land area in the world?'.

In scenario (a), the 'Uncertainty Estimations' column displays a gray rounded rectangle listing five candidate answers: 'The U.S.', 'It’s U.S.', 'China.', 'It’s Brazil.', and 'Canada.'. The first two are marked with green checkmarks, indicating correctness, while the last three are marked with red crosses, indicating incorrectness. This set of candidates flows via a gray arrow to a blue cartoon robot icon labeled 'Uncertainty Estimation Models'. From this model, another arrow leads to a peach-colored rounded rectangle displaying 'Conf. 40%', representing confidence. This confidence score then flows via an arrow to a green cartoon robot icon labeled 'Policy LLM', which emits a peach-colored speech bubble stating 'I’m not sure.', marked with a red cross to indicate an incorrect or suboptimal response.

In scenario (b), the same question is posed. The 'Uncertainty Estimations' column again shows the same five candidate answers, but now the correct ones ('The U.S.', 'It’s U.S.') are enclosed in a dashed green box, while the incorrect ones ('It’s Brazil.', 'Canada.', 'China.') are enclosed in a dashed red box, visually emphasizing the distinction between correct and incorrect candidates. The flow proceeds similarly through the blue 'Uncertainty Estimation Models' robot to a peach-colored box that now includes both 'Conf. 40%' and 'Entro. 1.33', indicating that entropy is also considered as part of the uncertainty measure. This enriched uncertainty signal flows to the green 'Policy LLM' robot, which now emits a peach-colored speech bubble stating 'It’s the U.S.', marked with a green checkmark to indicate a correct and optimal response.

The figure thus contrasts two approaches: (a) using only confidence, leading to a cautious but incorrect response, and (b) using both confidence and entropy, enabling the Policy LLM to select the correct answer despite moderate confidence. The visual elements include distinct icons for users, uncertainty models, and policy LLMs, color-coded feedback marks (green checks and red crosses), and labeled boxes for metrics. The overall structure emphasizes the importance of incorporating multiple uncertainty measures to improve the reliability and accuracy of LLM responses.
