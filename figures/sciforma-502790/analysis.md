# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Structured Extraction of Real World Medical Knowledge using LLMs for Summarization and Search — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15256

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-stage methodology for constructing a patient population knowledge graph (KG) and performing phenotypic summarization and analysis for Dravet Syndrome patients, using real-world electronic health record (EHR) data. The overall layout is divided into two main vertical sections: 'Construct Patient Population KG' on the left, enclosed in a purple border, and 'Patient Summarization and Analysis' on the right, enclosed in a gold border. These sections represent distinct phases of the pipeline.

In the left section, the process begins at the top with an icon representing 'Real World EHR Data', depicted as a computer monitor with medical symbols (a person, waveform, cross, and grid). This data flows downward via a solid arrow to a light purple rectangular box labeled 'Cleansing, Normalization, Standardization'. From there, another arrow leads to a second light purple box labeled 'Triples Extraction', with a label 'Identify Nodes & Edges' placed between the two boxes, indicating the purpose of this step. A third arrow points from 'Triples Extraction' to a purple database icon labeled 'Patient Population Knowledge Graph', with the label 'Insert/Update' positioned beside the arrow, signifying the action taken to populate or update the KG.

The right section begins with a black funnel-shaped icon labeled 'Filter Dravet Syndrome ICD10 Codes', which receives input from the 'Patient Population Knowledge Graph' via a horizontal arrow originating from the database icon. Below the funnel, a light yellow rectangular box reads 'Summarize the filtered patient data from KG'. An arrow from this box leads to another light yellow box labeled 'Contextual HPO search in summaries with LLMs'. To the right of this box, a stack-of-documents icon labeled 'Expert-identified findings' has an arrow pointing to the same 'Contextual HPO search' box, indicating that expert-curated information serves as context for the large language model (LLM). Finally, an arrow from the 'Contextual HPO search' box points to a bar chart icon labeled 'Patient Count per HPO ID', representing the output of the analysis.

All connections are represented by solid black arrows indicating the direction of data flow. The visual modules use consistent shapes and colors: rectangles for processing steps, icons for data sources or outputs, and distinct border colors to separate the two major stages. The figure's caption clarifies that the EHR data is structured into a KG with clinical entities as nodes and relationships as edges, and that the patient cohort is identified using specific ICD-10 codes for Dravet Syndrome (G40.83, G40.833, G40.834). The expert-curated information is used to guide the LLM during HPO term extraction, as described in Section~\ref{realworld}.
