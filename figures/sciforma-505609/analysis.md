# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLM2: Let Large Language Models Harness System 2 Reasoning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20372

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training and inference stages of an LLM2 framework, divided into three main components: (a) Synthetic Process-Supervision, (b) Process-based Verifier, and (c) Dual-process LLM. The entire diagram is horizontally partitioned into two major phases: 'Training Stage' on the left and 'Inference Stage' on the right, separated by a gray arrowed banner at the bottom.

In section (a), Synthetic Process-Supervision, a light blue box labeled 'Q: ...' and 'R: He writes 6 pages every' represents a question-answer pair. This input is fed into a yellow rectangular module labeled 'LLM', which generates multiple candidate continuations shown as green rounded rectangles: 'quarter', 'for each ...', 'and he ...', 'so he ...', 'to make ...', and 'month'. These candidates are evaluated for accuracy, with 'quarter' receiving an accuracy score of 0.6 and 'month' receiving 0.3. The candidate 'month' is selected as x_i^-, indicated by a downward arrow from the LLM to the 'month' box and a label 'selected as x_i^-'.

Section (b), Process-based Verifier, shows the training of a pink rectangular module labeled 'Verifier'. It receives two inputs: s_θ(x_<p x_i^+) and s_θ(x_<p x_i^-), representing scores for positive and negative process continuations, respectively. These are connected via bidirectional arrows to a 'pairwise comparison loss' function, which optimizes the verifier. The inputs to the verifier come from a light blue box containing the same Q-R pair as in (a), along with two green boxes labeled 'week' and 'month', indicating the process tokens being compared.

Section (c), Dual-process LLM, depicts the inference stage. A light blue box with 'Q: ...' and 'R: ... 3 + 5 =' is processed by a yellow 'LLM' module, which outputs a sequence of green bars representing token scores or logits: '8 1 . -'. This output is sent to a pink 'Verifier' module, which also receives the same Q-R input. The verifier's output is combined with the LLM's output via a '+' operator, scaled by a parameter β, resulting in a modified sequence of green bars: '8 1 . -', which is then used for final generation. The connection from the LLM to the verifier is shown as a curved line, and the combination step is represented by a circular '+' symbol with β below it.

All modules are color-coded: LLMs are yellow, verifiers are pink, process tokens and scores are green, and input Q-R pairs are light blue. Dashed vertical lines separate the three sections, and the overall flow moves from left to right, from training to inference.
