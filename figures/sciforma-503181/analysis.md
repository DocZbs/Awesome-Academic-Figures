# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

NeRF-To-Real Tester: Neural Radiance Fields as Test Image Generators for Vision of Autonomous Systems — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16141

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of N2R-Tester, a framework for testing image processing systems using metamorphic relations derived from NeRF-based pose transformations. The global layout is structured as a horizontal workflow divided into three main components, labeled (1), (2), and (3), arranged from left to right. Component (1) is centrally positioned and represents the System Under Test (SUT), denoted by a large light green rectangular block labeled 'f'. This block processes input images and produces corresponding outputs. Component (2), located on the left, represents a metamorphic relation (MR) implemented as a pose transformation τ, depicted as a yellow rectangular box. It takes an input image i_nerf and generates a transformed version i_τ through the application of τ. Component (3), on the right, represents the MR verification step, shown as a light blue rectangular box containing the function δ(f(i_nerf), f(i_τ)), which computes the inconsistency or difference between the SUT’s outputs on the original and transformed inputs. The visual modules are distinguished by color and shape: the SUT 'f' is a tall green rectangle; the transformation τ is a smaller yellow rectangle; and the comparison function δ is a blue rectangle. All mathematical expressions are written in black serif font, consistent with LaTeX typesetting. The connections are represented by solid black arrows indicating the flow of data and computation. From i_nerf, one arrow points directly to the SUT 'f', producing f(i_nerf). Another arrow from i_nerf goes downward to τ, which then outputs i_τ. This i_τ is fed into the SUT 'f', yielding f(i_τ). Both outputs, f(i_nerf) and f(i_τ), are then directed to the blue box δ, where they are compared. The diagram emphasizes the parallel processing of original and transformed inputs through the same SUT, followed by a final consistency check via the metamorphic relation δ. The figure caption clarifies that (1) is the SUT f, (2) is the MR τ rendered in a NeRF model, and (3) is the MR δ used to detect inconsistencies between the two outputs. The entire structure reflects a test oracle mechanism where the expected behavior under transformation is implicitly defined by the MR, and deviations indicate potential bugs or failures in the SUT.
