# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Machine Learning-Based Prediction of ICU Readmissions in Intracerebral Hemorrhage Patients: Insights from the MIMIC Databases — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01183

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the flowchart for the extraction of a study cohort from the MIMIC Database, specifically targeting patients with intracerebral hemorrhage (ICH). The global layout is hierarchical and bifurcated, starting from a single top node and splitting into two parallel pathways corresponding to the MIMIC-III and MIMIC-IV databases, which then converge at the bottom into a unified cohort. The structure follows a top-down, left-to-right progression, with exclusion criteria applied sequentially along each branch.

At the top, a light blue rounded rectangle labeled 'MIMIC Database Identify patients with ICH' serves as the entry point. From this node, two black arrows extend downward to two separate branches: one leading to a light yellow rounded rectangle labeled 'MIMIC-III Database (N = 1367)' on the left, and another to a light orange rounded rectangle labeled 'MIMIC-IV Database (N = 2226)' on the right. These represent the initial patient counts from each database version.

Each branch then proceeds through a series of exclusion steps, represented by rounded rectangles with matching color schemes (yellow for MIMIC-III, orange for MIMIC-IV). In the MIMIC-III branch, three exclusion criteria are applied: 'Patients who died before ICU discharge (N = 298)', 'Patients with ICU stay less than 24 hours (N = 198)', and 'Patients with age less than 18 (N = 0)'. Each criterion is connected by a black arrow pointing to the next step, indicating sequential filtering. After these exclusions, a light yellow box states '871 patients selected after exclusion'.

Similarly, the MIMIC-IV branch applies the same three exclusion criteria: 'Patients who died before ICU discharge (N = 484)', 'Patients with ICU stay less than 24 hours (N = 297)', and 'Patients with age less than 18 (N = 0)'. Following these exclusions, a light orange box indicates '1445 patients selected after exclusion'.

Finally, both branches converge via black arrows into a central light blue rounded rectangle at the bottom labeled 'Cohort with 2316 patients', representing the final combined study population. All nodes are connected with solid black lines, and the flow is unidirectional, emphasizing a clear, stepwise selection process. The figure uses consistent color coding to distinguish between the two database sources while maintaining visual clarity through uniform shapes and alignment. No mathematical equations or LaTeX expressions are present in the diagram. The caption 'Criterion of study population extraction' accurately summarizes the purpose of the flowchart.
