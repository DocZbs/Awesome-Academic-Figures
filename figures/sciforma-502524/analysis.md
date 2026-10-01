# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FiVL: A Framework for Improved Vision-Language Alignment through the Lens of Training, Evaluation and Explainability — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14672

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a dataset collection pipeline for generating image segmentation masks using key expressions derived from question-answer pairs. The global layout is horizontal and sequential, divided into two main sections: the top row shows the original sample processing, while the bottom row depicts the resulting dataset samples. The flow begins on the left with an 'Original sample' box containing an image of a man sitting on a surfboard at the beach, alongside a question ('Where is the man sitting in the image?') and its corresponding answer ('The man is sitting on his surfboard on the beach, with the ocean in the background'). An arrow leads from this box to a circular module labeled 'Generate key expression', which contains the GPT4-o logo and is colored with a purple outline. This module outputs a gray rectangular box listing 'Key expressions': 'surfboard', 'on the beach', and 'ocean in the background'. From this key expressions box, a curved arrow points downward to the bottom section of the diagram. In the bottom row, multiple stacked boxes represent 'Our dataset sample'. Each sample includes an image, a segmentation map (shown as a white silhouette on black background), the same question and answer as above, and a highlighted 'Key expression: surfboard'. A blue arrow connects the key expressions box to another circular module labeled 'Generate segmentation mask', which features the Grounded SAM logo and has a light blue outline. This module receives both the image and the key expression and produces the segmentation mask, which is then paired with the original image and metadata to form the dataset sample. The visual modules are primarily rectangular boxes for inputs/outputs and circular nodes for processing steps. Text labels are clear and positioned adjacent to or inside each module. The connections are directed arrows indicating data flow: from the original QA pair to key expression generation, then to segmentation mask generation, and finally to the dataset sample output. The diagram emphasizes the role of GPT4-o in extracting semantic key expressions and Grounded SAM in producing precise segmentation masks based on those expressions.
