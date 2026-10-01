# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LogicAD: Explainable Anomaly Detection via VLM-based Text Feature Extraction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01767

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of three different approaches to anomaly detection (AD), labeled (A), (B), and (C), arranged vertically. Each approach is depicted as a pipeline starting from input data on the left, processing through a model or module in the center, and producing an output or memory bank on the right, followed by a performance evaluation table on the far right.

[1] Global Layout and Structure: The figure is organized into three horizontal rows, each representing a distinct AD method. Row (A) at the top shows a traditional autoencoder-based approach. Row (B) in the middle illustrates a memory-based method using a pre-trained vision model. Row (C) at the bottom presents the proposed method using a pre-trained AVLM. On the far right, a vertical comparison table lists four criteria: 'score', 'reason', 'few-shot', and 'annot.-free', with checkmarks (✓) or crosses (✗) indicating whether each method satisfies the criterion. For method (C), the 'annot.-free' criterion has a question mark (?), suggesting uncertainty or a design choice.

[2] Visual Modules and Attributes: In row (A), the input consists of multiple images of meal trays enclosed in a dashed rectangle, labeled (A). These feed into two parallel green trapezoidal encoders ('Enc.') and blue trapezoidal decoders ('Dec.'), forming an autoencoder structure. Outputs from both local and global branches are combined into a single rounded rectangle labeled 'Anomaly Map'. In row (B), the input is again multiple meal tray images within a dashed box, labeled (B). These are processed by a large green trapezoid labeled 'Vision Model'. The output is a group of four rounded rectangles labeled 'Local', 'Global', 'Regional', and 'Others', collectively titled 'Vision Memory Banks'. In row (C), the input includes a single meal tray image and a 'Text Prompt' below it, both inside a dashed box labeled (C). This feeds into a teal trapezoid labeled 'AVLM'. The output is a dashed rounded rectangle labeled 'Text Feature', which is part of a larger dashed box labeled 'Text Memory Bank'.

[3] Connections and Arrows: In all three rows, solid black arrows indicate the flow of data. In (A), arrows go from the input images to the encoders/decoders, then from the encoders/decoders to the 'Anomaly Map'. In (B), an arrow connects the input images to the 'Vision Model', and another arrow leads from the model to the 'Vision Memory Banks'. In (C), an arrow connects the input (image + text prompt) to the 'AVLM', and another arrow leads from the AVLM to the 'Text Feature' within the 'Text Memory Bank'. The performance table on the right is not connected by arrows but is aligned vertically with each method for direct comparison.
