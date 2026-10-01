# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UIP2P: Unsupervised Instruction-based Image Editing via Edit Reversibility Constraint — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15216

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a training framework for instruction-based image editing, emphasizing edit reversibility. The global layout is a horizontal workflow from left to right, depicting two sequential editing stages: a forward edit followed by a reverse edit. The entire process begins with an input image and ends with an output image, which ideally matches the original input, enforcing consistency through a reconstruction constraint.

The visual modules consist of rectangular image boxes, labeled with identifiers such as I_i (input image), I_e (edited image), and I_r (reconstructed image). Each image box contains a realistic painting of a boat on water, with variations introduced during editing. Above each image, a text box labeled T_i, T_e, or T_r denotes the corresponding textual instruction: 'a painting of a boat on the water' for T_i, 'Add a mountain range' for C_f (forward instruction), and 'Remove the mountain range' for C_r (reverse instruction). These instruction boxes are styled as rounded rectangles with black borders.

Central to the diagram are two identical gray hourglass-shaped modules labeled 'Edit Model', representing the core neural network responsible for performing image edits based on given instructions. Each Edit Model receives both an image and an instruction as inputs and produces an edited image as output. Below each Edit Model, there is a smaller blue image box labeled A_f or A_r, representing an attention mask or activation map highlighting the edited region—specifically, the mountain range added or removed.

Connections are shown via white arrows indicating data flow. The initial image I_i flows into the first Edit Model along with the forward instruction C_f, producing the edited image I_e. This I_e then feeds into the second Edit Model with the reverse instruction C_r, yielding the reconstructed image I_r. Additionally, a feedback loop connects I_r back to the beginning, where it is compared with the original I_i using a horizontal triple-bar symbol (representing a loss function or comparison module), enforcing the Edit Reversibility Constraint (ERC). The final output is labeled 'Output' in a green rectangle, matching the 'Input' label at the start, visually reinforcing the goal of perfect reconstruction.
