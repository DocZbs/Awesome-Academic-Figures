# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Curriculum Learning for Cross-Lingual Data-to-Text Generation With Noisy Data — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13484

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct curriculum learning schedules for training, labeled (a) Expanding and (b) Annealing, each depicted as a series of horizontal rows representing successive training phases, with progression indicated by a vertical arrow labeled 'Training Phases' pointing downward on the left side. In both subfigures, rectangular blocks represent shards, with each block containing white text indicating the shard number (Shard 1, Shard 2, or Shard 3). The blocks are shaded in varying tones of blue, with lighter blue for earlier phases and darker blue for later phases, suggesting progression or increasing complexity.

In subfigure (a) Expanding, the training begins with a single Shard 1 in the first phase. In the second phase, Shard 2 is added alongside Shard 1, forming a two-block row. In the third phase, Shard 3 is introduced, resulting in a row with all three shards. This illustrates a progressive expansion where new shards are incrementally added over time.

In subfigure (b) Annealing, the training starts with all three shards (Shard 1, Shard 2, Shard 3) in the first phase. In the second phase, Shard 3 is removed, leaving only Shard 1 and Shard 2. In the third phase, Shard 2 is also removed, leaving only Shard 1. This demonstrates a reverse process where shards are gradually removed as training progresses, focusing on simpler components toward the end.

Each row corresponds to a training phase, and the horizontal arrangement within each row indicates the set of shards active during that phase. The visual contrast between the two schedules highlights different strategies: expanding increases model complexity over time, while annealing reduces it. The figure uses consistent block shapes and text formatting across both subfigures, with color gradients reinforcing the temporal progression from top to bottom.
