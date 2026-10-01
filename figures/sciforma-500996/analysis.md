# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rethinking Comprehensive Benchmark for Chart Understanding: A Perspective from Scientific Literature — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12150

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the SCI-CQA data processing pipeline, designed to construct a high-quality evaluation dataset for chart-based question answering. The global layout is a left-to-right workflow, enclosed within a dashed blue border, depicting a multi-stage process starting from raw academic sources and ending with a curated QA dataset. The pipeline begins on the far left with a rectangular box listing major academic conferences such as AAAI, CVPR, ICCV, ECCV, NIPS, ICML, ACM MM, SIGGRAPH, WWW, WACV, KDD, IJCAI, ACL, ICLR, and HCI. An arrow leads from this list to a central node labeled 'Arxiv', marked with a red 'X' icon, indicating exclusion or filtering of non-relevant content. From 'Arxiv', two diverging paths emerge: one leading to a collection of diverse charts (labeled 'Charts'), represented as a collage of various visualization types including bar graphs, line plots, scatter plots, and flowcharts; the other leading to a section labeled 'Context and Caption', containing example text snippets for 'Caption' and 'Context' fields, such as 'Overview of our generator (left) and discriminator (right)' and references to figures and components like 'object layout generator' and 'background generator'.

The 'Charts' path proceeds to a black diamond-shaped icon labeled 'Gemini-pro-vision + Human Check', which performs 'Filter and Classification'. This step outputs three categorized boxes under a pink background: 'Visualization Diagrams' (marked with a red 'X' to indicate rejection), 'Data Charts', and 'Flowcharts'. These are then combined with the refined context and caption to form 'Raw-Chart-Context-Caption Paris', shown as a dotted rectangle containing structured JSON-like fields: 'Image': 'path', 'Caption': 'Overview of our generator...', and 'Context': 'The generator is depicted in Figure...'.

The 'Context and Caption' path goes through a 'Filter and Refine' stage using 'ERNIE Bot 4', represented by a blue cube logo, producing a box labeled 'Refined Context and Caption'. This refined output merges with the filtered charts to form the same 'Raw-Chart-Context-Caption Paris' structure.

From this unified data format, an arrow points to a node featuring the GPT-40 logo, labeled 'GPT-40 + Human Check', indicating automated generation augmented by human validation. The final output is a green-bordered box titled 'High-quality QA', which details the dataset's characteristics: 'QA Type' includes Multiple-Choice Questions, True/False Questions, and Open-Ended Questions; 'QA Mode' includes Question with context and Question without context; and 'Test Type' includes Modular Testing and Comprehensive Exam. The entire pipeline emphasizes quality control through multiple proprietary AI models and human checks at critical junctures.
