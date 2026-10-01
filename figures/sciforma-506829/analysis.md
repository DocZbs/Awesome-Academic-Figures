# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

QuIM-RAG: Advancing Retrieval-Augmented Generation with Inverted Question Matching for Enhanced QA Performance — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02702

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an end-to-end Retrieval-Augmented Generation (RAG) architecture for answering user queries using a large language model (LLM) enhanced with contextual information retrieval. The global layout is left-to-right, beginning with the user query input on the far left, progressing through a prompt construction phase, then entering a large LLM module that integrates retrieval and generation, and finally producing a final output on the far right.

On the left side, a pink rounded rectangle labeled 'User Query' contains the example text: 'What is the admission deadline for Fall’24 at NDSU?'. This query is fed into two parallel components: first, a black circular icon with 'LLM' inside, representing the large language model, which receives the query directly; second, a gray circuit-like icon labeled 'Embedding Model', which processes the query to generate a contextual embedding. Additionally, a black silhouette icon of a person is shown, indicating the user's role in providing the query.

These components feed into a central prompt construction block, represented by a white rectangular box with a yellow header labeled 'Prompt'. Inside this box, a Python-style code snippet shows: 'prompt = ChatPromptTemplate.from_messages([ {"system", "input"}, {"human", "input"} ])', indicating that the prompt is structured as a chat template with system and human message roles. The user query and the embedding model’s output are both inputs to this prompt construction step.

The constructed prompt is then passed to the main 'Large Language Model' module, which occupies the central-right portion of the diagram. This module is enclosed in a large black-bordered box with the title 'Large Language Model' at the top. Inside, the process begins at the bottom with a pink rectangle labeled 'Input Tokens', which feeds into four small plus signs (+) symbolizing element-wise addition. These are connected to a dark blue rectangle labeled 'Contextual Embedding', which is the output of the embedding model. Above this, a light blue rectangle labeled 'Quantization of Embedding' follows, leading to a gray rectangle 'Calculate Similarity Score', then another gray rectangle 'Select Top Matches', and finally a light blue rectangle 'Retrieval of Relevant Information'.

This retrieved information is then fed into a stack of purple rectangles labeled 'Decoder Block', with ellipses indicating multiple such blocks, which form the core generative part of the LLM. The topmost block outputs to a light blue rectangle labeled 'Output' within the LLM module.

An arrow leads from this internal output to the final output box on the far right, a white rounded rectangle with a light blue header labeled 'Output', containing the generated response: 'The admission deadline for first year students is August 1 and June 1 is for international students'.

All connections are represented by solid black arrows indicating the direction of data flow. The color coding is consistent: pink for user input and initial tokens, gray for processing steps, light blue for retrieval and output stages, and purple for decoder blocks. The structure clearly separates the retrieval path (embedding → similarity → retrieval) from the generation path (decoder blocks), with the retrieved information being integrated into the generation process.
