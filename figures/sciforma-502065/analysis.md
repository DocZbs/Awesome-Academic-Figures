# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Concept-Centric Approach to Multi-Modality Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13847

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a visual question answering (VQA) framework that integrates vision-based object detection with symbolic reasoning through a structured concept space. The global layout is left-to-right, depicting a pipeline starting from an input image and question, progressing through vision processing and symbolic program generation, and ending with a final answer. On the far left, an 'Original CLEVR Image' is shown containing multiple 3D-rendered objects: a blue cube, red cube, green cube, and yellow cylinder. This image is denoted as X_i and is fed into a blue trapezoidal module labeled f_detection, representing an object detection model. This model outputs a set of detected objects, represented as four distinct 3D shapes (teal cube, red cube, yellow cylinder, blue cube), each labeled x_1^vision, x_2^vision, x_3^vision, x_4^vision, enclosed within a dashed blue rectangle. These detected objects are then passed to another blue trapezoidal module labeled f_vision, which acts as a vision-modality projection model. The output of this module is denoted as Ω̂_i, which feeds into a large green-dashed rectangular region labeled 'Concept Space' and 'Symbolic Programs'. Within this region, the concept space is visually represented by nested rectangles of varying colors (peach, light green, beige, cream), each containing a blue rectangle labeled Ω_1^vision, Ω_2^vision, Ω_3^vision, Ω_4^vision, indicating projected representations of the detected objects. To the right of the concept space, a flowchart of symbolic programs is shown, consisting of rounded rectangles connected by arrows: 'scene' → 'filter_shape' → 'unique' → 'query_color', culminating in the output 'Yellow' labeled as o_i. Simultaneously, a natural language question, 'What is the color of the cylinder object?', denoted as q_i, is input into a yellow trapezoidal module labeled π, representing a program generator. This module outputs a sequence of symbolic programs, denoted as ŷ_i, which is connected via a dashed yellow arrow to the 'scene' node in the symbolic programs flowchart, indicating that the generated program guides the reasoning process over the concept space. The entire framework demonstrates how visual inputs and linguistic queries are jointly processed to derive a symbolic answer through structured reasoning.
