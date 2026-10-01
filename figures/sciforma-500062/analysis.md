# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

VisDoM: Multi-Document QA with Visually Rich Elements Using Multimodal Retrieval-Augmented Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10704

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of VisDoMRAG, a multimodal retrieval-augmented generation framework designed to answer queries using both visual and textual evidence from a multi-document source. The global layout is horizontally structured into three main stages: parallel visual and textual RAG pipelines (stages 1 and 2), followed by a modality fusion stage (stage 3). On the far left, a stack of documents labeled 'Multi Document Source' serves as the input corpus, containing both text and embedded images. These documents feed into two parallel processing streams.

Stage 1, labeled 'Visual RAG' and marked with a teal circle numbered 1, processes visual content. It begins with 'Visual Retrieval', represented by a teal rounded rectangle with a magnifying glass icon over a database symbol. This module retrieves top-k relevant pages, depicted as a document icon with a clock and list, which are then passed to an LLM (Large Language Model), shown as a black circular icon with 'LLM' inside. The LLM performs two sequential steps: 'Evidence Curation', indicated by a teal rounded rectangle with a cluster of dots icon, followed by 'Chain of Thought Reasoning', shown with a chain-link icon. The output is an 'Answer', represented by a speech bubble icon within a teal rounded rectangle.

Stage 2, labeled 'Textual RAG' and marked with an orange circle numbered 2, processes textual content. It starts with 'OCR' (Optical Character Recognition), shown as an orange rounded rectangle with a document and camera icon, which extracts text from images. The extracted text undergoes 'Chunking', represented by an orange rounded rectangle with a segmented bar icon, dividing it into manageable segments. These chunks are fed into 'Text Retrieval', another orange rounded rectangle with a magnifying glass over a database, which retrieves top-k relevant chunks, shown as a striped document icon. These chunks are then processed by an LLM (same black circular icon), followed by 'Evidence Curation' and 'Chain of Thought Reasoning'—both in orange rounded rectangles with corresponding icons—to produce an 'Answer' in an orange speech bubble.

Both pipelines receive the same 'Question', indicated by a red arrow pointing to each retrieval module. The outputs from both pipelines—the answers and their reasoning chains—are combined in Stage 3, labeled 'Modality Fusion' and marked with a red circle numbered 3. Here, a second LLM (black circular icon) performs 'Reasoning Consistency' analysis, shown as a red rounded rectangle with a gear icon, comparing the reasoning chains from both modalities. The final output is the 'Final Answer', depicted as a red rounded rectangle with a speech bubble icon.

Connections between modules are color-coded: teal arrows link components in the Visual RAG pipeline, orange arrows connect components in the Textual RAG pipeline, and red arrows indicate the flow into Modality Fusion. The figure uses consistent iconography for each module type and employs distinct colors (teal for visual, orange for textual, red for fusion) to differentiate the pathways and emphasize the parallel processing and final integration.
