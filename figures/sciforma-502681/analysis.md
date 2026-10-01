# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Measuring, Modeling, and Helping People Account for Privacy Risks in Online Self-Disclosures with AI — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15047

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a Self-Disclosure Detection Model designed to classify each word in an input sentence into either a binary or categorical label. The global layout is vertically structured, showing a clear data flow from top to bottom: input tokens enter at the top, pass through the model components, and produce two parallel output streams at the bottom.

At the top, a sequence of input tokens—represented as white rectangular boxes containing words such as 'I', 'am', 'a', 'guy', 'and', 'was', ..., 'ballet.'—feeds into the model. Each token has a downward arrow pointing to the next component.

The first processing layer is labeled 'Embedding Layer' and is depicted as a light blue horizontal bar spanning the width of the model box. This layer converts each input token into a dense vector representation.

Below the embedding layer is the core of the model, labeled 'Self-Disclosure Detection Model'. It is visually represented by a stylized neural network diagram composed of interconnected black and white circles, symbolizing neurons and connections. This module processes the embedded representations sequentially.

Following the detection model is the 'Binary/Categorical Classification Head', shown as a dark blue horizontal bar. This head performs the actual classification task and produces two distinct output streams.

The first output stream, labeled 'Binary Output', consists of a row of white rectangular boxes aligned horizontally, each containing either 'Yes' or 'No'. These correspond to whether each input token is classified as self-disclosing. For example, the first four tokens ('I', 'am', 'a', 'guy') are marked 'Yes', while subsequent tokens like 'was' and 'ballet.' are marked 'No'. An arrow connects this row to a black box labeled 'Binary Output'.

The second output stream, labeled 'Categorical Output', is another row of white rectangular boxes below the binary output. These contain categorical labels such as 'B-Age', 'I-Age', 'I-Gender', and 'O' (for 'Outside'). These labels indicate the specific type of self-disclosure (e.g., age-related or gender-related) or non-disclosure. The labels align with the input tokens, with 'B-Age' corresponding to 'I', 'I-Age' to 'am' and 'a', 'I-Gender' to 'guy', and 'O' to the remaining tokens. An arrow connects this row to a black box labeled 'Categorical Output'.

All arrows are solid black lines with arrowheads pointing downward, indicating the direction of data flow. The entire model is enclosed within a large rounded rectangle with a subtle shadow, emphasizing it as a single cohesive unit. The figure caption states: 'The model classifies each word to a label,' summarizing the function of the architecture.
