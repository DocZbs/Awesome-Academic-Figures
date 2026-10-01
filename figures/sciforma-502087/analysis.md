# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a joint multi-task training framework for multilingual machine translation using a pre-trained encoder-decoder architecture. The global layout is vertically structured, progressing from top to bottom: input source sentences at the top, followed by an encoder, a context vector, a decoder, and finally output translations at the bottom. Three parallel input streams are shown at the top, each represented by a rectangular box labeled 'Source Sentence (En)'—colored pink, light green, and light blue respectively. These colors correspond to different language pairs: pink for English-German (De), green for English-French (Fr), and blue for English-Spanish (Es), as indicated in the caption. All three inputs feed into a central rectangular module labeled 'Encoder (Pre-trained model)', colored in light orange, indicating it is a shared component across tasks. From the encoder, a single downward arrow leads to a diamond-shaped node labeled 'Context Vector', colored in yellow, representing the compressed semantic representation derived from the input sentences. This context vector is then passed to a gray rectangular module labeled 'Decoder', which processes the information to generate outputs. From the decoder, three separate output streams emerge, each leading to a rectangular box matching the color of its corresponding input: pink for 'De Translations', green for 'Fr Translations', and blue for 'Es Translations'. The connections between modules are represented by solid black arrows, indicating the direction of data flow. The entire pipeline reflects a shared encoder for multiple translation tasks, with a single context vector feeding into a decoder that produces task-specific outputs, enabling efficient joint multi-task learning. The visual design uses consistent color coding to link input and output pairs, enhancing clarity of the multi-task structure.
