# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

UAlign: Leveraging Uncertainty Estimations for Factuality Alignment on Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11803

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the two-stage alignment process of the UAlign framework, divided into Stage 1: Supervised Fine-Tuning (SFT) and Stage 2: Proximal Policy Optimization (PPO), depicted in parts (a) and (b) respectively.

In Stage 1 (part a), the UAlign Dataset D is sampled to produce tuples (xi, yi, ci, ei, zi), where xi represents an input question, yi the correct answer, ci the confidence score, ei the entropy score, and zi auxiliary information. An example input xi is shown as 'Which car company produces a model called Eos?'. This input is processed by Uncertainty Estimation Models, represented by a blue robot icon, which outputs confidence (Conf. 0.75) and entropy (Entro. 1.33) values. These uncertainty estimates are then combined with the original input and ground truth answer yi ('Volkswagen') to form an enriched sample. This enriched sample is fed into a Reward Model, depicted as a beige robot icon, which is trained via SFT to output a binary label 'True', indicating alignment with the desired behavior. The SFT process is indicated by blue arrows pointing from the input to the model and then to the output.

Stage 2 (part b) shows the PPO phase. A new query, 'Which Shakespeare comedy is set in Messina, Italy?', is processed by the Uncertainty Estimation Models (blue robot), which outputs confidence (0.5) and entropy (0.69). This uncertainty-aware input is then passed to the Policy LLM (green robot), which generates responses. The Policy LLM interacts with a Reference LLM (gray robot) and a Reward Model (beige robot) through a bidirectional PPO loop, represented by a large blue circular arrow labeled 'PPO'. The legend clarifies that blue arrows indicate updates with gradient descent, while gray arrows denote no gradient descent. The Reward Model provides feedback to guide the Policy LLM’s optimization, while the Reference LLM serves as a baseline for comparison during policy updates. The figure notes that although only one uncertainty estimation model is shown for simplicity, the actual framework employs two such models.
