# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relation-Guided Adversarial Learning for Data-free Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11380

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative illustration of three different sample optimization strategies in the context of teacher-student learning frameworks: adversarial methods, contrastive methods, and the proposed 'Ours' approach. The global layout consists of three side-by-side panels, each enclosed in a dashed rectangular box, labeled at the bottom as 'Adversarial methods', 'Contrastive methods', and 'Ours'. Above these panels is a legend specifying the visual symbols: blue circles and triangles represent 'Samples from the teacher', peach-colored circles and triangles denote 'Samples from the student', and a gray circle signifies the 'Average embedding'.

Each panel contains two diagonal regions separated by a gray diagonal line, labeled 'Teacher' in the upper region and 'Student' in the lower region. In all panels, the teacher samples (blue shapes) are positioned in the upper half, and student samples (peach shapes) are in the lower half.

In the 'Adversarial methods' panel, red dashed arrows point from each student sample toward the teacher samples, indicating a push-away mechanism. There are no connections between student samples themselves, suggesting that adversarial methods focus solely on aligning student samples away from teacher samples without considering relationships among student samples.

In the 'Contrastive methods' panel, red dashed arrows again indicate pushing student samples away from teacher samples. Additionally, a gray circle labeled 'Average embedding' appears below the student samples, with red arrows pointing from it to each student sample, implying that student samples are pushed away from this average embedding. This suggests an attempt to increase intra-class diversity but still lacks explicit modeling of relationships between individual student samples.

In the 'Ours' panel, red dashed arrows continue to show student samples being pushed away from teacher samples. However, new green solid arrows appear, connecting the student samples to each other and to the average embedding. Specifically, green arrows point from the average embedding to each student sample and also connect the student samples to one another, indicating a pull-together mechanism. This reflects the proposed method's goal of enhancing intra-class diversity by encouraging student samples to cluster around the average embedding while simultaneously maintaining separation from teacher samples to preserve inter-class confusion.

The figure uses color-coded arrows to convey directionality: red dashed arrows signify repulsion (pushing away), while green solid arrows signify attraction (pulling close). The visual design emphasizes that the proposed method uniquely incorporates both inter-class repulsion and intra-class attraction, unlike the other two approaches which only enforce repulsion. The overall structure highlights the evolution from simple adversarial pushing to contrastive pushing with an average anchor, culminating in the proposed method that explicitly models relationships among student samples for improved sample diversity and class separation.
