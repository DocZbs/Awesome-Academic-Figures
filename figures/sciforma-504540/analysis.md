# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

How "Real" is Your Real-Time Simultaneous Speech-to-Text Translation System? — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18495

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the six-step SimulST (Simultaneous Speech-to-Text) processing pipeline, presented vertically from top to bottom. At the top, an illustration shows a reporter interviewing a man, with Chinese speech bubbles reading '总统先生您好，我想要' (Hello Mr. President, I want), indicating the input speech. Step 1, labeled with an orange circle '1', is 'Audio Acquisition', depicted as an orange rectangular box. Below it, a black waveform labeled 'audio stream S' flows downward into Step 2, 'Audio Segmentation', shown in a red rectangular box with label '2'. This step visually breaks the audio stream into segments, represented by three distinct colored boxes (blue, orange, red dashed outlines) containing gray waveforms, labeled 'audio segments S₁, S₂, ...'. A feedback loop arrow returns from the end of the segmentation block back to the start of the audio stream, suggesting continuous processing.

Step 3, 'Speech Buffer Update', is shown in a pink rectangular box with label '3'. It receives the segmented audio and updates a 'Speech Buffer B_S', illustrated as a horizontal bar filled with green rectangles representing 'audio chunks C₁, C₂, ...'. The word 'NEW' in green appears above this buffer, indicating recent updates. Below this, an arrow labeled 'buffers B_S, B_T ↓' points to Step 4, 'Hypothesis Generation', in a purple box with label '4'. This step generates a 'Hypothesis H', displayed as a multi-colored text string: 'Hello Mr. President, I want to talk about policy', where 'to talk about' is highlighted in red, and 'policy' is in green with a downward arrow. Below this, 'Emitted Output E' is shown as plain text: 'Hello Mr. President, I want'. This output feeds into a 'Text Buffer B_T', depicted as a horizontal bar with blue rectangles, also marked 'NEW' in blue. Another arrow labeled 'buffers B_S, B_T ↓' leads to Step 5, 'Buffers Selection', in a light blue box with label '5'. Here, both buffers are shown again: the Speech Buffer B_S has its first two green chunks crossed out with red X's, and the Text Buffer B_T has its first blue chunk crossed out, indicating selection or discarding of outdated content. An arrow labeled 'emitted output E ↓' points to Step 6, 'Presentation', in a yellow box with label '6'. This final step displays the output on a screen held by the same man from the top, showing the text 'Hello Mr. President, I want', completing the real-time transcription process. The entire diagram uses numbered steps, color-coded boxes, and clear directional arrows to represent the sequential and iterative nature of the SimulST system.
