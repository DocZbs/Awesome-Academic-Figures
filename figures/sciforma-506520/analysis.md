# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MIRAGE: Exploring How Large Language Models Perform in Complex Social Interactive Environments — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01652

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an evaluation framework for assessing player performance in a murder mystery game using large language models (LLMs), specifically focusing on the character 'Yimu Han'. The global layout is structured as a three-column pipeline: left column for LLM-based scoring, center column for input data (chatting & interaction history and scripts), and right column for reconstructed scripts and final metric calculation.

In the left column, the top box labeled 'LLM-Score' contains a detailed evaluation of Yimu Han’s performance across five dimensions: role-playing ability, reasoning ability, communication and cooperation ability, observational ability, and creative thinking ability. Each dimension is highlighted in yellow and followed by descriptive text. Below this, a yellow box displays the final 'LLM-Score: 75', indicating the aggregated score derived from the evaluation.

The center column consists of two stacked input modules. The upper module, titled 'Chatting & Interaction History', presents a conversation log between characters including Yimu Han, Renjie Xiu, and Zilan Hong. It includes dialogue segments marked with tags such as '<Introduction>', '<Conversation>', '<Interaction>', and '[Clue]', with specific actions like '[Ask]' or '[Investigate]' highlighted in yellow. The lower module, titled 'Scripts', contains character background information and narrative context, with entries for Yimu Han and Zilan Hong, including details about their roles, relationships, expressions, purposes, and requests. Both modules are shaded light purple and have 'Input' arrows pointing toward them from the left.

The right column features the 'Reconstructed Scripts' box, which synthesizes the input data into a coherent narrative summary of Yimu Han’s character arc in the game 'The Star of the East'. This includes her background as a former ballet dancer turned flight attendant, her relationship with Renjie Xiu, her conflict with singer Lin, and her investigative goals. A dashed gray arrow labeled 'Calculate Rouge-L' connects the 'Scripts' and 'Reconstructed Scripts' boxes, indicating the metric used to compare the generated script with the original. Below this, a yellow box displays the 'Rouge-L Score: 0.203', representing the similarity score between the reconstructed and original scripts.

Arrows indicate the flow: inputs from the left column feed into the central modules, which then contribute to the reconstruction process on the right. The dashed arrow signifies a computational comparison step, while solid arrows denote direct data flow. The entire diagram uses consistent color coding—blue headers, light purple for input data, yellow for highlighted text and scores—and clear textual labels to guide interpretation.
