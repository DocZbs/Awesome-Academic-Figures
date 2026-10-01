# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ResoFilter: Fine-grained Synthetic Data Filtering for Large Language Models through Data-Parameter Resonance Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14809

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part workflow for a method that analyzes parameter changes in a neural network model when fine-tuned on one-shot data. The left side details the computation of weight differences in the MLP modules of the last n transformer layers, while the right side shows how this process is applied across an entire dataset to filter samples based on the magnitude of these changes.

[1] Global Layout and Structure: The figure is divided into two main vertical sections. The left section explains the core mechanism for computing parameter differences between an original model and a one-shot fine-tuned model. The right section illustrates the application of this mechanism to a dataset, showing the steps of computing differences for each sample, sorting them, filtering based on thresholds, and restoring the original order. The layout follows a clear top-to-bottom and left-to-right flow, with textual annotations guiding the reader through each step.

[2] Visual Modules and Attributes: On the left, two identical model architectures are shown side-by-side: 'Original model' and 'One-shot model'. Each model consists of stacked transformer layers, represented by dashed boxes containing two components per layer: a pink rounded rectangle labeled 'MLP' and a salmon-colored rounded rectangle labeled 'Attention'. Below these layers, a gray box labeled 'Input Emb.' represents the input embedding layer. The bottom-most layer is labeled 'Layer(0) ~ Layer(N-n)', indicating the range of layers considered. Green boxes labeled 'W_up' are connected to the MLP modules in the last n layers of both models, with arrows pointing to computed differences labeled 'diff_n', 'diff_{n-1}', etc., which are then summed vertically to produce a final 'Diff' value. The right side features three tables with light blue headers ('ID', 'Data', 'diff(1e-7)'). The first table lists four data samples with IDs 1–4. The second table shows the same samples with added 'diff' values. The third table displays the sorted version of the second table in ascending order of 'diff'. Below this, three smaller boxes list filtered ID sets: {2,3,4} for Top 75%, {3,4} for Top 50%, and {3} for Top 25%.

[3] Connections and Arrows: On the left, bidirectional arrows connect the 'W_up' matrices of corresponding MLP modules in the original and one-shot models to compute 'diff' values for each layer. These 'diff' values are then summed via downward-pointing arrows to yield the total 'Diff'. On the right, a horizontal arrow labeled 'Do ① for each sample' connects the initial data table to the table with 'diff' values. A vertical arrow labeled 'Sorted in ascending order' points from the 'diff' table to the sorted table. From the sorted table, three diagonal arrows point to the filtered ID sets, each labeled with a selection criterion: 'Select the Top 75% data', 'Select the Top 50% data', and 'Select the Top 25% data'. The figure includes two numbered steps at the top: Step ① describes fine-tuning and computing weight changes, and Step ② outlines applying Step ① to each dataset sample, followed by sorting, filtering, and restoring the original order.
