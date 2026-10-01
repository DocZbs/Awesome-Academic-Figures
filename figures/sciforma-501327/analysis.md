# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What External Knowledge is Preferred by LLMs? Characterizing and Exploring Chain of Evidence in Imperfect Context for Multi-Hop QA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12632

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a system architecture for structured knowledge extraction, labeled as {	ool}. The global layout is a left-to-right workflow consisting of four main stages: Question input, Information Extraction, Evidence Graph Construction with External Knowledge, and Minimal Coverage Search leading to Structured Knowledge output.

Starting from the left, a black square icon labeled 'Question' with a question mark and horizontal lines represents the input query. An arrow points upward from this icon to a blue document icon labeled 'Information Extraction', indicating the first processing step. This step extracts relevant information from the question.

The output of Information Extraction feeds into a large rounded rectangular container labeled 'Intent'. Inside this container, multiple yellow rectangular boxes labeled 'Evidence Node₁', 'Evidence Node₂', ..., 'Evidence Nodeₙ' are vertically aligned. These nodes are connected by curved black arrows labeled 'Relation₁₂', 'Relation₂ₙ', etc., forming a graph structure. A large curly brace on the left side groups all evidence nodes under the label 'Intent'. Below this container, the text 'External Knowledge' is displayed alongside three blue book icons, indicating that external sources are used to enrich or inform the evidence graph.

From the Intent container, a thick black arrow leads to the next stage, titled 'Minimal Coverage Search' in bold blue text. This stage is represented by another rounded rectangular container containing three vertically stacked yellow rounded rectangles. From top to bottom, they are labeled 'Intent Coverage', 'Evidence Relation Coverage', and 'Evidence Node Coverage'. Black downward-pointing arrows connect these components sequentially, suggesting a hierarchical or iterative coverage verification process.

Finally, an arrow extends from the bottom of the Minimal Coverage Search container to a blue icon depicting two interlinked chains, labeled 'CoE Structured Knowledge'. This signifies the final output: a compact, coherent, and structured representation of knowledge derived from the input question and external sources.

All visual elements use a consistent color scheme: blue for input/output and major process labels, yellow for internal data or coverage components, and black for text and connectors. Shapes include squares, rounded rectangles, and icons for intuitive representation. The diagram emphasizes a pipeline approach where raw questions are transformed through structured reasoning and coverage optimization into formalized knowledge.
