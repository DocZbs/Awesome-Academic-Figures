# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Surveillance Capitalism Revealed: Tracing The Hidden World Of Web Data Collection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17944

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an agents-based architecture designed for processing user queries related to contracts, integrating retrieval-augmented generation (RAG), SQL querying, and large language model (LLM) reasoning, with optional chart generation. The global layout is a directed workflow starting from the left with the User and progressing rightward through decision points and processing modules before returning responses to the User. The structure is modular, with distinct agents performing specialized tasks, connected via labeled arrows indicating data flow and control logic.

Visual modules include rectangular process blocks with rounded corners for agents (e.g., 'Router Agent', 'RAG Agent', 'SQL Agent', 'Prompt generation', 'LLM Answer generation', 'Graph Agent'), depicted in gray with white text. Decision points are represented by diamond-shaped nodes labeled 'Router Agent'. Data storage components are shown as cylindrical shapes: 'Contracts vectorstore' and 'Contracts database', both in light gray. The User is represented by a rectangular icon containing a stylized human figure. All modules have clear labels inside them, and connecting arrows are annotated with descriptive text such as 'Send question', 'Retrieve similar chunks', 'Execute SQL query', 'Retrieved data', 'Send LLM', 'Generate chart', 'Send answer', and 'Send chart'.

The workflow begins when the User sends a question to the first Router Agent. This agent routes the query to either the RAG Agent or the SQL Agent based on context. The RAG Agent retrieves similar document chunks from the Contracts vectorstore, while the SQL Agent executes an SQL query against the Contracts database. Both pathways converge at the Prompt generation module, which receives 'Retrieved data' from either source and constructs a prompt to send to the LLM Answer generation module. The LLM Answer generation module processes this prompt and generates an answer, which is sent to a second Router Agent. This second Router Agent decides whether to route the answer directly back to the User or to the Graph Agent for chart generation. If routed to the Graph Agent, it generates a chart and sends it back to the User. Otherwise, the answer is sent directly to the User. The entire system operates as a closed-loop interaction between the User and the agent network, enabling dynamic response generation with optional visual output.
