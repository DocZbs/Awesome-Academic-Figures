# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Auto-bidding in real-time auctions via Oracle Imitation Learning (OIL) — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11434

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Oracle Imitation Learning (OIL) framework for training an auto-bidding agent in a simulated bidding environment. The global layout is a horizontal workflow from left to right, depicting data inputs, processing modules, outputs, and feedback loops. On the far left, two input streams are shown: 'Past data' represented by green wavy lines, and optionally 'Future data' represented by red wavy lines. These data streams are combined with 'Current IOs' (represented as vertical blue gradient bars) to form the input for two distinct agents: the 'Agent' and the 'Oracle'. Both agents are depicted as robot icons; the Agent is black-and-white, while the Oracle is outlined in yellow, visually distinguishing their roles.

The Agent receives only 'Past data' + 'Current IOs', whereas the Oracle receives 'Past data' + 'Future data' + 'Current IOs'. Each agent processes its respective inputs and produces a set of bids: the Agent generates 'Predicted bids' (shown as a vertical red gradient bar), and the Oracle generates 'Optimal bids' (also a vertical red gradient bar). These bid outputs are then fed into a central 'Imitation loss' module, which is a red-bordered rectangle. This module computes the discrepancy between the predicted and optimal bids, serving as the training signal for the Agent.

The 'Predicted bids' from the Agent are further passed to a 'Bidding environment simulator', depicted as a sequence of stacked red blocks with internal connections, symbolizing a dynamic simulation process. This simulator advances the campaign state based on the agent’s actions. A feedback loop from the simulator back to the top of the diagram indicates that the next 'Current IOs' are generated from the simulated environment, closing the loop for iterative learning.

The connections are primarily black arrows indicating forward data flow, with red arrows specifically showing the feedback path from the 'Imitation loss' back to the Agent for parameter updates. The figure emphasizes that the Oracle, having access to future information, acts as a ground-truth model whose behavior the Agent imitates through supervised learning. The caption clarifies that at each time step, both entities observe conversion probabilities of available IOs and place bids, with the Agent using only historical and current data, while the Oracle leverages future data to determine optimal bids. The Agent’s bids drive the simulation, and the Oracle’s bids serve as the target for imitation learning.
