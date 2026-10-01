# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

RareAgents: Autonomous Multi-disciplinary Team for Rare Disease Diagnosis and Treatment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12475

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an architectural overview of the RareAgents framework, designed to enhance medical care for patients with multisystem abnormalities through an intelligent, agent-based multi-disciplinary team (MDT) collaboration system. The global layout is structured into four main functional modules arranged horizontally: Tool Base, Multi-disciplinary Team (MDT) Collaboration, Dynamic Long-term Memory, and a bottom-level workflow summarizing the patient journey. These modules are interconnected via directed arrows indicating data flow and interaction sequences.

In the Tool Base module (top-left), represented by a blue medical kit icon, various medical tools are categorized under Diagnosis Tools (e.g., Phenomizer, LIRICAL, Phenobrain) and Treatment Tools (e.g., DrugBank, DDI-graph). These tools are invoked via a 'Call' action triggered by a patient query, producing feedback results denoted as ℜ. This module is enclosed in a dashed box labeled 'Medical Tools Utilization'.

The central module, MDT Collaboration, features an Attending Physician Agent (depicted as a doctor icon with a red plus sign) who selects specialists from a 'Specialist Pool SP' (illustrated with a network of interconnected figures). The selected specialists—representing disciplines such as Pediatrics, Urology, Pathology, and Pharmacy—are assembled into an MDT. The process involves multiple rounds of discussion, visually depicted as sequential stages (Discussion round 1, 2, ..., R), where each specialist agent (represented by stylized doctor icons with green checkmarks or red crosses) exchanges opinions until consensus is reached. The outcome is an MDT discussion report ℛ.

On the right, the Dynamic Long-term Memory module contains a Memory System (symbolized by a brain with colored blocks) that stores the patient’s profile record ℛ. This memory is accessed via two components: a Patient Encoder (blue oval) that generates patient embeddings Emb(ℛ), and a History Retriever (pink oval) enabling longitudinal search. The encoder outputs Top-K similar cases, while the retriever fetches former visits. Together, these produce a memory retrieval result ℳℛ, which is fed back into the MDT discussion process. The Memory System also receives updates from the final enhanced medical care output.

At the bottom, a linear workflow illustrates the patient journey: starting from a 'Patient with multisystem abnormalities', progressing through the Attending Physician Agent, then MDT meeting discussion, culminating in 'Enhanced medical care A'. Arrows connect these stages and feed into the upper modules, showing how patient data triggers tool usage, MDT formation, and memory retrieval. The entire system emphasizes iterative reasoning, tool augmentation, and memory-driven decision-making to improve clinical outcomes.
