# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LitLLMs, LLMs for Literature Review: Are we there yet? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15249

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a top-to-bottom flowchart illustrating a data processing pipeline for creating and querying FAISS indexes using 150M SPECTER2 embeddings. The global layout is linear and vertical, divided into three main sections: Input, Search Process, and Output, each enclosed in a light gray rectangular container with rounded corners. The entire diagram is set against a dark gray background, enhancing contrast and readability.

At the top, under the 'Input' section, two rectangular boxes represent the initial data sources. The left box, labeled 'Query File', is connected by a downward arrow to the 'Search Process' section. The right box, labeled '908 JSONL.GZ Files', feeds into an intermediate step called 'Index Creation'. This step contains two nested boxes: the upper one reads 'Create 908 FAISS Indices', and the lower one reads '908 FAISS Index Files', indicating the output of this phase. Both the 'Query File' and the '908 FAISS Index Files' are connected via arrows to the 'Search Process' section.

The central 'Search Process' section is the largest container and contains four sequential steps, each represented by a dark gray rectangular box with white text. The first step is 'Search Across all Indices', which receives inputs from both the query file and the index files. This leads to 'Collect Top K=100 Results from Each Index', followed by 'Combine and Sort All Results', and finally 'Select Overall Top K=100 Results'. These steps are connected by solid downward arrows, indicating a strict sequential workflow.

At the bottom, under the 'Output' section, a single box labeled 'Final Results File' receives input from the last step of the search process. This signifies the final deliverable of the pipeline.

All text within the boxes is centered and uses a clean, sans-serif font. The arrows are thin, solid lines with classic arrowheads, clearly indicating the direction of data flow. The diagram emphasizes a modular, step-by-step approach, where index creation is a preprocessing stage, and the search process is a multi-stage retrieval mechanism designed to aggregate and rank results across multiple FAISS indexes before producing a consolidated output.
