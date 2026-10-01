# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Causally Consistent Normalizing Flow — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12401

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a causal graph representing a Structural Causal Model (SCM) for an admission system. The global layout is a directed acyclic graph (DAG) arranged vertically with five rectangular nodes connected by arrows, illustrating causal relationships among variables. The nodes are positioned in a hierarchical structure: at the top are 'Gender G' and 'Qualification Q'; below them are 'Applicant A' and 'Department D'; and at the bottom is 'Admission Y'. Each node is enclosed in a rounded rectangle with black borders and contains a label in black text, consisting of a descriptive term followed by its corresponding uppercase variable symbol (e.g., 'Gender G').

The visual modules consist of these five nodes, each representing a distinct variable in the admission process. The connections between them are represented by two types of edges: black solid lines indicating intended direct causal relationships, and red dashed lines indicating forbidden direct causalities, as specified in the caption. Specifically, there is a black solid arrow from 'Gender G' to 'Applicant A', signifying that gender directly influences the applicant’s identity or characteristics. Another black solid arrow runs from 'Qualification Q' to 'Applicant A', indicating that qualification directly affects the applicant. Additionally, a black solid arrow connects 'Applicant A' to 'Department D', suggesting that the applicant's profile determines their department choice or assignment. Finally, a black solid arrow goes from 'Department D' to 'Admission Y', showing that the chosen department directly impacts the admission outcome.

The red dashed arrows represent causal paths that are explicitly forbidden or undesirable within the model. These include: a dashed arrow from 'Gender G' to 'Department D', implying that gender should not directly influence department selection; another dashed arrow from 'Gender G' to 'Admission Y', indicating that gender must not directly affect admission decisions; a dashed arrow from 'Qualification Q' to 'Department D', meaning qualification should not directly determine department assignment; and a final dashed arrow from 'Qualification Q' to 'Admission Y', signifying that qualification should not directly influence admission outcomes—presumably because such effects should be mediated through the department or applicant attributes.

The overall workflow follows a causal chain starting from background factors (Gender and Qualification), influencing the Applicant, who then selects or is assigned to a Department, which in turn determines Admission. The model enforces fairness constraints by prohibiting direct causal links from Gender and Qualification to Department and Admission, ensuring that these sensitive or intermediate variables only influence the outcome indirectly through the Applicant and Department pathways. This structure reflects a policy where admission decisions are made based on departmental evaluation rather than direct gender or qualification bias.
