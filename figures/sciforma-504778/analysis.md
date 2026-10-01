# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

CoEvo: Continual Evolution of Symbolic Solutions Using Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18890

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the CoEvo framework, a system designed for idea tree-based solution generation using evolutionary search and a knowledge library. The global layout is divided into four main components labeled a, b, c, and d, arranged in a flow from left to right and top to bottom, with feedback loops connecting them. At the center is the 'CoEvo' module, represented as a white rounded rectangle with bold black text, which acts as the core orchestrator. It receives input from the 'Task' component (a) and interacts with the 'Idea Tree-based Solution Generation' (b), 'Evolutionary Search' (c), and 'Knowledge Library' (d) modules.

Component (a), labeled 'Task', is enclosed in a dashed box and contains two icons: a document labeled 'Information' and a scroll with a clock labeled 'Evaluator'. These represent the problem definition and evaluation criteria, respectively. An arrow leads from this box to a blue hexagonal icon labeled 'Large Language Model', symbolizing the initial processing stage. From there, another arrow points to the central 'CoEvo' module.

Component (b), titled 'Idea Tree-based Solution Generation', is also enclosed in a dashed box and features a vertical stack of three colored rectangles: yellow ('Inspiring'), blue ('Thinking'), and red ('Solving'). These represent sequential stages in the solution generation process. To the right of these stages, a diagram illustrates the evolution of ideas: yellow circles (labeled 'Ideas') are connected by dashed lines to form a tree structure, which then branches into white circles (labeled 'Free-form thoughts'), and finally into stacked bars (labeled 'Solution in different formats') composed of pink, purple, and green segments. A legend on the right clarifies these symbols.

Component (c), 'Evolutionary Search', is similarly enclosed in a dashed box and shows a cyclic process. It begins with 'Initialization', depicted as a group of solution bars (each containing a yellow circle, white circle, and color blocks). These proceed to 'Selection', where one solution is chosen (marked with an 'X'). This selected solution undergoes 'Crossover/Mutation', resulting in a new offspring solution bar. The process continues with 'Generate Offspring' and 'Population Management', forming a loop back to selection. Arrows indicate the flow between these steps.

Component (d), 'Knowledge Library', is shown at the bottom left and labeled 'Clustering-based Management'. It displays multiple vertical columns (numbered 0 to K) each containing yellow circles representing stored knowledge pieces. The columns are color-coded (green, blue, yellow, purple, orange) to denote different clusters. Dashed arrows connect this library to both the 'Idea Tree-based Solution Generation' and 'Evolutionary Search' modules, indicating bidirectional interaction for knowledge retrieval and storage.

Connections and arrows throughout the diagram illustrate the data flow: from Task to Large Language Model to CoEvo; from CoEvo to Idea Tree-based Solution Generation and Evolutionary Search; from Idea Tree-based Solution Generation to Evolutionary Search; and from both Idea Tree-based Solution Generation and Evolutionary Search to the Knowledge Library. Feedback loops exist from Evolutionary Search back to Idea Tree-based Solution Generation and from Knowledge Library to both Idea Tree-based Solution Generation and Evolutionary Search, emphasizing iterative refinement and knowledge reuse.
