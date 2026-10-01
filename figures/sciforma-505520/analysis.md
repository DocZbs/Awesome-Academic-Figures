# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DecDEC: A Systems Approach to Advancing Low-Bit LLM Quantization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20185

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a fused GPU kernel architecture designed for dynamic error compensation, structured across two parallel execution threads (Thread Block 0 and Thread Block 1), each processing distinct stages of computation. The global layout is horizontally segmented into three main regions: the top two rows represent the computational pipeline within each thread block, while the bottom shaded region denotes GPU memory (GPU Mem.) containing data buffers and intermediate storage.

In the computational pipeline, Thread Block 0 executes a 'Channel Selection' stage, represented by a dark gray rectangular module with vertical text. This stage receives input data from a GPU memory buffer labeled 'x', which has an input dimension din = 4096. The selection process outputs data to a shared buffer labeled 'sc_indices', which stores selected indices for subsequent operations. A red arrow indicates data flow from 'x' to 'Channel Selection', and another red arrow carries output to the 'sc_indices' buffer. Additionally, an orange arrow from 'Channel Selection' feeds into the same buffer, suggesting auxiliary or control data transfer.

Following 'Channel Selection', a synchronization step labeled 'grid.sync()' is shown as a gray rectangular module. This acts as a barrier between the selection phase and the next computational phase. From this point, data flows via dashed orange arrows to Thread Block 1, indicating inter-block coordination.

Thread Block 1 performs the 'Residual Fetch & GEMV' stage, also depicted as a dark gray rectangular module with vertical text. This stage receives data from the CPU via dashed red arrows, specifically the tensors Qr(R)[sc_indices][3072:] and scales[3072:], as indicated by the dashed orange box above the module. Simultaneously, it receives data from the 'sc_indices' buffer via a solid gray arrow. The output of this stage is directed to an 'Atomic Add' operation, represented by bold black text, which accumulates results into the output buffer labeled 'ob (= o)', having dimension dout = 6144. Red and orange arrows indicate data flow into and out of this stage.

The GPU memory region at the bottom contains three primary buffers: the input buffer 'x' (dimension 4096), the intermediate 'sc_indices' buffer (highlighted with a rounded rectangle), and the output buffer 'ob (= o)' (dimension 6144). The 'sc_indices' buffer is accessed by both thread blocks, serving as a shared resource for index-based data selection and retrieval. Data flows are color-coded: red arrows denote primary data paths, orange arrows indicate secondary or control data, and gray arrows represent synchronization or auxiliary data transfers.

Above the computational pipeline, two dashed boxes specify the data partitions transferred from the CPU: one (orange-dashed) for Qr(R)[sc_indices][3072:] and scales[3072:], and another (red-dashed) for Qr(R)[sc_indices][:3072] and scales[:3072], indicating a split of data based on index ranges for efficient processing. The overall structure emphasizes a fused, pipelined approach where channel selection, synchronization, residual computation, and atomic accumulation are tightly integrated to minimize memory access overhead and maximize throughput for dynamic error compensation.
