# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Generative modeling of protein ensembles guided by crystallographic electron densities — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13223

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a density-guided protein ensemble generation method using a diffusion-based framework. The global layout is a left-to-right workflow with feedback loops, structured around three main stages: ensemble sampling, forward modeling, and likelihood-based guidance. The background features a faint white ribbon diagram of a protein structure, providing context for the molecular modeling process.

On the far left, an amino acid sequence 'ADGGIK' is input into a module labeled 'Chroma', represented as a rounded rectangle with black border and white fill. Chroma computes the gradient of the log probability with respect to the atomic coordinates, denoted as ∇ₓlog p(x,X | a), where 'x' represents atomic positions, 'X' denotes the ensemble, and 'a' is the amino acid sequence. An arrow labeled 'a' points from the sequence to Chroma. From Chroma, an arrow labeled 'x' leads to a central visualization of a sampled ensemble, depicted as a ball-and-stick molecular structure with red, blue, gray, and white atoms, superimposed on the faint protein backbone. This ensemble is then fed into a 'Forward model' module (rounded rectangle), which generates a 'calculated density' shown as a pinkish translucent 3D electron density map.

Below this, an 'observed density' is shown as a light cyan translucent 3D map, labeled 'Fₒ'. This observed density is input into a 'Likelihood' module (rounded rectangle), which computes log p(x,X | a), representing the probability of the ensemble given the observed data. A downward arrow labeled 'F_c' connects the calculated density to the Likelihood module, indicating the comparison between predicted and observed densities.

From the Likelihood module, a gradient symbol (∇ₓ) is computed and sent back to Chroma via a feedback loop. This gradient is labeled 'guidance score' and mathematically expressed as ∇ₓlog p(Fₒ | X,a), indicating how the observed density guides the sampling process. This closed-loop architecture enables iterative refinement of the sampled ensemble by incorporating experimental density data to improve the accuracy of the generated structures. The overall design emphasizes the integration of generative modeling (Chroma) with experimental data (observed density) through a forward model and likelihood computation to produce physically plausible and data-consistent protein ensembles.
