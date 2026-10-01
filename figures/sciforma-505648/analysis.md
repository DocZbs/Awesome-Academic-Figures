# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Treatment Effect Estimation for Graph-Structured Targets — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20436

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a methodological framework for estimating treatment effects in graph-structured data, such as social networks. The global layout is divided into two main branches stemming from an initial social network graph, representing two possible treatment scenarios: one where a treatment is applied (t=1) and one where it is not (t=0). The initial network consists of a central orange node connected to several gray nodes, symbolizing a user and their social connections. Above this, a label 'Treatment assignment' with the notation 't ~ p(t | 🧍‍♂️)' indicates that treatment is assigned probabilistically based on individual characteristics.

From the initial network, two paths diverge. The upper path leads to the treated scenario (t=1), where the central orange node is shown posting a message: 'This product is great!'. This action triggers a cascade effect across the network, resulting in five blue nodes (labeled as 'purchase' in the legend) indicating purchases by five users. This outcome is denoted as Y(1).

The lower path leads to the untreated scenario (t=0), which is shaded in gray to indicate it is a counterfactual and not observed. In this case, the same network structure is shown, but only one blue node appears, representing a single purchase. This outcome is labeled Y(0) (Not observed).

A vertical double-headed arrow connects Y(1) and Y(0), labeled 'Treatment effect', visually representing the difference between the observed and counterfactual outcomes. The treatment effect in this example is calculated as 5 - 1 = 4, reflecting the additional purchases attributable to the treatment.

Visual modules include human-shaped icons: orange for the treated user, gray for untreated neighbors, and blue for those who make a purchase. The legend clarifies that blue icons represent purchases. All connections are represented by black lines forming a star-like network centered on the orange user. Arrows indicate the flow of the process: from treatment assignment to the two potential outcomes, and then the comparison between them to compute the treatment effect.

The figure emphasizes the challenge of causal inference in networked settings, where the counterfactual outcome (Y(0)) is unobserved, and the goal is to estimate the impact of an intervention (e.g., a promotional post) on the entire graph structure.
