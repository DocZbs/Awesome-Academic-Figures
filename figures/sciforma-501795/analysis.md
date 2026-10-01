# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Dynamic Adapter with Semantics Disentangling for Cross-lingual Cross-modal Retrieval — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13510

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the proposed Dynamic Adapter with Semantics Disentangling (DASD) framework, designed for cross-modal and cross-lingual alignment in vision-language tasks. The global layout is divided into three main vertical branches: the leftmost 'Dynamic Parameter Generation' module, the central 'Target-Language Branch' (Φ^T), and two right-side branches for 'Source-Language' (Φ^S) and 'Visual' (Φ^V) inputs. These are interconnected via alignment mechanisms and parameter injection pathways.

In the leftmost section, labeled 'Dynamic Parameter Generation', the process begins with a Transformer Layer-1 processing the target-language caption S^T (e.g., '一只猫坐在鹅卵石地面上。'), which is machine-translated from the source-language caption. This layer outputs two feature streams: f^sr (semantic-related) and f^sa (semantic-agnostic), extracted through separate MLPs and decoupled via a dotted red arrow. These features are then processed by individual MLP&reshape blocks, generating a weight matrix W^z. This matrix is shown as a blue rectangle with 'In Dim' and 'Out Dim' labels, indicating dimensionality transformation. The W^z matrix is then injected into the target-language branch.

The central branch, Φ^T, consists of L stacked Transformer layers, each followed by a 'Dynamic Adapter' block (depicted as a beige rectangle with a red flame icon). The Dynamic Adapter receives the W^z matrix via dashed blue arrows, which represent parameter injection. The adapter modifies the transformer's behavior dynamically based on the input-specific parameters. The top of this branch outputs γ^T, a representation vector.

On the right, the source-language branch Φ^S processes the source-language caption S^S ('A cat sitting on the cobblestone ground.') through an L-layer Transformer (gray box with snowflake icon), producing γ^S. Similarly, the visual branch Φ^V processes an image/video input through a K-layer Transformer, yielding γ^V. Both γ^S and γ^V are connected to γ^T via dashed red arrows labeled 'Cross-Lingual Alignment' and 'Cross-Modal Alignment', respectively, indicating alignment objectives between representations.

At the bottom right, a detailed inset shows the structure of the Dynamic Adapter. It includes a Down Projection layer feeding into ReLU, then Up Projection. The W^z matrix is inserted into this pathway via a thick black arrow labeled 'Insert W^z', modifying the adapter’s internal computation. The output flows back through Down Projection and ReLU before being up-projected again, forming a bottleneck-like structure.

All modules are color-coded: orange for feature extraction in the left module, beige for Dynamic Adapters, gray for Transformers, and blue for projections and W^z. Text annotations specify component functions, such as 'decoupling' and 'Up/Down Projection'. The figure uses solid black arrows for data flow, dashed blue for parameter injection, and dashed red for alignment constraints.
