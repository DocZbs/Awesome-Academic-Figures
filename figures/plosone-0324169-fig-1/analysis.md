# Source record: Figure 1

DeepGAM: An interpretable deep neural network using generalized additive model for depression diagnosis: Data from the heart and soul study — PLOS ONE 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

Source caption (as supplied, not independently transcribed):

Network architecture of DeepGAM. ( a ) Each feature x j ∈ ℝ 1 passes through a Straight-Through Estimator (STE), which learns to select relevant features during training. The selected feature z j is then fed into a 3-layer neural network f , and and its output is combined with a learnable bias parameter β 0 to represent the depression status. ( b ) The STE selects a feature by multiplying it with a binary value in the forward pass, and enables parameter ϕ to be updated via gradient descent by omitting the non-differentiable round function in the backward pass. ( c ) The 3-layer neural network consists of Fully Connected (FC) layers with ReLU and tanh activations. Each feature has distinct learnable parameters ϕ and θ .

Paper: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0324169

Index: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12413078/fullTextXML
