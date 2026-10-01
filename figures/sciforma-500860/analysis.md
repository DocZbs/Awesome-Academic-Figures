# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CharacterBench: Benchmarking Character Customization of Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11912

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the construction pipeline of CharacterBench, a benchmark for evaluating character-based dialogue systems. The global layout is divided into three main horizontal sections: data sourcing and script sampling at the top, query construction strategies in the middle, and response generation and human annotation at the bottom. The top section shows four sources for building a 'Character-based Dialogue Corpus': Human Role-Playing (light blue), Human Prototype Interaction (light pink), Extraction From Literature Resources (beige), and Synthesis Via Prototypes’ Interaction (light green). These sources feed into a central 'Script Sampling' step, producing a 'Script' containing 'Character Profile' and 'Dialogue Context'.

In the middle section, two parallel query construction pathways are shown. The upper pathway, labeled 'Target-oriented Query Construction for Sparse Dimensions', takes the Script and extracts four target attributes: Knowledge (purple box with brain icon), Persona (red box with person icon), Memory (teal box with brain icon), and Emotion (green box with smiley face). These targets are combined via OR logic to form a query, which is then presented to either LLMs or humans. The output undergoes filtering before being used.

The lower pathway, 'Target-free Query Construction for Dense Dimensions', also starts from the Script but focuses on two dense dimensions: Morality (yellow box with scales icon) and Believability (blue box with head icon). These are used to construct a target-free query, which is similarly presented to humans and filtered.

The bottom section, 'Response Generation and Human Annotation', receives both target-oriented and target-free scripts. Seven LLMs generate responses, which are then evaluated by three human annotators. A judge assigns a score based on these annotations. The generated responses and queries are fed back into the system to refine the script generation process, forming a closed-loop evaluation framework. Arrows indicate data flow: solid arrows represent direct input/output, dashed arrows denote feedback loops, and labeled arrows specify the type of data or operation (e.g., 'Target Extraction', 'Query', 'Filtering'). The entire pipeline emphasizes iterative refinement through human-in-the-loop validation.
