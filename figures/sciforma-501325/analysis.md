# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

What External Knowledge is Preferred by LLMs? Characterizing and Exploring Chain of Evidence in Imperfect Context for Multi-Hop QA — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12632

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a methodological framework for constructing a CoE (Construct of Evidence) from external knowledge (EK) to answer a user question, using a specific example about drug stores and their CEO. The global layout is divided into three main vertical sections: on the left, the user question and its components; in the center, a three-step reasoning pipeline represented as a vertical stack of decision boxes; and on the right, the external knowledge source and the final output. The central pipeline is enclosed in a rounded rectangular container with a light gray background, and each step is marked by a small icon of a head with a lightning bolt, symbolizing cognitive processing.

In the left section, the user question is presented: 'Which state does the drug stores, of which the CEO is Warren Bryant, are located?' Below this, the answer 'Hawaii' is given in blue. The intent is specified as 'State location of business,' followed by 'Evidence Nodes' (drug stores, CEO, Warren Bryant) and 'Evidence Relations' (have (drug stores, CEO) and is (CEO, Warren Bryant)). These components are listed in black text, with key terms highlighted in orange or pink for emphasis.

The central reasoning pipeline consists of three sequential decision boxes, each with a downward-pointing gray arrow leading to the next. The first box asks: 'Is EK oriented towards state location of business intent?' The phrase 'state location of business' is highlighted in pink. A green checkmark appears to the right, indicating a positive evaluation. The second box asks: 'Does EK contain Evidence Nodes drug stores, CEO, Warren Bryant that bridge the user question to the final answer?' The evidence nodes are again highlighted in pink, and another green checkmark confirms their presence. The third box queries: 'Does EK contain Evidence Relations between different entities have (drug stores, CEO) and is (CEO, Warren Bryant)?' The relations 'have' and 'is' are highlighted in pink, and a green checkmark indicates their existence.

On the right side, the 'External Knowledge (EK)' is presented as a block of text describing: 'Warren Bryant was the CEO of Longs Drugs Store Corporation out of California prior to the retail chain's acquisition by CVS/Caremark. Longs Drugs is an American chain with approximately 40 drug stores throughout the state of Hawaii.' Key terms such as 'Warren Bryant', 'CEO', 'Longs Drugs Store', 'drug stores', and 'Hawaii' are color-coded in orange or blue for emphasis. An arrow points from this EK block to the central pipeline, indicating input. At the bottom right, a lightbulb icon labeled 'External Knowledge constructs CoE' signifies the output of the process — the construction of the CoE based on the validated evidence nodes and relations.

The visual modules use consistent styling: rounded rectangles for decision boxes, icons for cognitive steps, and color-coding (orange for entities, pink for key phrases, blue for answers) to enhance readability. All connections are shown via arrows: a gray arrow from the user question to the first decision box, downward arrows between the decision boxes, and a gray arrow from the EK block to the pipeline. The final output is indicated by a lightbulb icon connected to the last decision box, completing the flow. The figure caption, 'Example of CoE and the CoE features,' summarizes the purpose of the diagram.
