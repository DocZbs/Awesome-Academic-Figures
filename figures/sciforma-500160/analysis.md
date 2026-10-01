# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deep Learning Models for Colloidal Nanocrystal Synthesis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10838

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part workflow for generating chemical descriptors from material recipes using computational methods and graph neural networks (GNNs). Part (a) outlines the pretraining phase: starting with a list of chemical formulas extracted from recipes—PbO, Se, OA, and TOP—these are processed through two parallel pathways. The first uses the Materials Project database to obtain known 3D crystal structures for PbO and Se, depicted as ball-and-stick models within cubic unit cells. The second applies Density Functional Theory (DFT) with geometry optimization to generate 3D molecular structures for OA and TOP, shown as extended chain-like organic molecules. These four 3D structures are then fed into a GNN model, represented as a hexagonal ring of nodes with input feature vectors (colored green, purple, and gray), which undergoes a 'Pretrain-finetune' process. The output is a set of chemical descriptors, each corresponding to one of the four components, visualized as colored rectangular blocks labeled PbO, Se, OA, and TOP.

Part (b) illustrates the inference or application phase for predicting properties of composite materials. It begins with a vertical stack of input features, including temperature variables (T_i, T_j, ...) and molecular identifiers (Mol.PbO, Mol.Se, Mol.OA, Mol.TOP) alongside their respective chemical components (PbO, Se, OA, TOP). These inputs are transformed into initial atomic configurations: PbO is shown as a simple diatomic unit (gray and red spheres), while Se, OA, and TOP are represented as their respective 3D molecular structures. These initial configurations are combined to form an intermediate configuration, which is then subjected to DFT-based geometry optimization, resulting in a refined structure. This optimized structure is passed to the same GNN model as in part (a), again represented by a hexagonal node network with input feature vectors. The output is a vertical stack of predicted properties or descriptors, including 'Mol.', 'PbO-OA', and 'PbO-OA', indicating the model's ability to predict properties of composite systems. The entire diagram uses consistent visual elements: black arrows indicate data flow, dashed boxes group related steps, and color-coded blocks denote different chemical entities. The GNN is consistently depicted as a hexagon with six nodes, emphasizing its role as a central processing module in both phases.
