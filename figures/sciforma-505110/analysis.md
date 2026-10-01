# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Find the Intention of Instruction: Comprehensive Evaluation of Instruction Understanding for Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19450

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a methodological pipeline for constructing anti-attribute contrastive instructions from benchmark data points, primarily used in evaluating instruction-following models. The global layout is left-to-right, beginning with an input data block on the far left, progressing through attribute extraction and instruction generation stages, and culminating in two distinct output instruction types on the right. The structure is modular, with clear separation between data input, attribute analysis, instruction synthesis, and final outputs.

On the left, a gray rectangular container labeled 'Instruction Following Benchmarks' contains two nested boxes: 'Instruction' at the bottom, which reads 'Generate an advertisement slogan that promotes healthy eating.', and 'Output (Followed)' above it, displaying the response 'Eat healthy, feel healthy!'. This serves as the raw input data point.

From this container, a dashed arrow leads to a beige box titled 'Response Attributes', which lists extracted features from the output: 'Included Keywords: {‘healthy’: 2 times}', 'Excluded Keywords: [‘slogan’, ‘promotes’]', 'Num words: 4', and 'Num sentences: 1', with an ellipsis indicating additional attributes. This module acts as a feature extractor, summarizing the response’s characteristics.

Two separate dashed arrows extend from the 'Response Attributes' box to two distinct instruction generation modules. The upper path leads to a yellow box labeled 'Misaligned Instructions', containing three specific constraints: 'Exclude the term ‘healthy’ from your reply.', 'Ensure your response exceeds 5 words.', and 'Include “promotes” in your response.' These are designed to contradict the original response attributes.

The lower path leads to a yellow box labeled 'Aligned Instruction', which contains the instruction: 'The word ‘healthy’ must appear 2 times.' This instruction aligns with one of the extracted attributes (included keyword count).

Both instruction types then feed into separate concatenation operations, represented by circular icons with a plus sign inside, each labeled 'Concatenate'. The 'Misaligned Instructions' concatenate with the original instruction to form an 'Anti-Attribute Contrastive' instruction, shown in a yellow box on the top right. Similarly, the 'Aligned Instruction' concatenates with the original instruction to produce a 'Label Instruction for Anti-Attribute', shown in a yellow box on the bottom right.

All connections are depicted using dashed brown arrows, indicating data flow or transformation steps. The visual design uses consistent color coding: gray for input data, beige for attribute extraction, and yellow for instruction generation and output. Text within boxes is black, with clear, readable fonts. The figure’s caption explains that this process constructs contrastive instructions from curated data points, emphasizing the method's role in creating instruction candidates for evaluation.
