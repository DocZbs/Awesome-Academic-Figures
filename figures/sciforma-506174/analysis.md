# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ICONS: Influence Consensus for Vision-Language Data Selection — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00654

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a two-stage method for selecting high-quality training data across multiple tasks, named 'Specialist' and 'Generalist'. The global layout is divided into three main vertical sections: Inputs on the left, Stage 1: Specialist (Task i) in the center, and Stage 2: Generalist on the right. The entire process is repeated T times, as indicated by an arrow looping from the bottom of the Specialist stage back to the Inputs section.

In the Inputs section, two sets of data are shown: Train Data D (represented by yellow document icons with images) and Target Tasks T (represented by green document icons with images), which are combined via a plus symbol to feed into Stage 1.

Stage 1: Specialist (Task i) consists of three sequential steps. Step 1: Warmup Training takes as input the base LLaVA model f_base and a small subset of training data D_warmup ⊂ D. It applies LoRA adaptation to produce f_warmup = LoRA(f_base, D_warmup). This step is visually represented by a gray bar chart labeled f_base transforming into a similar chart labeled f_warmup.

Step 2: Gradient Computation uses f_warmup to compute gradients on both the full training data D (yellow grid) and target task validation data T_i (green grid), producing outputs g̃ (training data gradient) and g′ (target task val data gradient). These are depicted as grids of yellow and green squares respectively.

Step 3: Influence Matrix Computation takes g̃ and g′ as inputs and computes their outer product, resulting in an influence matrix. This matrix is then averaged over each row to produce per-sample influence scores for Task i. The visual representation shows a multiplication of two grids yielding a larger grid, followed by row-wise averaging.

Stage 2: Generalist receives as input the per-task influence scores from Stage 1, along with the original training data. For each task k (from 1 to K), it computes influence scores and applies a threshold (e.g., t1 = 80% average scores) to determine if a sample should receive a vote (Score > tk? → Vote = 1 or 0). This is shown as a diamond-shaped decision node for each task. The votes are aggregated via Majority Voting across all tasks.

The final step, Influence Consensus, sums all votes for each sample and ranks them to select the top 20% of training samples. The output is labeled '20% of Train Data', represented by a single yellow document icon with an image. A mathematical formula is displayed at the top right: I_vote(z_i) = Σ^K_{k=1} 1[I_k(z_i) > τ_k], indicating the voting mechanism where I_k(z_i) is the influence score for sample z_i on task k, and τ_k is the threshold for task k.
