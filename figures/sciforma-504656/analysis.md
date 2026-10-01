# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SurvAttack: Black-Box Attack On Survival Models through Ontology-Informed EHR Perturbation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18706

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Dynamic SA-specific Attack (DSA) strategy, a sequential attack process designed to disrupt concordance in survival analysis data over six steps. The global layout is a horizontal timeline divided into six rows labeled 'Step 1' through 'Step 6', each representing a stage in the attack progression. A horizontal axis labeled 'Time' runs along the bottom, indicating temporal evolution. Above the steps, a header row displays time points t_m=4, t_m=5, t_m=6, and t_m=7, marked with vertical dashed lines to indicate critical time thresholds. On the far right, a column labeled 'C-index' shows the concordance index value after each step, decreasing from 1 in Step 1 to 0 in Step 6.

Each step contains a sequence of circular nodes representing subjects, arranged left to right in chronological order. Nodes are color-coded: green circles denote observed subjects (e.g., O3, O8), while red circles denote censored subjects (e.g., C4, C10). In later steps, attacked subjects are marked with an asterisk (*) and have a dashed border (e.g., C4*, O11*), indicating they have been modified by the attack. The initial state in Step 1 shows censored subjects C4 and C5 (red) being attacked, reducing their expected survival times, which disrupts concordance in observed-censored pairs. The algorithm initializes t_min as the highest post-attack expected survival time among censored subjects, which corresponds to t_m=4.

From Step 2 onward, the attack targets observed subjects in a sorted order based on their survival times, using t_min as the target time. Dashed arrows point from previously attacked subjects to newly targeted ones, showing the propagation of the attack. For example, in Step 2, C4* and C5* are already attacked, and the attack moves to C10*, disrupting concordance in observed-observed pairs. The t_min threshold shifts progressively to higher time points (t_m=5, t_m=6, t_m=7) as the attack continues. In Step 6, all subjects (C4*, C5*, C10*, O11*, O9*, O8*, O3*) are attacked, resulting in a C-index of 0, indicating complete disruption of concordance.

The visual modules include circular nodes with labels (e.g., O3, C4), color coding (green for observed, red for censored), and dashed borders for attacked subjects. Text annotations above the timeline specify time thresholds, and the C-index values are displayed numerically on the right. Solid black arrows at the end of each step row indicate forward progression in time. The overall structure follows a top-down, left-to-right flow, emphasizing the iterative nature of the attack and its impact on survival concordance.
