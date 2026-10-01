# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRIMEdit: Probability Redistribution for Instance-aware Multi-object Video Editing with Benchmark Dataset — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12877

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure is divided into two main sections: a top comparative visualization and a bottom technical diagram explaining the proposed method.

[1] Global Layout and Structure:
The top section presents three side-by-side bar charts comparing different methods: 'Vanilla Cross Attention [46]', 'Dense Diffusion [32]', and 'Ours Redistribution'. Each chart displays probability distributions across four categories labeled S, T, E, P. Below each chart, red or blue text describes the editing quality ('Unfaithful editing', 'Prone to artifact', 'Faithful editing Less artifact'), with references to Figure 6-(b), 6-(c), and 6-(d) respectively. A dashed horizontal line separates this from the bottom section, which illustrates the mechanism of the proposed method using matrices and color-coded squares.

[2] Visual Modules and Attributes:
In the top section:
- The 'Vanilla' chart shows a blue bar for S at 0.8, and small bars for T, E, P at 0.1, 0.05, 0.05 respectively.
- The 'Dense Diffusion' chart has a pink bar for S at 0.1, a blue bar for T at 0.8, and small bars for E, P at 0.05, 0.05. Red downward arrows indicate reduction in S and other tokens, while a blue upward arrow indicates increase in T. Text above reads 'Maximize T, minimize other'.
- The 'Ours' chart shows stacked bars: S has 0.4 (pink on top of blue), T has 0.25 (blue on top of red), E has 0.05 (blue on top of red), P remains 0.05 (blue). Dashed arrows indicate redistribution from S to T and E. Text below states 'Faithful editing Less artifact'.

In the bottom section:
- On the left, two vertical columns labeled 'm' and 'Q' show black, brown, white, and gray squares arranged in rows indexed by 'i'.
- In the center, two horizontal matrices labeled 'A₀,j' and 'A₁,j' represent attention weights. 'A₀,j' has gray, black, and white squares under headers A_S, A_T, A_E, A_P, A_P. 'A₁,j' has red, blue, green, white squares under the same headers. Dashed blue arrows connect A_S, A_T, A_E in A₀,j to corresponding positions in A₁,j.
- On the right, a legend explains the color coding: gray square = 1 - ΣA₀,j∈P; black square = 0; white square = Unchanged; red square = -λₛ; blue square = +λₛ·λᵣ/Nₜ; green square = +λₛ·(1 - λᵣ). This legend is enclosed in a dashed blue box for unchanged values and a dashed red box for modified values.

[3] Connections and Arrows:
- In the top section, dashed arrows in the 'Ours' chart point from the top of the S bar to the tops of the T and E bars, indicating probability redistribution.
- In the bottom section, dashed blue arrows connect the A_S, A_T, A_E positions in the A₀,j matrix to their corresponding positions in the A₁,j matrix, illustrating how attention weights are adjusted. The legend on the right links the colored squares in A₁,j to specific mathematical adjustments involving λₛ, λᵣ, and Nₜ.
