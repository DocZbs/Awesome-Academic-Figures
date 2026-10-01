# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interact with me: Joint Egocentric Forecasting of Intent to Interact, Attitude and Social Actions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16698

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct hierarchical classification architectures labeled (a) Parallel and (b) Tree, both designed to process a common input: 'High-Level Social Feature', represented as a vertical stack of blue-outlined rectangular cells. In the Parallel structure, this input is split into three separate processing streams, each leading to a different output category: 'Interest', 'Attitude', and 'Action'. Each stream is depicted as a horizontal line connecting the input to a red-outlined vertical stack of rectangular cells, symbolizing the output predictions for that category. The outputs are arranged vertically in parallel, with 'Interest' at the top, followed by 'Attitude', and 'Action' at the bottom, indicating independent processing paths.

In contrast, the Tree structure shows a sequential, hierarchical processing flow. The same 'High-Level Social Feature' input feeds into a central processing column, which is a tall vertical stack of blue-outlined cells enclosed in a rounded rectangle. At the top of this column, a red-outlined stack labeled 'Interest' is added via a '+' symbol, indicating that the initial prediction for 'Interest' is derived from the input and then combined with the main processing path. A dashed line suggests that subsequent processing steps may involve feedback or intermediate states. From the main column, a branch leads to a second processing stage, which produces two outputs: 'Attitude' and 'Action', again represented as red-outlined vertical stacks. These outputs are generated in sequence, reflecting a tree-like dependency where 'Attitude' and 'Action' are derived after 'Interest' has been processed and integrated.

Both diagrams use consistent visual elements: blue outlines for input and internal processing units, red outlines for output predictions, and solid arrows to indicate data flow. The Tree structure introduces a '+' symbol to denote addition or integration of features, and a dashed line to imply optional or conditional processing steps. The overall layout contrasts parallel, independent processing in (a) with a hierarchical, stepwise refinement in (b), emphasizing different strategies for modeling social feature classification.
