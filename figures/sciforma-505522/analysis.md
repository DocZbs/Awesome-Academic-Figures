# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DecDEC: A Systems Approach to Advancing Low-Bit LLM Quantization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20185

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a CPU-augmented inference architecture for quantized large language models (LLMs), designed to improve computational efficiency by offloading specific computations from the GPU to the CPU. The global layout is a horizontal pipeline divided into two main processing domains: a CPU domain on the left, enclosed in a reddish-pink rounded rectangle, and a GPU domain on the right, enclosed in a tan-colored rounded rectangle. These domains are connected via a PCIe link, indicated by a labeled arrow between the CPU and GPU blocks.

Within the CPU domain, there are two primary components: a memory block labeled '(LP)DDR' containing 'R (= W - Ŵ)', representing the residual error between full-precision weights W and their quantized approximation Ŵ, and a central 'CPU' block. The (LP)DDR is connected to the CPU with a thick black line labeled '~70 GB/s', indicating the memory bandwidth. The CPU is connected to the GPU via a thinner line labeled 'PCIe' with a bandwidth of '~32 GB/s'.

In the GPU domain, there are also two components: a 'GPU' block and a 'GDDR' memory block containing 'Ŵ, x', where Ŵ represents the quantized weights and x represents the input activations. The GPU is connected to the GDDR with a thick black line labeled '~1TB/s', signifying the high-bandwidth local memory access.

A prominent gray arrow spans horizontally beneath the entire pipeline, originating from the (LP)DDR block and pointing toward the GPU, labeled 'Selected Residuals (R⊙M)'. This indicates that only a subset of the residuals, selected based on a mask M, is transferred from the CPU's memory to the GPU for processing, enabling efficient computation by avoiding full residual transmission. The diagram emphasizes the data flow and bandwidth constraints between components, highlighting how the CPU handles residual computation and selective transfer to the GPU, which performs the main inference using quantized weights and inputs stored in GDDR.
