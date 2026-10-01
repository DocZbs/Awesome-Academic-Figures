# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

BlenderLLM: Training Large Language Models for Computer-Aided Design with Self-improvement — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14203

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a pipeline for generating 3D CAD models from natural language instructions using a large language model specialized for Blender, named BlenderLLM. The global layout is a horizontal workflow from left to right, divided into three main stages: input instruction, processing by BlenderLLM, and execution in Blender to produce CAD images. The top row shows the data flow, while the bottom row displays the resulting 3D outputs.

In the first stage, a green dashed rectangular box labeled 'Instruction' contains a natural language prompt: 'Please draw a chair. The chair features four cylindrical legs in a deep mahogany color. The seat is circular in a forest green color...'. This box has a light green square icon next to the label, indicating its role as input. An arrow points from this instruction box to the second stage.

The second stage is represented by a gray rectangular box labeled 'BlenderLLM', containing a stylized robot icon with two blue eyes and a purple outline. This module processes the instruction and generates a CAD script. An arrow leads from BlenderLLM to the third stage.

The third stage is an orange dashed rectangular box labeled 'CAD Script', with a light orange square icon. Inside, sample Python-like code is shown: 'obj = bpy.context.object', 'obj.scale = size', 'mat.diffuse_color = color', followed by an ellipsis, indicating further commands. This script is then passed to the Blender application.

Below the script box, a black arrow points downward to a gray rectangular box labeled 'Blender', which contains the official Blender logo—an orange eye with a blue pupil. From Blender, a black arrow points leftward to a vertical light blue parallelogram, symbolizing the output rendering process.

On the bottom row, two blue-dashed rectangular boxes labeled 'CAD Image' (each with a light blue square icon) display 3D renderings of the generated chair from different angles. The left image shows a rear view of the chair with a brown backrest, green circular seat, and four cylindrical brown legs. The right image shows a side view, revealing armrests and confirming the chair's structure. These images are the final output of the pipeline, demonstrating the successful translation of the natural language instruction into a 3D model via the BlenderLLM and Blender system.
