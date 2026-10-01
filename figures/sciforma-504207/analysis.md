# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Contrato360 2.0: A Document and Database-Driven Question-Answer System using Large Language Models and Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17942

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the application architecture of a document processing and retrieval system, structured into two main workflows: user interaction and data ingestion. The global layout is divided into two vertical columns. The left column represents the interactive system components, while the right column details the data processing pipeline. All processing modules are depicted as blue rectangular process boxes with rounded corners and dark gray borders, while data storage components are shown as yellow cylindrical shapes with dark gray borders.

In the left column, the topmost component is the 'User interface (Streamlit)', a blue rectangle indicating the frontend layer built using Streamlit. It communicates bidirectionally with the 'Backend Agents', another blue rectangle positioned directly below it, via a double-headed arrow, signifying real-time interaction. The Backend Agents serve as the central orchestrator, connecting to two data stores: 'Contracts database (SQLite)' and 'Vectorstore (ChromaDb)', both represented as yellow cylinders. These connections are unidirectional arrows pointing from the Backend Agents to each database, indicating that the agents read from and write to these databases as needed.

In the right column, the data ingestion pipeline begins with 'PDF Documents processing', a blue rectangle at the top. This module feeds into 'Chunking and metadata generation', the next blue rectangle below it, via a downward arrow, indicating sequential processing. The output of this step flows into 'Embeddings generation', the final blue rectangle in the right column, also connected by a downward arrow. From here, a horizontal arrow points leftward to the 'Vectorstore (ChromaDb)', establishing that generated embeddings are stored in this vector database for later retrieval.

The overall structure emphasizes a clear separation between the interactive system (left) and the data preparation pipeline (right), with the Vectorstore acting as a shared resource accessible by both the Backend Agents and the Embeddings generation module. The Contracts database is exclusively accessed by the Backend Agents. The diagram uses consistent visual attributes: blue rectangles for computational processes, yellow cylinders for data storage, and gray arrows for data or control flow, with arrowheads indicating directionality. No mathematical equations or LaTeX expressions are present in the figure.
