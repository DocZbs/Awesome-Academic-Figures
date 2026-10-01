# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Efficient Diffusion Transformer Policies with Mixture of Expert Denoisers for Multitask Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12953

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the MoDE (Mixture-of-Denoising Experts) architecture, divided into two main parts: the overall model structure on the left and a detailed view of the denoising process on the right. The global layout is horizontal, with the left side showing a stacked transformer-like architecture and the right side illustrating the internal mechanism of the router and expert selection during denoising. A dashed vertical line separates these two sections, with the right side labeled 'Denoising Process' and an arrow indicating progression from φ(σ_T) to φ(σ_0), representing the denoising trajectory.

On the left, the main architecture consists of a vertical stack of blocks enclosed in a large beige rectangle, labeled with 'N ×' on the left side, indicating N repeated layers. Each block contains four components arranged vertically: 'Add & Norm' (light orange), 'Router + Experts' (light pink), 'Noise Conditional Multi-Head Attention' (light yellow), and another 'Add & Norm' (light orange). At the top, a light orange box labeled 'Linear' feeds into the first 'Add & Norm'. Below the stack, multiple input sources are shown as colored boxes connected by lines to the bottom of the stack: 'Noise' (blue), 'Goal' (purple), 'Static Camera' (green), 'Wrist Camera' (green), and 'Actions' (orange). These inputs feed into corresponding modules: 'MLP + Sinusoidal', 'CLIP-Text', 'FiLM ResNet-18', 'FiLM ResNet-18', and 'Actions', respectively. The 'Actions' input is also shown at the top, suggesting it may be used in both input and output stages.

On the right, the denoising process is detailed for two time steps: φ(σ_T) and φ(σ_0). Each time step contains a 'Router + Experts' module (light pink background). Inside this module, a 'Router()' box (pink) receives input from the previous layer and outputs to a 'Select & Weight' box (red). The router selects among four expert modules (E₁ to E₄), depicted as blue boxes with dashed outlines, indicating they are conditionally activated. The selected experts are connected via solid lines to the 'Select & Weight' box, while unselected ones are connected with dashed lines. The 'Select & Weight' box then feeds into an 'Add & Norm' block (light orange), followed by a 'Linear' layer (light orange). Between the two time steps, a series of small colored circles (blue, green, orange) represent intermediate states or token flows, with an ellipsis indicating continuation. The final output is labeled 'Action' with three pink squares, indicating the generated action sequence.

Connections are represented by arrows: solid arrows indicate active data flow, while dashed arrows indicate potential or inactive paths. The router dynamically selects a subset of experts based on the current noise level σ, enabling efficient computation. The visual attributes include distinct colors for different functional components: light orange for normalization and linear layers, light yellow for attention, light pink for router modules, red for selection and weighting, and blue for expert models. Text labels are clear and positioned within or adjacent to each component. The figure effectively illustrates how the MoDE architecture leverages a mixture-of-experts approach within a transformer framework for scalable action generation through a denoising process.
