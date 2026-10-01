# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Event-assisted 12-stop HDR Imaging of Dynamic Scene — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14705

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a simulation pipeline for generating a 12-stop HDR imaging dataset with event data, labeled as the ESHDR Dataset. The global layout is structured as a flowchart with distinct processing stages arranged from left to right and top to bottom, emphasizing a sequential workflow. The process begins on the lower-left with an 'HDR Scene' depicted as a dark outdoor image with vertical poles and a bright star-like light source. This scene feeds into a 'Motion Simulator', which generates an 'HDR Sequence' shown as a stack of multiple linear RGB frames featuring a moving 'Harmony' product box against the same background. The HDR Sequence then passes through an 'Event Simulator', producing a series of event frames displayed below the ESHDR Dataset block—these are sparse, time-encoded representations with red and blue lines indicating positive and negative pixel changes.

From the HDR Sequence, a parallel path leads upward to an 'Unprocess to RAW' step, which converts the HDR data into a raw sensor format. This raw data enters a 'Simulate Degradation' module, represented by a rounded rectangle with a green border, where noise and blur are applied to the image, visually shown as a transition from a clear to a noisy, blurred version of the 'Harmony' box. The degraded output is then processed into LDRs (Low Dynamic Range images) via a 'Process to LDRs' block, which takes an 'EV Value' (Exposure Value) as input to control the exposure level. This results in a set of five LDR images labeled -6EV, -3EV, 0EV, 3EV, and 6EV, arranged horizontally under the 'ESHDR Dataset' title, showing progressive brightness changes from underexposed to overexposed views of the same scene.

Visual modules are primarily rectangular or rounded rectangles with light green backgrounds and black text, except for the 'Simulate Degradation' block, which has a green border and contains two small image examples. The 'ESHDR Dataset' section is highlighted with a large light-blue background and bold blue title. All text labels are in a clean sans-serif font, and arrows indicate the direction of data flow. The connections between modules are solid gray arrows, with some bidirectional arrows (e.g., EV Value to Process to LDRs) indicating parameter input. The figure includes both real image examples and schematic representations, with the final dataset showcasing both LDR images and corresponding event frames, demonstrating the full scope of the simulated data generation process.
