# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rerouting LLM Routers — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01818

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a routing architecture for large language models (LLMs), designed to optimize computational cost by dynamically assigning incoming queries to either a 'Strong Model' or a 'Weak Model' based on query complexity. The global layout is linear and left-to-right, beginning with a stack of input queries on the far left, progressing through a central decision-making module labeled 'Router', and concluding with a stack of output responses on the far right. The Router is enclosed within a dashed rectangular boundary, emphasizing it as the core processing unit responsible for classification and routing decisions.

Within the Router, a diamond-shaped decision node poses the question 'complex?'. This node acts as a classifier, determining whether each query requires the computational power of the Strong Model or can be handled efficiently by the Weak Model. Two distinct paths emerge from this decision node: a solid blue arrow labeled 'yes' directs complex queries to the Strong Model, while a dashed orange arrow labeled 'no' routes simpler queries to the Weak Model. The Strong Model is represented as a light blue rounded rectangle, and the Weak Model as a pale yellow rounded rectangle, visually distinguishing their roles and resource intensities.

Incoming queries are depicted as a stack of rounded rectangles with diagonal hatching, colored blue at the top and fading to orange below, symbolizing a diverse set of inputs. These queries feed into the Router via two types of arrows: solid blue lines represent queries deemed complex, while dashed orange lines indicate simpler queries. Similarly, the outputs—labeled 'Responses'—are shown as a stack of similarly styled rounded rectangles, with responses from the Strong Model arriving via solid blue arrows and those from the Weak Model via dashed orange arrows. This consistent color-coding reinforces the flow and origin of each response.

The connections between components are directional, using arrows to indicate data flow. Solid blue arrows signify the path for complex queries and their corresponding responses, while dashed orange arrows denote the path for simple queries and their responses. The diagram emphasizes that both models contribute to the final set of responses, but the Router controls the distribution to balance performance and cost. As noted in the caption, this system allows for calibration to maintain a desired ratio of queries sent to the Strong versus Weak Model, enabling cost-effective operation under expected workloads.
