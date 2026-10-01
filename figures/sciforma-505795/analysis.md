# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ChartAdapter: Large Vision-Language Model for Chart Summarization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20715

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four distinct pipelines for chart-to-text summarization, labeled (a) through (d), arranged in a 2x2 grid layout. Each pipeline begins with an 'Input Chart' represented as a light blue rounded rectangle containing a 3x3 grid of small chart thumbnails. The overall structure is modular, with each subfigure illustrating a different approach to generating a 'Chart Summary', which is consistently shown as a light blue rounded rectangle at the end of each flow.

In subfigure (a) 'Template-based Approaches', the input chart flows into a 'Frozen OCR Tools' module, depicted as a blue rectangle with diagonal hatching. This module outputs a structured data table, shown as a white box with numerical values (e.g., '55|53.7|53.9|...') and labels ('Mar'19|May'19|Jul'19|...', 'Actual|Forecast'). A 'General Instruction' box, light blue with rounded corners, contains the text '<image>\nWrite a summary for this chart.' This instruction, along with the extracted data, feeds into a yellow circular node labeled 'Templates'. The templates then produce the final 'Chart Summary'.

Subfigure (b) 'Bi-model Approaches' follows a similar path: the input chart goes to 'Frozen OCR Tools', which outputs the same data table. The 'General Instruction' is also identical. However, instead of templates, the data and instruction are fed directly into an 'LLM' (Large Language Model), represented by a black brain-like icon with multiple nodes. The LLM generates the 'Chart Summary'.

Subfigure (c) 'LVLM-based Approaches' introduces a more complex preprocessing chain. The input chart first undergoes 'Pre-process', then passes through a 'Chart Encoder', followed by 'Alignment'—all shown as white rounded rectangles. These three steps collectively form a visual processing pipeline. The output of 'Alignment' is combined with the 'General Instruction' and fed into the same 'LLM' icon, which produces the 'Chart Summary'.

Subfigure (d) 'Our Approach' combines elements from previous methods. The input chart is processed through 'Pre-process', 'Chart Encoder', and 'Alignment' modules, identical to (c). However, the output of 'Alignment' is directed to a new component: a yellow rectangular box labeled 'ChartAdapter', which has a diagonal hatch pattern. The 'General Instruction' is also fed into the 'LLM'. Crucially, the 'ChartAdapter' outputs are connected to the 'LLM', indicating it modifies or enhances the input to the model. The 'LLM' then generates the 'Chart Summary'.

All connections between modules are indicated by solid black arrows, showing the direction of data flow. The figure caption below states that (a)-(c) show existing pipelines, while (d) demonstrates the proposed design.
