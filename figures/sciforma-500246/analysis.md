# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CoopetitiveV: Leveraging LLM-powered Coopetitive Multi-Agent Prompting for High-quality Verilog Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11014

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a comparative analysis of single-agent versus multi-agent approaches for debugging and correcting Verilog code, specifically focusing on a module for serial input data accumulation. The diagram is divided into two main sections, labeled (a) and (b), each enclosed in a dashed red border, and a third section at the bottom enclosed in a dashed green border representing an enhanced multi-agent framework.

In section (a), the process begins with an input prompt requesting Verilog code for a module to achieve serial input data accumulation. The output from a single agent (represented by a rounded rectangle with a green OpenAI logo) generates a Verilog module 'accu' with inputs clk, rst_n, and data_in[7:0]. A prompt instructs the agent to check and correct bugs. However, the resulting corrected code still contains an error: the 'end' statement is not replaced with 'endmodule', leading to a syntax error. This is highlighted with a red arrow labeled 'Error Remained (Degeneration)', indicating the failure of the single-agent approach to fully correct the code.

Section (b) demonstrates a multi-agent approach to overcome this limitation. The same initial output is shown, but now a 'Research agent' (with a green OpenAI logo) receives a prompt asking how to debug the code. The research agent responds with advice: first, revise 'end' to 'endmodule', and second, address other potential issues. This advice is then passed to a 'Revision agent' (also with a green OpenAI logo) via a prompt to revise the code accordingly. The revised code correctly uses 'endmodule', and a green arrow labeled 'Errors Corrected' indicates successful correction, showing the effectiveness of the multi-agent collaboration.

The bottom section, enclosed in a dashed green border, presents a more sophisticated multi-agent system. It features four distinct agents: a 'Research Agent' (orange box with a researcher icon) who acts as an expert in RTL design and provides guidance on analyzing RTL code and testbenches; a 'Prosecutor Agent' (blue box with a judge icon) who critically assesses the research agent's method, identifies flaws, and offers constructive improvements; and two 'Revision Agents' (green boxes with graduate icons), A and B, who act as revisors learning from the refined method to correct RTL code and testbenches. These agents interact through feedback loops: the Research Agent’s proposal is sent to the Prosecutor Agent, who returns a 'Refined method'. This refined method is then used by Revision Agents A and B to correct the code. The corrected code is validated using a 'Testbench' and 'Simulator' (symbolized by a gear and document icon). If errors remain, a red 'X' indicates failure and feedback is sent back to the Research Agent. If the code passes, a green checkmark and 'Errors Corrected' label confirm success. The entire system emphasizes iterative refinement, critical evaluation, and collaborative debugging to ensure robust code generation.
