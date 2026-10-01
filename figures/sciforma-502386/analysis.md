# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MegaPairs: Massive Data Synthesis For Universal Multimodal Retrieval — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14475

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage pipeline for constructing multimodal triplets from an image-text dataset, consisting of image pair mining and instruction generation. The overall layout is divided into two horizontal sections labeled (a) and (b), each depicting a distinct phase of the process.

In section (a), the global structure begins with a 'Query Item' on the left, represented by a rounded rectangle with a light peach background. This contains an image of a white Toyota concept car and its associated caption: 'How 2020 Toyota Yaris Concept Hints To Design Future Toyota.' An arrow labeled 'Query Item Sampling' points from a database icon labeled 'Large-scale Image-Text Dataset' to the Query Item, indicating the source of the query. From the Query Item, an arrow leads to a central pink rounded rectangle labeled 'Multiple Similarity Models,' which includes icons of a magnifying glass over an image and a document, symbolizing visual and textual similarity computation. This module outputs to a light blue rounded rectangle on the right titled 'Retrieved Images,' which displays six smaller images: the original concept car, its interior, a different exterior view, a racing car, a black sedan, and a blue futuristic car, illustrating diverse retrieved results.

Section (b) details the second stage, starting with a stack of light blue rounded rectangles labeled 'Mined Image Pairs,' showing the concept car exterior and its interior. An arrow leads to a gray rounded rectangle containing a black horse icon and the label 'MLM' (Multimodal Language Model), with the task 'Summarize the Relationships.' Below this, sample text reads: 'The images both relate to Toyota vehicles.... The source image highlights the futuristic exterior of ..., while the target focuses on the practical interior seating....' Another arrow connects to a similar gray box with a cat icon and 'LLM' (Large Language Model), labeled 'Generate instructions,' listing example prompts such as 'What does the inside of this car look like?' and 'What is visible when the door is opened?'. Finally, an arrow leads to a stack of light green rounded rectangles titled 'Resulted Triplet Data,' showing the same exterior and interior images with the generated instruction 'What does the inside of this car look like?' displayed below them.

All connections are represented by solid black arrows indicating the flow of data and processing steps. Text labels are primarily in black or red, with key components highlighted using distinct background colors: peach for the query, pink for similarity models, light blue for retrieved and mined images, and light green for the final triplet output. The figure visually conveys how diverse image pairs are mined via multiple similarity models and then enriched with natural language instructions through sequential multimodal and language modeling stages to form structured triplet data.
