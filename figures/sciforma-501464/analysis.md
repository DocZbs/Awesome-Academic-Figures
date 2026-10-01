# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey on Recommendation Unlearning: Fundamentals, Taxonomy, Evaluation, and Open Questions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive overview of exact unlearning methodologies in machine learning and recommendation systems, structured into four main sections: Machine Unlearning, Recommendation Unlearning, Retrain from Scratch, and Ensemble Retraining Framework, along with a timeline illustrating the unlearning process stages.

[1] Global Layout and Structure:
The figure is divided into two primary horizontal panels. The top panel contrasts general Machine Unlearning on the left with Recommendation Unlearning on the right, separated by a vertical line. Below this, the bottom panel displays two alternative retraining strategies—Retrain from Scratch and Ensemble Retraining Framework—on the left, and a temporal timeline of the unlearning lifecycle on the right. Each section is labeled with a gray caption box beneath it.

[2] Visual Modules and Attributes:
In the Machine Unlearning section, Training Data is represented as a gray cylinder, split into a red 'Unlearned Data (Forget Set)' and a blue 'Remaining Data (Retain Set)' within a dashed box. These feed into an 'Original Model' (gray neural network icon), which undergoes training to produce an 'Unlearned Model' (multicolored neural network). A retrained model (blue neural network) is shown via a 'Retraining' arrow from the Retain Set, and a green double-headed arrow indicates equivalence between the retrained and unlearned models.

In the Recommendation Unlearning section, Training Data is depicted as a grid (e.g., user-item interaction matrix) with red and blue cells indicating the Forget Set (red cylinder) and Retain Set (blue cylinder). The Original Model (gray neural network) is trained on the full dataset. An 'Input Unlearning' path leads to a retrained model (blue neural network), equivalent to the unlearned model. Additionally, 'Attribute Unlearning' is shown, where the original model attempts to infer a 'Latent Attribute' (grid) but fails (indicated by a red 'x' and a sad face), while the unlearned model cannot infer it (green smiley face).

The Retrain from Scratch section shows a pink box labeled 'D' (data) feeding into a yellow box labeled 'θ₀' (model parameters), with a blue arrow indicating unlearning to a new model 'θ*'.

The Ensemble Retraining Framework section illustrates parallel and sequential training. In parallel training, data subsets D₁, D₂, D₃ (pink boxes) each train a model θ₁, θ₂, θ₃ (yellow boxes), which are combined into θ₀/θᵤ. In sequential training, models are trained sequentially with feedback loops, also resulting in θ₀/θᵤ. Black arrows denote learning, blue arrows denote unlearning.

The timeline on the right shows a horizontal axis from T₀ to Tₐ, marked with phases: Learning Stage (T₀ to Tₑ), then Unlearning Stage (Tₑ to Tₐ). Events include 'Learning Complete' (green curve), 'Unlearning Enabled' (play button), 'Target Determination' (red bell), 'Unlearning Execution' (blue cube), and 'Unlearning Audition' (hand with checkmark and cross). The timeline visually maps the progression from learning to unlearning.

[3] Connections and Arrows:
Arrows indicate data flow and transformation. Dashed arrows represent training processes. Solid black arrows denote learning workflows; solid blue arrows denote unlearning workflows. In the ensemble framework, black arrows show data-to-model mapping, while blue arrows show parameter updates during unlearning. The green double-headed arrow signifies functional equivalence between retrained and unlearned models. In attribute unlearning, a black arrow from the original model to the latent attribute is crossed out, while the unlearned model has no such arrow, emphasizing inability to infer.

The figure uses consistent color coding: red for forgotten/unlearned data, blue for retained/retrained data/models, gray for original models, and yellow for learned parameters. Text labels clarify each component and stage, with LaTeX notation used for data subsets (Dᵢ) and parameters (θ₀, θᵤ, θ*).
