# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Dual-Perspective Metaphor Detection Framework Using Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.17332

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the DMD (Theory-Driven Metaphor Detection) framework, structured into three main components: (a) Implicit Theory-Driven Guidance, (b) Explicit Theory-Driven Guidance, and (c) Self-Judgment. The global layout is divided into three vertical sections, separated by dashed lines, each illustrating a distinct phase of the framework’s workflow.

In section (a), Implicit Theory-Driven Guidance begins with an annotated dataset containing sentences labeled as metaphorical ('yes') or non-metaphorical ('no'). A sample sentence, such as 'He now says that specialty retailing fills the bill, but he made a number of ...', is processed by a MelBERT model (represented as a blue rounded rectangle). This model generates two theoretical embeddings: h_MIP and h_SPV, which are combined into a joint representation h_T. These embeddings are stored in a Datastore, which contains annotated samples indexed by their h_T vectors. The Datastore is visualized as a table with rows representing samples and a k-nearest neighbor search (k=3) illustrated via a circular region enclosing the closest points in embedding space. The selected nearest neighbors are then used as context for an LLM (Large Language Model, shown as a green rounded rectangle) to determine whether a specific word in a given sentence expresses metaphorical meaning, with the prompt including examples and requiring a 'yes' or 'no' answer along with an explanation.

Section (b), Explicit Theory-Driven Guidance, starts with content from metaphor theories (e.g., MIP and SPV definitions) fed into an LLM to generate a multi-step reasoning process (Step 1: Determine basic meaning; Step 2: Analyze sentence context; etc.). Simultaneously, the target word (e.g., 'fill') is looked up in a Dictionary (pink rounded rectangle), retrieving its definition and usage examples. Both the LLM-generated steps and dictionary information are combined into a structured input prompt for another LLM, which then judges whether the word expresses metaphorical meaning, again requiring a 'yes' or 'no' response.

Section (c), Self-Judgment, evaluates outputs from both previous guidance methods. The LLM’s response from (a) is first assessed, with an example output showing 'Answer: no' and an explanation. Then, the LLM’s response from (b) is evaluated, where it presents two views and asks the LLM to judge them. A thought bubble illustrates internal reasoning: 'I agree with view 2... So the answer is yes.' The final decision is derived from this self-judgment process, combining insights from both implicit and explicit guidance to produce a final verdict on metaphorical expression.

Throughout the diagram, arrows indicate data flow and processing direction. The LLMs are consistently represented as light green rounded rectangles, while the MelBERT and Dictionary modules are blue and pink, respectively. Text boxes are used for prompts, inputs, and explanations, often with color-coded bars indicating different types of information (e.g., examples, dictionary entries). The figure uses dashed lines to separate the three major components and solid arrows to show the sequence of operations within and across them.
