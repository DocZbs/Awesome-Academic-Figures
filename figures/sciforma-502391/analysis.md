# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GraphEQA: Using 3D Semantic Scene Graphs for Real-time Embodied Question Answering — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14480

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a system architecture for embodied question answering in unseen environments, leveraging real-time 3D metric-semantic hierarchical scene graphs and task-relevant visual memory to ground a vision-language model (VLM) planner. The global layout is left-to-right, depicting a data flow from sensor input through scene representation and memory formation to planning and decision-making.

On the far left, a robotic platform equipped with a RGBD camera is shown, posing the question 'Where is the backpack? A. On the chair B. On the table'. This query initiates the process. The RGBD sensor captures both color and depth images, while semantic segmentation provides labeled object masks (e.g., chair, table, trash_can), and pose estimation gives the robot’s 3D position (x, y, z axes indicated). These inputs feed into the central component: a Real-time 3D scene graph, depicted as a 3D reconstructed environment with labeled objects (e.g., cabinet, chest_of_drawers, chair, backpack) connected by edges forming a hierarchical structure. The scene graph is rendered with translucent blue outlines around objects, and object labels appear in white text boxes. A JSON snippet below the scene graph shows structured data including object IDs, names, positions, and edge connections, indicating the graph's programmable format.

From the scene graph, two types of information are extracted and fed into the VLM Planner: first, a 'Task relevant visual memory'—a set of cropped images highlighting key objects (e.g., backpack on chair, trash_can)—connected via colored arrows (purple and blue) from the scene graph to these thumbnails. Second, the structured JSON representation of the scene graph is also passed to the planner. The VLM Planner is symbolized by a black circular logo resembling the GPT-4 or similar large language model icon, indicating its role as a vision-language reasoning engine.

The output of the planner is shown on the right in two sequential planning steps, each enclosed in a rounded rectangle with distinct background colors. Planning Step 1 (red border, beige fill) describes reasoning based on prior knowledge: 'Objects like the chair or table might have the backpack...'. It proposes an action '<Goto_object_node> (chair)', marks confidence as False, and gives a tentative answer: 'Likely on the chair...'. Planning Step 2 (green border, beige fill) reflects updated reasoning after visual confirmation: 'The backpack is visually confirmed to be on the chair...'. It selects 'No action', marks confidence as True, and finalizes the answer: 'On the chair'. The transition between steps implies iterative refinement using new sensory evidence.

Arrows indicate data flow: from sensors to scene graph, from scene graph to visual memory and JSON, then to the VLM Planner, and finally to the planning steps. The entire pipeline emphasizes the integration of geometric, semantic, and visual memory to enable grounded, context-aware reasoning for embodied QA.
