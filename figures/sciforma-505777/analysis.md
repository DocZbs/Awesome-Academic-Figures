# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Blockchain-Empowered Cyber-Secure Federated Learning for Trustworthy Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20674

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive system architecture for a blockchain-integrated federated learning (FL) framework designed to ensure trust, security, and efficient participation among distributed agents. The global layout is structured as a top-down flowchart with distinct modules connected by directional arrows, indicating the sequence and interaction of processes. At the top, the 'On-Chain Smart Contracts' module, enclosed in a blue rounded rectangle, contains three sub-components: Token Smart Contract, Aggregator Smart Contract, and Reputation Smart Contract, each represented by a document icon with a cross symbol. This module is linked bidirectionally via a light blue double-headed arrow to the 'Blockchain' component, depicted as a chain of seven colored cubes (blue, yellow, orange, green, purple, gray, magenta) within a dashed border, symbolizing a distributed ledger. A numbered step 5 indicates this interaction.

Below the smart contracts, the core FL system is encapsulated in a large blue-bordered rounded rectangle. It includes an 'FL Server' at the top, which performs 'Aggregation' of model updates from multiple 'FL Agents' (labeled FL Agent 1, FL Agent 2, ..., FL Agent n). Each agent is shown with a neural network diagram and, in the case of FL Agent 1, a data cylinder labeled 'x_i, y_i' and a 'Train' process, indicating local training on private datasets. Dashed arrows represent the upload of updated model parameters from agents to the server, and solid arrows show the distribution of aggregated models back to agents. The FL Server's aggregation process is visually represented by a sequence of neural networks evolving into a unified model.

The bottom section outlines the initialization and management workflow. Step 1 begins with 'Registration and Token Generation', a light blue box with a user icon, which connects via a solid arrow (step 2) to 'Distributed Sensing Mechanism', another light blue box with a red network of nodes. This then leads (step 3) to 'Activity and Resource-aware Mechanism', a light blue box with a magnifying glass over a user icon, which feeds into the FL system (step 4) via an upward arrow. This mechanism ensures that only active and resource-capable agents participate.

To the right, a security and trust management subsystem is shown. An arrow (step 6) from the FL system points to 'Committee consensus', a gray oval with an icon of people and a lightbulb, representing a group decision-making process. From here, an arrow (step 7) leads to 'Malicious Agents', a gray oval containing icons of a mobile device and a laptop, indicating potential threats. Another arrow (step 8) connects malicious agents to the 'Trust Model', a blue rounded rectangle with a database and line graph icon, which evaluates agent reliability. Finally, an arrow (step 9) from the Trust Model points to the Blockchain, integrating trust scores into the ledger. The entire system is framed by dashed lines connecting the smart contracts to the FL system and blockchain, emphasizing the decentralized governance structure. The caption clarifies that the framework uses smart contracts for initialization, enabling registration, participation, and contribution to quality FL updates.
