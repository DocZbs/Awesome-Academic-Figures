# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

3DGraphLLM: Combining Semantic Graphs and Large Language Models for 3D Scene Understanding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18450

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed 3DGraphLLM approach, which integrates 3D semantic scene graphs with a large language model (LLM) to enable various 3D vision-language tasks. The global layout is left-to-right, depicting a pipeline starting from raw 3D objects, progressing through scene graph generation and encoding, and culminating in LLM-based reasoning and output generation.

On the far left, four 3D objects—labeled OBJ1 (desk), OBJ2 (chair), OBJ3 (piano), and OBJ4 (bed)—are fed into a light blue rounded rectangle labeled 'Scene Graph Generation'. This module constructs a semantic scene graph, visually represented within a dashed oval in the center of the diagram. Inside this oval, each object is depicted as a circular node containing its 3D rendering, with directed edges labeled with spatial relations such as 'front', 'behind', 'left', 'right', and 'close' connecting them. For example, OBJ2 (chair) is connected to OBJ1 (desk) with 'left' and 'right' edges, to OBJ4 (bed) with 'front', and to OBJ3 (piano) with 'left'; similarly, OBJ1 is connected to OBJ3 with 'close', and OBJ3 to OBJ4 with 'right'.

From the scene graph, two parallel encoding pathways emerge: one feeds into a light blue rounded rectangle labeled '2D/3D Object Encoders', and the other into another labeled 'Semantic Relation Encoder'. Both encoders output representations that are combined and sent to a central vertical light blue rectangle labeled 'LLM'. Additionally, a green rounded rectangle at the bottom labeled 'User query' contains the text: 'Select the chair on the left side of the desk and located in front of the bed'. An arrow from this box points directly to the LLM, indicating that the user’s natural language query is also processed alongside the encoded scene graph.

The LLM processes both the encoded visual and relational data and the user query to produce outputs shown in a green rectangular box on the far right titled 'LLM Answer'. This box contains three white rounded sub-boxes: the top one displays '<OBJ2>' along with a 3D rendering of the chair, indicating object selection; the middle one is labeled '3D Dense Scene Caption'; and the bottom one is labeled '3D Question Answer'. These outputs demonstrate the model's capability to perform object retrieval, scene description, and question answering based on 3D spatial semantics.

All modules are rendered with consistent styling: light blue rounded rectangles for processing stages, green for input/output containers, and black arrows indicating data flow. Text labels are clear and positioned adjacent to or inside components. The diagram emphasizes the integration of structured 3D spatial relationships with language understanding via an LLM.
