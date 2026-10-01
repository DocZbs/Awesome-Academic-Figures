# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Improving Lip-synchrony in Direct Audio-Visual Speech-to-Speech Translation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16530

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the AVS2S (Audio-Visual Speech-to-Speech) framework, designed for translating audio-visual content into translated audio while preserving synchronization and prosody. The global layout is a horizontal pipeline structure, progressing from left to right, with feedback loops for loss computation. On the far left, labeled 'Source AV Content', there is a composite input consisting of an audio waveform and a vertical stack of three video frames, each depicting a smiling face, symbolizing synchronized audio and visual data. This input feeds into the first processing module: the 'AV-Encoder', depicted as a gray rounded rectangle with a blue snowflake icon and labeled '(pre-trained AV-Hubert)', indicating it is a pre-trained multimodal encoder. The output of the AV-Encoder flows into the next module, 'Unit-to-Unit Encoder-Decoder Translation', also a gray rounded rectangle with a blue snowflake icon, representing the core translation component that maps encoded units from source to target language. From this module, the signal proceeds to 'Duration Prediction', shown as a pink rounded rectangle with a red flame icon, which predicts the duration of each unit in the target sequence. The output of Duration Prediction is fed into a 'Vocoder', a gray rounded rectangle with a blue snowflake icon, which synthesizes the final 'Translated Audio'—represented by a black audio waveform—on the far right. Two feedback loops connect the output back to earlier stages for training supervision: one loop connects the Translated Audio to the 'Duration Loss' module (a white rounded rectangle), which compares predicted durations with ground truth durations derived from the source audio; another loop connects the Translated Audio and Source AV Content to the 'Sync Loss' module (another white rounded rectangle), ensuring temporal alignment between the generated audio and the original visual content. All connections are represented by solid black arrows indicating the direction of data flow or loss computation. The diagram uses consistent visual attributes: gray boxes for core processing modules, pink for duration prediction, white for loss functions, and icons (snowflake for encoder-related components, flame for duration prediction) to denote functional categories. Text labels are clear and positioned inside or adjacent to the respective modules.
