# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Symbolic Disentangled Representations for Images — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19847

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the ArSyD architecture for disentangled representation learning in scenes containing multiple objects. The global layout is a left-to-right pipeline divided into two main branches: the primary scene processing path and a secondary donor object manipulation path, both converging at a feature exchange module. The top branch processes an input 'Scene' image (a gray background with three colored objects: red cube, blue sphere, gray cube), which passes through an orange trapezoidal 'Encoder' block. This outputs features fed into a yellow rectangular 'Slot Attention' module, which decomposes the scene into four slots (Slot 1 to Slot 4), each represented by a pair of images: a color image (top) and a grayscale mask (bottom). Slot 1 contains the red cube, Slot 2 is empty, Slot 3 contains the blue sphere, and Slot 4 contains the gray cube. Each slot's mask highlights the object’s location with a bright spot. These slots are then passed to a 'Decoder' (orange trapezoid) to reconstruct the original scene, producing 'Recon. Scene', which is compared to the ground truth 'Scene' via MSE Losses. 

The bottom branch introduces a 'Donor' object (red cube on gray background), processed by a separate 'Encoder' (orange trapezoid). The output from Slot 1 (representing the red cube in the scene) and the Donor's encoded features are fed into a large green rectangular 'Feature Exchange' module. This module swaps or modifies the generative factors of the selected slot (here, Slot 1) using information from the Donor. The modified slot features pass through an orange 'Slot MLP' block before being decoded by another 'Decoder' (orange trapezoid) to produce 'Recon. Scene with Donor'. This reconstructed scene now includes the Donor object replacing the original red cube. The Donor itself is also decoded separately via a green 'Decoder' to produce 'Recon. Donor', which is compared to the original Donor image. 

On the right side, under 'MSE Losses', three pairs of images are shown for comparison: 'Recon. Scene' vs 'Scene', 'Recon. Scene with Donor' vs 'Scene with Donor', and 'Recon. Donor' vs 'Donor'. The 'Scene with Donor' image shows the original scene but with the red cube replaced by the Donor object. All image boxes are bordered in red for the scene-related reconstructions and blue for the donor-related ones. The entire model is trained end-to-end using a loss function L_{Scene}, as referenced in Equation~\ref{eq:scene_loss}. The diagram uses consistent visual attributes: encoders and decoders are orange trapezoids, the Slot Attention and Feature Exchange modules are rectangular blocks (yellow and green respectively), and all image representations are square with labeled slots and masks.
