# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Reconsidering SMT Over NMT for Closely Related Languages: A Case Study of Persian-Hindi Pair — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16877

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Statistical Machine Translation (SMT) model for translating from Persian to Hindi. The overall layout is a two-column flowchart, with the left column representing the process for creating phrase-based translation resources from a parallel corpus, and the right column depicting the generation of language models from a monolingual corpus. Both streams converge at the Moses decoder, which produces the final Hindi translation.

In the left column, the process begins with a cylindrical node labeled 'Persian-Hindi Parallel Corpus' in light green, indicating the source data. This flows downward via a solid arrow to a rounded rectangular box labeled 'Alignment using Giza++', which performs word-level alignment between the parallel sentences. The output of this step is another rounded rectangle labeled 'Phrase table', which stores aligned phrase pairs for translation.

In the right column, the process starts with a cylindrical node labeled 'Hindi Monolingual Corpus', also in light green. This feeds into a rounded rectangle labeled 'LM by SRILM', indicating the use of the SRILM toolkit to train language models. The next step is a rounded rectangle labeled '5-gram LMs', representing the trained n-gram language models specifically using 5-grams.

At the bottom of the diagram, the phrase table and the 5-gram LMs both feed into a central rounded rectangle labeled 'Moses decoder', which is the core decoding component of the SMT system. An additional input to the decoder comes from a rounded rectangle on the far left labeled 'Text in Persian', representing the source sentence to be translated. The output of the Moses decoder is a rounded rectangle labeled 'Translation in Hindi', indicating the final translated output.

All nodes are uniformly styled with light green fill and dark green borders, and all connections are represented by solid black arrows indicating the direction of data flow. The diagram uses standard flowchart shapes: cylinders for data sources (corpora), and rounded rectangles for processing steps or components. There are no mathematical equations or LaTeX expressions visible in the figure. The caption below the diagram reads: 'Architecture of Persian to Hindi SMT Model.'
