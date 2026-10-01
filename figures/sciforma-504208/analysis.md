# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Surveillance Capitalism Revealed: Tracing The Hidden World Of Web Data Collection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17944

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Retrieval-Augmented Generation (RAG) system for processing contracts' documents and answering user queries. The diagram is divided into two main horizontal sections: the top section labeled 'Contracts' documents processing towards Vectorstore' and the bottom section labeled 'RAG Question-Answer system'.

In the top section, the process begins with raw documents represented by a stack of files icon. These documents are passed through a 'Chunking' module, which splits them into smaller segments labeled 'Chunks'. This step is marked with number 1. The chunks then undergo an 'Embedding' process, transforming them into dense vector representations labeled 'Embeddings', indicated by step 2. These embeddings are stored in a cylindrical database labeled 'Vectorstore', marked as step 3.

The bottom section details the query-response workflow. A user, represented by a human icon, submits a 'Question'. This question is processed through an 'Embedding' module to generate its corresponding 'Embeddings', shown as step 4. These embeddings are used to query the 'Vectorstore' via a 'Retrieve similar chunks' module, marked as step 5. The retrieved relevant 'Chunks' are then fed into a 'Generate Prompt' module, step 6, where they are combined with the original question to form a context-aware prompt. This prompt is sent to a Large Language Model (LLM) via a 'Send Prompt to LLM' module. Finally, the LLM generates an 'Answer', which is returned to the user, completing the cycle, marked as step 7.

All modules are depicted as gray rectangular or parallelogram-shaped boxes with rounded corners, except for the 'Vectorstore' which is a vertical cylinder. Text labels inside each box clearly indicate the function of the module. Arrows indicate the direction of data flow between modules, with numbered steps highlighting the sequence of operations. The overall layout is linear and sequential, emphasizing the pipeline nature of both the document preprocessing and the real-time query handling phases.
