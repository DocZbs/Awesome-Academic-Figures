# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Unified Guidance for Geometry-Conditioned Molecular Generation — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02526

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive overview of the UniGuide framework, a flexible and generalizable method for conditional generative modeling in drug discovery and related geometric tasks. The layout is divided into five main sections arranged horizontally: three application examples on the left, the core architectural design in the center, and a demonstration of generalization to a new task on the far right.

[1] Global Layout and Structure:
The figure is structured as a horizontal workflow. On the left, three distinct scenarios—(i) structure-based drug design (SBDD), (ii) fragment-based drug design (FBDD), and (iii) ligand-based drug design (LBDD)—are shown as vertical pairs of input-output images, each labeled with a Roman numeral and a brief description. These are followed by the central block detailing the UniGuide architecture, which is enclosed in a large rounded rectangle. To the far right, a separate flowchart illustrates how UniGuide can be adapted to a new task involving atom densities, emphasizing its generalizability.

[2] Visual Modules and Attributes:
In the leftmost section (i), the top panel shows a cyan-colored 3D surface representation of a target receptor, labeled 'SBDD'. Below it, after passing through a 'UniGuide' module (a white rounded rectangle with black border), a blue molecule with yellow and red atoms is generated, fitting into the receptor’s binding site. In section (ii), the top panel displays a protein structure with several small colored fragments (purple, orange, blue) near it, labeled 'FBDD'. After UniGuide processing, a larger, complex blue molecule is shown docked into the protein. Section (iii) features a gray 3D shape representing a desired molecular scaffold, labeled 'LBDD', which, after UniGuide, yields a blue aromatic compound matching the shape.

The central UniGuide architecture consists of four nested modules. At the top, 'Source condition' includes two visual examples: a green helical structure and a purple 3D volume, with text indicating 'Structures, Volumes, Densities' and symbol S. Adjacent to this is the 'Unconditional Model', represented as a gray box with the equation εθ(zt, t) → ẑ0, and marked with '× extra networks' and '× extra training' to indicate no additional training is needed. Below these, the 'Condition Map C' is shown as a gray box with the mathematical definition: S × Z → Z and s × z → c. The bottom module is the 'Self-Guided Model', containing the equation: êθ(zt, t, c) = εθ(zt, t) + (√(1−αt)S / 2) · ∇zt ||z0 − C(s, ẑ0)||²₂, which describes the guided denoising process.

On the far right, the 'New Task: Atom densities' section begins with a diagram showing a blue chain-like molecule with a red sphere labeled 'Oxygen target'. This leads to a 'Define Condition Map C' box, which connects to 'Any unconditional model εθ(zt, t)', both feeding into a final 'UniGuide' module, demonstrating adaptability.

[3] Connections and Arrows:
All three left-side examples use downward arrows from the input to the 'UniGuide' module, then another arrow from UniGuide to the output molecule. In the central architecture, arrows connect the 'Source condition' and 'Unconditional Model' to the 'Condition Map C', which in turn feeds into the 'Self-Guided Model'. The right-side flowchart uses downward arrows from the 'New Task' to 'Define Condition Map C', then branching arrows to 'Any unconditional model' and back to 'UniGuide', illustrating the modular integration process.

The figure visually emphasizes UniGuide's ability to handle diverse conditioning inputs (structures, fragments, shapes, densities) and its self-guided mechanism that leverages an existing unconditional model without requiring retraining, enabling broad applicability across different drug design paradigms and novel geometric tasks.
