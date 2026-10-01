# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Branch Mutual-Distillation Transformer for EEG-Based Seizure Subtype Classification — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15224

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct machine learning training paradigms: (a) knowledge distillation and (b) mutual learning, each depicted as a separate flowchart. The global layout is horizontal, with both diagrams placed side-by-side, labeled (a) and (b) respectively, and a shared caption below stating '(a) Knowledge distillation; and, (b) mutual learning.'

In diagram (a), the knowledge distillation process begins with a yellow, stacked rectangular block labeled 'Data' on the left. This data flows via an orange arrow into two parallel processing blocks: a blue 3D box labeled 'Teacher model' with the word 'Fix' above it, indicating it is frozen during training, and a light blue 3D box labeled 'Student model' with 'Train' above it, indicating it is being trained. The teacher model outputs predictions labeled 'Pred_T' in a vertical blue rectangle, while the student model outputs 'Pred_S' in a similar vertical light blue rectangle. A bidirectional curved arrow labeled 'Knowledge Flow' connects Pred_T and Pred_S, illustrating the transfer of knowledge from the teacher to the student. Additionally, a green arrow from a light green rectangular block labeled 'Label' points directly to the student model, indicating that the student is also trained using ground-truth labels.

In diagram (b), the mutual learning setup starts similarly with a yellow 'Data' block feeding into two parallel light blue 3D boxes labeled 'Student model A' and 'Student model B', both marked with 'Train' above them. Each student model produces predictions: 'Pred_A' (blue) and 'Pred_B' (light blue), respectively. These predictions are connected by a bidirectional curved arrow labeled 'Knowledge Flow', showing that the two student models learn from each other’s outputs. Simultaneously, a green arrow from a light green 'Label' block points to both student models, indicating that they are jointly trained using ground-truth labels. Above the entire diagram (b), a green arrow from a small gray box labeled '(b)' points to the label block, emphasizing the source of supervision.

Visually, the models are represented as 3D rectangular prisms with varying shades of blue—darker for the fixed teacher model, lighter for trainable student models. Predictions are shown as vertical rectangles with rounded corners, colored to match their originating model. Data and labels are represented as stacked yellow and flat light green rectangles, respectively. Arrows are color-coded: orange for data input, green for label input, and blue for prediction outputs and knowledge flow. Text labels are clear and centrally placed within or near the respective components. The overall structure emphasizes the contrast between one-way knowledge transfer in distillation versus peer-to-peer learning in mutual learning.
