# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Multi-Modal Data Exploration via Language Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18428

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the optimization of XMODE, a smart replanning framework, through a two-tiered diagram: an 'Overview' at the top and 'Details' below, separated by a horizontal dashed line. The Overview presents a high-level workflow using standardized shapes: a gray circle labeled 'P' (planning) initiates the process, leading to a rectangular container labeled 'E' (execution), which contains two stacked boxes—t₁ (green) and t₂ (yellow)—representing sequential tasks. An arrow from this container points to a diamond-shaped 'D' (decision-making), followed by a gray circle 'Re-P' (re-planning), which feeds into another 'E' container holding t₃ (yellow), then to another 'D'. This structure visually represents a planning-execution-decision-replanning loop.

In the Details section, the process is elaborated with specific components and data flows. It begins with a user query: 'What is depicted on the oldest Renaissance painting in the database?' This triggers 'Planning & Expert Model Allocation', which assigns two tasks: t₁ (text2SQL, green box) to retrieve the image path and year of the oldest Renaissance painting using the db_schema, and t₂ (image_analysis, yellow box) to analyze what is depicted in the image, with input $t₁ (the result of t₁). These tasks feed into an 'Execution and self-debugging' module. Within this module, t₁ generates reasoning steps and executes an SQL query: 'SELECT img_path, strftime("%Y", inception) AS year FROM paintings WHERE movement = 'Renaissance' ORDER BY inception ASC LIMIT 1', which queries a table named 'paintings' with columns 'img_path' and 'inception'. The output is a JSON-like result: {"img_path": "images/img_0.jpg", "year": "1438"}. This result is passed to t₂, which performs image analysis on 'img_01.jpg' (shown as a thumbnail strip of four images), producing the output: {"img_path": "images/img_0.jpg", "year": "1438", "What is depicted in the image?": "painting"}.

A 'Decision-making' step follows, represented by a gray box containing a thought process: the system recognizes that while the painting is identified, its specific subject is not provided, prompting a feedback action to replan. This leads to 'Re-Planning & Expert Model Allocation', assigning a new task t₃ (image_analysis, yellow box) with the prompt 'What is specifically depicted in the painting?' and input 'img_01.jpg'. This enters another 'Execution and self-debugging' module where t₃ analyzes the image again, yielding: {"img_path": "images/img_0.jpg", "What is specifically depicted in the painting?": "umbrellas"}.

Final decision-making confirms the information is complete, leading to a summary output: {"Summary": "The oldest Renaissance painting in the database is from the year 1438 and depicts umbrellas.", "details": "The painting from 1438...", "source": "The information was obtained through image analysis...", "inference": "umbrellas", "extra explanation": "The depiction of umbrellas in a Renaissance painting is quite unique and may reflect cultural or artistic themes of the period."}. All connections are directed arrows; dashed lines indicate feedback loops or data dependencies. Colors distinguish task types: green for text-to-SQL, yellow for image analysis. Shapes include rectangles for modules, diamonds for decisions, circles for planning/re-planning, and notes for reasoning/thoughts.
