# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interpretable LLM-based Table Question Answering — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12386

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four distinct methodologies for answering a tabular reasoning question using large language models (LLMs), labeled (a) End-to-end, (b) Text-to-SQL, (c) Hybrid (Chain-of-Table or CoTable), and (d) Plan-of-SQLs (POS, proposed method). The global layout is divided into four quadrants, each illustrating a different approach to processing the same input table, 'Input Table 7: wildcats football team', which contains columns: game, opponent, result, wc_pts, and opponents. The question posed is: 'True or False? The wildcats kept the opposing team scoreless in 4 games.' The correct answer is 'True'.

In section (a) End-to-end, the entire process is handled by a single black rectangular LLM block. The input table is fed directly into the LLM, which outputs the answer 'True' without any intermediate steps or explanations. This method is opaque and does not reveal the reasoning path.

Section (b) Text-to-SQL shows the LLM generating a single SQL query: 'SELECT CASE WHEN COUNT(*) = 4 THEN 'TRUE' ELSE 'FALSE' END AS result FROM table_sql WHERE opponents = 0;'. This query is then executed to produce the answer. While this provides some transparency through code, it requires SQL expertise to interpret and becomes difficult to understand for complex queries.

Section (c) Hybrid (CoTable) introduces a planning phase. The LLM first generates a plan consisting of four steps: 1. f_select_row(2,3,4,5,9), 2. f_select_column(game,wc_pts,opponents), 3. f_sort_column(opponents), and 4. simple_query(). These abstract functions are applied sequentially to the input table. The first function selects specific rows (highlighted in yellow), the second selects specific columns, the third sorts the resulting table by the 'opponents' column in ascending order, and finally, a simple query is performed. The LLM then produces the answer based on this processed data. However, the function arguments are not explained, and the reasoning remains partially opaque.

Section (d) Plan-of-SQLs (POS) is the proposed method. It begins with the LLM generating a natural language plan: '1. Order the table by 'opponents' in ascending order. 2. Select rows where 'opponents' is 0. 3. Use a 'CASE' statement to return TRUE if the number of rows is equal to 4, otherwise return FALSE.' Each step in the plan is then converted into a concrete SQL command. Step 1: 'SELECT * FROM table_sql ORDER BY opponents ASC;' results in a table sorted by 'opponents'. Step 2: 'SELECT * FROM table_sql WHERE opponents = 0;' filters rows where 'opponents' equals 0, highlighted in green. Step 3: 'SELECT CASE WHEN COUNT(*) = 4 THEN 'TRUE' ELSE 'FALSE' END AS result FROM table_sql;' is executed on the filtered data to yield the final answer. This method provides full transparency, as each step is both human-readable and executable, allowing for clear understanding of the reasoning process. The figure uses color coding (yellow for selected rows, green for filtered rows) and numbered steps to guide the viewer through the transformation pipeline.
