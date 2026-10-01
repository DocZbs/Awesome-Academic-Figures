# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Predicting Crack Nucleation and Propagation in Brittle Materials Using Deep Operator Networks with Diverse Trunk Architectures — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00016

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a schematic of a two-step DeepONet architecture designed for predicting the phase field α and the displacement field components u and v. The overall layout is horizontal, divided into three main components: a left orange rounded rectangle labeled 'Trunk net', a central green circular node labeled 'Φ*', and a right light blue rounded rectangle labeled 'Branch net'. These components are connected sequentially from left to right by thick blue arrows, indicating the flow of the computational process.

The 'Trunk net' module, enclosed in an orange rounded rectangle with a dark red border, contains three L2-norm loss expressions. Each expression corresponds to one of the output fields: α, u, and v. Specifically, they are written as ||(Φ(θ_T) A_α)^T - α_True||_L2, ||(Φ(θ_T) A_u)^T - u_True||_L2, and ||(Φ(θ_T) A_v)^T - v_True||_L2. These represent the training objectives for the trunk network, where Φ(θ_T) denotes the trunk network parameterized by θ_T, A_α, A_u, A_v are associated matrices, and α_True, u_True, v_True are the true target values. The module visually emphasizes the optimization of trunk network parameters and the associated matrices during the first stage of training.

The central component is a bright green circle labeled 'Φ*', which represents the result of the QR decomposition applied to the output of the trunk network. This node acts as a transition point between the trunk and branch networks. A thick blue arrow originates from the 'Trunk net' and points directly to this green circle, indicating that the trained trunk network's output undergoes QR decomposition to produce Φ*, which serves as the basis for the subsequent branch network training.

The 'Branch net' module, located on the right and enclosed in a light blue rounded rectangle with a darker blue border, contains three corresponding L2-norm loss expressions for the branch network. These are: ||B_α^T(θ_{B,α}) - R* A_α*||_L2, ||B_u^T(θ_{B,u}) - R* A_u*||_L2, and ||B_v^T(θ_{B,v}) - R* A_v*||_L2. Here, B_α, B_u, B_v denote the branch networks parameterized by θ_{B,α}, θ_{B,u}, θ_{B,v}, respectively, and R* and A_α*, A_u*, A_v* are derived from the QR decomposition of Φ*. The module illustrates the second stage of training, where the branch networks are optimized using the decomposed components.

The entire workflow follows a clear sequence: first, the trunk network is trained to minimize the L2 losses for α, u, and v; then, the resulting Φ* is decomposed via QR factorization; finally, the branch networks are trained using the decomposed components to achieve the final predictions. The visual design uses distinct colors (orange for trunk, green for decomposition, blue for branch) and consistent mathematical notation to convey the methodological structure and data flow.
