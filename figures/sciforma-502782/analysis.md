# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Script-Based Dialog Policy Planning for LLM-Powered Conversational Agents: A Basic Architecture for an "AI Therapist" — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15242

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a script-based dialog policy planning framework utilizing multiple Large Language Models (LLMs) in a coordinated workflow across each conversation turn. The global layout is a circular, feedback-driven process involving four main components: Assessor LLM, Dispatcher LLM, Dialog LLM, and User, with Dialog History serving as a central data repository. The structure follows a sequential yet conditional flow, where each step depends on the outcome of the previous one, forming a loop that continues until the dialog task is complete.

Visual modules are represented as gray rounded rectangles for the LLMs, a gray document icon for Dialog History, and a gray silhouette of a human head for the User. The Proactive Prompt with Script is depicted as a smaller document icon with a folded corner, positioned below the Dispatcher LLM. Each module has associated text labels describing its function: 'Assessor LLM' assesses completion of current instruction section; 'Dispatcher LLM' performs optional reasoning and selects next instruction section from the script; 'Dialog LLM' generates messages based on current instructions; and 'User' sends messages to the agent. The Dialog History module stores the entire conversation context and feeds into the Assessor LLM and Dispatcher LLM.

Connections and arrows indicate the flow of information and control. The User sends a message to the agent, which is recorded in Dialog History. From there, the Dialog History is fed into the Assessor LLM, which evaluates whether the current section of instructions is completed. If not completed, an arrow loops back to the Dialog LLM with the label 'IF not completed yet: Triggers to proceed', indicating the Dialog LLM continues generating messages based on the current section. If completed, the Assessor LLM triggers the Dispatcher LLM via an arrow labeled 'IF completed: Triggers to select next section of instr.'. The Dispatcher LLM then optionally performs reasoning and planning, using the Proactive Prompt with Script as input, and selects the next section of instructions from the script. This selected section is passed to the Dialog LLM via an arrow labeled 'Provides next section of instr.'. The Dialog LLM generates a message based on the current section of instructions and sends it to the User, completing the cycle. The User’s response is again recorded in Dialog History, restarting the assessment phase. The arrows are solid black lines with classic arrowheads, clearly indicating directionality and dependencies between modules.
