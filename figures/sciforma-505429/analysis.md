# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STAYKATE: Hybrid In-Context Example Selection Combining Representativeness Sampling and Retrieval-based Approach -- A Case Study on Science Domains — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20043

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the overall process of STAYKATE, a framework for in-context example selection in few-shot learning with large language models, specifically GPT-3.5. The layout is divided into two main horizontal sections: 'Static In-context example selection' at the top and 'Dynamic In-context example selection' at the bottom, separated by a dashed line. Both pathways converge to provide in-context examples that are integrated into a structured prompt on the right side of the diagram.

In the static pathway, unlabeled data is represented as a teal cylinder containing multiple triangle icons. This data undergoes 'Representativeness Sampling', symbolized by two blue gears, resulting in a subset labeled 'Selected Samples (Unlabeled)', shown as a rectangular box with fewer triangles. These samples are then manually annotated by a human, depicted as a gray silhouette using a laptop, producing 'In-context Examples'—a blue rectangle with circular icons.

In the dynamic pathway, labeled data is shown as an orange cylinder with circle icons, combined with test data (a stack of colored rectangles, with the top one pink and labeled 'Test Data'). These inputs are processed by a 'kNN Model' (a gray rounded rectangle), which outputs a set of 'In-context Examples'—a stack of overlapping pink rectangles with circular icons.

Both sets of in-context examples feed into the right-side prompt structure, which is organized into four labeled sections with green headers: 'System Role', 'Instructions', 'In-context Examples', and 'Test Input'. The 'System Role' states: 'You are a [domain] expert.' The 'Instructions' section contains guidance for extracting chemical and disease mentions, specifying JSON output format. The 'In-context Examples' section is further subdivided into 'Static examples' (light blue background) and 'Dynamic examples' (light pink background), each showing a target sentence and corresponding JSON output. The 'Test Input' section presents a new target sentence to be processed.

At the bottom center, a smiling robot icon labeled 'GPT-3.5' receives the full prompt and generates a response, shown as a light green speech bubble containing a JSON object with keys 'material', 'property', and 'operation'. A black arrow points from the prompt structure to the GPT-3.5 icon, indicating the input flow, while another arrow leads from the model to the output JSON, representing the generated result. Dashed lines connect the in-context examples from both pathways to the respective example blocks in the prompt, emphasizing their integration.
