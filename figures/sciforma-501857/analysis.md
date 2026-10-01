# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generalizable Sensor-Based Activity Recognition via Categorical Concept Invariant Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13594

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part visualization of the CCIL (Concept-based Cross-domain Invariant Learning) framework. Part (a) illustrates the overall architecture, while part (b) demonstrates the learned domain-invariant representations through data clustering.

[1] Global Layout and Structure:
The figure is horizontally divided into two main sections: (a) on the left, showing the end-to-end model pipeline, and (b) on the right, depicting the effect of the model on data distribution across domains and classes. The left section flows from left to right, starting with source domains, moving through feature extraction and classification, and ending with loss computation. The right section uses a before-and-after comparison to show how the model aligns data points across domains within the same class.

[2] Visual Modules and Attributes:
In part (a), the top row shows multiple source domains (D¹, D², ..., Dˢ) represented by stylized human figures, each associated with a sequence of running stick figures symbolizing data samples. These domains feed into a large rectangular input block labeled with D¹D²...Dˢ, containing vertical bars (x₁, x₂, ..., xₙ) color-coded green, orange, blue, gray, etc., representing different domain features. Below this block, indices 1, 2, ..., C denote class labels.

From the input block, an arrow leads to a gray parallelogram labeled f_θ, representing the feature extractor. Its output is a latent feature vector z, shown as a horizontal bar with colored segments corresponding to the input domains. This z is then passed to another gray parallelogram labeled g_w, the classifier head, producing output o, also a segmented bar. From o, an arrow points to L_CE, indicating cross-entropy loss.

A curved arrow from z connects to a 'Regularization Block' (gray rectangle), which computes L_CMS — the concept matrix similarity loss. This block receives input from a dashed-boxed module labeled 'Concept matrix', which contains W ⊙ z (element-wise multiplication of a weight matrix W with z), followed by a 'mean value' operation, resulting in a striped patterned bar labeled M̂.

In part (b), the top panel shows three domains (Domain 1, Domain 2, Domain 3) with distinct shapes and colors (yellow circles, red diamonds, blue squares). Arrows connect samples across domains, indicating alignment. A vertical dashed line separates this from the bottom panel, which shows three classes (Class 1, Class 2, Class 3) with clustered data points (black squares, triangles, circles). A large curved arrow indicates transformation from the top to the bottom panel, where data points from different domains are now grouped by class, demonstrating domain-invariant learning. In the bottom panel, dashed arrows show convergence of samples from different domains toward a common point within each class cluster.

[3] Connections and Arrows:
In part (a), arrows indicate the forward pass: from source domains to the input block, then to f_θ, then to z, then to g_w, then to o, and finally to L_CE. A feedback loop from z to the Regularization Block, which then connects to L_CMS, represents the regularization path. The Concept matrix module is connected to the Regularization Block via a bidirectional arrow, emphasizing its role in computing the loss.

In part (b), solid arrows between domains in the top panel show inter-domain relationships being learned. The large curved arrow from top to bottom signifies the transformation induced by the model. Within the bottom panel, dashed arrows point from individual data points toward central cluster points, illustrating the convergence of samples from different domains into class-specific clusters.
