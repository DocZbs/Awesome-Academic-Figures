# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting two-dimensional spatiotemporal chaotic patterns with optimized high-dimensional hybrid reservoir computing — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02369

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the temporal structure of training and prediction phases in an ensemble experiment, showing how data segments are allocated across multiple time steps for synchronization and training purposes. The global layout consists of three horizontal timelines stacked vertically, each representing a separate sequence or trial, labeled collectively by a large left-facing brace marked with n_t = 2, indicating two time steps or trials. Each timeline is divided into segments: a green segment followed by two blue segments, with the total number of blue segments across all timelines indicated by a top brace labeled n_p = 3, signifying three prediction or processing phases per trial.

Each timeline begins with a black horizontal line extending rightward, symbolizing the progression of time. The first segment on each timeline is colored light green and represents a 'Discard' phase, followed by a light blue segment labeled 'Sync', and then another light blue segment labeled 'Train'. These segments are separated by dashed vertical lines, indicating boundaries between phases. The green 'Discard' segment is consistently positioned at the start of each timeline, while the 'Sync' and 'Train' segments follow sequentially.

Below the timelines, two rectangular boxes summarize the phase allocations. The left box, shaded light green, is divided into three parts: 'Discard' with subscript N_TD, 'Sync' with subscript N_TS, and 'Train' with subscript N_T. This corresponds to the green segments in the timelines above. The right box, shaded light blue, is similarly divided into 'Discard' with subscript N_PD, 'Sync' with subscript N_PS, and 'Train' with subscript N_P, corresponding to the blue segments. Two gray arrows point from the third timeline’s green and blue segments down to these summary boxes, linking the visual representation to the symbolic notation.

Connections are shown via solid black arrows extending rightward along each timeline, indicating forward progression through time. Dashed vertical lines mark phase transitions within each timeline. The gray arrows from the third timeline to the summary boxes indicate that the phase definitions below are derived from or applicable to the segments shown above. The figure uses color coding—green for discard/synchronization-related phases and blue for prediction/training phases—to visually distinguish between different functional stages. The caption specifies that n_T = 2 and n_P = 3 in the study, confirming the number of trials and prediction phases depicted.
