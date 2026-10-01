# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Assessing Human Editing Effort on LLM-Generated Texts via Compression-Based Edit Distance — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17321

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-stage workflow for constructing a dataset through question answering and post-editing, structured horizontally from left to right. The first stage, labeled 'QA Knowledge Base', contains two input components: a 'Question' represented by a document icon with a question mark, and 'Knowledge' represented by a document icon with an open book symbol. These are enclosed within a large rounded rectangle. An arrow leads from the 'Question' to a central component labeled 'LLM Answer', depicted as a document icon with a brain-like circuit pattern, indicating the output of a large language model. A separate arrow connects the 'Knowledge' directly to the next stage. The second stage, labeled 'Editing', is also enclosed in a large rounded rectangle and contains two editing agents: a 'Human Editor', shown as a simple human silhouette icon, and an 'LLM', shown as the same brain-like circuit icon used for the LLM Answer. Arrows from both the 'LLM Answer' and the 'Knowledge' point into this editing stage, indicating that both are inputs to the editing process. The third stage, labeled 'Edited Answers', displays seven output items arranged vertically, each represented by a document icon with a pencil overlay, signifying editing. The top four outputs are labeled '(human 1)', '(human 2)', '(human 3)', and '(human 4)', corresponding to edits performed by four different human editors. The bottom three outputs are labeled '(normal)', '(similar)', and '(fast)', representing three distinct modes of editing performed by the LLM. All seven outputs are connected by individual arrows originating from the 'Editing' stage, showing the flow of results. The entire diagram uses black-and-white line art with no color, and all text labels are in a clean sans-serif font. The layout is linear and sequential, emphasizing the progression from raw inputs to edited outputs. The figure caption clarifies that 200 questions with expert knowledge were sampled, and that LLM answers were generated without access to the expert knowledge before being edited. Human edits were timed, while LLM edits were conducted under three conditions: normal, similar, and fast.
