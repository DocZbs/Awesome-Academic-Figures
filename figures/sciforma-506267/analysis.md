# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Prior Lessons of Incremental Dialogue and Robot Action Management for the Age of Language Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00953

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a traditional architecture for spoken dialogue systems, structured as a two-part diagram: a human-robot interaction flow on the left and a robot's internal components on the right. The global layout is horizontally divided, with the left side depicting the user interface and processing pipeline, and the right side showing the robot’s physical and cognitive modules. The left side begins with a black silhouette of a human user, followed by a microphone icon representing audio input. This input flows into a gray rounded rectangle labeled 'ASR' (Automatic Speech Recognition), which converts speech to text. An arrow leads from ASR to another gray rounded rectangle labeled 'NLU' (Natural Language Understanding), which interprets the meaning of the text. From NLU, an arrow points to a central gray rounded rectangle labeled 'DM' (Dialogue Management), which controls the conversation state and logic. From DM, an arrow leads to 'NLG' (Natural Language Generation), another gray rounded rectangle, which formulates a response in natural language. NLG then connects via an arrow to 'TTS' (Text-to-Speech Synthesis), which converts the generated text back into spoken output, represented by a speaker icon emitting sound waves. The entire left-side processing chain is unidirectional except for the bidirectional connection between DM and the robot on the right. On the right side, a stylized black robot figure is shown against a light gray background, with three rounded rectangular boxes aligned vertically to its right: 'Camera', 'Internal States', and 'Movement'. These represent the robot’s sensory, cognitive, and actuation capabilities. A bidirectional arrow connects the DM module to the robot, indicating continuous exchange of information—DM receives perceptual and state data from the robot (via Camera and Internal States) and sends commands for Movement. The visual style is minimalistic, using black icons and text on white or light gray backgrounds, with all processing modules uniformly styled as gray rounded rectangles. The figure effectively conveys the modular, sequential nature of the dialogue system, with DM acting as the central orchestrator interfacing with both the user and the robot’s physical and internal systems.
