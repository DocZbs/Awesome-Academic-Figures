# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LMUnit: Fine-grained Evaluation with Natural Language Unit Tests — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13091

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the training setup for LMUnit, a unified evaluation model designed to be jointly optimized using multiple data sources and loss functions. The global layout is divided into two main sections: on the left, four distinct data input types are presented in vertical stacks with green headers, and on the right, the core model architecture and optimization framework are shown with interconnected components and mathematical expressions.

On the left side, the data inputs are categorized under four green-labeled boxes: 'Direct Rating Data', 'Preference Data', 'Unit Test Direct Data', and 'Unit Test Preference Data'. Each box contains gray rectangular fields representing data elements. For example, 'Direct Rating Data' includes 'User Prompt', 'Response', 'Dimension (helpful, coherent, ...)', and 'Rating [1-5]'. Similarly, 'Preference Data' includes 'User Prompt', 'Response 1', 'Response 2', and 'Preference (r1, r2, tie)'. The 'Unit Test Direct Data' includes 'User Prompt', 'Response', 'Unit Test', 'Rationale', and 'Score [1-5]'. The 'Unit Test Preference Data' includes 'User Prompt', 'Response 1', 'Response 2', 'Unit Test', 'Rationale 1', 'Rationale 2', and 'Preference (r1, r2, tie)'. These data types are visually grouped to emphasize the diversity of inputs used for training.

On the right side, the central component is the LMUnit model, depicted as a light blue rounded rectangle. It receives three inputs: 'User Prompt', 'Response', and 'Unit Test', shown as gray rectangles feeding into it. The output of LMUnit is a sequence of tokens, represented by a chain of light blue boxes labeled 'the', 'response', ..., and ending with a box labeled '"score":', which then connects to a bar chart showing token probabilities (values 0 through 6 with heights corresponding to probabilities).

Above this, the optimization framework is shown. A large light blue rounded rectangle at the top displays the total loss function: L = αL_sft + βL_mse + γL_pref. This total loss is connected via solid black arrows to three yellow rounded rectangles, each representing one of the three loss components: L_sft, L_mse, and L_pref. The SFT loss is defined as -∑ log P(x_t | u, p, r, x_<t), where t ranges from 1 to T. The MSE loss is given as (y - ŷ)^2. The preference loss L_pref is more complex, involving sigmoid functions and indicator functions for preferences y1, y2, or ties, expressed as -log(σ(ŷ1 - ŷ2))·1_{pref=y1} - log(σ(ŷ2 - ŷ1))·1_{pref=y2} + (ŷ1 - ŷ2)^2·1_{pref=tie}.

Connections between components include solid arrows indicating direct dependencies and dashed arrows for indirect or conditional relationships. For instance, L_sft connects to a green oval labeled 'rationale', suggesting rationale influences this loss. L_mse connects to a green circle labeled 'y', representing the true value, and to a purple oval labeled 'ŷ', the predicted value. L_pref connects to both 'ŷ' and another purple oval 'ŷ_2', and also to a green oval 'pref', indicating the preference label. The predicted score distribution (bar chart) feeds into a blue rectangle containing the summation expression Σ_{k=0:6} P(x_{t+1}=k | x_{1:t}), which in turn connects to 'ŷ', linking the model's output to the loss computation.

The overall structure emphasizes that LMUnit uses a single forward pass to process diverse data types and is jointly optimized using three loss functions—SFT, MSE, and preference—to enable fine-grained, multi-modal evaluation.
