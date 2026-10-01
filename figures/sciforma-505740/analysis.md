# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Controlling Out-of-Domain Gaps in LLMs for Genre Classification and Generated Text Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20595

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a domain transfer assessment methodology for few-shot In-Context Learning (ICL), adapted from Roussinov et al. (2023), designed to evaluate performance on two tasks: genre classification and generated text detection. The overall layout is divided into two main sections: a large gray rectangular area labeled 'Corpus' on the left, and a workflow pipeline on the right. A vertical axis on the far left, labeled 'Topic LDA Score (e.g. how much of "sport" in a document)', indicates the gradient of topic relevance, with higher scores at the top.

Within the 'Corpus' section, there are two horizontally arranged dashed boxes representing 'On-Topic (e.g. "sport")' at the top and 'Off-Topic (e.g. no "sport")' at the bottom. Each contains a flow from 'Human-written' data (represented as a white rectangle with a small icon and text 'Examples Test Texts' for On-Topic, and 'Examples' for Off-Topic) through an LLM (depicted as a cylinder) to 'Generated' data (also a white rectangle with similar text). For On-Topic, the output includes both 'Examples' and 'Test Texts'; for Off-Topic, only 'Examples' are produced. These generated texts are then fed into the right-side pipeline.

The right-side pipeline begins with 'Prompt Assembly', a gray box containing instructions to define the task, specify what to use (style, tone, structure, etc.), and what not to use (topics, length). This module receives 'Texts' from both On-Topic and Off-Topic streams. It outputs a 'Prompt' to an LLM (cylinder), which produces an 'Output'. This output, along with 'Labels' (derived from the original human-written texts), is sent to 'Task Assessment', another gray box listing evaluation metrics: Accuracy, recall, precision, F1, etc.

Connections are shown via black arrows: from Human-written to LLM, from LLM to Generated, from Generated to Prompt Assembly (labeled 'Texts'), from Prompt Assembly to LLM (labeled 'Prompt'), from LLM to Task Assessment (labeled 'Output'), and from the original corpus to Task Assessment (labeled 'Labels'). The diagram emphasizes that On-Topic texts serve dual purposes—both as test data and potentially as ICL examples—while Off-Topic texts are used only as examples. The methodology is generalizable to other non-topical classification tasks like gender, authorship, or sentiment analysis.
