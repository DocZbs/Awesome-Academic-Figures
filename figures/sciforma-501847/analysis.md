# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generating Long-form Story Using Dynamic Hierarchical Outlining with Memory-Enhancement — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13575

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for querying relevant content from a structured knowledge base, driven by an input outline. The global layout is a left-to-right flowchart, beginning with an input box labeled 'Outline' on the far left, progressing through several processing stages, and concluding with a relevance filtering module on the right. The entire process is sequential, with arrows indicating data flow between modules.

The first module, 'Outline', is represented as a dashed rectangular box containing sample text: '1. Rising Action: Gabriel faces the challenges...'. This serves as the initial input to the system. From this, a solid black arrow leads to a light blue rounded rectangle labeled 'LLM', representing a Large Language Model. The LLM processes the outline and outputs entities, depicted as a cluster of blue circles of varying sizes, labeled 'Entity'. These entities are then transformed into a 'Knowledge Graph', shown as a network of interconnected blue nodes of different sizes, symbolizing relationships among entities.

From the Knowledge Graph, another arrow leads to a rectangular table labeled 'Quadruple', which contains multiple rows formatted as '<sub_i, act_i, obj_i, idx_i>', representing structured knowledge tuples where each row corresponds to a subject, action, object, and index. This table is the primary structured output from the knowledge graph.

The quadruples are then fed into a dashed rectangular box labeled 'Relevance filtering', which encapsulates the final processing stage. Inside this box, there are three horizontal light blue bars representing intermediate filtered results, with an ellipsis indicating more such entries. A separate light blue rounded rectangle within this box is labeled 'calculate the similarity score', indicating a computational step. An arrow from the quadruple table points to this scoring module, while another arrow from the original 'Outline' box also feeds into it, suggesting that similarity is computed between the input outline and each quadruple. The output of the scoring module is directed to the filtered results, which are then processed by a step labeled 'select top-k score content', indicating selection of the highest-scoring items. Finally, a thick black arrow exits the 'Relevance filtering' box, pointing to the right, and is annotated with the caption: 'the last arrow points to the historical information semantically related to the input content', indicating the final output consists of semantically relevant historical data derived from the input outline.

All connections are represented by solid black arrows, with the exception of the feedback or dual-input path from the Outline to the similarity score calculation, which is a direct line. The visual style uses consistent colors—light blue for processing modules, dark blue for entities and graph nodes, and gray for the input outline box—and clear labels for each component, ensuring clarity in the workflow.
