# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CLIP-RLDrive: Human-Aligned Autonomous Driving via CLIP-Based Reward Shaping in Reinforcement Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16201

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an architecture for using CLIP as a reward model in a reinforcement learning or decision-making framework. The global layout is a left-to-right data flow pipeline, starting from input encoders on the left, progressing through similarity computation and score processing, and culminating in a final reward calculation on the right. The structure is modular, with distinct components connected by directed arrows indicating the flow of information.

On the left side, two parallel inputs are processed: 'Actions (A)', represented as a set of discrete action descriptions, and 'Observation (Last frame as the current state)', depicted as a stack of grayscale image frames. These inputs are fed into two separate encoders: a purple trapezoid labeled 'Language Encoder' for actions, and a teal trapezoid labeled 'Image Encoder' for observations. Both encoders output feature representations that are then combined via a 'Cosine Similarity' operation, shown as a central node with incoming arrows from both encoders. This similarity computation produces a set of scores corresponding to each action, visualized as three green circles stacked vertically, labeled 'Scores corresponding to each action'.

These scores are then passed to a module labeled 'SoftMax & threshold', represented by a graph showing a sigmoid-like curve (red line) with a horizontal dashed threshold line and a vertical axis marked with '0'. This step normalizes the scores and applies a threshold to select or weight them. The output of this module feeds into a blue rectangular block labeled 'CLIP's Reward', which represents the reward signal derived from the CLIP model based on the processed similarity scores.

In parallel, a pink rectangular block labeled 'Basic Reward Function' provides an additional reward component. This basic reward is summed with CLIP's reward at a circular node with a '+' symbol, indicating an addition operation. The result is the 'Final Reward', shown as a yellow rectangular block on the far right, which serves as the output of the entire reward model.

All connections are represented by solid gray arrows, clearly indicating the direction of data flow. The figure uses color-coded blocks to distinguish different functional modules: purple for language encoding, teal for image encoding, green for intermediate scores, blue for CLIP-derived reward, pink for the basic reward function, and yellow for the final output. Text labels are placed near or within each module to clarify their roles. The overall design emphasizes a hybrid reward mechanism combining CLIP-based semantic alignment with a traditional basic reward function.
