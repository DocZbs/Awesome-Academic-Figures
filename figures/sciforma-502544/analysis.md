# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Event-assisted 12-stop HDR Imaging of Dynamic Scene — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14705

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an event-assisted alignment module used for fine-tuning, presented in a horizontal workflow layout. On the left side, two input images are shown: I₁ at the top and I₂ labeled as 'Reference' at the bottom. Each image is processed by a separate event-based processing step denoted as EV1 and EV2, respectively. The outputs of these steps are labeled I₁^ev1 and I₂^ev2, which are visually represented as slightly enhanced or adjusted versions of the original images, suggesting event-driven image refinement. These processed images are then fed into the central component of the diagram: a large rounded rectangular box labeled 'Event-assisted Alignment Module'. Above this module, a small square image labeled 'Events' is shown, depicting a sparse, colorful event stream (red and blue dots on a white background), representing asynchronous event data from an event camera. This event data is also directed into the alignment module via a downward arrow. The alignment module processes the inputs and produces a loss signal, indicated by a rightward arrow labeled 'Loss'. This loss is used to update the model parameters, as suggested by a feedback loop: a thick blue line extends from the bottom of the reference image I₂, passes under the module, and points upward to the output I₂^ev1, indicating that the module's output for the reference image is refined during training. The entire diagram emphasizes a dual-input pipeline (I₁ and I₂) with event data augmentation, where the alignment module leverages both visual and event streams to compute a loss for fine-tuning, particularly focusing on improving the reference image’s event-aligned representation.
