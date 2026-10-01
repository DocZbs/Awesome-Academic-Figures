# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The intrinsic motivation of reinforcement and imitation learning for sequential tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20573

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of STAR, a hierarchical reinforcement learning (HRL) framework that integrates a feudal HRL algorithm with an online abstraction refinement mechanism. The global layout is divided into two main horizontal sections: the upper section, enclosed by a dashed red rectangle, represents the feudal HRL agent composed of three components—Commander, Tutor, and Controller—operating at different temporal scales. Below this, two separate boxes labeled 'Refinement' (in blue) and 'Environment' (in black) represent auxiliary components interacting with the HRL system.

In the upper section, the Commander is depicted as a green rectangle with a red border, labeled 'Commander' and annotated with its policy function π_Com : S × S → G. It receives three inputs: the initial state s₀, the target goal g*, and an initial abstraction N₀. The Commander generates a sequence of abstract goals G_{t+k} ~ π_Com(s_t, g*), which are passed to the Tutor. The Tutor is shown as an orange rectangle with a red border, labeled 'Tutor' and annotated with π_Tut : S × G → S. It receives the abstract goal and the current state s_{t+l} (via a dashed line) and produces a concrete goal g_{t+l} ∈ S, which is then sent to the Controller. The Controller is a red-bordered rectangle labeled 'Controller' with policy π_Cont : S × S → A. It takes the current state s_{t+1} (from the Environment via a solid line) and the concrete goal g_{t+l} to output an action a ∈ A.

The temporal hierarchy is indicated by the line styles: solid lines represent the fastest timescale (Controller, k=1), dashed lines the intermediate (Tutor, l>1), and dotted lines the slowest (Commander, k>l). Feedback from the Environment flows back to the agents through these lines: s_{t+1} to Controller (solid), s_{t+l} to Tutor (dashed), and s_{t+k} to Commander (dotted).

Below the HRL system, the 'Refinement' module (blue-bordered box) receives inputs ε, D (past episodes and abstract goals visited in the last episode) and outputs a refined abstraction N'. This N' is fed back to the Commander, closing the refinement loop. The 'Environment' box receives the action a from the Controller and returns the next state s_{t+1}, completing the interaction cycle. The entire system operates in a feedback loop, where the Refinement component continuously updates the abstraction based on experience, improving the Commander’s ability to generate meaningful abstract goals over time.
