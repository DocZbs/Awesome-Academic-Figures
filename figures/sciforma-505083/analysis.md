# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

De Novo Generation of Hit-like Molecules from Gene Expression Profiles via Deep Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19422

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-stage computational pipeline for generating candidate therapeutic molecules based on disease-specific gene expression profiles. The overall layout is linear and left-to-right, divided into three main modules labeled (A), (B), and (C), each enclosed in a dashed rectangular boundary. Module (A) represents the patient data input stage, module (B) the therapeutic effect modeling stage, and module (C) the candidate molecule generation stage. These modules are connected by bidirectional arrows indicating inverse correlation between (A) and (B), and a unidirectional arrow labeled 'Gx2Mol' from (B) to (C).

In module (A), titled 'Patient', two stylized human figures represent patients with a disease, indicated by a black ribbon symbol and the label 'A disease'. Each patient is associated with a horizontal bar chart composed of colored segments: black for regular expression genes, green for low-expressed genes, and red for high-expressed genes. A bracket groups these two patients, and an arrow labeled 'Averaging' points to a single consolidated bar chart labeled 'Disease-specific gene expression profile', which combines the expression patterns across patients.

Module (B), titled 'Therapeutic effect', contains an icon of a medicine bottle with a plus sign and a capsule, symbolizing treatment. Below this icon is another horizontal bar chart, labeled 'Disease reversal profile', using the same color coding as in (A). This profile is derived from the disease-specific profile via an 'Inverse correlation' relationship, as indicated by a double-headed arrow connecting (A) and (B). This implies that genes upregulated in disease are downregulated in the reversal profile, and vice versa.

Module (C), titled 'A candidate molecule', displays a chemical structure diagram of a complex organic molecule, likely a drug candidate, with multiple rings, functional groups, and substituents. Below this structure is a bar chart identical in format to the one in (B), labeled 'Disease reversal profile', suggesting that the molecule's predicted or observed effect matches the desired reversal signature. A bidirectional arrow labeled 'Gx2Mol' connects module (B) to module (C), indicating a computational model or algorithm that maps gene expression profiles to molecular structures.

At the bottom of the figure, a legend clarifies the color coding: black squares denote 'Regular expression gene', green squares denote 'Low-expressed gene', and red squares denote 'High-expressed gene'. The entire diagram visually conveys a workflow where patient-derived disease gene expression data is inverted to define a therapeutic goal, and then used to identify or design molecules capable of achieving that reversal effect.
