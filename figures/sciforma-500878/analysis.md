# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Gramian Multimodal Representation Learning and Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11959

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a side-by-side comparison illustrating the core intuition behind the GRAM (Geometric Representation Alignment Measure) framework, using two distinct scenarios to demonstrate how semantic alignment across modalities affects the geometric volume of a parallelotope formed by embedding vectors. The global layout is split into two symmetrical panels, each containing a 3D coordinate system (x, y, z axes) with origin at O, a shaded conical region representing the embedding space, and multiple modalities projected as points connected by dashed lines forming a parallelotope. Each panel includes visual examples of input data (video frames and audio waveforms) linked to their corresponding modality points, along with a descriptive caption and a concluding statement about volume size.

In the left panel, labeled 'Semantically aligned data → small volume', the embedding vectors for Modality1 (blue), Modality2 (green), and Modality3 (orange) are closely clustered, forming a narrow, low-volume parallelotope. These modalities correspond to a dog barking in a reverberant environment: video frames show a black dog on a red surface, an audio waveform represents the barking sound, and a thermal image (Modality1) shows a heat signature of the dog. A green curved arrow connects the text description 'A black dog in the foreground barking in a reverberant environment' to the Modality2 point, indicating semantic grounding. The visual elements are color-coded: Modality1 is blue, Modality2 is green, Modality3 is orange, and Modalityk (a general placeholder) is gray. The parallelotope is shaded in light pink, and the coordinate axes are marked with ticks from -1 to 1.

In the right panel, labeled 'Semantically misaligned data → large volume', the same structure is shown but with embedding vectors spread out widely, resulting in a large-volume parallelotope. The modalities here represent a woman playing guitar in a closed space: video frames show racing cars, an audio waveform is present, and a thermal image (Modality1) shows a hand. The text description 'A woman playing the guitar at large volume in a closed space' is linked via a green arrow to Modality2, highlighting the mismatch between the text and the visual/audio inputs. The color coding remains consistent: Modality1 (blue), Modality2 (green), Modality3 (orange), Modalityk (gray). The parallelotope is again shaded light pink, and the coordinate system is identical to the left panel.

Connections are represented by curved arrows: black arrows link video frames to Modalityk, orange arrows link audio waveforms to Modality3, and blue arrows link thermal images to Modality1. Dashed lines connect the origin to each modality point, forming the edges of the parallelotope. The figure visually conveys that when modalities are semantically aligned, their embeddings are close, leading to a small parallelotope volume; conversely, misalignment results in a large volume, which serves as a quantitative measure of alignment quality.
