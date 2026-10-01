# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Scalable Multirobot Control: Fast Policy Learning in Distributed MPC — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19669

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-part schematic illustrating an online policy learning and deployment framework for formation control of mobile robots, including wheeled vehicles and multirotor drones. Part A, titled 'Online policy learning,' shows a distributed actor-critic reinforcement learning architecture operating over a prediction interval [k, k+N-1]. On the left, real-world and simulated scenarios are depicted: (a) mobile wheeled vehicles navigating around cones on a court, and (b) multirotor drones flying in formation over a road and in open space. These serve as visual context for the application domain.

The central part of A displays the core learning architecture. Sensor observations feed into a graph structure composed of blue circular nodes labeled 0 through 8, arranged in two columns (left: 2,3,6,7; right: 1,4,5,8), connected by edges, representing the agent network topology. This graph outputs error vectors e_xi and e_x8, which are fed into multiple controllers (Controller 1 to Controller 8, shown as orange-bordered boxes). Each controller contains an Actor (purple parallelogram) and two Critics (gray parallelograms), with parameters λ_i^d and u_o,i^d (defined in equations referenced in the caption). The Actor generates actions (Action 1 to Action 8), while the Critics evaluate performance based on rewards r1 and r8, which are aggregated into a Cost metric. A State prediction buffer (cylindrical shape) connects the controllers, enabling information exchange across agents. The entire process operates over time steps marked along a red timeline at the bottom: k, k+τ, k+N, k+2N.

Part B, titled 'Online policy deployment,' illustrates how the learned policy is transferred to larger-scale systems. The top box shows a learned policy for M=2 agents, with an explicit action structure: q̇_1 = (v1cosθ1, v1sinθ1, ω1, a1) and q̇_2 = (v2cosθ2, v2sinθ2, ω2, a2), where state and action flow through a neural network block (purple parallelograms). Below, this policy is transferred via 'weights sharing' to a larger system with M=50, 500, 1000... agents. The lower box shows a scaled-up network with stacked purple blocks labeled i, i+1, ..., indicating sequential or parallel processing units, feeding into a large swarm of drones arranged in a grid pattern, demonstrating scalable deployment. The diagram emphasizes that the learned policy’s structure allows efficient transfer to much larger formations without retraining.
