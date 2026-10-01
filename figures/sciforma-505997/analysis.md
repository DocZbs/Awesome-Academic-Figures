# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Large-Scale Study on Video Action Dataset Condensation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.21197

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents three distinct temporal sampling strategies—Naive Sampling, Segment Sampling, and Sliding-window Sampling—for processing synthetic video data into input clips, each followed by an interpolation step. The overall layout is divided into three vertically aligned columns labeled (a), (b), and (c), enclosed within a dashed blue rectangular boundary. Each column illustrates a different sampling approach applied to a 'Synthetic Video' represented as a horizontal sequence of light blue rectangular frames. Below each sampling method, a purple rounded rectangle labeled 'Interpolation' processes the sampled frames, leading to a green rectangular sequence labeled 'Input Clip' at the bottom.

In column (a) Naive Sampling, the entire synthetic video is treated as a single continuous clip. A solid black arrow points directly from the full video sequence to the 'Interpolation' module, indicating no segmentation or selection; the entire video is passed through interpolation to produce the input clip.

In column (b) Segment Sampling, the synthetic video is divided into non-overlapping segments using vertical dashed lines. One such segment, consisting of two adjacent frames, is selected and passed via a solid black arrow to the 'Interpolation' module. This implies treating the video as a series of independent clips, where only one segment is chosen per sampling instance.

In column (c) Sliding-window Sampling, a red dashed rectangular window highlights a subset of consecutive frames from the synthetic video. A red arrow beneath the window indicates a sliding motion to the right, suggesting sequential sampling over time. The selected window’s content is then fed into the 'Interpolation' module, producing the input clip. This method emphasizes temporal continuity and overlapping sampling.

All three methods share the same downstream processing: the 'Interpolation' module, depicted as a purple rounded rectangle with black text, transforms the sampled frames into a standardized green rectangular sequence labeled 'Input Clip'. The visual attributes include consistent color coding—light blue for synthetic video frames, purple for interpolation, and green for output clips—and uniform shapes (rectangles and rounded rectangles) to denote data and operations. Arrows are solid black except for the red arrow in (c), which visually emphasizes the sliding motion. The figure’s caption clarifies that these methods represent different temporal processing approaches, with interpolation being a common subsequent step regardless of sampling strategy.
