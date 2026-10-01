# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SusGen-GPT: A Data-Centric LLM for Financial NLP and Sustainability Report Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10906

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the data construction pipeline for TCFD-Bench, a benchmark dataset designed for evaluating AI systems in extracting climate-related financial disclosures. At the top, a 'Company' icon branches into two primary data sources: the 'Annual Report' (represented by a green document icon) and the 'TCFD Report' (represented by a blue document icon). The Annual Report is processed through GPT-40, depicted as a green square with the GPT logo, which generates contextual information and instructions. The TCFD Report is manually processed, indicated by a blue folder icon labeled 'Manual'. These two streams converge to form four core components: 'Context', 'Instruction', 'Question', and 'Output'. Each component is represented by a rounded rectangle with distinct colors: 'Context' is light peach, 'Instruction' and 'Question' are light green, and 'Output' is light blue. The 'Context' contains the company’s introductory text and topic; the 'Instruction' is initially created manually and diversified using GPT; the 'Question' is derived from the TCFD disclosure report; and the 'Output' is the answer extracted from the TCFD report. Below these components, a dashed box titled 'TCFD-BENCH of "Wolfspeed_2022.pdf" File' provides a concrete example. It includes a 205-word context describing Wolfspeed, Inc., a 292-word output detailing the company’s governance on climate-related risks, and an input combining instruction and question, asking for a description of the organization’s 2019 governance around climate-related risks and opportunities. Arrows indicate the flow: from Company to both reports, then from each report to their respective processing modules (GPT-40 or Manual), and finally from those modules to the four core components. All connections are solid black arrows, except for the convergence point where the two processing paths merge into the four components via a horizontal line with downward-pointing arrows. The layout is hierarchical and left-to-right, emphasizing the transformation of raw company reports into structured benchmark data.
