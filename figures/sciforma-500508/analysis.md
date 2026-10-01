# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UIBDiffusion: Universal Imperceptible Backdoor Attack for Diffusion Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11441

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the workflow of a framework for generating non-additive adversarial triggers, specifically designed to attack a classifier through iterative optimization. The global layout is a horizontal flowchart enclosed within a dashed green border, depicting a closed-loop system where the output of one stage feeds back into an earlier stage for refinement. The process begins on the left with a Gaussian noise input, represented as a 2x4 grid of colored squares (blue, orange, green, yellow), labeled 'Gaussian Noise' with the notation z ~ N(0,1). This noise is fed into a neural network-like 'Generator', depicted as a multi-layered structure with cyan, yellow, and red circular nodes connected by arrows, symbolizing the transformation of random noise into structured output. The generator produces two outputs: a 'Trigger τ', shown as a small, colorful, abstract pattern resembling a textured mosaic, and 'Non-additive Noise', presented in a blue rounded rectangle. These two outputs are combined with the original image from the 'Image Dataset'—shown as a sample face image—to form the perturbed input. The combination is achieved via two operations: first, the original image xi is spatially transformed using the non-additive noise (denoted by ⊗), then the trigger τ is added (denoted by ⊕), resulting in the final adversarial input xi ⊗ f + τ, which is visually represented as the same face image but with a subtle overlay indicating modification. This adversarial input is then fed into a 'Classifier C', shown as a yellow rounded rectangle, which evaluates whether the adversarial attack is successful. This decision is represented by a blue diamond-shaped node labeled 'Is adversarial attack successful?'. If the attack fails, a red feedback loop directs the result back to the generator, accompanied by the instruction 'Iteratively optimize the generator to produce stronger trigger τ', indicating a reinforcement learning or gradient-based optimization process. The entire pipeline emphasizes the iterative nature of trigger generation, where the generator is refined based on the success of the attack, aiming to produce increasingly effective non-additive triggers. The visual attributes include distinct shapes (rectangles, circles, diamonds) and colors (yellow for classifier, blue for noise and decision, red for feedback) to differentiate components, while mathematical symbols (⊗, ⊕) and labels (xi, τ, z) provide technical precision. The caption clarifies that ⊗ denotes a spatial transformation operation, reinforcing the non-additive nature of the attack.
