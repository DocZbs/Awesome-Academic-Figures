# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Bi-Sparse Unsupervised Feature Selection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16819

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a feature selection process, structured as a horizontal workflow from left to right. On the far left, under the label 'Features', there is a grid of 8 rows and 5 columns of rounded rectangular boxes representing individual features. These boxes vary in fill color: some are white (unselected), some are light green (possibly intermediate or less important), and a few are dark green (indicating higher importance or selection). The grid visually represents the input feature set before selection.

Moving right, each row of features connects via a black arrow to a corresponding numerical score in a column labeled 'Scores'. These scores are displayed in black-bordered rectangular boxes and represent the computed importance values for each feature, derived from the row-wise norms of a transformation matrix W, as described in the caption. The scores shown are: 0.43, 0.86, 0.78, 0.42, 1.21, 0.39, 0.20, and 0.40.

Next, the scores are connected to a 'Sort' column, which contains ranked positions in black-bordered boxes: 4-th, 2-th, 3-th, 5-th, 1-th, 7-th, 8-th, and 6-th. This indicates the descending order of the scores, with the highest score (1.21) assigned rank 1-th.

Finally, the sorted ranks feed into a 'Selected Features' column on the far right. Only the top three ranked features (1-th, 2-th, and 3-th) are highlighted with red borders and connected by red arrows to their corresponding feature indices: 5, 2, and 3 respectively. These selected features are also enclosed in red-bordered boxes, indicating they are the final output of the selection process.

The visual flow clearly demonstrates the method: compute scores for each feature, sort them in descending order, and select the top-k (here k=3) features based on their rank. The use of color (dark green for high importance, red for selection) and directional arrows emphasizes the sequential nature of the algorithm. The figure serves as a visualization of the feature selection results for two methods, SPCAFS and the proposed BSUFS, though only one set of results is depicted.
