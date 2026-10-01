# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

EXIT: Context-Aware Extractive Compression for Enhancing Retrieval-Augmented Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12559

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a document compression framework for question answering, structured as a three-step pipeline. The global layout is horizontal, progressing from left to right: starting with a Query (q), passing through a Retriever, then a Compressor, followed by a Reader LLM, and ending with an Answer (a). Each stage is visually separated by dashed lines and labeled with icons — a magnifying glass for Retriever, a flame for Compressor, and a neural network symbol for Reader LLM.

Step 1: Sentence-Level Decomposition. The top-k retrieved documents, shown as stacked pink rectangles with sample text about Ezzard Charles, are fed into this step. Each document is decomposed into individual sentences, illustrated by scissors cutting the document into separate sentence blocks. These sentences are numbered (①, ②, ..., ②) and retain their original color-coding from the source document.

Step 2: Context-Aware Relevance Classification. Here, each sentence is evaluated for relevance. The query is concatenated with each sentence, forming a context-aware input pair. These pairs are processed by the Compressor module, depicted as a rounded rectangle with a neural network icon. The Compressor outputs a binary decision: 'Yes' (green box) if the sentence is relevant, or 'No' (red box) if not. Only sentences marked 'Yes' proceed to the next step.

Step 3: Document Reassembly. Relevant sentences (those marked 'Yes') are reassembled in their original order to form a compressed document. This reconstructed document is shown alongside the original query and passed to the Reader LLM, which generates the final answer — in this case, 'Boxing'. The Reader LLM is represented with a neural network icon, indicating it is a large language model.

Visual modules include rectangular boxes for documents and sentences, with pink backgrounds for original content and blue for non-relevant sentences. The Compressor is a central processing unit with a neural network symbol. Arrows indicate data flow: from the query to the retriever, then to decomposition, classification, reassembly, and finally to the reader. Binary decisions ('Yes'/'No') are shown as colored boxes connected to the Compressor output. The entire process emphasizes preserving the original sentence order while filtering out irrelevant information.
