# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Comprehensive Forecasting Framework based on Multi-Stage Hierarchical Forecasting Reconciliation and Adjustment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14718

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage hierarchical forecasting reconciliation and adjustment framework titled 'BO Ensemble Forecasts'. The overall structure is a vertical flowchart composed of four main stages, each represented by a rectangular block containing a hierarchical tree structure with four levels (Level 1 to Level 4), where Level 1 is the topmost aggregate level ('Total'), and Level 4 represents the most granular units (e.g., C1, C2, ..., C4). Each level contains blue rectangular nodes labeled with identifiers such as A1, A2, B1, B2, etc., arranged hierarchically with parent-child relationships indicated by thin lines connecting nodes across levels. The entire hierarchy is enclosed within a light gray background box for each stage.

Stage 1: Top-Down (TD) Forecasting. This stage begins with the 'BO Ensemble Forecasts' at the top, feeding into Level 1. The process propagates forecasts from top to bottom using top-level BO ensemble forecasts, which are then distributed down to Levels 2–4. A vertical dashed arrow labeled 'Top-Down' on the right side indicates this downward propagation direction. The caption below explains that Level 2–4 receive TD forecasts.

Stage 2: HHFA Adjustment. The output from Stage 1 feeds into this stage via a solid blue downward arrow. The same hierarchical structure is shown, but now includes a curved double-headed arrow on the right, symbolizing an adjustment or feedback mechanism. The caption states that TD forecasts from the previous step and BO ensemble forecasts at Levels 2–4 are combined through HHFA (Hierarchical Hierarchical Forecast Adjustment) to produce adjusted forecasts.

Stage 3: MinTrace_WLS Reconciliation. The output from Stage 2 flows into this stage. Here, the hierarchy remains visually identical, but a vertical dashed double-headed arrow labeled 'Reconciled' appears on the right, indicating bidirectional reconciliation. The caption specifies that only the top three levels (Levels 1–3) are reconciled, while Level 4 is ignored due to its negative impact on higher levels.

Stage 4: SSWFS Final Adjustment. The final stage receives input from Stage 3 via a downward arrow. It again displays the full hierarchy, with another 'Reconciled' double-headed arrow on the right. The caption describes SSWFS (Stratified Reconciliation and Adjustment) as a process that combines forecasts from HHFA and MinTrace to guarantee coherence across the entire hierarchy.

Connections between stages are shown with thick blue arrows pointing downward, indicating sequential processing. Additionally, there are feedback loops: a blue arrow from Stage 4 loops back to Stage 1, suggesting iterative refinement or reprocessing. Another loop connects Stage 4 back to Stage 2, reinforcing the iterative nature of the reconciliation process. The figure’s title is centered at the top in a white box with a blue border. All stage captions are placed below their respective blocks in bold black text, providing clear explanations of each step's function.
