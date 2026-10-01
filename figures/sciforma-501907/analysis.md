# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

When Should We Prefer State-to-Visual DAgger Over Visual Reinforcement Learning? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13662

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of two reinforcement learning methodologies: Visual RL and State-to-Visual DAgger, structured side-by-side with a vertical dashed line separating them. The left panel illustrates Visual RL, while the right panel details the two-stage State-to-Visual DAgger approach.

In the Visual RL setup, a blue-green globe representing the environment receives an action from a robot labeled 'BOT' with a light blue body and dark blue limbs, which is designated as the 'Visual Policy'. This robot processes visual observations—depicted as a stack of four grayscale images showing a robotic arm manipulating objects—and outputs actions back to the environment. The environment then provides a reward signal to the robot, completing the feedback loop. All connections are shown with solid arrows: orange for visual observation input, gray for action output, and black for reward feedback. The entire process is labeled 'Visual RL' in bold orange text at the bottom.

The right panel, titled 'State-to-Visual DAgger' in teal and orange text, is divided into two stages. Stage 1, labeled 'State RL', mirrors the Visual RL structure but replaces visual observations with a binary state observation represented by a 2x4 grid of 0s and 1s. The robot here is a simplified white outline with a smiling face and raised arms, labeled 'State Policy' in teal. It receives state observations from the environment, takes actions, and receives rewards, forming a closed loop similar to Visual RL.

Stage 2, labeled 'Visual Imitation', introduces a new component: the expert action. The State Policy from Stage 1 now receives both the state observation and the visual observation (the same stack of four images as in Visual RL). A dashed teal arrow indicates that the State Policy generates an expert action, which is then fed to the Visual Policy (the same 'BOT' robot as in Visual RL). The Visual Policy uses this expert action along with the visual observation to learn. The connection from the State Policy to the Visual Policy is labeled 'expert action' in teal. The Visual Policy then outputs actions to the environment, which responds with rewards, closing the loop. A dashed teal box encloses the State Policy and the expert action path, emphasizing the imitation learning phase. The overall structure highlights a two-stage training pipeline: first, learning a policy from low-dimensional states; second, transferring that knowledge to a visual policy through online imitation.
