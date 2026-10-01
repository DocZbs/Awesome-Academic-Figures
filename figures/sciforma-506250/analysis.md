# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Aligning LLMs with Domain Invariant Reward Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00911

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of a domain-adaptive reward modeling framework. The global layout is left-to-right, beginning with input components on the far left, progressing through a central neural network architecture, and concluding with loss functions and domain representations on the right. On the left, two rectangular boxes represent the input: 'Prompt (x)' containing the question 'What is the difference between a quasar and a pulsar in terms of their origins and behavior in space?' and 'Response (y)' with the partial answer 'Quasars are powered by black holes, while pulsars are ...'. An arrow points from these inputs to the central component, a multi-layered feedforward neural network labeled 'Language Model (θ)', depicted as three layers of interconnected gray circular nodes. From this model, two branches diverge: one leads to the 'Reward Head (φ)', producing output r_{θ,φ}(x,y), and the other to the 'DA Critic Head (ψ)', producing d_{θ,ψ}(x,y). Below these outputs, the optimization objective is stated as min_θ max_ψ ℒ_wd - λ_gp ℒ_grad. To the right, two mathematical expressions define the losses: ℒ_src := -log σ(r_{θ,φ}(x,y⁺) - r_{θ,φ}(x,y⁻)), representing the preference-based source loss, and ℒ_wd := (d_{θ,ψ}(x_s,y_s) - d_{θ,ψ}(x_t,y_t)), representing the Wasserstein distance loss for domain adaptation. These are visually linked to two cylindrical containers: an orange 'Source Domain (x,y⁺,y⁻)' at the top right, and below it, two side-by-side cylinders — an orange 'Source Domain (x_s,y_s)' and a gray 'Target Domain (x_t,y_t)' — indicating the domains over which the critic head operates. The diagram uses consistent visual attributes: gray circles for neurons, black arrows for data flow, and colored cylinders (orange for source, gray for target) to distinguish domains. Text labels are in black sans-serif font, with mathematical expressions rendered in standard LaTeX notation. The connections clearly show that the language model processes the prompt-response pair and feeds into both heads, which then contribute to the respective losses computed over source and target domains.
