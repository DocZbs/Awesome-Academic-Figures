# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Real-Time Computational Visual Aberration Correcting Display Through High-Contrast Inverse Blurring — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01450

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a flowchart illustrating a system for deconvolving on-screen images captured by a camera, with the goal of reconstructing or enhancing the original screen content. The global layout is structured as a top-down workflow with three main vertical columns: input sources on the top, processing modules in the middle, and feedback to an update layer on the left. The diagram uses rectangular blocks to represent components and processes, with arrows indicating data flow and control signals.

In the top row, two input requests—'Camera Image Request' and 'Screen Capture Request'—originate from outside the system and feed into three primary components. The 'Camera' block, colored light orange with a dark orange border, receives the camera image request and outputs an 'Image'. The 'Screen Contents' block, light blue with a blue border, receives the screen capture request and provides 'Screen capture and location of all windows on the screen'. The 'VCD Layer' block, gray with a dark gray border, contains an internal 'Update' sub-block and serves as the final destination for the processed output.

The central processing path begins with the 'Camera' block feeding its 'Image' to a process box labeled 'Find distance d and angle θ wrt. normal', which computes the geometric parameters of the camera relative to the screen. This output, denoted as '(d, θ)', flows to the next process box: 'Compute point spread function', which generates a model of how the screen's display is blurred due to viewing angle and distance. Simultaneously, the 'Screen Contents' block sends the screen capture data to a large process box at the bottom: 'Deconvolve on-screen image using the point spread function'. This step combines the screen content data with the computed point spread function to produce a 'Deconvolved Image'.

Finally, the 'Deconvolved Image' is fed back to the 'VCD Layer' via an upward arrow, triggering the 'Update' sub-process within it. This creates a closed-loop system where the deconvolved image is used to refresh or correct the VCD Layer’s representation, likely for real-time display or further analysis. All connections are represented by solid black arrows, with labels placed near the arrows to indicate the nature of the data being transferred. The diagram emphasizes a pipeline from raw inputs (camera and screen capture) through geometric and optical modeling to a refined output that feeds back into the system for continuous updating.
