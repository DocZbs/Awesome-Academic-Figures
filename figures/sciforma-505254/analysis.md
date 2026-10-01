# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Can MLLMs generate human-like feedback in grading multimodal short answers? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19755

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an automatic framework for generating the MMSAF dataset, structured into three main stages labeled ①, ②, and ③. Stage ① begins with a 'Reference Answer' box, depicted as a light green rounded rectangle containing icons for text and image, which serves as the input source. This reference answer is processed through two operations: 'Introduce Hallucinations' and 'Rephrase', both indicated by blue arrows leading to stage ②. Stage ②, enclosed in a large white box, details the generation of various student responses and images. It includes three types of student responses: 'Incorrect Student Response' (red document icon), 'Partially Correct Student Response' (yellow document icon), and 'Correct Student Response' (green document icon). Additionally, it generates three types of images: 'Correct Image' (green mountain icon), 'Partially Correct Image (Manual Annotation)' (yellow mountain icon), and 'Incorrect Image (Randomly chosen from question subject)' (red mountain icon). These outputs are derived from the reference answer via the specified operations. A separate yellow rounded rectangle labeled 'Question' feeds directly into stage ③. Stage ③ features the 'MMSAF Dataset Generator', shown as a purple rounded rectangle, which receives inputs from both the 'Question' and the outputs of stage ②. The generator also takes input from a 'Correctness Matrix', represented as a black grid below it, indicating a structured mapping of correctness levels. The output of the generator is the 'Synthetically Generated MMSAF Dataset', displayed as a large pink rounded rectangle containing six components: 'Question' (yellow), 'Reference Answer' (light green with text/image icons), 'Student Answer' (blue with text/image icons), 'Level of Correctness (C/PC/I)' (orange), 'Image Relevance (R/I/Rel)' (light blue), 'Sample Feedback' (light green with document icon), and 'Rubrics' (purple). Thick dark blue arrows indicate the primary data flow: from the 'Question' and stage ② outputs to the generator, and from the generator to the final dataset. The entire process is designed to systematically create a diverse, annotated dataset for multimodal student assessment, incorporating controlled variations in correctness and image relevance.
