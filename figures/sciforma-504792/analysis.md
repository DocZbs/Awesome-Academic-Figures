# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a PRISM code composition framework, depicting an iterative process where a large language model (LLM) incrementally builds a memory of relevant functions to solve a given task. The global layout is divided into two main vertical sections: on the left, a stack of input components labeled with mathematical symbols T, q, S, m_i, and d_i, representing the task, query, schema, current memory state, and data chunk respectively; on the right, the LLM module and its output, along with a feedback loop for validation and revision.

The left-hand side contains five rectangular boxes stacked vertically, each with a black border and rounded corners. The top box, labeled T, contains the task: 'Compose two functions to capitalize two strings'. Below it, the box labeled q states: 'Find the functions that are relevant to the task'. The third box, labeled S, displays a green comment '# map func to a description' followed by a blue-typed Python-like type annotation: 'functions: dict[Callable, str]', indicating a mapping from callable functions to string descriptions. The fourth box, labeled m_i, shows the current memory state as a tuple: '(functions, {cap: "capitalises a string"})', where 'cap' is highlighted in blue and the function name 'functions' is in orange. The bottom box, labeled d_i, contains two function definitions in blue text: 'def first(a, b): return a' and 'def cat(a, b): return a + b'.

A thick gray vertical bar connects these five boxes, symbolizing their collective input to the LLM. An arrow points from this bar to a central square box labeled 'LLM', which processes the inputs. From the LLM, a blue arrow leads to a new memory state box on the right, labeled '(functions, add, cat: "concats strings")', where 'add' is in black and 'cat' is in blue. This represents the LLM's proposal to add the 'cat' function (with its description) to the existing memory.

A feedback loop is shown via a blue arrow labeled 'r_i' pointing back from this proposed memory state to the LLM, and another blue arrow labeled 'Validate and revise' pointing upward from the proposed memory to a final validated memory state: '(functions, {cap: "capitalises a string", cat: "concats strings"})'. This final state includes both the original 'cap' function and the newly added 'cat' function, with their respective descriptions. The entire process demonstrates how the LLM iteratively refines its memory by selecting and validating relevant functions from available data chunks to fulfill the task.
