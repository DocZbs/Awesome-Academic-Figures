# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Fully Hardware Implemented Accelerator Design in ReRAM Analog Computing without ADCs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19869

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the hardware implementation of binary stochastic sigmoid neurons using Nyquist resistor noise, divided into two main parts: (a) the high-level neural network architecture and data flow, and (b) the corresponding physical circuit design.

[1] Global Layout and Structure:
The figure is split into two sections. Section (a) at the top shows the abstract neural network layer processing, while section (b) below details the analog circuit implementation. A curved arrow connects the activation unit in (a) to the circuit in (b), indicating that the latter realizes the former. The overall flow moves from left to right: input features are processed through a weighted sum, then passed through an activation unit to produce binary outputs for the next layer.

[2] Visual Modules and Attributes:
In part (a), the leftmost module is a fully connected layer represented by green circles labeled x₀ to xₙ, connected via weights W to summation nodes (Σ). These summations output real-valued activations (e.g., 0.3, 0.6, 0.9) which feed into the 'Activation Unit'—a dashed box containing two pink rounded rectangles labeled 'Stochastic Binarize' and 'Noise Source'. This unit converts continuous values into binary outputs (0 or 1), which are then passed to the next layer, shown as green circles y₀ to yₙ.

In part (b), the left side shows a crossbar array of resistors (blue and purple bars) representing the synaptic weights, with inputs xᵢᵇ applied at the bottom and currents Iⱼ flowing horizontally. A magnified inset shows a single resistor with conductance G, generating thermal noise i_RMS = √(4kTGAf), where k is Boltzmann’s constant, T is temperature, G is conductance, and Δf is bandwidth. The right side of (b) contains the 'Sigmoid Neurons' block, a circuit with multiple transimpedance amplifiers (TIAs) with feedback resistors R_TIA, each receiving a reference current I_ref and producing voltages V₀ to Vₙ. These voltages are compared against a threshold V_th1 using comparators (labeled 'cmp') to generate binary outputs y₀ to yₙ.

[3] Connections and Arrows:
In (a), arrows show the forward pass: from input x to weighted sums, then to the activation unit, and finally to output y. The activation unit receives noise from the 'Noise Source' to enable stochastic binarization. In (b), the crossbar array's output currents I₀ to Iₙ are fed into the TIA circuits. Each TIA integrates the current to produce a voltage, which is then compared to V_th1 to yield a binary output. The I_ref lines connect to all TIAs, providing a common reference. The curved arrow from the activation unit in (a) to the circuit in (b) indicates that the circuit implements the stochastic binarization function. The entire system leverages thermal noise from resistors to achieve probabilistic binary activation, mimicking biological neurons.
