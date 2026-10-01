# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Sim911: Towards Effective and Equitable 9-1-1 Dispatcher Training with an LLM-Enabled Simulation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of Sim911’s architecture, divided into three main components: Knowledge Construction (KC), Context-aware Controlled Generation (CaCG), and Validation and Correction (VLC). The global layout is left-to-right, with KC on the left, CaCG in the center, and VLC on the right, illustrating a pipeline from data preparation to output validation.

In the Knowledge Construction section, raw inputs such as CAD logs, recordings, and transcriptions are processed to build structured knowledge. This includes Incident Specification, which categorizes incidents by type (e.g., Fire Accident, Fired Shots), scenarios (e.g., Firearm Spotted, Responsive), and requests (e.g., SWAT Squad, Ambulance). Below this, Caller Image captures demographic and psychological attributes: Age Group (Minor, Teenager, Senior), Emotion (Calm, Anxious, Irrational), and Vulnerable Groups (Low-income housing area, Mental health issues, Non-Native Speaker, Unhoused). These specifications feed into a Dynamic Retrievable Dataset of 911 Calls, represented as a database icon, which serves as the foundation for retrieval during runtime.

The central Context-aware Controlled Generation module begins with a Query input that triggers retrieval from the dataset. The retrieved data includes tagged recordings (e.g., 'Fire Accident; Firearm Spotted; SWAT Squad' or 'Calm; Teenager; Mental health issues'), address lists, protocol trees, and encoded maps. These are organized under Vector Base 1. The system then performs multiple simulations (Simulation 1, Simulation 2, ..., Simulation i), each represented as a sequence of colored blocks (FA, FS, SS, M, MH, C) corresponding to different incident features. A caller image is optionally excluded (CoT w/o Caller Image) during simulation. The retrieved context is combined via RAG (Retrieval-Augmented Generation) with tailored LLM behaviors—customized based on age and emotion, depicted as multiple brain icons—to generate output candidates. The LLM is shown as a central brain-shaped node receiving inputs from both the retrieved data and the selected LLM behavior.

The rightmost Validation and Correction component handles output quality. Generated outputs (Output Candidate 1 to n) undergo In-Context Validation, which includes Format Check, Alignment Check, Factual Check, and Human-in-the-loop assessment. Candidates failing these checks are rejected and routed to Looped Correction. This includes General Utterance Correction (rejecting outputs due to low human rating or format violation) and Session Specific Correction, where fed instruction and interpreted LLM response are compared; mismatches trigger rejection. Rejected candidates with lower scores are filtered out, while accepted candidates with higher scores proceed. The entire VLC process feeds back into the system, enabling iterative improvement.

Visual elements include color-coded rectangular blocks for different categories (blue for incident types, green for scenarios, red/brown for requests, orange for age, yellow for emotion, purple for vulnerable groups), dashed boxes for modules, solid arrows for data flow, and labeled connections indicating retrieval, selection, and feedback loops. The figure uses consistent icons: document stacks for logs, waveform for recordings, speech bubble for transcriptions, and a person icon for caller image. Text labels are clear and positioned near relevant components, with LaTeX-style formatting used for emphasis in the caption.
