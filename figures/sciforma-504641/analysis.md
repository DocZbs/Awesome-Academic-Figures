# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Video Is Worth a Thousand Images: Exploring the Latest Trends in Long Video Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18688

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a six-step multi-agent framework for video generation and editing, named Mora, which enables generalist video creation through a sequence of specialized agents. The global layout is a horizontal workflow progressing from left to right, with each step clearly labeled and connected by arrows indicating data flow. The process begins with user input and ends with a final video output, with feedback loops and support tasks integrated into the design.

Step 1: Prompt enhancement starts with a user providing a text prompt, represented by a person icon and a gray box labeled 'PROMPT'. This prompt is fed into the 'Prompt selection agent', depicted as a yellow robot head with a speech bubble, which outputs an 'Expressive description' shown as a stack of three rectangular blocks. This step enriches the initial prompt with more detailed instructions.

Step 2: Image generation takes the expressive description and passes it to the 'Text-to-image agent', another yellow robot head, which produces an 'Image' symbolized by a green mountain landscape within a photo frame. A user icon with a curved arrow indicates human review or feedback on the generated image.

Step 3: Image editing involves refining the image using the 'Image-to-image agent', again a yellow robot head, which receives both the original image and a 'Description/instruction' (represented by a T-shaped icon) to produce a 'Refined/edited image'. This step allows for iterative improvements based on additional guidance.

Step 4: Video generation converts the refined image into a 'Video' using the 'Image-to-video agent', a yellow robot head, resulting in a video icon (a blue rectangle with a play button). User feedback is again shown via a curved arrow from a user icon.

Step 5: Video extraction allows for extracting video content, possibly from existing sources, feeding into Step 4. This is shown as a direct arrow from a 'Videos' icon (two stacked video frames) to the Image-to-video agent, suggesting the ability to use pre-existing video clips as input.

Step 6: Video connection uses the 'Video transition agent', a yellow robot head, to integrate multiple video segments into a cohesive longer video. Two video icons feed into this agent, which outputs a single video, demonstrating the capability to concatenate or transition between clips.

A dashed arrow connects the expressive description from Step 1 to the description/instruction in Step 3, indicating optional reuse or refinement of earlier instructions.

On the lower-left side, a light-blue rounded box titled 'Support Tasks' lists six additional functionalities enabled by the framework: Text-to-video generation (via paths 1→2→4 or 1→2→3→4), Text-guided image-to-video generation (Step 3→4), Extend generated videos (Step 5→4), Video-to-video editing (Step 5→3→4), Connect videos (Step 6), and Simulate digital world (Step 1→2→4). These tasks highlight the system's versatility beyond basic video generation.

All agents are visually consistent—yellow robot heads with black faces and speech bubbles—while inputs and outputs are represented by distinct icons: user (person), prompt (gray box), image (landscape photo), video (play button), and instruction (T-shaped icon). Arrows indicate directionality, with solid lines for primary flows and dashed lines for optional or secondary connections. Feedback loops are shown with curved arrows from user icons back to agents or outputs.
