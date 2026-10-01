# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STAMPsy: Towards SpatioTemporal-Aware Mixed-Type Dialogues for Psychological Counseling — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16674

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the STAMPsy framework for generating multi-turn psychological counseling dialogues using structured knowledge extraction and instruction-based dialogue generation. The global layout is divided into three main horizontal sections: input context on the left, core processing modules in the center, and output dialogue examples on the right. The top section shows memory components—Short-term Memory (light orange box containing recent dialogue snippets like 'Client: What should I do...') and Long-term Memory (blue box with three subcomponents: Personal Info, Psy. Knowledge, and Spatial-Temporal State)—which feed into a Knowledge Graph and Reference Knowledge. Below this, the central processing pipeline begins with a 9-Box CCM (Clinical Case Model) module (green box with nine icons labeled Persona, Problems, Comorbidity, Strengths, Stressors, Treatment Received, Risks, Outcomes, Barriers), used for Reference Knowledge Extraction. This extracted knowledge, along with a System Prompt, feeds into a 'Generate Instruction' block, which produces an Instruction that is further broken down into Intention, Query, and Triples (<Domain, Slot, Value>). These components are processed via Knowledge Base Retrieval and Spatial-Temporal State Extraction, leading to Annotation. The annotated instruction drives the 'Generate Dialogue' module, which outputs multi-turn dialogues. The rightmost column displays sample dialogues between a client and counselor, with speech bubbles indicating different counseling strategies such as 'Recounting', 'Reflection of feelings', 'Open Questions', 'Cog-beh exploration', 'Interpretations', and 'Direct Guidance'. These dialogues are validated through Manual Quality Assurance. Arrows indicate data flow: from Original Case Text to Short-term and Long-term Memory, then to Knowledge Graph and Knowledge Base; from 9-Box CCM to System Prompt; from Generate Instruction to Intention, Query, Triples, and Annotation; and finally from Annotation to Generate Dialogue, which connects to the Multi-turn Dialogue with STAMPS (right). The entire process emphasizes structured knowledge integration and expert-annotated dialogue generation for psychological counseling.
