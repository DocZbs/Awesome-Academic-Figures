# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14161

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of OpenHands' default CodeAct + Browsing agent architecture, which serves as the baseline agent for all experiments. The global layout is structured as a left-to-right workflow, beginning with an 'Event History' module on the far left, progressing through an 'Agent' component, then showing a sequence of actions and observations in a central vertical stack, and concluding with a set of execution environments on the right. The entire process is framed by two main feedback loops: one from 'Action' to the execution environments and another from those environments back to 'Observation', which feeds into the Agent.

The visual modules are color-coded and shaped consistently to denote different types of components. The 'Event History' is a yellow rectangle labeled '[Past Action(s) & Observation(s)]', positioned above a white box containing a robot icon and the label 'Agent'. From the Agent, a blue arrow labeled 'Action' points to a central dashed yellow rectangle containing seven numbered steps, each represented as a colored box. Steps [1], [3], [5], and [7] are orange boxes representing observations: [1] Message (instruction), [3] BrowserOutputObservation (API Server Repo URL), [5] CmdRunObservation (git clone output), and [7] IPythonRunCellObservation (server start confirmation). Steps [2], [4], and [6] are light blue boxes representing actions: [2] BrowseInteractiveAction (browser input commands), [4] CmdRunAction (git clone command), and [6] IPythonRunCellAction (Python server startup code). Each step includes specific code or output text, such as '<execute_browse>' tags or 'git clone git://repos/apiserver'.

On the right side, a dashed gray rectangle contains three gray boxes representing execution environments: 'Browser' with a Playwright Chromium icon, 'Interactive Python (IPython) Server' with a Jupyter logo, and 'Bash Shell' with a terminal icon. A blue arrow labeled 'Action' points from the central action/observation stack to this group, indicating that actions are dispatched to these environments. An orange arrow labeled 'Observation' returns from the environments to the central stack, completing the feedback loop. The diagram uses consistent arrow styles—solid blue for actions, solid orange for observations—to indicate data flow direction. The overall structure emphasizes a sequential, iterative process where the Agent receives historical context, generates actions, executes them across multiple environments, and processes the resulting observations to continue the task.
