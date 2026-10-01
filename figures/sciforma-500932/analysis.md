# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Making FETCH! Happen: Finding Emergent Dog Whistles Through Common Habitats — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12072

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart of the EarShot system, designed to detect dog whistles in social media posts. The global layout is left-to-right, depicting a sequential pipeline starting from raw input data and progressing through embedding, similarity search, and two alternative detection pathways. The process begins on the far left with 'Social Media Posts', represented by logos of Gab (green), Reddit (orange), and Twitter (blue), indicating diverse data sources. These posts are fed into an 'Embed Posts' module, symbolized by a yellow bird-like icon with angry eyes, which transforms the textual content into dense vector representations. The output of this step is visualized as a scattered set of blue dots in a 2D space, representing the embedded posts. Next, a 'Nearest Neighbor Lookup' step is shown, where a red dot labeled 'Post with known dog whistle' serves as a query point, and black lines radiate outward to its closest neighbors among the blue dots, illustrating the retrieval of semantically similar posts. From this point, the pipeline branches into two distinct paths, labeled (1) and (2). Path (1), titled 'LLM Direct', involves a direct query to a large language model, depicted as a cartoon llama icon, which outputs a red whistle symbol, indicating detection of a dog whistle. Path (2), labeled 'BERT/LLM Predict', uses a robot-like icon to represent a BERT or LLM-based binary classifier. This model's output is a golden key icon, labeled 'Keyword Extraction', which then leads to the same red whistle symbol, signifying detection. The figure visually emphasizes that both paths converge on the same detection outcome but differ in computational cost: path (1) is described as more computationally expensive due to direct LLM prompting, while path (2) is cheaper, relying on keyword extraction and binary prediction. All elements are rendered in simple, clean line art with distinct colors—blue for embeddings, red for known dog whistles and detection output, yellow for the embedding model and extracted keywords, and black for structural components and text. The overall structure is linear with a clear fork-and-converge pattern, effectively communicating the dual-path detection strategy of the EarShot system.
