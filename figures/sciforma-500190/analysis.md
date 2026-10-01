# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

SusGen-GPT: A Data-Centric LLM for Financial NLP and Sustainability Report Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10906

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the pipeline for constructing the SusGen-30K dataset, which is designed for instruction-following tasks using large language models. The global layout is structured as a left-to-right workflow, divided into three main stages: data sourcing, quality control, and automated preprocessing via large language models.

On the left side, two primary data sources are depicted. The top source is labeled 'Hugging Face' and represented by a yellow rounded rectangle containing icons and names of open-source models such as Alpaca, FINGPT, FINNUMBER, and others, symbolized by a smiling emoji, a rabbit wearing sunglasses, a hexagonal logo, and a bird. Below it, the second source is the 'TCFD HUB', shown in a green rounded rectangle, which contains paired documents: an 'Annual Report' (illustrated with financial charts and coins) and an 'ESG Report' (illustrated with a pie chart and leaves), connected by a bidirectional arrow labeled 'Paired'.

These two data sources feed into the central processing stage, enclosed in a light blue dashed rectangle labeled with three sequential steps: 'Crawl', 'Extract', and 'Check'. Each step is represented by a rounded rectangle with an icon: a green bug for 'Crawl', a folder with a magnifying glass for 'Extract', and a red magnifying glass over a waveform for 'Check'. A thick black curved arrow connects both data sources to this central module, indicating aggregation.

From this central module, a solid black arrow points to the rightmost stage: the 'Large Language Models Automatic Preprocess Pipeline', housed in a purple rounded rectangle. This stage consists of five vertically stacked, rounded rectangular modules, each with an icon and label: 'Translation' (multilingual globe icon), 'Reformatting' (two speech bubbles), 'Anonymization' (person icon with lock), 'Augmentation' (stacked green database cylinders), and 'Synthesizing' (orange line graph). Above these modules, a neural network icon visually represents the large language model component.

The entire pipeline flows logically from raw data collection (from Hugging Face and TCFD HUB) through quality assurance (Crawl, Extract, Check) to advanced preprocessing using LLMs (Translation, Reformatting, Anonymization, Augmentation, Synthesizing), ultimately producing a refined instruction-following dataset. The visual design uses distinct colors (yellow, green, blue, purple) and consistent shapes (rounded rectangles) to differentiate stages and components, while icons provide intuitive cues for each function.
