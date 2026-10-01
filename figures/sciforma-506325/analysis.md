# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MMVA: Multimodal Matching Based on Valence and Arousal across Images, Music, and Musical Captions — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01094

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a text-to-music cross-modal retrieval system, structured as a left-to-right workflow with distinct processing stages. On the far left, a rectangular box labeled 'Query Text' contains the example input: 'The recording features an arpeggiated electric guitar melody. It sounds mystical, intense and suspenseful.' This text is processed by a component labeled 'Text VA Predictor,' which outputs a two-dimensional vector representing valence (0.41) and arousal (0.74), displayed in a yellow-bordered box. This vector serves as the query embedding.

To the right, under the heading 'Retrieval Candidates,' four music audio clips are shown vertically, each labeled Candidate 1 through Candidate 4, represented by waveform graphics. Each candidate is processed by a 'Music VA Predictor' module, which extracts its own valence and arousal values. These are displayed in light blue boxes adjacent to each candidate: Candidate 1 has valence 0.75 and arousal 0.13; Candidate 2 has valence 0.35 and arousal 0.71; Candidate 3 has valence 0.45 and arousal 0.55; Candidate 4 has valence 0.61 and arousal 0.24.

Arrows connect each music candidate’s VA vector to a central vertical stack labeled 'Distance Vector,' which computes the Euclidean or similar distance between the query VA vector and each candidate’s VA vector. The resulting distances are shown in a gray column: 0.7, 0.07 (highlighted in red), 0.19, and 0.54. The smallest distance, 0.07, corresponds to Candidate 2, indicating the closest match in the VA space.

Finally, a thick orange arrow labeled 'Retrieval' points from the Distance Vector to a waveform graphic at the bottom left, labeled 'Retrieved Music' and identified as 'Candidate 2,' signifying the output of the retrieval process. The overall layout is horizontal, progressing from text input on the left to music output on the lower left, with the candidate evaluation occurring in parallel on the right. The visual modules are primarily rectangular boxes with clear labels, and arrows indicate data flow and computation direction. The color coding—yellow for the query VA, blue for candidate VAs, and red for the minimum distance—enhances interpretability. The figure effectively demonstrates how semantic similarity in valence-arousal space enables cross-modal retrieval from text to music.
