# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Prompting Strategies for Enabling Large Language Models to Infer Causation from Correlation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13952

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an eight-step sequential prompting framework for causal inference using a large language model (LLM), structured as a vertical flowchart with eight subquestions labeled SubQ1 through SubQ8. Each row corresponds to one subquestion, arranged vertically from top to bottom, representing a step-by-step decomposition of the PC algorithm for causal graph discovery. On the left side of each row is a rectangular box containing the subquestion prompt, which includes contextual premises and references to prior answers via color-coded placeholders such as '[Answer to SubQ1]', '[Answer to SubQ2]', etc. These placeholders are highlighted in distinct colors—yellow for SubQ1, orange for SubQ2, green for SubQ3, magenta for SubQ4, light blue for SubQ5, red for SubQ6, purple for SubQ7—to visually indicate the chaining of outputs from previous steps into subsequent prompts. The right side of each row contains a gray rectangular box labeled 'LLM', indicating the processing unit, followed by another box showing the LLM’s output, split into 'Reasoning: [...]' and 'Answer: [Answer to SubQi]' or '[Final Answer]' for SubQ8. Arrows connect each subquestion box to the corresponding LLM box, and then from the LLM box to the output box, demonstrating the data flow. The entire sequence is framed by a large curly brace on the left labeled 'Few-shot CoT prompting is added before each subquestion', indicating that each subquestion is preceded by few-shot chain-of-thought examples not shown in the diagram. The subquestions progressively guide the LLM through stages of the PC algorithm: initializing with a fully connected undirected graph (SubQ1), applying the first step to infer conditional independencies (SubQ2), finding paths of length 2 (SubQ3), identifying v-structures (SubQ4), orienting them (SubQ5), orienting other edges based on directed edges (SubQ6), applying the third step to further orient remaining edges (SubQ7), and finally evaluating a hypothesis against the inferred causal graph (SubQ8). The placeholders '[Premise]' and '[Hypothesis]' denote user-provided inputs, while '[...]' represents expected reasoning text from the LLM. The visual structure emphasizes the iterative, dependency-driven nature of the process, where each step builds upon the answer of the previous one, forming a coherent causal inference pipeline.
