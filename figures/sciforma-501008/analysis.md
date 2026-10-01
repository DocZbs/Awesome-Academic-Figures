# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What Makes In-context Learning Effective for Mathematical Reasoning: A Theoretical Analysis — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12157

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the LMS3 method, a framework for selecting effective demonstrations for few-shot prompting in large language models (LLMs). The global layout is left-to-right, depicting a pipeline starting from input problem and demonstration pool, through model processing and scoring, to final demonstration selection and k-shot prompting. On the far left, two inputs are shown: a 'Test Problem X_test' box containing a mathematical question about the domain of a function f(x), and below it, a cylindrical 'Demonstration Pool D' containing example problems and solutions, such as Problem 1 and Solution 1 for a different function g(x). These inputs feed into a central 'Large Language Model' block, represented by a vertical beige rectangle with three weight matrices labeled W_K, W_Q, and W_V, each depicted as a 2x2 grid of gray squares. From this model, two outputs are generated: h_test (a light blue rounded rectangle) and W_K^T · W_Q h (another light blue rounded rectangle). These are used in two parallel scoring modules. The upper module, 'LLM-oriented Semantic Similarity', computes Sim(X) = ||h_test - W_K^T · W_Q h||, shown in a light blue rounded rectangle with the formula. The lower module, 'Inference Stability of Demonstration', computes stab(X) = ||W_V h|| / √d, shown in a light green rounded rectangle with the formula. Both scores are visualized as bar charts — blue for similarity and orange for stability — which are combined into a single 'Score(X)' via a curly brace. This score feeds into an orange rectangular block labeled 'Demonstration Rejection', which filters out low-scoring demonstrations. The output of this rejection step is a 'k-shot prompting' box on the far right, with a light blue background and rounded corners, containing a structured prompt: examples from the demonstration pool followed by a 'Now it's your turn!' section with instructions ('Take a deep breath', 'Think step by step', 'I will tip $200') and finally the test problem Q. All text is black, except for the formulas which are centered within their respective blocks. The connections between components are solid black arrows indicating data flow direction.
