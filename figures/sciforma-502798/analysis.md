# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

On the Structural Memory of LLM Agents — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15266

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a memory module workflow in LLM-based agents, structured into two main horizontal sections divided by a dashed line. The top section illustrates the input and output flow: on the left, 'Raw Information' is shown as a document containing a definition of 'Moneybomb'—a neologism coined in 2007 to describe a grassroots fundraising effort. This raw data flows downward into the 'Structural Memory' component. In the center-top, a box labeled 'LLM' contains logos of major large language models (e.g., GPT, Gemini, Claude, etc.), indicating the system's reliance on these models. On the right, a user icon poses a question: 'The term Moneybomb was coined by Trevor Lyman to describe a massive online donation drive on behalf of a presidential candidate that was the first chairman of what PAC?' This query triggers the memory retrieval process, leading to a response: 'Citizens for a Sound Economy,' accompanied by a thumbs-up and star icons, symbolizing a successful answer.

The bottom section details the internal structure of the 'Structural Memory' and the retrieval mechanisms. Structural Memory is subdivided into four colored modules: 'Chunks' (orange), displaying the raw text segmented into manageable pieces; 'Triples' (blue), representing structured knowledge as a graph with nodes like 'Moneybomb', 'Trevor Lyman', and 'Ron Paul', linked by relations such as 'Coined Term' and 'Supported'; 'Atomic Facts' (purple), presenting concise factual statements like 'The massive coordinate online donation drive was conducted on behalf of presidential candidate Ron Paul'; and 'Summaries' (green), offering condensed narratives summarizing key points from the raw data.

To the right, the 'Memory Retrieval' block outlines three retrieval strategies. 'Single-step Retrieval' combines 'Structural Memory' with a 'Top-K Retriever' via a plus sign, indicating a direct search for the top K relevant items. 'Rerank Retrieval' extends this by adding a 'Top-R Rerank' step after the Top-K Retriever, suggesting a refinement phase. 'Iterative Retrieval' is depicted as a loop over N turns: it starts with 'Structural Memory' and a 'Top-T Retriever', then passes the results to an 'LLM' (symbolized by a snowflake icon), which generates an 'Enhanced Query' to feed back into the retriever, forming an iterative refinement cycle. All retrieval paths converge toward generating the final response, emphasizing how different retrieval strategies leverage the structured memory to improve answer accuracy and contextual relevance.
