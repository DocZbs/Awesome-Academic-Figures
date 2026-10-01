# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLM Reasoning Engine: Specialized Training for Enhanced Mathematical Reasoning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20227

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a proposed pipeline for improving reasoning in large language models through a multi-stage refinement process. The global layout is horizontal, flowing from left to right, enclosed within a dashed gray border. It begins with a blue rounded rectangle labeled 'Question', containing a math word problem: 'James buys 5 packs of beef that are 4 pounds each. The price of beef is $5.50 per pound. How much did he pay?'. This question flows via a solid blue arrow to a larger blue rounded rectangle labeled 'Prompt', which includes the same question followed by the instruction: 'Please solve the following math problem. Answer: Let’s think step by step.'

From the prompt, two parallel paths emerge. One path leads directly to a green rounded rectangle labeled 'Answer', which contains the correct solution: 'He bought 5*4=20 pounds of beef. So he paid 20*5.5=$110. The answer is 110.' This answer then feeds into a vertically stacked group of three green rounded rectangles, enclosed in a dashed green border, representing the core refinement modules: Supervised Fine-tuning (SFT), Rationale Re-ranking (RR), and Mistake Identification (MI). Each module contains a rationale or modified version of the answer. SFT repeats the correct reasoning. RR rearranges the steps: 'Step 3, Step 1, Step 2', indicating reordering of reasoning steps. MI presents a flawed rationale: 'He bought 50*3=20 pounds of beef. So he paid 20*7.5=$110. The answer is 110.', highlighting a mistake in intermediate calculations.

These three modules feed into a central neural network icon—a small graph with interconnected blue and red nodes—symbolizing a model that processes the refined rationales. From this model, a solid red arrow points to a vertically stacked group of three pink rounded rectangles, enclosed in a dashed red border, representing the outputs of the model. The top box, labeled 'SFT', contains the correct reasoning: 'He bought 5*4=20 pounds of beef. So he paid 20*5.5=$110. The answer is 110.' The middle box, labeled 'RR', lists reordered steps: 'Step 3, Step 1, Step 2'. The bottom box, labeled 'MI', provides correctness labels: 'Wrong, Wrong, Correct', indicating the model's evaluation of the steps in the MI rationale.

The visual modules use distinct colors and shapes: blue for input questions and prompts, green for ground truth and refinement modules, and pink for model outputs. All text boxes are rounded rectangles with clear labels. Arrows indicate data flow: solid blue arrows for initial input flow, solid red arrows for model output flow, and a solid green arrow connecting the answer to the refinement modules. The figure visually abstracts a pipeline where a model learns to refine reasoning through supervised fine-tuning, re-ranks rationales, and identifies mistakes, ultimately producing structured outputs that include corrected reasoning, reordered steps, and error detection.
