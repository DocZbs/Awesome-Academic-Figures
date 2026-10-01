# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Counterfactual Samples Constructing and Training for Commonsense Statements Estimation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20563

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main sections, labeled (a) Language-Explainable Ability and (b) Commonsense-Sensitive Ability, each illustrating a distinct capability required of an ideal Plausibility Evaluation (PE) model. Both sections follow a consistent horizontal workflow layout: Statement → Models → Output (Contribution & Answers or Answers), enclosed within dashed rectangular boundaries.

In section (a), the Statement is a sentence: 'Mr. July ordered wires for dinner at a Chinese restaurant.' This is processed by two models: a standard Language Model (LM) represented as a light orange rounded rectangle, and an enhanced LM+CCSG model (also light orange, with '+CCSG' appended). The outputs are shown as two components: a bar chart indicating token-level contribution (gray bars, with one darkened in the LM case) and a textual answer ('It is wrong'). For the LM, the token contribution highlights an incorrect region (indicated by a red 'X'), while the answer is marked correct with a green checkmark. In contrast, the LM+CCSG model correctly identifies the relevant tokens (all gray bars, no darkened one) and provides the same correct answer, marked with a green checkmark. This demonstrates that the enhanced model not only gives the right answer but also explains it through appropriate linguistic focus.

Section (b) illustrates Commonsense-Sensitive Ability. The Statement contains two similar sentences: 'A cheetah can swim faster than a fish.' and 'A cheetah can run faster than a fish.', with the verbs 'swim' and 'run' highlighted in blue. These are fed into a robot-shaped model icon (gray body, red accents, blue eyes) representing the PE model. The model outputs two answers: 'It is true' for both statements, but the first is marked with a red 'X' (incorrect), while the second is marked with a green checkmark (correct). A thinking emoji with a speech bubble ('Cheetah can't swim as fast as the fish!') appears next to the incorrect output, emphasizing the model's failure to recognize the commonsense implausibility of the first statement. This highlights the need for the model to detect subtle semantic shifts that affect real-world plausibility.

The figure uses color coding consistently: red 'X' for incorrect predictions or contributions, green checkmarks for correct ones, and blue for emphasized words. All text is in black unless otherwise specified. The overall structure emphasizes that an ideal PE model must be both linguistically explainable and sensitive to commonsense reasoning.
