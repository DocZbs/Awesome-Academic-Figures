# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Toward Adaptive Reasoning in Large Language Models with Thought Rollback — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19707

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct thought structures—Chain, Tree, and Thought Rollback (TR)—used by GPT-4 to solve a probabilistic reasoning problem from the MATH dataset. The global layout is divided into three panels labeled (a), (b), and (c), each depicting a different reasoning architecture. Panel (a) shows the Chain Thought Structure as a linear sequence of nodes representing sequential reasoning steps. Panel (b) illustrates the Tree Thought Structure as a branching hierarchy where each node spawns multiple child nodes, reflecting parallel exploration of possibilities. Panel (c) displays the Thought Rollback (TR) Structure, which combines forward reasoning with corrective rollback mechanisms to revise erroneous thoughts.

Visual modules include colored shapes: green circles for the initial question (Q), blue rectangles for intermediate thoughts (labeled with N- and S- indices indicating node identity and step index), and beige octagons for final solutions. A red 'X' symbol denotes a 'Bad Thought'—an incorrect inference. Forward reasoning is indicated by solid black arrows, while dashed red arrows represent 'Rollback' operations that correct prior errors. Dashed gray arrows labeled 'R1' indicate 'Thought Induced by Rollback,' showing how corrected reasoning propagates backward.

In panel (a), the Chain structure progresses linearly from Q to N-6, S-6, with a bad thought at N-1, S-1 marked by a red X. The accompanying text explains the error: incorrectly calculating expected winnings for cards 2–10 as a single group rather than individually. In panel (b), the Tree structure branches from Q to multiple paths (e.g., N-2, S-1 → N-7, S-3; N-5, S-2 → N-9, S-3), with bad thoughts at N-13, N-14, N-15, S-5 marked by red Xs and incorrect values (e.g., 61.92). The text describes the error in computing probabilities for Aces using incorrect denominators.

Panel (c) details the TR structure, starting from Q and branching to N-1, S-1 (corrected via rollback). The error in N-2, S-2 is identified: summing expected values for cards 2–10 without individual calculation. A dashed red rollback arrow from N-2, S-2 to N-1, S-1 triggers a revised thought at N-7, S-2, which correctly computes individual expected values for cards 2–10. This correction propagates forward to N-6, S-4, yielding the accurate total expected winnings of $201.25. The final solution node (N-8, S-6) displays the correct answer: 3.87. The figure includes annotations explaining each error and correction, emphasizing the iterative refinement enabled by TR. All structures use consistent labeling conventions and visual cues to distinguish reasoning steps, errors, and corrections.
