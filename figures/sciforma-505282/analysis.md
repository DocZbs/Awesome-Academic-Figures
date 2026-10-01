# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ChipAlign: Instruction Alignment in Large Language Models for Chip Design via Geodesic Interpolation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19819

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct workflows, labeled (a) and (b), illustrating methodologies for developing specialized large language models tailored for chip design quality assurance tasks.

In diagram (a), the global layout is a vertical flowchart depicting the development pipeline for merged models targeting the OpenROAD QA benchmark. At the bottom, two foundational models are shown: 'LLaMA3-8B-Instruct or Qwen1.5-14B-Chat' (purple rectangle) and 'LLaMA3-8B-EDA or Qwen1.5-14B-EDA' (light blue rectangle). These are connected by a rightward arrow labeled 'DAFT', indicating a domain adaptation fine-tuning process. Above these, a rounded rectangular box labeled 'Model Merging Methods' contains five gray boxes: 'TA', 'TIES', 'DELLA', 'ModelSoup', and one highlighted in green, 'ChipAlign'. Two bidirectional arrows connect this merging methods box to the two foundational models below, suggesting that these models serve as inputs to the merging process. The output of the merging step is a green rectangle labeled 'LLaMA3-8B-ChipAlign or Qwen1.5-14B-ChipAlign', which feeds upward into the final evaluation stage. This topmost stage is another rounded rectangular box titled 'OpenROAD QA', containing three gray sub-boxes: 'Functionality', 'VLSI-Flow', and 'GUI & Install & Test', representing the benchmark categories. A single upward arrow connects the merged model to this QA stage.

Diagram (b) illustrates a similar but distinct pipeline for industrial chip QA. At the bottom left, a purple rectangle labeled 'LLaMA2-70B-Base' points via a rightward arrow labeled 'DAPT' to a light blue rectangle labeled 'ChipNeMo Foundation Model'. From this foundation model, an upward arrow labeled 'DAFT' leads to a light blue rectangle labeled 'LLaMA2-70B-ChipNeMo'. On the left side, a purple rectangle labeled 'LLaMA2-70B-Chat' is positioned above the base model. Both 'LLaMA2-70B-Chat' and 'LLaMA2-70B-ChipNeMo' feed into a central green rectangle labeled 'LLaMA2-70B-ChipAlign' through bidirectional arrows, indicating they are combined using the ChipAlign method. Finally, an upward arrow from this merged model leads to the topmost rounded rectangular box titled 'Industrial Chip QA', which contains four gray sub-boxes: 'ARCH', 'BUILD', 'LSF', and 'TESTGEN', representing the industrial benchmark categories.

Visually, the figure uses color-coding to differentiate components: purple for base or instruction-tuned models, light blue for domain-specific foundation or adapted models, green for the final merged models using the ChipAlign method, and gray for benchmark categories and alternative merging techniques. All boxes are rectangles with rounded corners for containers and sharp corners for individual models/methods. Arrows indicate data or processing flow, with solid arrows for direct transformations and bidirectional arrows for merging processes. The overall structure emphasizes a hierarchical progression from foundational models through adaptation and merging to final evaluation on specific QA benchmarks.
