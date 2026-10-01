# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Rerouting LLM Routers — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01818

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of two scenarios: a benign user interaction with an application and an adversarial attack on the same system, illustrating an attack on the routing control plane integrity of a large language model (LLM) system. The global layout is divided into two panels by a vertical line, with the left panel depicting normal operation and the right panel showing the adversarial scenario. Each panel contains a user or adversary interacting with an 'Application' box, which internally consists of three components: 'Queries', 'Router', and 'Responses'. These components are arranged vertically within the Application box, with 'Queries' at the top, 'Router' in the middle, and 'Responses' at the bottom. The Application box has a thick black border and rounded corners.

In both panels, the user or adversary is represented as a stick figure with a laptop. In the left panel, the user is depicted normally; in the right panel, the adversary is shown with red devil horns and a red squiggly line emanating from the laptop, symbolizing malicious intent. The user/adversary sends multiple queries (represented by solid black arrows) to the 'Queries' component of the Application. The 'Queries' component is connected via dashed black arrows to the 'Router', indicating internal processing. The 'Router' then routes queries to one of two external model providers: 'Strong Model Provider' or 'Weak Model Provider'. These providers are shown as dashed rectangular boxes outside the Application, with the Strong Model Provider shaded light blue with diagonal lines and labeled with '$$$' above it, while the Weak Model Provider is shaded light yellow with diagonal lines and labeled with '$' above it. The routing decisions are indicated by dotted lines: blue dotted lines represent routing to the Strong Model Provider, and orange dotted lines represent routing to the Weak Model Provider. Responses from the model providers flow back to the 'Responses' component of the Application via dotted lines (blue for Strong, orange for Weak), and then from 'Responses' back to the user/adversary via solid black arrows.

In the left panel, under normal conditions, the Router appears to route some queries to the Strong Model Provider and others to the Weak Model Provider, suggesting a cost-aware or performance-based routing strategy. In the right panel, the adversary modifies each query by adding a prefix, visually represented by a small gray gear icon attached to each query arrow. This prefix is referred to in the caption as a 'confounder gadget.' As a result of this modification, all queries are routed exclusively to the Strong Model Provider, as indicated by the blue dotted lines from the Router to the Strong Model Provider, and no orange dotted lines are present. The responses from the Strong Model Provider are then sent back through the Application to the adversary. The figure thus demonstrates how the adversarial input manipulation can subvert the intended routing policy, forcing the system to use the more expensive strong model for all queries, thereby increasing costs for the provider.
