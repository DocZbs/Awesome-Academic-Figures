# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Concurrent vertical and horizontal federated learning with fuzzy cognitive maps — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12844

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates three distinct categories of federated learning: Horizontal Federated Learning, Vertical Federated Learning, and Federated Transfer Learning. The layout is divided into three main vertical sections, each representing one category, arranged from left to right. Each section contains rectangular blocks representing datasets from two participants, labeled 'Dataset Participant 1' and 'Dataset Participant 2', along with auxiliary vertical bars labeled 'Samples' and 'Labels' to indicate data dimensions.

In the first section (Horizontal Federated Learning), the datasets from both participants are shown as overlapping rectangles in light pink and light blue, respectively, sharing the same set of samples (indicated by the vertical 'Samples' bar on the left) but having different labels (shown as separate vertical 'Labels' bars on the right). The overlapping region is shaded gray and labeled 'Horizontal Federated Learning', emphasizing that participants share the same feature space but have different sample sets.

The second section (Vertical Federated Learning) displays datasets from the two participants as adjacent rectangles, with Participant 1’s dataset in light pink and Participant 2’s in light green. These datasets overlap vertically, indicating they share the same samples (as shown by the 'Samples' bar on the left) but have different features. The overlapping area is shaded light blue and labeled 'Vertical Federated Learning'. The 'Labels' bars are positioned separately on the right, suggesting that labels may be available only to one participant or shared selectively.

The third section (Federated Transfer Learning) shows a scenario where Participant 1 has a dataset (light pink) with both samples and labels, while Participant 2 has a dataset (light green) with samples but no labels. An orange arrow labeled 'Federated Transfer Learning' points from Participant 1’s dataset to a green circular icon with a white checkmark, symbolizing knowledge transfer or model adaptation from the labeled data to the unlabeled data of Participant 2. This implies that the model trained on Participant 1’s data is transferred and adapted to Participant 2’s data without direct label sharing.

All datasets are represented as rectangles with distinct background colors: light pink for Participant 1, light blue for Participant 2 in the horizontal case, and light green for Participant 2 in the vertical and transfer cases. The 'Samples' and 'Labels' bars are thin vertical rectangles with light orange and light green backgrounds, respectively. Text labels are centered within their respective shapes using black sans-serif font. The overall structure uses alignment and overlapping to visually convey data partitioning strategies across the three federated learning paradigms.
