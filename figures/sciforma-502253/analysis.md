# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Learning from Massive Human Videos for Universal Humanoid Pose Control — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14172

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dual-mode text-to-robot control architecture, labeled as UH1, designed for humanoid robot execution based on natural language commands from a user. The global layout is linear and left-to-right, depicting a pipeline starting from user input, passing through two parallel processing paths within UH1, and culminating in robot execution. The structure consists of four main components: a user input module, the UH1 processing unit with two internal submodules, an RL Policy module, and an Execution module representing the robot.

The User module, located on the far left, is a rounded rectangle with a light gray background. It contains a black user icon followed by the label 'User' and a list of example natural language commands such as 'Wave hand', 'Open bottle', 'Play violin', and an ellipsis indicating more commands. This module serves as the source of high-level textual instructions.

The central component is the UH1 module, a larger rounded rectangle with a light gray background and the label 'UH1' at the top. Inside UH1 are two stacked rectangular submodules with a salmon-pink fill color. The top submodule is labeled 'Text-to-Keypoint', and the bottom one is labeled 'Text-to-Action'. These represent two distinct control pathways: one generates intermediate human-like keypoint trajectories, while the other directly produces low-level robotic actions.

From the Text-to-Keypoint submodule, a thick black arrow points rightward to the RL Policy module. This module is a rounded rectangle with a light green background and contains a joystick icon alongside the label 'RL Policy'. This signifies a reinforcement learning policy that takes the generated keypoints as input and outputs control signals for the robot in a closed-loop manner.

From the Text-to-Action submodule, a thicker black arrow extends directly to the Execution module on the far right, bypassing the RL Policy. This indicates an open-loop control mode where actions are executed immediately without feedback.

The Execution module is a rounded rectangle with a light blue background and the label 'Execution' at the top. Inside it is a simple line drawing of a humanoid robot holding a black rectangular object, symbolizing physical action execution.

The connections clearly differentiate the two control paradigms: the upper path (Text-to-Keypoint → RL Policy → Execution) represents goal-conditioned, closed-loop control, while the lower path (Text-to-Action → Execution) represents direct, open-loop control. The figure visually emphasizes this distinction through separate arrows and module placements, aligning with the caption's explanation that UH1 can generate either high-level keypoints for policy-based control or direct robotic actions for immediate execution.
