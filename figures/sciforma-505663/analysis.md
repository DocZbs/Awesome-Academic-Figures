# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Scene Graph and Layout Guided Complex 3D Scene Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20473

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the methodological pipeline of GraLa3D, structured into three main stages: (a) Scene Graph Composition, (b) Node-to-3D Generation, and (c) 3D Scene Harmonization. The overall layout is horizontal, divided into three distinct sections labeled accordingly, each containing modular components connected by arrows indicating data flow and processing steps.

In section (a), Scene Graph Composition, a text prompt y^g — exemplified as 'An astronaut riding a brown horse, with a wooden fence in front, a barn beside them, and a haystack behind the barn' — is input into a green rectangular block labeled 'LLM'. This LLM processes the prompt to generate a scene graph G, represented as a hierarchical structure of colored rectangular nodes. Orange nodes denote interacting entities such as 'Horse' and 'Astronaut' linked by a 'riding' relationship. Blue nodes represent individual objects like 'Haystack', 'Barn', and 'Fence', while yellow nodes indicate spatial relations such as 'next to' and 'in front of'. The LLM also outputs a 3D layout bounding box B, depicted as a multi-colored cube with axes, which encodes spatial arrangement. The scene graph G and bounding box B are then used to form super-nodes S (for interacting objects) and single-object nodes O (for standalone objects).

Section (b), Node-to-3D Generation, takes the super-node S and single-object nodes O from stage (a) and generates 3D representations. For the super-node S ('Horse' and 'Astronaut'), a masked ISM loss is applied during generation, resulting in a 3D rendering of an astronaut riding a horse within a dashed cube. Similarly, for single-object nodes O, such as 'Fence', 'Barn', and 'Haystack', masked ISM loss is applied to produce individual 3D models: a wooden fence, a barn with a blue roof, and a yellow haystack. These 3D models are shown within dashed outlines, indicating intermediate outputs.

Section (c), 3D Scene Harmonization, integrates the generated 3D models into a coherent scene. The spatial arrangement from the layout bounding box B is used to position the objects correctly. Texture refinement is applied using two models: MVDream, represented by an orange bowtie-shaped icon, and ControlNet, shown as a blue bowtie-shaped icon. These models refine the textures and appearances of the 3D objects, ensuring visual consistency. The final output is a complete 3D mesh model, illustrated as a rendered scene with the barn, haystack, fence, and astronaut on horseback, all harmonized in appearance and spatial layout. Dashed circles highlight specific object groupings, emphasizing the integration process. The entire pipeline is designed to convert a natural language description into a visually consistent and spatially accurate 3D scene.
