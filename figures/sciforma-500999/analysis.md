# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SMARTCAL: An Approach to Self-Aware Tool-Use Evaluation and Calibration — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12151

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram of three reasoning frameworks—Original ART, ART (V), and SMARTCAL—for answering complex question-answering (QA) tasks using tools. The global layout is divided into two main sections: the left side details the Original ART and ART (V) methodologies, while the right side outlines the SMARTCAL framework, which is structured into three sequential steps: Self-Evaluation (SE), Confidence Prior Collection (CPC), and Augmented Reasoning (AR). At the top, a QA input example is given: 'Where was Robert E. Clary educated?'. Above this, five cylindrical icons represent available tools: Search, String Operations, Code Exec, Arithmetic, and CoT Internal Knowledge, collectively labeled as 'Tool Box with Examples' under the 'Tool Framework (ART)' header.

On the left, the Original ART Reasoning process begins with a 'Tool Use Model f(x)', symbolized by a robot icon plus a wrench, which generates reasoning traces. These traces are shown in green boxes with step-by-step queries and answers, such as '[search] Use a search engine...' followed by results like 'Robert E. Clary was educated at the University of California, Los Angeles.' Some traces include incorrect or incomplete answers marked with red crosses. A dashed arrow from the Tool Use Model points to a box titled 'Find Similar Tool Use Examples', which filters examples based on shared subtasks (e.g., string operations, web search). This filtered set is then added to the reasoning process. Below this, 'Verbalized Tool Confidence' is introduced in ART (V), where confidence scores (e.g., [80], [90]) are appended to each reasoning step, indicating the model's certainty as a percentage. For instance, a step might read 'Q1: [search] [80] Who was Robert E. Clary?' with a confidence score of 80.

On the right, the SMARTCAL framework is enclosed in a dashed box and divided into three steps. Step 1: Self-Evaluation (SE) involves a 'Teacher Model g(x)' (robot icon) processing the QA input alongside 'Question Familiarity' and 'Example Similarity' modules. These are summarized into 'Tool Use Instructions', which caution against using tools not selected in similarity results and emphasize reliance on own knowledge when appropriate. Step 2: Confidence Prior Collection (CPC) includes 'Step-wise Confidence Calculation' using a formula: C_t_i = (1/K) * Σ(C_j) for j=1 to K, where t_i is a development set item. This is paired with a 'Calibration Performance Table' listing confidence intervals (e.g., [5, 45, 55, 65, 75, 85]) and corresponding accuracy intervals (e.g., [0, 33, 43, 47, 67, 78]). Adjacent to this is 'Conf Score Edit Instructions', guiding users to adjust confidence scores based on accuracy: decrease if accuracy is lower than confidence, increase if higher. Step 3: Augmented Reasoning (AR) integrates instructions from Steps 1 and 2 into a 'Calibration Model h(x, d)' (robot + wrench), which produces refined reasoning traces. These traces include confidence scores (e.g., [72], [85]), answer type checks (e.g., 'Does the information help answer the question?'), and internal knowledge usage. The final output correctly identifies 'United States Military Academy' as the answer, marked with a green check. The entire SMARTCAL process aims to reduce tool abuse by incorporating self-evaluation, confidence calibration, and augmented reasoning.
