# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Adaptations of AI models for querying the LandMatrix database in natural language — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12961

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-agent pipeline designed for optimizing query generation from natural language questions, specifically targeting data retrieval from the LAND MATRIX database using GraphQL. The global layout is divided into two main vertical sections: Agent1 on the left and Agent2 on the right, connected by a data flow arrow indicating information transfer. Each agent is enclosed in a dashed rectangular boundary, emphasizing their modular roles within the system.

Agent1 begins with an input question: 'Where are the investments in Forestry?'. Below this, a prompt instructs a Language Model (LLM) to identify entities present in the question based on predefined values for the entity 'current_intention_of_investment', which includes a list such as Agriculture, Forestry, CONVERSATION, Renewable energy power plants, INDUSTRY, LAND_SPECULATION, MINING, OIL_GAS_EXTRACTION, and TOURISM. This prompt is displayed in a light gray rounded rectangle. The LLM processes this and outputs '[current_intention_of_investment: 'Forestry']' in a black-bordered rounded rectangle. This output is then passed to a gray oval labeled 'List of values', which represents the extracted information. A blue curved arrow connects this oval to Agent2, signifying the transfer of extracted data.

Agent2 is structured to generate a GraphQL request. It receives three components: Context, Question, and Instruction. The Context is presented in a yellow rounded rectangle and contains three elements: the schema of the LAND MATRIX database, the values of attributes mentioned in the question, and examples of similar questions with their corresponding requests. The Question is shown in a blue rounded rectangle and reiterates the original input: 'Where are the investments in Forestry?'. The Instruction is in a teal rounded rectangle and states: 'You are a GraphQL expert, given the input question and the context, please create a correct GraphQL query.' These three components are arranged vertically within Agent2’s dashed boundary. An upward arrow from the Instruction leads to an LLM, which then produces a 'GraphQL request' at the top of the diagram, enclosed in a black-bordered rounded rectangle.

Connections and arrows are used to indicate the flow of information. A downward arrow from the prompt in Agent1 points to the LLM, which then outputs to the 'List of values' oval. A blue curved arrow from this oval flows to the Context section in Agent2. Within Agent2, a vertical sequence of arrows connects the Context, Question, and Instruction to the LLM, culminating in the GraphQL request. The figure visually emphasizes the collaborative workflow where Agent1 extracts relevant parameters from the user's question, and Agent2 uses these parameters along with contextual knowledge to generate a precise GraphQL query. The caption clarifies that this pipeline involves using one LLM to extract user-defined filters, which are then incorporated into the prompt for a second LLM to produce the final query.
