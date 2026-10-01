# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Ensuring Consistency for In-Image Translation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18139

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage framework for in-image text translation with consistent visual style, titled 'The process of two-stage in-image translation with consistent style.' The overall layout is horizontally divided into two main stages: Stage-1 TIT based on MMLLM on the left, and Stage-2 Image Backfilling based on Diffusion Model on the right. Each stage is enclosed within a dashed rectangular boundary.

In Stage-1, the process begins with an input image containing a black-boxed text label 'BANK' over a scenic background. A text box on the upper-left lists four steps: Step 1 recognizes and translates the source language text within the black box into target language; Step 2 provides a detailed description of the image content; Step 3 corrects any spelling or semantic errors in the recognized text using image context; Step 4 corrects potential polysemy in the translated text by disambiguating based on image information. This instruction block feeds into a large pink rectangular module labeled 'Multi-modal Multilingual Large Language Model' (MMLLM), which outputs the translated text '河岸' (meaning 'riverbank') in a dashed box below it. Concurrently, the original image passes through a 'Text Position Detection Model' (beige rectangle), which outputs a version of the image where the text 'BANK' is highlighted with a bounding box, indicating detected position.

Stage-2 begins with the original image with 'BANK' and the detected text position. The image flows into a 'Text Erase Model' (beige rectangle), which removes the original text, producing an image with only the sky background where the text was. Simultaneously, the translated text '河岸' from Stage-1 is rendered via a 'Glyph Render' (beige rectangle) into a visual glyph representation of the Chinese characters. Both the erased image and the rendered glyph are fed into a central pink rectangular module labeled 'Text Generation Enhancement Diffusion Model'. Additionally, a caption box at the bottom right provides contextual guidance: 'A picture containing [Tgt Language], captions shown in the snapshot are “河岸”.' This caption feeds into the diffusion model as conditioning. The diffusion model generates a new image where the original 'BANK' has been replaced with the translated text '河岸', preserving the original image's style and background. The final output image shows the scenic background with '河岸' seamlessly integrated in place of 'BANK'.

Connections are represented by solid black arrows indicating data flow: from the instruction block to the MMLLM, from the original image to the Text Position Detection Model, from the detection result and original image to the Text Erase Model, from the erased image and rendered glyph to the diffusion model, and from the diffusion model to the final output image. The translated text '河岸' also connects directly to the Glyph Render and then to the diffusion model. The caption box feeds into the diffusion model as additional context. All modules are clearly labeled with text inside rectangles of distinct colors (pink for core models, beige for auxiliary models), and images are shown as realistic snapshots with text overlays.
