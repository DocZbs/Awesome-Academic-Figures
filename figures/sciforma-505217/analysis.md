# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DLScanner: A parameter space scanner package assisted by deep learning methods — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19675

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel iterative workflows side-by-side, separated by a vertical dashed line, illustrating the training and prediction cycles for an ML regressor (left panel) and an ML classifier (right panel), both integrated with a VEGAS adaptive sampling strategy. The global layout is structured as a top-down flowchart with feedback loops, emphasizing the iterative nature of the process. Each panel follows a similar structure: initial training, prediction phase, point selection, evaluation via a HEP package, and accumulation of data for subsequent iterations.

In the left panel (regressor), the process begins with 'ML regressor (0th training)', which receives initial random numbers K₀ and corresponding outputs Y(K₀) from a HEP package, indicated by a green arrow. This leads to 'Train VEGAS map' (blue box). The trained model then enters the 'ML regressor (prediction)' stage, which uses a combination of the VEGAS map and random inputs (denoted by L: VEGAS map+Rand., green arrow) to produce predictions Ŷ. These predictions guide the selection of a batch of points K, using a χ²(Ŷ) criterion plus random points. The selected K is fed into the HEP package to compute Y(K), which is then accumulated into a dataset (orange arrow). This accumulated data, along with previous steps (dashed black arrow labeled 'Include from previous steps'), feeds back into 'ML regressor (training)' and also into 'Train VEGAS map' (blue arrow). A dotted black arrow labeled 'Next iteration' loops back to the prediction stage, closing the cycle.

In the right panel (classifier), the structure mirrors the left but adapts for classification. It starts with 'ML classifier (0th training)', again receiving K₀ and Y(K₀) from the HEP package (green arrow), followed by 'Train VEGAS map'. The prediction stage ('ML classifier (prediction)') uses the same L: VEGAS map+Rand. input to produce Ŷ ∈ [0,1]. The selection of K is based on Ŷ, combined with random points. The HEP package evaluates these K values, producing two distinct outputs: K_Y=0 and K_Y=1, represented by a diamond-shaped decision node. Both outputs are accumulated (orange arrows) and fed back into the next training phase. The accumulated data, including previous steps (dashed black arrow), is used to train the next iteration of the classifier and to retrain the VEGAS map (blue arrow). The 'Next iteration' loop (dotted black arrow) returns to the prediction stage.

Key visual attributes include rectangular boxes for processing stages, a diamond for decision/branching, solid black arrows for primary data flow, green arrows for random input sources, orange arrows for data accumulation, and blue arrows for VEGAS map training and usage. Dashed lines indicate inclusion of historical data. The figure effectively contrasts how regression and classification tasks are adapted within the same adaptive sampling framework, with the only major difference being the output format (continuous Ŷ vs. binary Ŷ) and the branching logic in the classifier's HEP evaluation step.
