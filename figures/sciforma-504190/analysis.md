# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Power of Adaptation: Boosting In-Context Learning through Adaptive Prompting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17891

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of the Adaptive-Prompt method, an active learning framework designed to iteratively improve model performance by selecting the most uncertain questions for annotation. The global layout is structured as a cyclic pipeline: starting from an initial set of annotated exemplars, unlabeled questions are processed through a prompt-based LLM inference step, uncertainty scores are computed, and the most uncertain question is selected for human annotation, which then gets added back to the exemplar set to refine future predictions.

The top-left section contains the 'Exemplar Set', depicted as a blue-bordered box with dashed outlines, containing multiple example question-answer pairs (e.g., Q: In a graduate physics course... A: Out of the male students... This means that... So the answer is E: 5/7.). These exemplars serve as context for the LLM’s reasoning. Below this, the 'Unlabeled Questions' box, outlined with a dashed black border, lists several unannotated questions (Q1, Q2, ..., Qn), each enclosed in a green rounded rectangle. These represent the pool of questions awaiting annotation.

At the center, the 'Prompt' module is shown as a large white box with a black border. It contains two components: a blue rounded rectangle labeled '[Current Annotated Exemplar Set]' and a green rounded rectangle labeled '[One question from Unlabeled Questions Set]'. Arrows labeled 'Fill in exemplars' and 'Fill in questions' connect the respective source boxes to these components, indicating how the prompt is constructed. Below the Prompt box, a purple circle labeled 'LLM' receives input from the prompt. A caption beneath states: 'Feed each question and the current exemplars to the LLM multiple times, then compute an uncertainty score based on the responses.'

To the right, a vertical column titled 'Uncertainty Scores' displays several questions (Q27, Q63, Q158) in green rounded rectangles, each followed by a numerical uncertainty score (e.g., Uncertainty: 1.9, 0.8, 0.1). These scores are derived from the LLM's multiple responses to each question. An arrow labeled 'Select the most uncertain question' points from this list to a small orange square labeled 'Q27', indicating the selection of the highest-uncertainty item.

From Q27, two arrows emerge: one upward to a red text box labeled 'Annotate Q27', which contains the fully annotated version of the question and answer (Q27: 10 women can complete a work... A: The work rate of 10 women together is... So the answer is D: 8.), and another downward to a label 'Remove Q27 from Unlabeled Questions'. Finally, an arrow from the annotated Q27 points leftward to the 'Add annotated Q27 to the exemplar set' box, completing the feedback loop and updating the exemplar set for the next iteration.

The visual elements use distinct colors and shapes to differentiate components: blue for exemplars, green for unlabeled questions, purple for the LLM, orange for the selected question, and red for the final annotated output. All connections are directed arrows, clearly indicating the data flow and decision logic of the adaptive prompting process.
