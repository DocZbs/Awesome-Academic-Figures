# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

VideoDPO: Omni-Preference Alignment for Video Diffusion Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14167

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the VideoDPO pipeline, divided into three main sections: OmniScore definition, score-ranked preference data generation, and OmniScore-based re-weighting during training.

[1] Global Layout and Structure:
The diagram is horizontally segmented into three distinct panels, each labeled with a section heading: Sec. 4.1: OmniScore (left), Sec. 4.2: Score-Ranked Preference Data (middle), and Sec. 4.3: OmniScore-Based Re-Weighting (right). Each panel has a background color—light blue for the left, light pink for the middle, and light orange for the right—to visually separate the stages. The overall flow progresses from left to right, depicting the full lifecycle from score definition to training optimization.

[2] Visual Modules and Attributes:
In Sec. 4.1, a vertical rectangular box labeled 'OmniScore' in bold blue text serves as the root. It branches into two main components: 'Quality Score' and 'Semantic Score', both in rounded rectangles with blue borders. 'Quality Score' further splits into four sub-components: Aesthetic, Motion, Consistency, and Image Quality. 'Semantic Score' connects to Vision-Language Alignment. All text is black, and boxes are white with blue outlines.

In Sec. 4.2, a prompt example ('a white cat playing with a butterfly') is shown in a gray speech bubble. Below it, a T2V Model (Text-to-Video) is represented by a gray hourglass-shaped block. This generates N videos per prompt, displayed as a stack of video thumbnails. An arrow leads to an OmniScore module (blue vertical rectangle), which outputs individual scores (e.g., 0.85, 0.82, 0.78) for each video, with thumbs-up or thumbs-down icons indicating high/low scores. These scores feed into an 'OmniScore Histogram' block, which shows a bell-shaped probability distribution curve labeled 'Prob(·) ≈'.

In Sec. 4.3, the same prompt is shown again, now with two specific video examples: one with high score s^W = 0.85 (green background, thumbs-up) and one with low score s^L = 0.78 (red background, thumbs-down). These form a preference pair. A 'Data Re-Weighting' block computes w_pair = (β/Prob(s^W, s^L))^α, where Prob(·) is derived from the histogram. This weight is applied to the loss function L_video = L_DPO(p, v^W, v^L) · w_pair. The T2V Model is shown again at the bottom, with a fire icon indicating active training.

[3] Connections and Arrows:
Arrows indicate the data and control flow. From the prompt in Sec. 4.2, an arrow points to the T2V Model, which outputs N videos. These videos are scored by the OmniScore module, whose output feeds into the OmniScore Histogram. In Sec. 4.3, arrows connect the high- and low-scored videos to the Data Re-Weighting block, which then connects to the loss function. The loss function is linked back to the T2V Model, forming a training loop. The Prob(·) from the histogram is also fed into the re-weighting computation. The entire process emphasizes how OmniScore scores are used to construct preference pairs and dynamically re-weight training samples based on their rarity in the score distribution.
