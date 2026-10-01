# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Enhancing Discoverability in Enterprise Conversational Systems with Proactive Question Suggestions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10933

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-tiered framework for next question suggestion in enterprise conversational AI systems, divided into a 'Chat-Session Level' (left and center) and a 'Population Level' (right). The global layout is structured horizontally, with the Chat-Session Level enclosed in a large dashed rectangle and further subdivided into two dotted regions labeled 'Response Generation' (left) and 'Next Question Suggestion' (center). The Population Level is a separate dashed rectangle on the right, connected to the central module.

At the Chat-Session Level, the Response Generation module begins with a 'User query' (light blue speech bubble) feeding into an 'Embedding Model' (light green rounded rectangle). This model retrieves relevant documents from a 'Document Index' (gray cylinder), producing 'Retrieved Documents' (stacked white rectangles). These documents, along with the user query, are input into an 'LLM' (light green rounded rectangle), which generates an 'AI response' (pink speech bubble). The user query and AI response are also stored in a 'Query History' box (white rectangle) for session context.

The Next Question Suggestion module receives inputs from both the current user query and the Query History, as well as the AI response from the previous LLM. These inputs are processed by a second 'LLM' (light green rounded rectangle), which outputs multiple 'Suggested Question' boxes (light blue rectangles labeled 'Suggested Question 1', 'Suggested Question 2', etc.).

On the Population Level, a 'Population-level Interaction History' (white rectangle) feeds into a 'User Intent Analysis' component (light blue oval), which produces 'Question Categories' (white rectangle). These categories are sent to the central LLM in the Next Question Suggestion module, providing contextual guidance based on aggregated user behavior.

Connections are represented by solid black arrows indicating data flow. Dashed lines connect the user query and AI response to the Query History, and dotted lines outline the internal modules within the Chat-Session Level. The figure includes labels for each component and uses distinct shapes and colors to differentiate between user inputs (speech bubbles), models (rounded rectangles), data stores (cylinder), and output suggestions (rectangles). The caption clarifies that the framework integrates population-level insights to enhance session-level question suggestions, with response generation included for context.
