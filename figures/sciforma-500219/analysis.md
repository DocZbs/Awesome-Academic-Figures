# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Can LLMs Help Create Grammar?: Automating Grammar Creation for Endangered Languages with In-Context Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10960

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a multi-stage natural language processing pipeline designed for cross-lingual text generation using a large language model (LLM), specifically applied to a Thai-English bitext example. The global layout is vertically structured, progressing from top to bottom, with numbered steps indicating the sequential flow of data transformation. At the top, an English sentence 'I am making a white sea bass curry this evening' is paired with its Thai translation 'เวลาเนี้ยจิเบาะห์ซอบายกานกีพงปูเตียก'. A large blue downward arrow directs the input into step 1, labeled 'Tokeniser', which breaks the Thai sentence into individual tokens: 'เวลา', 'เนี้ย', 'จิ', 'เบาะห์', 'ซอบาย', 'กาน', 'กีพง', 'ปูเตียก', displayed in a horizontal rectangular box. Step 2, 'Sense Mapping', is indicated by bidirectional blue arrows linking each Thai token to its corresponding semantic or grammatical sense in English: 'evening', 'this', '1sg', 'do', 'curry', 'fish', 'sea bass', 'white'. These senses are aligned directly beneath the Thai tokens. Step 3, 'Concat as String', combines these mapped senses into a single linear string: 'evening this 1sg do curry fish sea bass white', shown below the alignment. This concatenated string then flows via a curved blue arrow into step 4–5, labeled 'LLM Generation', represented by a stylized neural network icon composed of interconnected black and light-blue nodes. From this LLM module, two blue arrows diverge: one points leftward to a yellow-labeled box titled 'Grammar & Lexicon', suggesting the output is used to refine linguistic resources; the other loops back upward along the right edge of the diagram, forming a feedback path that implies iterative refinement or continuous learning. The entire process is framed within a thick blue border, emphasizing it as a complete system. The caption clarifies that this procedure is applied to each sentence pair in a bitext corpus before being fed into the LLM prompt for downstream tasks.
