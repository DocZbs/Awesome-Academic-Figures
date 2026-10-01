# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Deployment Pipeline from Rockpool to Xylo for Edge Computing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11047

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating the Xylo deployment pipeline in Rockpool, detailing the sequential steps required to deploy a neural network onto the Xylo hardware development kit (HDK). The global layout is horizontal, with a primary top row of processing stages connected by orange zigzag arrows indicating data or object flow. Below this main path, two auxiliary branches diverge and converge back into the main workflow, representing intermediate transformations. All modules are represented as rectangular boxes with teal borders and white backgrounds, containing descriptive text and associated code snippets or function calls. Each arrow is labeled with the type of object being passed between stages.

Starting from the left, the first stage is 'Build a network in Rockpool', which uses components from `rockpool.nn.modules` and `rockpool.nn.combinators`. This produces a 'Module object', which flows via an orange zigzag arrow to the next stage: 'Extract graph', implemented via `.as_graph()`. This step outputs a 'GraphModule object', which then feeds into 'Map to HW specification' through `x.mapper()`, producing a 'spec dictionary'.

From here, the workflow splits. One branch proceeds directly to 'Get a HDK configuration' using `x.config_from_specification()`, which takes the 'spec dictionary' as input and outputs a 'config object'. This 'config object' is then used in two parallel paths: one leads to 'Deploy to Xylo' via `x.XyloSamna()`, and the other to 'Simulate the HDK' via `x.XyloSim()`.

The second branch from 'spec dictionary' goes to 'Quantize network', utilizing `rockpool.transform.quantize_methods`. This step also consumes the 'spec dictionary' and produces another 'config object', which merges with the config object from the previous branch before proceeding to both deployment and simulation stages.

All connections are depicted with orange zigzag arrows, emphasizing the directional flow of data objects between stages. The diagram clearly separates the construction phase (left), transformation phase (middle), and deployment/simulation phase (right), with explicit labeling of intermediate data types such as 'Module object', 'GraphModule object', 'spec dictionary', and 'config object'. The visual structure emphasizes modularity and the stepwise refinement of the network representation toward hardware-compatible form.
