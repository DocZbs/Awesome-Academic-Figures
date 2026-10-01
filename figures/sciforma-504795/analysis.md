# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRISM: Efficient Long-Range Reasoning With Short-Context LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18914

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a memory update mechanism using JSON-based memory structures, demonstrating how an update to a specific candidate function affects the memory state through two different strategies: direct overwrite and amendment. The global layout consists of three main vertical columns: the left column contains the initial memory state labeled 'Memory (i)' and the update instruction labeled 'Update (i+1)', the center column contains a vertical rectangular module labeled 'UpdateMemory', and the right column displays two resulting memory states labeled 'Single Memory' and 'Amendments'.

In the leftmost column, 'Memory (i)' is represented as a beige rectangular box containing a JSON structure with a 'candidates' object that includes three entries: 'foo', 'bar', and 'baz', each with 'purpose' and 'percent_match' fields. The 'percent_match' values are 0.2 for 'foo', 0.8 for 'bar', and 0.1 for 'baz'. Below this, 'Update (i+1)' is shown in a purple rectangular box, containing a JSON update targeting the 'foo' candidate via a path expression '$.'candidates'.'foo'', specifying a new 'update' object with modified 'purpose' and 'percent_match' set to 0.7.

The central module, 'UpdateMemory', is a tall vertical rectangle oriented vertically with the label rotated 90 degrees, indicating a processing step that receives both the current memory and the update instruction. Two arrows emerge from this module: one pointing to the 'Single Memory' output and another to the 'Amendments' output.

The 'Single Memory' output, also in a beige box, shows the result of directly overwriting the 'foo' entry in the original memory with the updated values. Here, 'foo's 'percent_match' is now 0.7, while 'bar' and 'baz' remain unchanged. The 'Amendments' output, similarly formatted, shows the original memory preserved intact, followed by a new JSON object containing only the updated 'foo' entry with 'percent_match' = 0.7. This represents appending the update as a new record rather than modifying the existing one.

Text color coding is used to highlight differences: green text indicates the longest matching prefix between consecutive memory states (e.g., unchanged parts like 'bar' and 'baz'), while red text denotes newly encoded or changed content (e.g., the updated 'foo' entry). The figure visually contrasts the two approaches: direct update minimizes memory size but may require re-encoding more data, whereas amendments preserve history and reduce token encoding cost at the expense of increased memory size.
