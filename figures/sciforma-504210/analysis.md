# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Surveillance Capitalism Revealed: Tracing The Hidden World Of Web Data Collection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17944

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the application architecture of a system designed for processing and querying PDF documents, particularly contracts, using a combination of traditional database storage and vector-based retrieval. The global layout is divided into two main vertical workflows: one on the left representing the user interaction and backend logic, and another on the right depicting the document ingestion and embedding pipeline. These workflows converge at the data storage layer.

On the left side, the topmost component is the 'User interface (Streamlit)', represented as a gray rectangular process box. It communicates bidirectionally with the 'Backend Agents', also a gray rectangular box, via thick double-headed arrows, indicating real-time interaction and request-response communication. The Backend Agents interact unidirectionally with two data stores located below: 'Contracts database (SQLite)' and 'Vectorstore (ChromaDb)', both depicted as light gray cylindrical shapes symbolizing databases. Arrows point from the Backend Agents to each database, suggesting that the agents query or write to these data sources as needed.

On the right side, the workflow begins with 'PDF Documents processing', a gray rectangular box, which feeds into 'Chunking and metadata generation' through a downward arrow. This step breaks down the documents into smaller segments and extracts relevant metadata. The output then flows into 'Embeddings generation', another gray rectangular box, where textual content is converted into numerical vectors. From here, a thick arrow points leftward to the 'Vectorstore (ChromaDb)', indicating that the generated embeddings are stored in this vector database for efficient similarity search.

All components are rendered in grayscale with consistent styling: process boxes are gray rectangles with rounded corners and vertical lines on the sides, while databases are light gray cylinders. Text within each box is centered and clearly labeled, often including technical specifics in parentheses such as '(Streamlit)', '(SQLite)', or '(ChromaDb)'. The connections between modules are represented by thick white arrows with open arrowheads, emphasizing the direction of data flow. There are no explicit equations or mathematical notations in the diagram; instead, the architecture relies on clear, sequential module interactions to convey the system’s operational logic. The overall structure emphasizes separation of concerns: user-facing logic on the left, and document preprocessing and indexing on the right, with shared data access via the two distinct databases.
