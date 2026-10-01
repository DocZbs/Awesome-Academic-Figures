# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fake News Detection: Comparative Evaluation of BERT-like Models and Large Language Models with Generative AI-Annotated Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14276

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a data annotation and model training pipeline, structured as a sequential workflow from raw data acquisition to deployment. The global layout is horizontal and linear, progressing from left to right, with a vertical branch leading to the final deployment stage. The top row represents the data annotation phase, while the bottom row depicts the model training and evaluation phase.

In the top row, the process begins with 'Web scraping', symbolized by a globe icon with an arrow, feeding into a pink cylindrical database labeled 'Unlabelled Data'. This unlabelled data flows via a thick gray arrow to a central module represented as a dark gray monitor labeled 'LLM as annotator' with 'GPT 4' written beneath it. Above this module, a small icon of three human figures is labeled 'Experts Review', indicating human oversight or validation of the LLM’s annotations. The output of this annotation step is a green cylindrical database labeled 'Labelled Data', connected by another thick gray arrow.

From the 'Labelled Data' cylinder, a downward arrow leads to a large light blue rectangular box labeled 'Trainer' at the bottom center. Inside this trainer box are two white rounded rectangles: the top one labeled 'BERT-like models' and the bottom one labeled 'Large Language Models', indicating the types of models being trained on the labelled data.

From the 'Trainer' box, a thick gray arrow points leftward to a pale yellow rounded rectangle labeled 'Benchmarking', which then connects via another arrow to a peach-colored circle labeled 'Deployment', completing the workflow.

All connections are represented by thick, gray, right-pointing arrows (except the downward arrow from Labelled Data to Trainer), emphasizing the directional flow of data and processing steps. The visual modules use distinct shapes and colors to differentiate stages: cylinders for data storage (pink for unlabelled, green for labelled), a monitor for the LLM annotator, a rectangle for the trainer, a rounded rectangle for benchmarking, and a circle for deployment. Text labels are clear and centrally placed within each module. The overall structure reflects a systematic approach where web-scraped unlabelled data is automatically annotated using GPT-4 under expert supervision, converted into labelled data, used to train both BERT-like and large language models, evaluated through benchmarking, and finally deployed.
