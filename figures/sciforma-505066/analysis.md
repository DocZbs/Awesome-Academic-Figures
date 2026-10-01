# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Dynamic Skill Adaptation for Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19361

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall process of a Dynamic Skill Adaptation framework, structured into three main stages: Skill Graph Construction, Training Data Generation, and Dynamic Training. The global layout is left-to-right, progressing from foundational skill modeling to adaptive training. On the far left, under 'Skill Graph Construction,' a red icon resembling a presentation board displays a small skill graph composed of three circular nodes—labeled with mathematical operators '+', '*', and '/'—connected by dashed arrows indicating dependency relationships. This visualizes how sub-skills are hierarchically organized based on prerequisite knowledge (e.g., addition before multiplication). Below this icon, the label 'Skill Graph Construction' anchors the stage.

Moving right, the next stage is 'Training Data Generation,' represented by a blue stacked-book icon symbolizing a repository or dataset. Above it, two light-blue rectangular boxes labeled 'Textbook' and 'Exercise' indicate the types of content generated from the skill graph. A solid black arrow connects the skill graph icon to the book stack, showing that the skill graph informs the generation of training materials.

The third stage, 'Dynamic Training,' begins with a yellow icon depicting a teacher at a whiteboard instructing students, representing the training phase. From this icon, a curved black arrow labeled 'Training Dynamics' points to a green clipboard icon with a pencil, symbolizing real-time feedback or error tracking during training. From the clipboard, dashed arrows branch out to three light-green rectangular boxes labeled 'Easy-to-learn,' 'Hard-to-learn,' and 'Errors.' These represent categories of skills identified during training based on performance. A dashed arrow labeled 'Compose' connects 'Easy-to-learn' and 'Hard-to-learn,' suggesting these are combined to form new training examples. Another dashed arrow labeled 'Augment' links 'Easy-to-learn' to 'Hard-to-learn,' implying augmentation strategies to enhance difficult skills using easier ones. Finally, a dashed arrow labeled 'Filter Out' points upward from 'Errors,' indicating that problematic or unlearnable skills are removed from further training.

The entire workflow emphasizes adaptivity: starting from a structured skill graph, generating tailored training content, and dynamically adjusting the curriculum during training based on observed learning dynamics. The visual elements use distinct colors and shapes to differentiate stages—red for construction, blue for data, yellow for instruction, and green for feedback and adaptation. Text labels are placed clearly beneath icons or adjacent to arrows to clarify function. The diagram effectively conveys a closed-loop, intelligent tutoring system that evolves training content in response to learner progress.
