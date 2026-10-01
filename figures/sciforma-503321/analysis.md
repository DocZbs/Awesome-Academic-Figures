# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Beyond End-to-End VLMs: Leveraging Intermediate Text Representations for Superior Flowchart Understanding — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16420

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram illustrating the proposed dual-stage approach, named TextFlow, for end-to-end visual question answering (VQA) using flowcharts, contrasted with prior work. The global layout is vertically divided into two main sections: 'Prior work' at the top and 'Our approach' at the bottom, separated by a dashed orange line. A vertical orange arrow on the right side labels this division, indicating the progression from prior methods to the current method.

In the 'Prior work' section, a purple rectangular box labeled 'Flowchart' contains a sample decision tree for troubleshooting a lamp: starting with 'Lamp doesn't work', it branches to 'Lamp plugged in?' (diamond node), leading to 'Plug in lamp' (rectangular action node) if 'No', or further to 'Bulb burned out?' (another diamond), which leads to 'Replace bulb' or 'Repair lamp' based on 'Yes' or 'No'. This flowchart is fed into a Vision-Language Model (VLM), indicated by a gray arrow labeled 'VLM', which directly produces a 'Response' in a blue rounded rectangle. Above this path, the label 'End-2-End VQA' describes the direct mapping.

In the 'Our approach' section, the same flowchart is processed through a new pipeline. First, a component labeled 'Vision Textualizer' (in red text) converts the visual flowchart into a 'Flowchart Text Representation' (yellow rounded rectangle). This textual representation is then processed by a 'Textural Reasoner' (red text), labeled 'TextFlow', which combines a 'Graph' (depicted as a tree-like structure) and 'Code' (shown as a code block icon with '<>' symbols), collectively referred to as 'Tools: Executable Graph Object'. This reasoning module outputs the final 'Response', connecting back to the same blue response box via a blue arrow, indicating alignment with the goal of end-to-end VQA but through an intermediate textual reasoning stage.

Below the main pipeline, three examples of textual representations for the flowchart are shown in colored boxes, each corresponding to a different markup language: 'Mermaid' (orange box) displays a textual definition using node-edge syntax like 'A[Lamp doesn't work] --> B[Lamp plugged in?]', with annotations such as '% node-edge', '% mixed', and '% definition'; 'Graphviz' (blue box) shows a 'digraph G {' syntax with node definitions (e.g., 'shape=diamond') and edge definitions (e.g., 'A -> B'); 'PlantUML' (green box) presents a structured conditional logic format starting with '@startuml', including if-then-else constructs like 'if("Lamp plugged in?") then (No): Plug in lamp; else (yes)...'. These examples illustrate the diverse ways the flowchart can be textualized, forming the input for the Textural Reasoner.

Connections between components are clearly marked: black arrows indicate data flow from the flowchart to the textualizer, blue arrows show processing within the TextFlow pipeline, and a thick black line connects the 'Flowchart Text Representation' to the three textual examples below, emphasizing their role as possible representations. The overall structure emphasizes the shift from direct visual-to-response mapping in prior work to a structured, executable, text-based reasoning process in the proposed method.
