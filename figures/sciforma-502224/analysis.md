# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling of Search and Learning: A Roadmap to Reproduce o1 from Reinforcement Learning Perspective — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a conceptual framework for search processes in problem-solving, divided into two main components: guiding signals and search strategies. The layout is split into two horizontal sections, each illustrating the same core structure but with different visual styling and detail levels.

In the top section, the left side contains a box labeled 'Guiding Signals', which is subdivided into three categories: Internal Guidance, External Guidance, and Internal + External Guidance. Each category contains red rectangular modules with white text. Under Internal Guidance are 'Model Uncertainty' and 'Self-evaluation'. Under External Guidance are 'Environmental Feedback' and 'Heuristic Rules'. Under Internal + External Guidance are 'Uncertainty + Verifier' and 'Value Function'. A thick black arrow labeled 'Guiding' points from this box to the right, leading to a larger area titled 'Search Strategies', which is further divided into two sub-sections: 'Tree Search' and 'Sequential Revisions', each enclosed in a dashed rectangle.

In the 'Tree Search' sub-section, a red-bordered box contains the question: 'Let ω≠1 be a 13th root of unity. Find the remainder when ∏(from k=0 to 12) (2−2ω^k+ω^{2k}) is divided by 1000.' This is followed by a flowchart starting with a node labeled 'S1', which branches into three paths, each going through 'S2' then 'S3', and finally terminating at one of three result nodes: '321' (light green), '197' (light pink), or '561' (light pink). All nodes are rounded rectangles with black borders and black text.

In the 'Sequential Revisions' sub-section, the same question appears in a red-bordered box. It is followed by a linear sequence of four rounded rectangular nodes: the first (light pink) says 'S1; 2; ... The answer is 197.', the second (light pink) says 'I made a mistake. The answer is 561.', the third (light pink) says 'Sorry, I think the answer is 257.', and the fourth (light green) says 'I see, The final answer is 321.' Arrows connect these nodes sequentially.

The bottom section mirrors the top but with enhanced detail and color-coding. The 'Guiding Signals' box is now a large peach-colored rounded rectangle, subdivided into 'Internal Guidance' and 'External Guidance'. Internal Guidance includes 'Token Probability', 'Model Uncertainty', 'Self-Evaluation', and 'Value Function' (all red rounded rectangles). External Guidance includes 'Step Verifier', 'Code Compiler', 'Unit Tests', 'Sandbox', 'Search Engine', and 'Reward Model' (also red rounded rectangles), with an ellipsis indicating more items. Two thick arrows labeled 'Guiding' point from this box to the 'Search Strategies' area on the right.

The 'Search Strategies' area has a light blue background. 'Tree Search' shows the same question in a yellowish-beige rounded rectangle, followed by a flowchart starting with 'Step 1' (blue rounded rectangle), branching to multiple 'Step 2' nodes, then to 'Step 3' nodes, and finally to 'Step 4' nodes, which lead to the same three result nodes: '321' (light green), '197' (red), and '561' (red).

'Sequential Revisions' in this section also starts with the same question in a yellowish-beige rounded rectangle, followed by a sequence of three nodes: the first (red) says 'Step 1; Step 2; ... The answer is 197.', the second (red) says 'Wait, I made a mistake. The answer is 561.', and the third (light green) says 'Sorry, I think the answer is 321.' Arrows connect them in order.

The figure's caption explains that the two key aspects of search are guiding signals for solution selection and search strategies for obtaining candidate solutions. Guidance is divided into internal and external, and search strategies into tree search and sequential revisions. S1 denotes step 1.
