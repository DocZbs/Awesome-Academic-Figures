# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Relational Neurosymbolic Markov Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is horizontally divided into two main sections: a textual logic program on the left and a graphical probabilistic model on the right. The left side presents a logic programming description of a game in the discrete-continuous probabilistic Neuro-Symbolic (NeSy) language DSPL. It consists of several probabilistic facts and rules written in a Prolog-like syntax. The program defines random variables for player and monster positions over time, using normal distributions for continuous values (e.g., player(Im, P) ~ normal(noisy_player(Im)) at time 0, and recursively at time t based on previous state and monster position), and a Bernoulli distribution for a binary 'clumsy' variable (clumsy ~ bernoulli(0.75)). It also includes deterministic rules for events such as 'hits(M, P)' when distance between monster and player is less than 2 and the player is not clumsy, and 'game_over' when a hit occurs. The 'safe' predicate is defined as true when the distance exceeds 2. Finally, an observation is made: observe(safe@{0:T}, true), indicating that safety is observed to be true across all time steps from 0 to T.

On the right side, the corresponding graphical model is shown. It uses a directed acyclic graph (DAG) structure with nodes representing random variables and edges representing dependencies. The graph includes a rectangular plate labeled '0:T', indicating a Markov transition over time steps from 0 to T. Inside the plate, there are three circular nodes: Pt (light blue, representing player position at time t), Ht (light blue, representing hit event at time t), and St (light green, representing safe state at time t). Outside the plate, there are four additional nodes: Im (light blue square, representing initial player position), M (light blue circle, representing monster position), C (light blue circle, representing clumsiness), and G (light blue circle, representing game_over). Arrows indicate dependencies: from Im to Pt and M; from M to Ht; from C to Ht; from Pt to Ht; from Pt to St; from Ht to St; from Ht to G; and from St to G. Two curved arrows labeled φ^m and φ^p point from Im to M and from Im to Pt respectively, suggesting parameterized transitions or functions. The plate notation implies that the internal structure (Pt, Ht, St) is repeated for each time step t from 0 to T, with dependencies within and across time steps as specified by the arrows.
