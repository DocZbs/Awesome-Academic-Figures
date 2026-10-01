# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

From XAI to MLOps: Explainable Concept Drift Detection with Profile Drift Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11308

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of a Profile Drift Detection method, divided into two main phases: Modeling Phase and Streaming Phase. The global layout is split into two side-by-side panels. The left panel, labeled 'MODELING PHASE', outlines the initial setup, while the right panel, labeled 'STREAMING PHASE', depicts the real-time monitoring process.

In the Modeling Phase, the top section shows two cylindrical database icons representing the Train set and Test set. Each is accompanied by a 2D curve plot labeled PDP_train and PDP_test respectively, indicating Partial Dependence Profiles computed on these datasets. Below this, a gray rectangular box labeled 'DRIFT THRESHOLD' contains a plot comparing PDP_train and PDP_test curves, with an arrow pointing to the expression PDI(PDP_train, PDP_test), signifying the computation of a Profile Drift Index between the training and test profiles to establish a baseline threshold for detecting future drifts.

The Streaming Phase begins with a sequence of data batches, labeled Batch 1 through Batch k, each represented by a cylindrical database icon. The color of these icons transitions from dark blue (Batch 1) to cyan (Batch k), visually indicating progression over time. For each batch, a corresponding 2D curve plot is shown, displaying both the static PDP_test curve (gray) and the batch-specific PDP^b_i curve (colored to match the batch icon). These plots illustrate how the profile of incoming data compares to the fixed test profile.

Below the batch plots, a horizontal flow of four parallelogram-shaped blocks represents the sequential computation of the Profile Drift Index (PDI) for each batch. Each block is colored to match its corresponding batch and contains the expression PDI(PDP_test, PDP^b_i), where i ranges from 1 to k. This indicates that for each new batch, the PDI is calculated between the reference test profile and the current batch’s profile.

At the bottom of the Streaming Phase, a gray bar spans the width of the flow, containing the condition: 'If PDI > threshold return drift signal'. This signifies that if the computed PDI exceeds the pre-defined threshold established during the Modeling Phase, a drift signal is triggered, indicating a significant change in data distribution.

All visual elements use clean, minimalistic design with consistent labeling. Curves are smooth and monochromatic (gray for reference, colored for batch-specific profiles). Arrows indicate directionality and computational flow. The figure effectively communicates a two-stage drift detection framework: first establishing a baseline using historical data, then continuously monitoring new data streams for deviations using a quantifiable index.
