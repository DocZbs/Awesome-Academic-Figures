# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

InfoTech Assistant: A Multimodal Conversational Agent for InfoTechnology Web Portal Queries — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16412

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the system architecture of the InfoTech Assistant, a comprehensive framework designed for intelligent information processing and user interaction. The global layout is structured as a flowchart with distinct functional modules arranged from left to right, depicting the data and control flow from user input to system output. The architecture begins on the far left with 'Users', represented by an icon of two human figures, who interact with the system through a 'Display' component shaped as a hexagon containing icons for chat and a laptop. This Display is initiated by a 'Terminator' oval labeled 'Start'. From the Display, the flow proceeds to a circular 'Connector' node, which acts as an intermediary between the user interface and the core system components.

The central part of the architecture features the 'OS LLMStudio' module, depicted as a rectangle with a blue cube logo, serving as the operating system environment for the application. The Connector links bidirectionally to LLMStudio, indicating real-time communication. LLMStudio connects to several storage and processing units: a 'Hard disk internal Storage' cylinder, a 'Database' cylinder, and a 'Cloud' cloud-shaped icon, all of which are managed by a diamond-shaped 'Process Manager' node containing a hierarchical tree icon. The Process Manager coordinates data flow between these storage systems and the core processing pipeline.

On the top center, a green folder icon labeled 'Website' feeds into a stack of documents labeled 'Scraped Documents', which then enters a dashed rectangular boundary on the right side of the diagram. This boundary encapsulates the main data processing pipeline, starting with a process box titled 'Data Scraping, Cleaning, Pre Processing'. This step feeds into another process box labeled 'NLP: LLM Model, Transformers, SpaCy, Flask', indicating the use of natural language processing techniques and specific tools. This NLP module connects bidirectionally to a 'Data I/O' parallelogram containing a green gear icon, suggesting input/output operations.

From the NLP module, the flow continues to a process box labeled 'RAG, Semantic matching, Image Extraction', which integrates retrieval-augmented generation and multimodal processing. This module connects to the 'Response Generation layer', which produces the final output. A decision diamond labeled 'Decision' follows, with two paths: 'Yes' leads back to Data I/O, forming a feedback loop, while 'No' leads to an 'Exit' terminator symbol, which then connects to a 'Stop' terminator at the bottom right, concluding the process.

All connections are represented by solid black arrows, indicating the direction of data or control flow. Bidirectional arrows are used where modules exchange data in both directions, such as between the Process Manager and storage units, and between the NLP module and Data I/O. The visual attributes include standard flowchart shapes: ovals for start/stop, hexagons for display, circles for connectors, diamonds for decisions, rectangles for processes, cylinders for databases, and clouds for cloud storage. Text labels are clear and placed within or adjacent to each module. The dashed boundary on the right visually groups the core data processing stages, emphasizing their integration as a cohesive subsystem.
