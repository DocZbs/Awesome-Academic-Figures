# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Exploring Multi-Modal Data with Tool-Augmented LLM Agents for Precise Causal Discovery — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13667

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-agent framework for causal graph refinement through data augmentation and constraint enforcement, divided into three main parts: (a) an overview of the entire system, (b) the internal structure of the Data Augmentation Agent (DA-agent), and (c) the internal structure of the Causal Constraint Agent (CC-agent).

In part (a), the global layout shows a pipeline starting from two inputs: 'Meta Data' (represented by a table icon, labeled with variable/data names) and 'Data Samples' (represented by a bar chart icon). These inputs feed into two parallel components: a 'Causal Graph Estimator' (orange box, containing SCD algorithms such as PC, ES, DirectLiNGAM) which produces an 'Initial Causal Graph G₀' (black box with a network icon), and a 'Data Augmentation Agent (DA-agent)' (blue box with a robot icon) which generates 'Contextual Data' (document icon). The 'Initial Causal Graph G₀' is then processed by the 'Causal Constraint Agent (CC-agent)' (green box with a robot icon), which outputs 'Causal Constraints' (black box with a simple graph icon). Both 'Contextual Data' and 'Causal Constraints' are fed into the 'Causal Graph Refiner' (pink box, also containing SCD algorithms), which produces the final 'Refined Causal Graph G' (black box with a complex network icon). A lightbulb icon above the refined graph indicates the output of the refinement process.

Part (b) details the DA-agent. It receives Meta Data and Data Samples as input. Inside, a 'Search LLM' (robot icon) iteratively interacts with a 'Toolkit' (dashed blue box containing Web API and Log API icons) to retrieve data. The retrieved data is stored in a database icon labeled 'Retrieved Data', which is then processed by a 'Summary LLM' (robot icon) to produce summarized contextual data. The Search LLM maintains a 'Call History' (stacked rectangles) to track interactions. The iterative loop between the Search LLM and Toolkit is indicated by a curved arrow labeled 'Iterate'.

Part (c) details the CC-agent. It takes the Initial Causal Graph G₀ and Contextual Data as inputs. These are processed by a 'Prompt Builder' (browser window icon) to generate prompts for a 'Knowledge LLM' (robot icon), which then feeds into a 'Constraint LLM' (robot icon) to derive causal constraints. The final output is a graph icon representing the generated constraints. The flow is linear from left to right within this module.

All agents are represented by robot icons, and data or intermediate results are shown in rectangular boxes with appropriate icons and labels. Arrows indicate the direction of data flow, with dashed lines used for internal loops or toolkits. The color coding distinguishes modules: blue for DA-agent, green for CC-agent, orange for the estimator, pink for the refiner, and black for data or graph representations.
