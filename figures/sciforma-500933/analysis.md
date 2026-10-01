# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Extrapolating Jet Radiation with Autoregressive Transformers — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12074

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the iterative implementation of the DiscFormer algorithm, structured as a flowchart with a clear sequence of steps. The global layout consists of an initial step on the left, followed by a main loop on the right enclosed in a large rectangular box labeled 'i-th DiscFormer iteration'. An arrow from the initial step points into the loop, indicating the start of the iterative process, with a counter variable i initialized to 0. The loop itself contains three vertically stacked modules, connected sequentially by downward arrows, forming a top-to-bottom workflow. A feedback loop on the right side of the box increments the counter from i to i+1 and feeds back into the first module, signifying the next iteration.

The visual modules are color-coded and shaped to distinguish their roles. The initial step is a light green rounded rectangle labeled 'Initial generator training', containing the loss function L = ⟨−log pθ(x)⟩_{x∼pdata}. This module initiates the process. Inside the main loop, the first module is a light green oval labeled 'Sample generator p_{θ_i}(x)', representing the sampling of the current generator state at iteration i. The second module is a light blue rounded rectangle labeled 'Discriminator training', which includes the weight function w_i(x) = p_data(x)/p_{θ_i}(x), indicating the computation of weights based on the ratio of data distribution to generator distribution. The third module is another light green rounded rectangle labeled 'Re-train generator', containing the DiscFormer-specific loss function L_i^DF = ⟨−w^α(x) log p_θ(x)⟩_{x∼pdata}, which is used to update the generator parameters.

Connections and arrows define the flow: a horizontal arrow from the initial training step leads to the 'Sample generator' module, marking the entry into the loop. Within the loop, a vertical arrow connects 'Sample generator' to 'Discriminator training', and another connects 'Discriminator training' to 'Re-train generator'. After the re-training step, a horizontal arrow exits the loop to the right, then turns upward and loops back to the 'Sample generator' module, with a label 'i ← i+1' indicating the increment of the iteration counter. The entire structure emphasizes an iterative refinement process where the generator is sampled, a discriminator is trained using the current generator's output, and the generator is retrained using a weighted loss derived from the discriminator's weights, repeating until convergence or a stopping criterion is met.
