# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Finding Missed Code Size Optimizations in Compilers using LLMs — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00655

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a workflow for an automated testing methodology designed to detect violations through code mutation guided by a large language model (LLM). The global layout is a horizontal flowchart progressing from left to right, with feedback loops and decision branches. It begins with a 'Seed code' box, depicted as a light blue rounded rectangle containing sample C-like code: 'int f(int a) { return 0; }'. This feeds into a 'Code' box, shown as a light green rounded rectangle with placeholder content '{ ... }', representing the current version of the code under mutation. From here, the process proceeds to a 'Sample mutation strategy' module, a white rounded rectangle, which selects one mutation instruction from a stack labeled 'Mutation instructions'—a group of five stacked light blue rectangles, each containing example text like '"make a condition more complicated"'. This selected strategy is then formatted into a 'Prompt' box (white rounded rectangle) with the text '"Rewrite this code to ..."'. The prompt is sent to an 'LLM' module (white rounded rectangle), which generates a new version of the code, output as 'Mutated code' (light green rounded rectangle with '{ ... }'). This mutated code is then evaluated in a diamond-shaped decision node labeled 'Compiles?'. If the answer is 'NO', the process restarts via a curved arrow looping back to the 'Code' box. If 'YES', it proceeds to another diamond-shaped decision node labeled 'Suspicious compilation?'. If this evaluates to 'YES', a red rounded rectangle labeled 'Violation!' is triggered, indicating a detected violation. If 'NO', the process loops back to the 'Code' box to continue mutation. All arrows are solid black lines indicating the direction of data flow or control flow. The diagram uses color coding to differentiate stages: light blue for initial inputs and instructions, light green for code states, white for processing modules and prompts, and red for final violation detection. Text labels are placed directly below or beside boxes for clarity. The overall structure reflects an iterative loop where code is mutated, compiled, and analyzed until either compilation fails or a suspicious behavior is detected.
