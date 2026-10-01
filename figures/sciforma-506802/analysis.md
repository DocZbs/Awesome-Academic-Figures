# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Empowering Bengali Education with AI: Solving Bengali Math Word Problems through Transformer Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02599

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic diagram of a Bengali Math Word Problem solver, structured into three main horizontal sections: data preparation, model architecture, and evaluation. The top section outlines the dataset pipeline starting from a dashed rectangular box labeled 'Dataset', containing abstract pink wavy lines representing raw data. This flows rightward via gray arrows through three sequential blue rounded rectangles: 'Dataset Translation', 'Dataset Annotation', and 'Dataset pre-processing'. From the last step, a downward gray arrow labeled 'Dataset Split (80:20)' leads to two document-shaped boxes below: 'Train Data' and 'Test Data', both marked with 'CSV' and green tabs indicating file format. A dotted horizontal line separates this preprocessing phase from the middle section.

The middle section contains two main components within a large rounded rectangle. On the left is an 'Attention Function' diagram showing an Encoder (purple background with tokens i1–i6 arranged in a grid) connected via a yellow circle labeled 'H' (representing attention mechanism) to a Decoder (green background with tokens i1–i4 and an output token i0*). A dotted vertical line separates this from the right component, labeled 'Transformer based models', which lists four models in bullet points: 'Basic Transformer' (green text), 'Bangla Bert' (pink text), 'Bangla BERT Base' (pink text), and 'sahajBERT' (pink text). A gray arrow from the 'Train Data' CSV box points leftward to this transformer models block, indicating training input.

The bottom section, labeled 'Model Evaluation', is enclosed in a dashed rectangle. It shows a flow from a beige rounded rectangle labeled 'Generated Equation' to another labeled 'Equation Solver', connected by a gray arrow. A vertical black arrow from the 'Transformer based models' block points down to the 'Generated Equation' box, indicating the output of the trained models. The entire diagram is captioned at the bottom: 'Schematic diagram of Bengali Math Word Problem solver'. All arrows are gray, solid, and unidirectional, except for the dotted line separating the upper and middle sections. Text labels are black unless specified otherwise, and shapes include rounded rectangles, document icons, and grids for encoder/decoder.
