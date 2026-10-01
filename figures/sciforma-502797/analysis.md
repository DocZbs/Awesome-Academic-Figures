# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Structural Memory of LLM Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15266

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a high-level architectural framework for LLM-based agents, emphasizing the role and integration of memory modules within the agent system. The global layout is divided into two main regions by a vertical dashed line: the left region, enclosed in a light blue dashed border, represents the external environment comprising the User and External Information sources; the right region, enclosed in a light purple dashed border, represents the core LLM-based Agents system. The User is depicted as a cartoon avatar with dark hair and rosy cheeks, labeled 'User', positioned above a large rectangular box labeled 'External Information (e.g., Preference, Database, Wikipedia, ...)', indicating diverse data sources that can be accessed by the agent. A bidirectional arrow connects the User to the 'Action' component within the agent system, signifying interactive communication. A unidirectional arrow from the 'External Information' box points to the 'Tools' component, showing that external data feeds into the agent’s tool usage. Within the LLM-based Agents region, four white rectangular modules are vertically aligned: 'Action', 'Planning', 'Tools', and 'self-evolve'. Each of these modules has a bidirectional arrow connecting it to the 'Memory Module', which is highlighted with a yellow dashed border and positioned to the right. The Memory Module contains two sub-components: 'Structural Memory', shown as a pink rectangle, and 'Memory Retrieval', shown as a green rectangle. These sub-components represent different aspects of memory handling—structural organization and retrieval mechanisms—within the agent. All connections between the agent components and the memory module are bidirectional, indicating continuous interaction and feedback loops. The figure visually emphasizes that memory is central to the agent's operation, influencing action, planning, tool use, and self-evolution. The caption clarifies that the focus of the study lies on memory modules, particularly their structural design and retrieval methods.
