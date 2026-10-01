# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MRI Reconstruction with Regularized 3D Diffusion Model (R3DM) — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18723

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-phase workflow for generating and reconstructing volumetric data using a diffusion model, guided by specific k-space measurements. The overall layout is divided into three main sections: Phase 1 (Diffusion Model Training), Phase 2 (Sampling), and a separate right-side module labeled G representing measurement and model-based optimization.

In Phase 1, the forward diffusion process begins with a clear 3D brain image at time t=0, which progressively adds noise over discrete time steps t=1, t=2, up to t=T, resulting in a fully noisy blue rectangular volume. This process is depicted with solid arrows indicating sequential progression. The reverse diffusion process, shown below, starts from the noisy volume at t=T and iteratively denoises it through a series of Denoising UNet modules (light blue hourglass-shaped blocks with black padlock icons), moving backward to recover the original brain image at t=0. The Denoising UNets are connected by dashed arrows, indicating iterative refinement steps.

Phase 2 describes the sampling phase, where the trained diffusion model is used to generate new data. It begins with a noisy volume at t=T and proceeds backward through Denoising UNet modules (same visual style as Phase 1) to produce a clean brain image at t=0. Crucially, during this reverse process, each Denoising UNet receives additional guidance from a green rounded rectangle labeled 'G', which represents the measurement constraint. These connections are shown as downward arrows from G to each UNet, indicating that the reconstruction is conditioned on the measurement data.

On the right side, the module labeled 'G' details the measurement process. It shows a 3D volume (labeled X, Y, Z axes) being sliced along the y-axis and x-axis to produce two 2D k-space images: 'Sliced k-space on y-axis' and 'Sliced k-space on x-axis'. These slices are visually represented as striped patterns. A black padlock icon indicates that these measurements are constrained or fixed. An arrow leads from this measurement block to a large green rounded rectangle labeled 'Model based Optimization'. This optimization block takes an initial estimate X^(0) as input and produces an updated estimate X^(m), which is fed back to guide the Denoising UNets in Phase 2. The entire system thus combines a pre-trained diffusion model with iterative model-based optimization to reconstruct volumetric data from partial k-space measurements, ensuring a unique and accurate reconstruction.
