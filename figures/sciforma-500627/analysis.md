# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11605

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an iterative training framework for improving an actor model M_t and a refiner model R_t through a cycle of negative data collection, tree search refinement, and model training. The global layout is divided into three main sections: 'Negative Data Collection' at the top left, 'Tree Search Refinement' on the right, and 'Model Training' at the bottom left, connected by large blue arrows indicating the flow between stages.

In the 'Negative Data Collection' section, a prompt x is input into the actor model M_t (light blue rounded rectangle), which generates a response y. This response is then evaluated by the refiner model R_t (light yellow rounded rectangle), which outputs a judgment j. If the judgment is negative (indicated by a red 'x' symbol), the triplet {x, y, j} is stored as negative data in a gray cylinder-shaped database. A dashed arrow from this database points back to the 'Model Training' section, indicating that this data will be used for training in the next iteration.

The 'Tree Search Refinement' section employs a breadth-first search strategy to improve negative responses. Starting from a root node containing a negative data triplet {x, y₀, j₀}, the tree expands into multiple branches, each representing a potential refined response. Each node contains a triplet {x, y_i, j_i}, and nodes marked with a red 'x' represent still-invalid responses. One branch leads to a correct response {x, y₈, j₈}, marked with a green check. Below this branch, a detailed breakdown shows two operations performed by the refiner R_t: (1) refining y₃ → y₈ and (2) judging y₈ → j₈. Dashed orange lines connect the tree structure to the refiner, illustrating how it operates on each branch.

The 'Model Training' section at the bottom left shows how the collected data is used to train the models for the next iteration. Two training processes are depicted: DPO Training for the actor M_{t+1} (light blue rounded rectangle) uses 'Actor Data' from a blue cylinder containing triplets {x, y₈ > y₀}, where y₈ is better than the original y₀. RFT Training for the refiner R_{t+1} (light yellow rounded rectangle) uses 'Refiner Data' from a yellow cylinder containing pairs {x, y_i → j_i} and {x, y₃, j₃ → y₈}, capturing the refinement process. Solid blue arrows point from the trained models M_{t+1} and R_{t+1} back to the 'Negative Data Collection' section, closing the loop for the next iteration.

The entire framework emphasizes continuous self-improvement, with the refiner guiding the refinement of responses via tree search, and both models being updated based on the quality of generated and refined outputs.
