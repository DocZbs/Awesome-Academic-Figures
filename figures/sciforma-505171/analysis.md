# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hindsight Planner: A Closed-Loop Few-Shot Planner for Embodied Instruction Following — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19562

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of a Hindsight Planner in a robotic task environment, structured into three main horizontal sections: Adaptation Module at the top, two parallel Actor modules (GT Actor and Hindsight Actor) in the middle, and a Critic module with corresponding visual action outcomes at the bottom. The global layout is divided into left and right halves, representing two stages of task understanding: initial misinterpretation and corrected adaptation.

In the top section, labeled 'Adaptation Module', two rectangular boxes represent the evolving object perception. The left box contains text: 'The objects you seen are: Cabinet, Cup, Drawer...' with targets specified as 'mrecep_target: None, object_target: Plate, parent_target: Cabinet'. The right box shows updated perception: 'The objects you seen are: Cabinet, Cup, Drawer, Ladle, Plate, Pot...' with targets now 'mrecep_target: Plate, object_target: Ladle, parent_target: Cabinet', indicating improved object recognition. A dashed rectangle labeled 'ICL samples' spans both boxes, suggesting shared input data.

Below this, the middle section features two side-by-side actor modules. On the left, the 'GT Actor' (light blue background) receives inputs from 'ICL samples' and 'Environment information' (purple-bordered box). On the right, the 'Hindsight Actor' (light green background) similarly receives 'ICL samples' and 'Environment information'. Both actors process these inputs independently to generate action proposals.

The bottom section, labeled 'Critic', displays five action boxes arranged horizontally, each containing a pair of action commands (e.g., 'PickupObject: Plate' and 'PutObject: Cabinet') and a corresponding first-person view image of the kitchen environment. These images depict sequential actions: (1) picking up a plate, (2) opening a cabinet, (3) putting the plate into the cabinet, (4) picking up a ladle, and (5) putting the ladle onto the plate inside the cabinet. Each image is captioned with the action performed, such as '(Pick up, Plate)' or '(Put, Ladle, Plate)'. The Critic evaluates the proposed actions from both actors and selects the optimal sequence, which is visually represented by the final set of images showing the correct task completion.

Arrows and connections are implicit through spatial arrangement: the Adaptation Module feeds into both Actors, which in turn feed into the Critic. The Critic’s decision is reflected in the sequence of images at the bottom, demonstrating the transition from an initially incorrect task interpretation (placing only a plate) to the correct one (stacking ladle on plate before placing in cabinet). The figure captures the dynamic adaptation process where improved object detection leads to refined task planning and execution.
