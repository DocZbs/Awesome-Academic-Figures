# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LLMCL-GEC: Advancing Grammatical Error Correction with LLM-Driven Curriculum Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12541

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-part framework for a curriculum learning (CL) method applied to grammar error correction (GEC) using large language models (LLMs). The top section, labeled 'Curriculum Design', outlines how a foundation LLM (represented by a black-and-white llama icon) evaluates the difficulty of GEC samples. The input to this LLM is structured as a list containing a prompt, source-side GEC data, and a query for a difficulty score, enclosed in a red dashed box. The foundation LLM processes this input and outputs a difficulty score from 1 to 10, which categorizes each sample into one of three groups: 'Hard Samples' (score 8–10), 'Medium Samples' (score 4–7), or 'Easy Samples' (score 1–3). These categories are represented as rectangular boxes with distinct shading—dark gray for Hard, medium gray for Medium, and light gray for Easy—and are connected to the LLM via curved arrows labeled with their respective score ranges. A yellow curved arrow with a question mark points from the input to the LLM, symbolizing the evaluation process.

The bottom section, labeled 'Learning Process', depicts the training progression of a GEC model following the curriculum. It shows a stepwise learning path with three stages: 'Easy-stage', 'Medium-stage', and 'Hard-stage'. Each stage is visually marked by a different stylized llama icon: a cute, pastel-colored llama for Easy-stage, a more sophisticated blue-and-red llama for Medium-stage, and a vibrant, glowing, superhero-like llama for Hard-stage. The 'Medium-stage' is explicitly labeled as an 'SFT-tuned GEC LLM', indicating supervised fine-tuning. A thick gray arrow ascends from the Easy-stage to the Hard-stage, illustrating the sequential progression through the curriculum. The entire diagram is enclosed in a brown dashed border, with a horizontal purple dashed line separating the Curriculum Design and Learning Process sections. At the top, a prompt is displayed in a dashed box, instructing the foundation LLM to act as a grammar correction expert and assign a difficulty score to given text, providing context for the input format used in the curriculum design phase.
