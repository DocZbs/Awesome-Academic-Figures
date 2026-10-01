# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Recursive Decomposition of Logical Thoughts: Framework for Superior Reasoning and Knowledge Propagation in Large Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02026

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct scenarios illustrating the behavior of the Knowledge Propagation Module (KPM) during thought selection in decompositional steps, arranged side-by-side from left to right: 'Complete Selection', 'Complete Rejection', and 'Mixed Selection'. Each scenario follows a consistent workflow structure: a decompositional step generates multiple thoughts (T1, T2, T3), each evaluated for a score (Total), then filtered against a threshold (>=30), resulting in selection or rejection, which is recorded by the KPM and influences the next decompositional step.

In the 'Complete Selection' scenario (left), two yellow rectangular boxes labeled 'Decompositional Step (any)' and 'Decompositional Step (next)' represent sequential stages. From the first step, three parallel paths lead to thoughts T1, T2, and T3, each connected to a circular node showing their total scores: 33, 31, and 35 respectively. All scores meet or exceed the threshold of 30, indicated by a diamond-shaped decision node. As a result, all three thoughts are selected, shown by green arrows leading to green-bordered boxes labeled T1, T2, T3. A gray rectangular box labeled 'KPM' records 'Selected Indexes: [1,2,3][Scores]' and 'Rejected Indexes: [null]'. A teal arrow connects this KPM output back to the next decompositional step, indicating the propagation of selected thoughts.

The 'Complete Rejection' scenario (center) mirrors the structure but with different outcomes. The same initial decompositional step produces thoughts with lower scores: Total 25, 21, and 28. All fall below the threshold of 30, so red arrows direct them to red-bordered boxes labeled T1, T2, T3, signifying rejection. The KPM box records 'Selected Indexes: [null]' and 'Rejected Indexes: [1,2,3][Scores]'. A red arrow labeled 'Regeneration' loops from the KPM back to the decompositional step, indicating that since no thoughts were selected, the process must regenerate new thoughts.

The 'Mixed Selection' scenario (right) demonstrates partial selection. The initial scores are 33, 28, and 35. Only T2 (score 28) fails the threshold, so it is rejected (red arrow to red-bordered T2), while T1 and T3 are selected (green arrows to green-bordered T1 and T3). The KPM records 'Selected Indexes: [1,3][Scores]' and 'Rejected Indexes: [2][Scores]'. A teal arrow connects the KPM to the next decompositional step, propagating only the selected thoughts.

All diagrams use consistent visual elements: yellow rectangles for decompositional steps, circles for scores, diamonds for thresholds, green for selection, red for rejection, and gray for the KPM module. The figure visually explains how the KPM handles edge cases in thought selection, ensuring robust progression through decomposition.
