# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Progressive Transformer for Unifying Binary Code Embedding and Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11177

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a hierarchical, teacher-student learning framework for binary code analysis, structured as a pipeline of eight progressively complex tasks, each represented by a rectangular module with a gray header and a sample disassembled binary code snippet below. The global layout is a top-down flowchart with numbered steps from 1 to 8, arranged in two main columns: the left column contains tasks 1–4 and 6–8, while the right column contains tasks 2, 3, 5, and auxiliary components. Arrows indicate the flow of information and dependencies between tasks.

Task 1, 'Predict [MASK] byte', begins with a 'Binary File' input showing raw bytes and assembly. In this step, masked language modeling replaces certain bytes with '[MASK]' (highlighted in yellow), and the model predicts them based on context. This output feeds into Task 2, 'Predict Start of Instruction', which uses instruction boundary recovery to identify instruction boundaries, with highlighted bytes (red) indicating predicted starts. Task 2 is labeled 'Boundary Knowledge' and has a dashed border.

From Task 2, the flow proceeds to Task 3, 'Predict Start of Function and End of Function', which performs function boundary recovery using the recovered instruction boundaries. This step highlights function start and end points (e.g., 'push rbp' and 'ret') in red and purple respectively. Task 3 feeds into Task 4, 'Function Signature Prediction', where the model predicts function signatures based on byte sequences around function boundaries, with signature bytes shaded in light purple.

Task 4 connects to Task 5, 'Function Similarity Detection', which compares function signatures to detect similarity. Two candidate functions are shown on the right: 'Candidate_1' (green arrow, labeled 'Similar pair') and 'Candidate_2' (red arrow, labeled 'Distinct pair'), illustrating how similar functions have similar signatures while dissimilar ones do not.

Task 5 feeds back into Task 6, 'Function Name Prediction', which uses function signatures to predict function names. This step is linked to 'File-level Knowledge' via a curved arrow. Task 6 then connects to Task 7, 'Compiler Provenance', which identifies compiler-specific patterns in prologue and epilogue (highlighted in cyan and green respectively). Task 7 further connects to Task 8, 'Malware Classification', which leverages compiler fingerprinting within code segments (highlighted in yellow).

Each module displays a disassembled code snippet with hexadecimal offsets, raw bytes, and assembly mnemonics. Highlighted colors denote predictions or features: yellow for masked bytes, red for instruction/function starts, purple for function ends, cyan/green for prologue/epilogue, and light purple for function signatures. Text annotations explain dependencies, such as 'Prediction helped by instruction patterns in Prologue, Epilogue' and 'Prediction helped by byte sequence around function boundary'.

The entire system operates on raw byte sequences, with addresses and assembly shown only for illustrative purposes. Model weights act as interfaces between adjacent tasks, forming a teacher-student learning hierarchy where foundational knowledge (e.g., instruction boundaries) enables higher-level tasks (e.g., malware classification).
