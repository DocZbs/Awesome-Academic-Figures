# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generating Long-form Story Using Dynamic Hierarchical Outlining with Memory-Enhancement — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13575

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a general architectural diagram of a multi-stage story generation framework, where the process is structured around expanding rough outlines into detailed ones using memory-enhanced content retrieval. The global layout is horizontal and modular, divided into distinct functional blocks connected by directional arrows indicating data flow and processing steps. On the far left, a box labeled 'Relevant content' feeds into a central processing pipeline via a blue arrow, which then branches into an 'Update' and 'Store' operation, suggesting a feedback loop for content management.

At the top right, a dashed rectangular boundary labeled 'Update' contains a light-blue rounded rectangle labeled 'Calculate the score', which receives input from a list of quadruples <sub_n, act_n, obj_n, idx_n> and outputs a 'score Content'. This scoring mechanism appears to evaluate generated content.

The core of the diagram is centered around the 'DHO at stage i' block, which stands for Detailed Outline at stage i. This block contains two main components: a blue document-shaped box labeled 'Detailed Outline i' and an orange document-shaped box labeled 'Partial Story s_i^f', containing sample narrative text: 'As he stood in the middle of the room, taking in the blank canvas ...'. An arrow from the 'Detailed Outline i' points to the 'Partial Story s_i^f', indicating that the detailed outline generates the partial story.

To the left of the DHO block, a vertical stack of boxes lists story elements: 'Setting', 'Characters', 'Outline', and 'Writing Theory', which feed into a sequence of 'Rough Outline i', 'Rough Outline i+1', etc., suggesting iterative refinement. A gray downward arrow connects this stack to the rough outlines, indicating derivation.

Below the DHO block lies the 'Memory-Enhancement Module', which includes a gray box labeled 'TKG at stage i−1' (Temporal Knowledge Graph), depicted as a network of interconnected blue nodes with one central node. This TKG receives 'relevant content' from the 'Detailed Outline i' via a dashed blue arrow labeled 'query', and also receives updates from extracted quadruples via a solid orange arrow labeled 'update'. The quadruples are listed as <sub_1, act_1, obj_1, idx_1>, ..., <sub_n, act_n, obj_n, idx_n>, and are derived from the 'Partial Story s_i^f' through an 'extract quadruples' step.

On the far right, a large peach-colored document-shaped box labeled 'Long Story S' contains narrative text, including the same sentence from the partial story and additional text: 'Peering through the peephole, he saw an older gentleman with a friendly smile - his ...'. This indicates that partial stories are aggregated into a complete long story.

Arrows connect the 'Partial Story s_i^f' to the 'Long Story S' and also back to the 'Memory-Enhancement Module' for quadruple extraction. Additionally, a dashed blue arrow labeled 'relevant content' loops from the TKG back to the 'Detailed Outline i', forming a feedback loop that enhances the outline with retrieved information. The entire process is iterative, with each stage refining the outline and enriching the memory graph for subsequent stages.
