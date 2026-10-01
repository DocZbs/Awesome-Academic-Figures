# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Contrato360 2.0: A Document and Database-Driven Question-Answer System using Large Language Models and Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17942

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a Retrieval-Augmented Generation (RAG) system for processing contracts' documents and answering user queries. The diagram is divided into two main sections: 'Contracts' documents processing towards Vectorstore' at the top, and 'RAG Question-Answer system' at the bottom, separated by a horizontal line.

In the top section, the process begins with a stack of yellow folder icons representing raw contract documents. These are fed into an orange, wavy-shaped box labeled 'Documents'. This flows into a blue rectangular module labeled 'Chunking', which outputs another orange wavy box labeled 'Chunks' (step 1). The chunks then pass through a blue rectangular module labeled 'Embedding', producing a green parallelogram labeled 'Embeddings' (step 2). These embeddings are stored in a large yellow cylinder labeled 'Vectorstore' (step 3), symbolizing a persistent vector database.

In the bottom section, the RAG query pipeline starts with a white square icon depicting a user silhouette, labeled 'User'. The user submits a question, represented by an orange wavy box labeled 'Question'. This question is processed by a blue rectangular module labeled 'Embedding', generating a green parallelogram labeled 'Embeddings' (step 4). These embeddings are sent to a blue rectangular module labeled 'Retrieve similar chunks' (step 5), which queries the Vectorstore (step 3) to retrieve relevant document chunks. The retrieved chunks are shown as an orange wavy box labeled 'Chunks' (step 6).

These retrieved chunks are then combined with the original question to form a context-aware prompt in a blue rectangular module labeled 'Generate Prompt'. This prompt is sent to a blue rectangular module labeled 'Send Prompt to LLM', which invokes a large language model to generate an answer. The output is a green parallelogram labeled 'Answer' (step 7), which is returned to the user. The entire flow is annotated with numbered steps (1–7) indicating the sequence of operations. The visual elements use distinct shapes and colors: orange wavy boxes for data (Documents, Chunks, Question, Answer), blue rectangles for processing modules (Chunking, Embedding, Retrieve similar chunks, Generate Prompt, Send Prompt to LLM), green parallelograms for intermediate embeddings, and a yellow cylinder for the Vectorstore. The diagram clearly separates the offline document preprocessing phase from the online query-response phase, emphasizing the retrieval-augmented nature of the system.
