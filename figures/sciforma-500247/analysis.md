# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CoopetitiveV: Leveraging LLM-powered Coopetitive Multi-Agent Prompting for High-quality Verilog Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11014

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct LLM-based multi-agent frameworks for Verilog code generation: (a) a cooperation-only mechanism and (b) a coopetitive mechanism. Both diagrams are enclosed within dashed green borders and depict a workflow involving multiple agents interacting through feedback loops and code simulation.

In both panels, the process begins with a 'Revision Agent' (represented by a graduate student icon inside a light green rounded rectangle) generating initial Verilog code. This code is then sent to a 'Testbench Simulator' (symbolized by a gear and circuit icon), which executes the code and returns results. In panel (a), if errors are detected, they are propagated back to a 'Correction code' box (white rounded rectangle with a red 'X' and red arrow labeled 'Errors Propagated'). The 'Research Agent' (a person at a computer, in an orange rounded rectangle) reviews the erroneous code and provides feedback to the Revision Agent, suggesting revisions. However, this feedback leads to a cycle where errors persist, indicating the limitation of pure cooperation.

Panel (b) introduces a 'Prosecutor Agent' (a judge-like figure in a blue rounded rectangle) to enhance the process. After the Research Agent provides feedback to the Revision Agent, the Prosecutor Agent evaluates the suggested revision and may disagree, offering an alternative revision method. This refined method is then fed back to the Revision Agent, who revises the code accordingly. The revised code is again tested via the Testbench Simulator. If errors remain, the Correction code box shows them, but now with a green checkmark and label 'Errors Corrected', indicating successful resolution. The visual elements include agent icons, color-coded boxes (orange for Research Agent, blue for Prosecutor Agent, green for Revision Agent, white for Correction code), and arrows labeled 'Feedbacks', 'Code', 'Error', and 'Refined method'. Each agent box contains sample Verilog code snippets, such as 'module accu (input clk, ... end end)', with syntax highlighting (e.g., 'endmodule' in green). The figure uses consistent visual cues: red 'X' for errors, green checkmarks for corrections, and black arrows for data flow. The overall layout is horizontal, showing a step-by-step progression from code generation to testing and refinement, with panel (b) adding a critical evaluation layer to improve accuracy.
