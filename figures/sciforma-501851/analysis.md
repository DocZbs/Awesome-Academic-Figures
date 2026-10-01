# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Socio-Culturally Aware Evaluation Framework for LLM-Based Content Moderation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13578

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage data generation pipeline for creating hate speech examples with diverse perspectives, specifically labeled as HATE-PA (Agreement) and HATE-PD (Disagreement). The global layout is horizontally structured into two main phases: 'Diversity-focused Generation' on the left and 'Persona-driven generation' on the right, separated by dashed lines indicating distinct stages.

In the first phase, a blue robot icon represents an automated generator tasked with producing implicit hate sentences targeting Indians, specifically of the 'Inferiority' type. This is indicated by a blue speech bubble stating: 'Generate implicit Inferiority sentences spreading Hate towards Indians.' Below the robot, metadata specifies 'Target: Indian', 'Type: Inferiority', and 'Task: Hate'. The output of this stage is a sample sentence in a dashed blue box: 'How can anyone take Indians seriously ...', labeled 'HATE-GEN'.

This generated sentence is then passed to the second phase, where a second robot icon, accompanied by persona details ('38 years', 'Journalist', 'Britain'), is instructed via a blue speech bubble to 'Write a reddit post around the input sentence from your perspective.' From this robot, two divergent outputs branch out, representing different responses to the same input.

The top branch leads to a red-dashed box containing the text: 'No offense, but Indians should focus more on improving their education system...', labeled 'HATE-PA' with a red rectangular tag reading 'Agreement'. The bottom branch leads to a green-dashed box with the text: 'How sad and ignorant to spread such lies about Indians ...', labeled 'HATE-PD' with a green rectangular tag reading 'Disagreement'. These outputs demonstrate how the same hate-inducing prompt can elicit either agreement or disagreement based on persona-driven generation.

The connections between components are shown using solid black arrows, indicating the flow from generation to persona-based response. The entire process is framed as a pipeline for generating diverse hate-related content with controlled perspectives, emphasizing both the diversity of hate expressions and the influence of personal identity on response alignment.
