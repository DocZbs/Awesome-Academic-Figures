# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interpretable LLM-based Table Question Answering — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12386

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Plan-of-SQLs (POS) framework, a method for answering natural language questions over tabular data by decomposing the reasoning process into atomic steps, each translated into executable SQL queries. The global layout is divided into two main regions: on the left, the input data and question are presented; on the right, the processing pipeline is shown with intermediate tables and execution steps.

On the left side, a dashed gray box contains Table T titled 'wildcats football team', with columns: game, opponent, result, wc_pts, and opponents. The 'opponents' column is highlighted in yellow. Below the table, the question [Q] asks: 'True or False? The wildcats kept the opposing team scoreless in 4 games.' Above the table, a green box labeled '[GT] True' indicates the ground truth answer.

The central processing pipeline begins with the NL Atomic Planner, represented as a beige rounded rectangle with a neural network icon above it. This module receives the table T and question Q as input and outputs a step-by-step plan in natural language. The plan consists of three steps: S1 (gray background): 'Order the table by 'opponents' in ascending order.', S2 (red background): 'Select rows where 'opponents' is 0.', and S3 (blue background): 'Use a `CASE` statement to return TRUE if the number of rows is equal to 4, otherwise return FALSE.' These steps are enclosed in a large rectangular box with a curved arrow pointing from the planner to them.

From this plan, the Step-to-SQL module (purple rounded rectangle with a neural network icon) processes each step sequentially. It takes the current table and one step at a time to generate corresponding SQL queries. The SQL Engine (pink rounded rectangle) executes these queries.

The workflow proceeds as follows:

Step 1 (indicated by a gray circle labeled '1'): The NL Atomic Planner generates the plan. Step 2 (indicated by a gray circle labeled '2'): Step-to-SQL converts S1 into an SQL query using Table T, which is executed by the SQL Engine to produce Table T1. Table T1 is displayed below the planner, showing rows ordered by 'opponents' in ascending order. Rows with 'opponents' = 0 are highlighted in green, while others remain yellow.

Step 3 (indicated by a red circle labeled '3'): Step-to-SQL processes S2 using Table T1, generating a query to select rows where 'opponents' is 0. The SQL Engine executes this, producing Table T2, which includes only those rows (games 2, 4, 5, 9), all highlighted in green.

Step 4 (indicated by a blue circle labeled '4'): Step-to-SQL processes S3 using Table T2, generating a query that counts the rows and returns TRUE if the count equals 4. The SQL Engine executes this, yielding the final answer 'True' in a small white box labeled 'answer'.

Arrows connect the modules and tables to show data flow: from the planner to the plan, from the plan to Step-to-SQL, from Step-to-SQL to the SQL Engine via SQL queries, and from the SQL Engine to intermediate tables T1 and T2, and finally to the answer. The figure visually demonstrates how complex reasoning is broken down into atomic, executable steps, enabling transparent and verifiable tabular QA.
