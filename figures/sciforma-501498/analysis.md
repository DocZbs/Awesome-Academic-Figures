# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRIMEdit: Probability Redistribution for Instance-aware Multi-object Video Editing with Benchmark Dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12877

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a four-stage pipeline for generating target captions for video frames in the MIVE dataset, structured into four color-coded sections: yellow (Image Captioning), red (Text Summarization), blue (Manual Fix and Annotation), and purple (Target Caption Generation). The global layout is a 2x2 grid, with each quadrant representing a distinct phase of the workflow, connected sequentially from top-left to bottom-right via arrows indicating data flow.

In the yellow section (1. Image Captioning), the process begins with 'Input Frames'—a sequence of video frames shown as a stack of images, including a cat playing with a pink toy on a carpeted floor. These frames are fed into an LLaVA v1.6 Mistral 7b model, represented as a rounded rectangle with black text. The model receives a prompt: 'Can you describe the scene in this image if the scene must contain cat, curtain, toy, floor, wall, and table or desk?' Below the prompt, a note specifies '*choose the caption that includes most of the instances'. The output is a detailed descriptive caption in a rounded rectangle, describing the cat, toy, curtain, wooden table/desk, white wall, and cozy indoor environment.

This caption flows into the red section (2. Text Summarization), where it is processed by a Llama 3 model, also depicted as a rounded rectangle. The prompt given to Llama 3 instructs it to act as a summarization expert, condensing the input text into 50 words while preserving key objects and cases, with output required in JSON format. The resulting summarized caption appears in another rounded rectangle, retaining core elements like the cat, pink toy, white carpeted floor, curtain, wooden table, greenery, and cozy indoor setting.

From here, the flow moves to the blue section (3. Manual Fix and Annotation), where human intervention is introduced. A rounded rectangle labeled 'Human+Llama 3' lists three manual steps: (1) manually including instances missed by Llama 3, (2) adding starting and ending tags to instances, and (3) fixing grammar with Llama 3’s help. The output is a tagged version of the caption, with each object enclosed in angle brackets containing an ID (e.g., '<21247>cat</21247>', '<4618360>white carpeted floor</4618360>').

Finally, in the purple section (4. Target Caption Generation), this tagged caption is fed into another Llama 3 model. The prompt asks for five variations per object, involving retexturing or swapping with similar shapes, ensuring dramatic changes in appearance, texture, color, or semantic class. The output is a randomly selected target caption from these five variations, presented in a rounded rectangle with the same tagging structure. A note below states '*randomly select instance target caption from the five variations'.

All connections between stages are indicated by solid black arrows, showing a clear sequential workflow. Each module is visually distinct with consistent rounded rectangles and black borders, and the text within is clearly legible. The figure uses color-coding (yellow, red, blue, purple) to demarcate the four phases, enhancing visual clarity and logical progression.
