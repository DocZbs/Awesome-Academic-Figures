# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Order Matters! An Empirical Study on Large Language Models' Input Order Bias in Software Fault Localization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18750

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a fault localization (FL) approach using Large Language Models (LLMs), structured as a sequential workflow divided into distinct stages. The global layout is left-to-right, beginning with a dashed rectangular boundary labeled 'System Under Test' on the far left, followed by a series of processing steps leading to evaluation outcomes on the right. Inside the 'System Under Test' box, three input components are shown: 'Stack Trace', 'Failing Test Code', and 'Covered Methods', each represented as a rounded rectangle with black borders and black text. These inputs feed into three parallel output modules: 'Kendall Tau-Based Ordered Method List', 'Segmented Ordered Method Lists with Varying Sizes', and 'Strategy-Based Ordered Method List', also depicted as rounded rectangles with black borders and black text. Each of these outputs is connected via thin black lines from the respective input, indicating derivation or transformation. A thick blue arrow points from the 'System Under Test' box to the next stage, labeled 'Fault Localization (FL) Using LLM', which is a standard rectangular box with black border and black text. This module processes the ordered method lists and produces 'Ranked Suspicious Methods', another rectangular box with black border and black text, connected by a thick blue arrow. From here, another thick blue arrow leads to the 'Evaluate' module, also a rectangular box with black border and black text. The 'Evaluate' module branches out into three evaluation outcomes, each represented as a rounded rectangle with black borders and black text: 'Order Bias Across Kendall Tau Variations', 'Order Bias Across Segment Sizes', and 'FL Performance Across Different Ordering Strategies'. These are connected to 'Evaluate' via thin black lines, indicating separate metrics or analyses derived from the evaluation process. The entire diagram uses a clean, monochrome color scheme with black text and borders, except for the thick blue arrows that signify major transitions between stages. All text is in a sans-serif font, and the layout emphasizes a clear, linear progression from inputs through processing to evaluation, with branching at the final stage to show multiple performance dimensions.
