# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ICFNet: Integrated Cross-modal Fusion Network for Survival Prediction — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02778

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the ROD (Reduced Orthogonal Decomposition) module, designed to process and refine patch features through a series of operations aimed at reducing redundancy and enhancing modality-specific representations. The global layout is left-to-right, depicting a sequential flow from input patch features to refined output features. On the far left, multiple green rectangular bars labeled f_i^p represent input patch features, which are fed into an 'Average Pooling' operation. This pooled output is then passed to a light green rounded rectangle labeled 'Projector', which transforms the features into a higher-level representation.

From the Projector, the feature stream splits into two paths. One path leads directly to a circular node marked with a minus sign (representing element-wise subtraction), while the other connects to a blue rectangular bar labeled f_i^{rp,g}, representing a histo-genomic feature. These two inputs are subtracted element-wise, producing an intermediate feature denoted as f_i^{po}. This intermediate feature is further processed by being connected to another circular node marked with a plus sign (element-wise addition), where it is combined with an orange rectangular bar labeled f_i^{rp,t}, representing a histo-text feature. The result of this addition is then directed to a light green rounded rectangle labeled 'Fusor'.

Additionally, both the histo-genomic feature f_i^{rp,g} and the histo-text feature f_i^{rp,t} are separately connected to loss functions labeled L_cos, indicating that cosine similarity loss is applied to enforce orthogonality between these modality-specific features and the projected features. A feedback loop from the Fusor back to the subtraction node suggests a residual connection, reinforcing the modality-specific enhancement.

The Fusor combines the processed features and outputs the final refined feature, represented by a green rectangular bar labeled f_i^{rp}. At the bottom of the diagram, a legend clarifies the symbols: a circle with a minus sign denotes 'Element-wise Minus', and a circle with a plus sign denotes 'Element-wise Add'. The overall design emphasizes feature abstraction, orthogonality enforcement via cosine loss, and modality-specific enhancement using residual connections and fusion.
