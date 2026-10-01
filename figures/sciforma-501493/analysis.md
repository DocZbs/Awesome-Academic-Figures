# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Physically Interpretable World Models via Weakly Supervised Representation Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12870

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison of two world model architectures: the Standard World Model on the left and the Physically Interpretable World Model (PIWM) on the right, separated by a vertical line. Both diagrams illustrate a closed-loop system for processing observations, generating actions, predicting future states, and reconstructing future observations.

[1] Global Layout and Structure:

The layout is divided into two main panels. The left panel, titled 'Standard World Model', shows a traditional encoder-decoder framework with a data-driven predictor. The right panel, titled 'Physically Interpretable World Model (PIWM)', introduces a more structured approach with physically meaningful latent representations and a partially known dynamics model. Each panel follows a similar top-to-bottom, left-to-right flow: observations are encoded, processed through a controller and predictor, then decoded back into observations. The PIWM panel includes additional components for separating static and dynamic latent features and incorporating physical priors.

[2] Visual Modules and Attributes:

In the Standard World Model:
- Observations y_t and y_{t+1} are represented as blue rectangular images of a road scene.
- The Encoder E is a blue trapezoid labeled 'Encoder E'.
- The latent state z_t is shown as a stack of four light-blue rectangles.
- The Controller h is a gray rectangle.
- The action a is a yellow square.
- The Data-driven predictor (e.g., LSTM) is an orange circle.
- The Decoder D is a blue trapezoid.
- The next latent state z_{t+1} is another stack of four light-blue rectangles.
- The reconstructed observation y_{t+1} is a blue image identical in style to the input observations.

In the PIWM:
- Observations y_{t-m:t} are shown as a sequence of green-bordered images of a road scene.
- The Encoder E is a green trapezoid.
- The latent state z^*_{t-m:t} is a stack of green rectangles, annotated as 'Static representation for position, angle'.
- The Controller h is a gray rectangle.
- The action a is a yellow square.
- The Partially known dynamics φ with parameters θ is a large pink circle.
- The predicted latent state ^z'_{t+1:t+H} is a composite stack with green (static) and red (dynamic) rectangles, annotated as 'Dynamic representation for velocity, acceleration'.
- The Decoder D is a green trapezoid.
- The predicted observations ^y_{t+1:t+H} are a sequence of green-bordered images, matching the style of the input observations.

[3] Connections and Arrows:

In the Standard World Model:
- Observations y_t and y_{t+1} feed into the Encoder E.
- The output of E (latent z_t) goes to the Data-driven predictor.
- The Controller h receives y_t and outputs action a.
- Action a and latent z_t are inputs to the Data-driven predictor, which outputs latent z_{t+1}.
- Latent z_{t+1} feeds into the Decoder D, producing reconstructed observation y_{t+1}, which loops back to the Controller h.

In the PIWM:
- Observations y_{t-m:t} feed into the Encoder E, producing latent z^*_{t-m:t}.
- The Controller h receives the observations and outputs action a.
- Action a and latent z^*_{t-m:t} are inputs to the Partially known dynamics φ, which outputs the predicted latent state ^z'_{t+1:t+H}.
- This predicted latent state is split into static (green) and dynamic (red) components.
- The full predicted latent state feeds into the Decoder D, producing predicted observations ^y_{t+1:t+H}.
- These predictions loop back to the Controller h, completing the feedback loop.

The figure emphasizes that the PIWM disentangles latent representations into physically interpretable components (static for position/angle, dynamic for velocity/acceleration) and uses a partially known dynamics model with physical priors, contrasting with the purely data-driven approach of the standard model.
