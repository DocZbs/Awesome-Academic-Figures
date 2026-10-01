# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a memory-augmented reasoning framework using a JSON-encoded memory structure, specifically applied to a code retrieval task. The global layout is divided into two horizontal sections: the top section represents the context provided to an LLM, while the bottom section shows the processing pipeline involving the LLM and memory update. The top row contains four rectangular boxes aligned horizontally, each representing a component of the context: 'Query' (light blue), 'Schema' (light green), 'Memory (i)' (light yellow), and 'Chunk (i)' (light red). Below these, a gray bar labeled 'Context' spans across them, indicating they are combined as input. The bottom row begins with a white box labeled 'Task Instruction', which feeds into a light green rounded rectangle labeled 'LLM'. The LLM outputs to a purple box labeled 'Update (i+1)', containing a JSON patch operation that adds a new candidate function 'bar' with a purpose string and a percent_match value of 0.8. An arrow labeled 'JSON update' points from this update box to another light yellow box labeled 'Memory (i+1)', showing the updated memory state with the new 'bar' entry added to the candidates dictionary. The visual modules are distinguished by color and shape: Query, Schema, Memory (i), Chunk (i), and Memory (i+1) are all rectangular with solid borders; Task Instruction is a white rectangle; LLM is a rounded rectangle; Update (i+1) is a purple rectangle. Text within each module describes its content: Query contains a natural language search request; Schema defines a Python-like class structure for FuncMem with fields purpose, percent_match, and candidates; Memory (i) and Memory (i+1) show JSON objects with a candidates dictionary containing function names and their associated properties; Chunk (i) displays a Python function definition for 'bar'. The connections are directed arrows: one from Task Instruction to LLM, another from the Context bar to LLM, and a third from Update (i+1) to Memory (i+1) labeled 'JSON update', indicating the flow of information and the programmatic modification of memory. This workflow demonstrates how the LLM, prompted with task-specific context including a schema and current memory, generates a structured update that modifies the memory state for subsequent steps.
