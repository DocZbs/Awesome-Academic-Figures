# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Large language models for artificial general intelligence (AGI): A survey of foundational principles and approaches — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03151

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a symbolic reinforcement learning framework where an agent learns to ground abstract digital symbols through interaction with an environment. The global layout consists of two main components: the 'Symbolic Agent' at the top and the 'Environment' at the bottom, connected in a feedback loop. The Symbolic Agent is enclosed within an orange rounded rectangle and contains three sequential modules: 'State Autoencoder', 'symbolic representation', and 'Reinforcement Learning'. These modules are represented as white rounded rectangles with dark brown borders, arranged horizontally from left to right. The Environment is also depicted as a white rounded rectangle with an orange border, positioned below the agent.

On the upper left, a stack of pixelated images—resembling game frames with distinct colored blocks (black, green, yellow, red)—represents raw sensory input or state observations. These images feed into the State Autoencoder via a downward arrow. The State Autoencoder processes this input and outputs a compact 'symbolic representation', shown as a smaller rectangular box with a dark brown border, located between the autoencoder and the Reinforcement Learning module. This symbolic representation serves as the intermediate abstraction used by the agent.

The Reinforcement Learning module receives the symbolic representation and produces an 'action', which is sent to the Environment via a rightward arrow labeled 'action'. The Environment then responds by generating a new 'state' and a 'reward', both of which are fed back to the agent. The 'state' is sent directly to the State Autoencoder, forming a continuous loop, while the 'reward' is directed to the Reinforcement Learning module to guide policy updates. All connections are represented by solid gray arrows indicating the direction of data flow.

The figure emphasizes the closed-loop interaction between the agent and environment, where the agent learns to map raw sensory inputs to meaningful symbolic representations using the autoencoder, and then uses reinforcement learning to optimize actions based on those symbols. The caption notes that grounding—linking symbols to real-world entities—is achieved through active exploration and interaction, with reinforcement learning serving as an effective mechanism for symbol learning. The visual design uses consistent shapes, colors, and labeling to clearly delineate the functional components and their relationships.
