# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UAlign: Leveraging Uncertainty Estimations for Factuality Alignment on Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11803

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative overview of four distinct methods for confidence and uncertainty estimation in Large Language Models (LLMs), structured as a two-column table. The left column illustrates each method with a visual workflow, while the right column lists its disadvantages. The entire figure is divided into four horizontal rows, each corresponding to one method, labeled numerically from ① to ④.

[1] Global Layout and Structure:
The figure is organized as a grid with four rows and two columns. Each row represents a different uncertainty estimation method. The left column contains schematic diagrams illustrating the method’s workflow, starting from an input query ('What's the capital of France?') processed by an LLM icon (a gray robot head with 'LLM' beneath it). The right column lists three bullet-pointed disadvantages for each method. Each row is separated by horizontal lines, and the top row has bold headers: 'Confidence & Uncertainty Estimation Methods on LLMs' on the left and 'Disadvantages' on the right.

[2] Visual Modules and Attributes:
Each method uses consistent visual elements: a yellow rounded rectangle for 'Input', a gray robot icon for 'LLM', peach-colored rounded rectangles for 'Output', green dashed boxes for token-level probabilities (e.g., 0.8, 0.9, 0.6), blue rounded rectangles for operations like 'Norm(·)' or 'Agg(·)', and gray rounded rectangles for final 'Conf.' values (e.g., 0.75, 0.9, 0.66, 0.72).

① Likelihood-based method: The LLM generates tokens ('It', 'is', 'Paris'), each with associated probabilities shown in green dashed boxes. These are fed into a blue 'Norm(·)' box, which outputs a final confidence score of 0.75.

② Prompting-based method: This method splits into two sub-methods. First, the LLM’s output ('It is Paris') is used to prompt the same LLM with 'Is your answer True?', yielding a probability of 0.9 for 'True', resulting in Conf. 0.9. Second, the self-verbalized method prompts the LLM with 'Your confidence is', leading to a direct numerical output of 0.85, also resulting in Conf. 0.85.

③ Sampling-based method: The LLM generates multiple outputs for the same input: 'It is Paris' (marked with a green check), 'It is Berlin' (marked with a red cross), and 'Paris.' (green check). These outputs are aggregated via a blue 'Agg(·)' box, producing a final confidence of 0.66.

④ Training-based method: The LLM produces 'It is Paris', which is passed to a blue trapezoidal 'Evaluator' module. Below this, a blue upward arrow labeled 'Training' points to stacked disk icons, indicating training data. The evaluator outputs a confidence of 0.72.

[3] Connections and Arrows:
All workflows use gray arrows to indicate data flow. In ①, arrows go from Input → LLM → Output tokens → Probabilities → Norm(·) → Conf. In ②, arrows branch from the initial output to two separate prompting paths, each leading to a confidence score. In ③, multiple outputs from the LLM converge into the Agg(·) module before reaching Conf. In ④, the output flows from LLM → Evaluator → Conf., with a separate training path indicated by an upward arrow from data disks to the Evaluator.
