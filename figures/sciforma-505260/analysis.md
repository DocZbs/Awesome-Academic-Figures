# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fortran2CPP: Automating Fortran-to-C++ Translation using LLMs via Multi-Turn Dialogue and Dual-Agent Integration — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19770

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a questioner-solver agent architecture designed for LLM-based systems, centered around an 'Agent Core' composed of two interconnected robot icons—one orange and one green—representing the questioner and solver components respectively. The global layout is a circular workflow diagram enclosed within a light gray border with diagonal stripes, emphasizing the iterative interaction between modules. The structure follows a logical flow where inputs from various sources feed into the Agent Core, which then orchestrates actions and planning through feedback loops.

Visual modules are represented as rounded ovals with distinct colors and icons to denote their function: blue ovals for input/output modules (Request, Environment, Action), green for planning and tools (Planning, Tools), and yellow for memory components (Memory). Each module contains a small icon: Request has a person silhouette, Environment includes a wrench and code block, Action features a lightbulb, Planning also has a lightbulb, Tools displays a wrench, and Memory shows stacked documents. The Agent Core is visually emphasized by two robot figures, with arrows indicating bidirectional communication between them.

Connections are shown via curved black arrows, illustrating data flow and feedback mechanisms. The Request module feeds into the orange robot (questioner), while the Environment module provides feedback to both robots. The orange robot outputs to the Action module, which in turn feeds back into the Agent Core. The green robot (solver) connects to the Planning module and Tools, which then loop back to the Agent Core. Both Memory modules are linked to their respective robots, forming persistent context loops. The diagram emphasizes a closed-loop system where historical context and external feedback are stored in Memory, and tools such as compilers and scripts are accessed during execution.

Below the main diagram, a legend provides detailed textual descriptions for each module. Action includes tasks like Initial Translation, Test Case Generation, Compile Fortran/C++ Code, Execution, Error Fixing, Execution Inspection, and Consistency Check. Request specifies Meta Prompt as its input. Environments list Feedback from tools, Current Fortran and C++ code, and Current task. Memory captures Historical context between Questioner and Solver and Historical external feedback. Tools include Fortran and C++ Compilers and Customized Scripts. This structured breakdown ensures the diagram can be accurately reconstructed without referencing the original paper.
