# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Discrepancy-Aware Attention Network for Enhanced Audio-Visual Zero-Shot Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11715

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates two distinct types of discrepancies in audio-visual datasets: quality discrepancies and content discrepancies, depicted in subfigures (a) and (b), respectively.

In subfigure (a), the global layout is divided into two parallel modalities: 'Visual Modality' at the top and 'Audio Modality' at the bottom, enclosed within a large rounded rectangle. The visual modality is represented by a filmstrip containing sequential video frames, with two highlighted segments (in brown) indicating regions of interest. These segments are connected via dashed orange arrows to smaller images showing object detection bounding boxes (red rectangles) around cars and other objects, labeled 'Feature Extraction'. Similarly, the audio modality is shown as a blue waveform, with two highlighted segments (in light blue) linked via dashed blue arrows to smaller waveform snippets, also labeled 'Feature Extraction'. The extracted features from both modalities—represented as stacked orange cubes for visual and blue cubes for audio—are fed into a central gray box labeled 'Information Entropy', which computes entropy values (shown as bar charts). The output of this computation influences the feature extraction process through feedback loops (dashed arrows), suggesting an adaptive weighting mechanism where the visual modality contributes more due to higher information content, leading to potential bias in model predictions.

Subfigure (b) presents two sample cases, 'Sample1' and 'Sample2', each illustrating content discrepancies within the same semantic category ('Play Basketball'). Each sample contains a filmstrip of video frames and a corresponding audio waveform. In Sample1, the visual frames focus on a basketball player in action, and the audio waveform is highlighted in orange; the feature extraction produces an orange grid pattern. In Sample2, the visual frames emphasize the basketball itself, and the audio waveform is highlighted in blue; the feature extraction yields a blue grid pattern. Both samples undergo 'Training', indicated by yellow downward-pointing arrows, resulting in different parameter updates shown as 2x2 matrices with theta symbols (θ) representing learned weights. The matrices for Sample1 transition from a diagonal structure to an identity matrix, while Sample2 transitions to a zero matrix in the top-left and bottom-right blocks. These differences lead to distinct 'Evaluation' outcomes, shown in blue downward arrows: Sample1 outputs 'Play Basketball (player)' with 'player' in red, and Sample2 outputs 'Play Basketball (ball)' with 'ball' in red, highlighting how varying emphasis in audio-visual content leads to divergent recognition results despite the same activity.

The overall structure uses color-coded elements (orange for visual, blue for audio) and directional arrows to convey data flow and processing stages. Text labels are placed directly below or beside components for clarity. The figure effectively communicates how quality imbalances between modalities and content variations within samples can affect model behavior in audio-visual learning tasks.
