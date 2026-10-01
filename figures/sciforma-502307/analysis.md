# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-OphthaLingua: A Multilingual Benchmark for Assessing and Debiasing LLM Ophthalmological QA in LMICs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14304

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the CLARA workflow, a multi-agent system designed for question processing and knowledge augmentation. The global layout is structured into four main agent modules, each enclosed in a dashed rectangular boundary: Translation & Eval Agent, Knowledge Augmentation Agent, Question Rewriting Agent, and Iterative Refinement Agent. These agents are arranged in a left-to-right, top-to-bottom flow, with feedback loops connecting them to enable iterative refinement.

In the Translation & Eval Agent (top-left), the process begins with a 'Question Template' represented by a blue speech bubble with a pencil icon. This template is passed to a 'Translation' module, depicted as a light blue robot icon, which generates a translated version. The output then flows to an 'Evaluation' module, shown as a slightly darker blue robot icon, which assesses two criteria: 'Translation Quality?' and 'Context Uncertainty?'. These evaluation queries are directed to the Knowledge Augmentation Agent (top-right).

The Knowledge Augmentation Agent contains a 'Weighted RAG' component, symbolized by a blue flowchart-like diagram with interconnected nodes, which retrieves information from external sources labeled 'Textbook, Pubmed, Wiki VecDB'. These sources are visually represented by a database cylinder and multiple file icons. The retrieved data, labeled 'Retrieved Knowledge', is passed back to the Iterative Refinement Agent (bottom-right). This agent includes a 'Web Call' component, shown as a blue cloud with an infinity symbol, which queries whether the retrieved materials are 'well-grounded/relevant?'. A dashed arrow indicates a feedback loop from this evaluation back to the Web Call, suggesting iterative validation.

The Evaluation module in the Translation & Eval Agent sends a 'Question Rewrite' signal via a dashed arrow to the Question Rewriting Agent (bottom-left). This agent features a robot icon with a keyboard base, indicating its role in generating revised questions. The rewritten question is then sent to an 'Output' module, represented by the GPT logo (a blue interlocking circular design), which produces the final response.

All components are rendered in shades of blue, with solid arrows denoting direct data flow and dashed arrows indicating feedback or control signals. Text labels are placed near or within the relevant components, providing clear functional annotations. The overall structure emphasizes a modular, agent-based pipeline with dynamic feedback loops to enhance question quality and knowledge grounding.
