# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ORBIT: Cost-Effective Dataset Curation for Large Language Model Domain Adaptation with an Astronomy Case Study — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14436

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive filtering pipeline for curating a high-quality, educationally relevant dataset from Common Crawl, ultimately leading to the ORBIT dataset. The pipeline is visually segmented into four distinct colored regions—orange, yellow, green, and blue—each representing a stage or set of techniques applied sequentially. The overall layout is horizontal, left-to-right, with each stage connected by solid black lines indicating data flow.

In the orange region on the far left, the process begins with 'Common Crawl' as the raw input source, depicted as a white rectangular box with the label in gray and gold text. This is followed by a series of oval-shaped modules: 'WARC', 'URL', 'FastText', and 'Deduplication'. These represent standard preprocessing steps, including web archive parsing, URL extraction, initial content classification via FastText, and removal of duplicate documents. This section corresponds to common filtering methods formalized in prior work (cited as Wenzek et al., 2020).

The yellow region follows, containing a single oval module labeled 'C4 Filters'. This represents large-scale semantic filtering techniques adapted from Raffel et al. (2023), which likely involve content quality and toxicity filtering based on learned representations.

The green region introduces additional semantic filters specific to educational content. It contains two ovals: 'Fineweb heuristic', which likely applies domain-specific rules or heuristics to select content from the Fineweb-Edu corpus, and 'BERT Edu', a BERT-based classifier trained to identify educational relevance within the filtered data.

Finally, the blue region on the right highlights the authors’ contributions. It includes two ovals: 'GloVe Thresholding', which uses GloVe word embeddings to filter content based on semantic similarity thresholds, and 'BERT-Astro', a specialized BERT classifier fine-tuned to detect educational relevance specifically in astronomy-related content. The pipeline concludes with an icon depicting a telescope observing celestial bodies, symbolizing the final astronomy-focused dataset.

All modules are connected by straight black lines, indicating a linear, sequential workflow. The visual design uses consistent oval shapes for processing steps, with clear labeling inside each. The color-coding serves to distinguish between general preprocessing (orange), broad semantic filtering (yellow), educational relevance filtering (green), and domain-specific contributions (blue).
