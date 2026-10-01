# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Typhoon 2: A Family of Open Text and Multimodal Thai Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the 'Agentic Refine Ground Truth Framework', a hierarchical agent-based system designed for content refinement through multi-level reasoning and retrieval. The global layout is structured as a directed workflow from top to bottom, with parallel input streams converging into a central agent hierarchy and culminating in a final output. On the top left, two distinct models—'Typhoon 1.5X' (purple rectangle) and 'Cutting-Edge Model_n' (yellow rectangle)—serve as initial intelligence sources. These feed into the first level of agents: 'Agent-Grandparents (1st)' (light blue rectangle), which receives inputs from both models and also from an 'Initial content' block (light gray rectangle). This 'Initial content' is processed via two submodules: 'Docling' and 'TF-ID', which extract content in markdown format and feed it into the 'Chunk Pages / Overview' module (large gray rectangle). This module explains that pages are broken into smaller chunks for efficient retrieval during query processing. The 'Chunk Pages / Overview' feeds into all three levels of agents: Agent-Grandparents (1st), Agent-Parents (2nd) (pink rectangle), and Agent-Grandchildren (3rd) (orange rectangle). Additionally, a large light blue rectangle labeled 'Meta-Prompt-CoT' on the far left connects directly to all three agent levels, suggesting it provides contextual or prompting guidance. The agent hierarchy operates sequentially: Agent-Grandparents transfer thoughts to Agent-Parents, which then transfer refined thoughts to Agent-Grandchildren. Finally, Agent-Grandchildren selects the dominant output, producing 'final content (markdown format)' (green rectangle) at the bottom. All connections are represented by solid black arrows indicating directionality of data or control flow. Text labels such as 'transfer thoughts', 'transfer thoughts & refined', and 'select dominant' clarify the nature of information passing between agent levels. The visual modules vary in color and shape (all rectangles) to distinguish roles: purple and yellow for source models, light blue for initial agent level and meta-prompting, pink and orange for intermediate agent levels, gray for content processing and chunking, and green for final output. The diagram emphasizes a cascading refinement process where content is progressively refined across generational agent layers, guided by external models and retrieval systems.
