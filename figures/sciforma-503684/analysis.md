# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LH-Mix: Local Hierarchy Correlation Guided Mixup over Hierarchical Prompt Tuning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16963

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into three main panels, labeled (a), (b), and (c), each illustrating different aspects of a hierarchical topic classification (HTC) model's structure and its transformation into a latent space representation.

Panel (a) displays the global hierarchy of HTC as a tree structure rooted at 'ROOT'. The root node is represented by a gray circle with diagonal hatching. It branches into two main child nodes: 'CS' (Computer Science), shown as an orange circle, and 'Math' (Mathematics), shown as a green circle. Each of these further branches into two leaf nodes: under 'CS' are 'Software' and 'Machine Learning', both represented by red star-shaped icons within circles; under 'Math' are 'Statistics' and 'Geometry', both represented by green star-shaped icons within circles. All connections are solid black arrows pointing from parent to child, indicating a strict hierarchical relationship. The panel is captioned '(a) The global hierarchy of HTC.'

Panel (b) shows two separate local hierarchies extracted from (a). On the left, a subtree rooted at 'ROOT' includes only the 'CS' branch down to 'Machine Learning'. On the right, another subtree rooted at 'ROOT' includes only the 'Math' branch down to 'Statistics'. Both subtrees retain the same visual attributes as in (a): gray hatched 'ROOT', orange 'CS', green 'Math', and corresponding star icons for the leaves. This panel illustrates how specific paths or sub-hierarchies can be isolated from the full tree. The caption reads '(b) Local hierarchy of (a).'

Panel (c) presents the spatial inclusion relation derived from the global hierarchy in (a), mapping the hierarchical structure into a continuous latent space. The layout features two distinct clusters: an orange cluster on the left labeled 'CS', containing the 'Software' and 'Machine Learning' nodes (red stars), and a green cluster on the right labeled 'Math', containing 'Statistics' and 'Geometry' (green stars). These clusters are visually emphasized with soft color gradients. Between them, dashed lines represent interpolation paths generated via Mixup operations. Specifically, a blue curved line connects 'Machine Learning' to 'Statistics' with a labeled point at λ=0.5, indicating a 50% mix between the two. Similarly, a yellow curved line connects 'Machine Learning' to 'Geometry' with a labeled point at λ=0.6. Additionally, a horizontal dashed line connects 'Machine Learning' to 'Statistics' with a point at λ=0.5. The parameter λ denotes the Mixup ratio, capturing varying degrees of implicit peer or sibling label correlation in the latent space. The caption states '(c) The spatial inclusion relation of (a).'

Overall, the figure demonstrates the transition from a discrete, explicit hierarchical structure (a) to a continuous, implicit spatial representation (c), where hierarchical relationships are encoded through geometric proximity and interpolation, enabling the modeling of nuanced correlations among sibling categories.
