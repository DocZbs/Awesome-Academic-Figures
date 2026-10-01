# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AVTrustBench: Assessing and Enhancing Reliability and Robustness in Audio-Visual LLMs — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.02135

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the CAVPref framework, which is designed for distributionally robust audio-visual (AV) preference optimization. The global layout is structured into three main horizontal sections: the top section illustrates preference optimization with inconsistent text (Eq. 1), the middle section shows preference optimization with inconsistent video (Eq. 2), and the bottom section demonstrates preference optimization with inconsistent audio (Eq. 3). Each of these sections contains two dashed rectangular boxes representing input and output states, connected by a blue rightward arrow indicating transformation or optimization. Within each box, icons represent the three modalities: a video player icon for video, a speaker icon for audio, and a speech bubble for text. In the inconsistent text case, the text bubble changes from white to black; in the inconsistent video case, the video player icon changes from white to black; and in the inconsistent audio case, the speaker icon changes from yellow to black, visually indicating modality inconsistency.

At the center of the diagram is the 'AV Policy Optimization Module', depicted as a black neural network-like graph with interconnected nodes, receiving inputs labeled 'Text', 'Video', and 'Audio' from the respective optimization processes. Below this module, a '+' symbol connects it to the 'Robustness Module', which is enclosed in a light green rounded rectangle. This module contains two overlapping bell-shaped curves, symbolizing distributions, with a vertical ellipsis between them suggesting multiple such distributions. Beneath the curves, the text 'Minimize worst-case risk' is displayed, along with the mathematical formulation: min{max{E_Q[L_R] : D_f(Q||P) ≤ ρ}}, followed by the composite loss function L_CAVPref = L_R^y + ηL_R^V + γL_R^A.

To the right of the Robustness Module, a line graph plots accuracy (%) on the y-axis against four categories—Existential (Head), Location, World Knowledge, and Temporal (Tail)—on the x-axis. Two lines are shown: a gray one labeled 'CAVPref (w/o Robustness)' and a green one labeled 'CAVPref'. The green line consistently outperforms the gray line, with percentage improvements noted at each point: 0.6% at Existential, 5.4% at Location, 8.2% at World Knowledge, and 10.5% at Temporal. Below the graph, a caption states: 'Improvements seen on the tail categories w/o hurting performance on the head categories.'

Arrows indicate the flow: from each modality-specific optimization process to the AV Policy Optimization Module, then from the module to the Robustness Module via the '+' operator, and finally from the Robustness Module to the performance evaluation graph. The entire diagram is framed by a light gray border, and the title 'AV Policy Optimization' is centered above the central module.
