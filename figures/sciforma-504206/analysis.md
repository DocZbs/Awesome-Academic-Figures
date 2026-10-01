# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Contrato360 2.0: A Document and Database-Driven Question-Answer System using Large Language Models and Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17942

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-agent methodology workflow designed to process user queries by routing them through specialized agents to retrieve and synthesize information from different data sources, ultimately generating answers or visualizations. The global layout is a horizontal flowchart with a clear left-to-right progression, starting from the user on the far left and ending with feedback loops back to the user. The structure is divided into two main processing branches: one for retrieving unstructured data via RAG (Retrieval-Augmented Generation) and another for structured data via SQL, both converging into a unified prompt generation step before final answer or chart production.

Visual modules are represented using distinct shapes and colors. The 'User' is depicted as a white rectangle with a black icon of two stylized human figures. Two 'Router Agent' components are shown as green diamonds, indicating decision points in the workflow. All functional agents—RAG Agent, SQL Agent, Prompt generation, LLM Answer generation, and Graph Agent—are represented as blue rectangles with double vertical lines, signifying process steps. Data storage components, namely 'Contracts vectorstore' and 'Contracts database', are yellow cylinders, symbolizing databases or repositories.

The workflow begins when the User sends a question to the first Router Agent. This agent routes the query to either the RAG Agent or the SQL Agent based on the nature of the question. The RAG Agent retrieves similar chunks from the Contracts vectorstore, while the SQL Agent executes an SQL query on the Contracts database. Both agents return retrieved data to the Prompt generation module. This module combines the retrieved data and sends it to the LLM Answer generation component, which produces a textual response. The output is then sent to a second Router Agent, which decides whether to send the answer directly to the User or route it to the Graph Agent for visualization. If routed to the Graph Agent, it generates a chart, which is then sent back to the User. Simultaneously, the textual answer is also sent to the User. The connections between modules are indicated by solid arrows with labels describing the action or data being transferred, such as 'Send question', 'Retrieve similar chunks', 'Execute SQL query', 'Retrieved data', 'Send LLM', 'Send answer', and 'Generate chart'. The diagram includes feedback loops: the Graph Agent sends a chart to the User, and the LLM Answer generation sends an answer to the second Router Agent, which then forwards it to the User. The entire system is designed to handle diverse query types by intelligently routing them to appropriate data retrieval methods and producing either textual answers or visual charts as needed.
