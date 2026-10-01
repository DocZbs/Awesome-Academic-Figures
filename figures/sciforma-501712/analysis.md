# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SummExecEdit: A Factual Consistency Benchmark in Summarization with Executable Edits — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13378

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a three-stage methodology for developing and evaluating an executable editing framework for summarization, titled 'SummExecEdit'. The overall layout is divided into three vertically aligned sections: 'POC Stage to verify superiority of Executable Editing', 'Creation of SummExecEdit Benchmark', and 'Evaluating 20+ LLMs on SummExecEdit'. Each section contains a flowchart illustrating a sequential process with distinct modules, connections, and annotations.

In the first stage, the input is a pair '(Document, Seed Summary)'. This splits into two paths: one labeled 'Executable Prompt' feeding into the 'SummExecEdit Pipeline', and another labeled 'Normal Prompt' feeding directly into an LLM. The SummExecEdit Pipeline, enclosed in a dashed rectangle, consists of three beige rectangular modules: 'Original Text', 'Replace Text', and 'Explanation', each with descriptive subtext. These feed into a beige box labeled 'Edited Inconsistent Summary'. The Normal Prompt path leads directly to a similar beige box labeled 'Edited Inconsistent Summary'. Both outputs are shuffled and anonymized before being sent to a human verification module, represented by a person icon, which evaluates four criteria: whether the edit is inconsistent, complex, controlled, and whether the explanation quality is good.

The second stage begins with the same '(Document, Seed Summary)' input, now processed via an 'Executable Prompt' into the 'SummExecEdit Pipeline' (shown as a light green rounded rectangle). This output undergoes 'Quality Assurance' via an LLM, which discards trivial edits. The remaining 'Quality Inconsistent Summary' is stored in a pink cylinder labeled 'SummExecEdit'. Additionally, summaries from a separate dataset 'SummEdit' (another pink cylinder) are added to balance the benchmark. This stage ensures scalability while maintaining quality.

The third stage evaluates multiple LLMs on the created SummExecEdit benchmark. Input pairs '(Document, Summary) - SummExecEdit' are fed into an LLM (represented by a brain icon), which produces two outputs: 'Detection' and 'Explanation'. The 'Explanation' branch is shuffled and anonymized for 'Human Labeling for Error Analysis'. The 'Detection' branch feeds into an 'LLM Judge' (brain icon) that assigns labels: 'Not Correct', 'Partially Correct', or 'Entirely Correct'. These labels are combined with human feedback to form an 'Explanation Eval Label', which, along with detection results, contributes to a final 'Joint Score'.

Throughout the diagram, arrows indicate data flow, with solid lines for direct processing and dashed lines for grouping or auxiliary processes. All LLMs are depicted as brain icons, and data storage is shown as pink cylinders. Text boxes are primarily beige rectangles with black borders, except for the pipeline box which is light green. The figure emphasizes a systematic progression from proof-of-concept validation through benchmark creation to comprehensive evaluation.
