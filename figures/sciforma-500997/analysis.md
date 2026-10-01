# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rethinking Comprehensive Benchmark for Chart Understanding: A Perspective from Scientific Literature — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12150

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main sections: a data statistics panel on the left and a three-stage automated annotation pipeline on the right. The left panel presents statistical breakdowns of the dataset. At the top, it lists 'Charts Type' with 2676 data charts (47.5%) and 2953 flowcharts (52.5%). Below, a pie chart titled 'Data Chart Distribution' visually represents the distribution of chart types, including Line, Scatter, Bar, Heatmap, Histogram, Box, Area, Radar, 3D-bar, Combination, Pie, and Other, each color-coded and labeled in a legend. Further down, under 'Task', it details question types: Reasoning (4129, 73.4%), Perception (1500, 26.6%), Multiple-Choice Questions (2821, 50.1%), True/False Questions (2382, 42.3%), and Open-Ended Questions (426, 7.6%). All numerical values and percentages are presented in red text.

The right section outlines a three-stage pipeline for generating high-quality pseudo-labeled data. Stage 1 begins with two input boxes: 'High-quality QA Data' and 'High-quality Scoring Data'. These feed into two models: 'Chart2A' (represented by a blue icon of a person with glasses) for 'Automatic Annotation' and 'ChartAS' (green icon) for 'Automatic Scoring'. Both models are trained using these high-quality datasets. A third component, 'Gemini-Pro-Vision' (represented by a black-and-white icon of a person reading), acts as a 'Double Checker (free)' to validate outputs. 

Stage 2 takes 'Raw-Chart-Context-Caption Paris' as input. This flows into a human-in-the-loop process where two stylized figures (one female, one male) perform a 'Double-Check'. The output splits into 'Raw QA' and 'Checked Pseudo-label QA'. A green curved arrow labeled 'Re-train' connects 'Checked Pseudo-label QA' back to the models in Stage 1, indicating an iterative training loop over 'N iterations'.

Stage 3 receives the same 'Raw-Chart-Context-Caption Paris' input, which is processed through the refined models (implied from Stage 2's re-training) to produce 'High-quality Pseudo-labeled Data' at the bottom. The entire pipeline emphasizes an iterative, human-verified, and model-enhanced approach to data annotation, leveraging both automatic tools and human validation to improve data quality over multiple cycles.
