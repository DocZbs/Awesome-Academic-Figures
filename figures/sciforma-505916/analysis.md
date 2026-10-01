# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

GASLITEing the Retrieval: Exploring Vulnerabilities in Dense Embedding-based Search — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20953

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the GASLITE attack on a retrieval system, structured as a three-stage adversarial process. The global layout is left-to-right, depicting the attacker’s workflow from crafting a trigger to poisoning the corpus and finally achieving successful retrieval of targeted information. On the far left, inputs include 'Samples of query dist.' represented as a green stack of query samples q₁ through q|Q|, the attacker’s private 'Info' shown as a purple rounded rectangle, and a 'Retriever' symbolized by a yellow cartoon face inside a dark blue trapezoid. Below these, a separate green stack labeled 'Query Dist.' contains modified queries ŝ₁, ŝ₂, etc., connected via dashed blue lines to the central attack module.

The central component is a large pink-bordered box labeled 'GASLITE Attack', containing a 2D scatter plot with green dots representing data points and two distinct purple dots connected by a dashed magenta line, indicating a transformation or embedding shift. Above this box, step (1) is annotated: an attacker icon (purple owl) crafts a red 'Trigger' block. This trigger, combined with the attacker’s 'Info' (purple block), forms a composite adversarial passage enclosed in a dashed red border, which is then injected into the corpus.

Step (2) shows the poisoning phase: a syringe icon injects the adversarial passage into a gray 'Corpus' box, depicted as a grid of document slots with a small globe icon, symbolizing a database. One slot is highlighted in red, indicating the insertion point.

Step (3) on the right demonstrates the retrieval outcome: a green query ŝᵢ is fed into the retrieval system, resulting in a ranked list of passages. The top-ranked result is the adversarial passage (dashed red border) containing both 'Info' (purple) and 'Trigger' (red), followed by standard passages labeled 2nd through 6th. A blue arrow labeled 'Retrieval' points upward from the corpus to this output list. The caption clarifies that any query from the target distribution will retrieve the attacker’s information in the top-k results, demonstrating successful backdoor activation.

Visual attributes include color-coded blocks: green for queries, purple for attacker info, red for triggers, and gray for the corpus. Arrows indicate data flow: solid pink arrows from inputs to the attack module, dashed red from the crafted passage to the corpus, and dashed blue feedback loops from the corpus to the query distribution. The overall structure emphasizes the attacker’s control over the retrieval system through strategic poisoning.
