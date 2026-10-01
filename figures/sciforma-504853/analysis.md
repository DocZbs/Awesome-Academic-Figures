# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MTCAE-DFER: Multi-Task Cascaded Autoencoder for Dynamic Facial Expression Recognition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18988

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents four distinct autoencoder-based learning frameworks arranged in a 2x2 grid, each illustrating a different architectural approach for video representation learning. The overall layout is divided into four quadrants labeled (a), (b), (c), and (d), separated by dashed lines, with each quadrant containing a flowchart depicting data flow from input to task output.

In all diagrams, the 'Input' is represented as a black arrow pointing to the first module. The 'VideoMAE Encoder' is consistently depicted as a rounded rectangle with a light green fill and dark green border, labeled centrally with bold black text. Task-specific decoders are shown as rounded rectangles with a light blue fill and dark blue border, also labeled centrally with bold black text. Final tasks are denoted by plain black text labels ('Task 1', 'Task 2', 'Task 3') positioned at the end of arrows originating from the decoders.

Subfigure (a), titled 'Autoencoder-Based Single-Task Learning Framework', shows a linear pipeline: Input → VideoMAE Encoder → Task-Specific Decoder → Task. This represents a standard single-task setup where one decoder handles one downstream task.

Subfigure (b), titled 'Autoencoder-Based Non-Fully Shared Multi-Task Learning Framework', illustrates a parallel multi-task structure. Input flows into the VideoMAE Encoder, which then branches out to three separate Task-Specific Decoders, each leading to a distinct task (Task 1, Task 2, Task 3). This indicates independent decoding paths for each task.

Subfigure (c), titled 'Autoencoder-Based Fully Shared Multi-Task Learning Framework', introduces a shared component. After the VideoMAE Encoder, a purple rounded rectangle labeled 'Shared Decoder' is placed. From this shared decoder, three separate Task-Specific Decoders branch out, each connecting to a unique task. This design implies that the shared decoder extracts common features before task-specific decoding occurs.

Subfigure (d), titled 'Autoencoder-Based Multi-Task Cascaded Learning Framework', depicts a cascaded architecture. The VideoMAE Encoder feeds into three Task-Specific Decoders arranged vertically. The top decoder outputs to Task 1. Its output also feeds into the middle decoder, which outputs to Task 2. Similarly, the middle decoder's output feeds into the bottom decoder, which outputs to Task 3. This creates a sequential dependency among tasks, where each subsequent task leverages information from the previous one.

All connections are represented by solid black arrows indicating the direction of data flow. The figure uses consistent visual styling across all subfigures to emphasize structural differences while maintaining clarity. The caption below the entire figure summarizes the purpose: to illustrate the distinctions between these four frameworks, with (d) being presented as the proposed method.
