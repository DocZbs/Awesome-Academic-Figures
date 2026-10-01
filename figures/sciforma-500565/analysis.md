# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Glimpse: Enabling White-Box Methods to Use Proprietary Models for Zero-Shot LLM-Generated Text Detection — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11506

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Fast-DetectGPT method enhanced with Glimpse, a technique for estimating the full probability distribution of a language model (GPT) from partial observations returned by its API. The global layout is divided into two main sections: the top section outlines the three-step detection pipeline—Sample, Score, and Compare—while the bottom section details how Glimpse reconstructs the full token distribution from limited API outputs.

In the top section, a passage x (e.g., “President Joe Biden claimed in an interview with The Weather Channel...”) is fed into the Fast-DetectGPT with Glimpse framework. Step (1) Sample uses a modified GPT model (denoted as \widetilde{\text{GPT}} in red-bordered blue rectangles) to generate N alternative continuations \tilde{x}_1 to \tilde{x}_N from input x. Step (2) Score computes the conditional probabilities p(\tilde{x}_i | x) for each generated sample using the same \widetilde{\text{GPT}} model, along with the original probability p(x) of the input passage. Step (3) Compare evaluates whether the normalized log-likelihood difference, \frac{\log p(x) - \bar{\mu}}{\bar{\sigma}}, exceeds a threshold \epsilon; if yes, the passage is classified as coming from GPT; otherwise, it is deemed from another source.

The bottom section explains the Glimpse mechanism. It begins with a green GPT box receiving input x via API and returning only the top-K token probabilities (e.g., for the partial observation 'President ___', the top-3 tokens are 'Joe' at 37%, 'Biden' at 24%, and 'Donald' at 11%). This partial observation is then processed by the Glimpse module (a green rounded rectangle), which estimates the full probability distribution over all possible tokens. The resulting 'Full Distribution' table lists tokens ranked by estimated probability, including lower-ranked tokens like 'Trump' (8%), 'Obama' (3%), and 'Barack' (2%), which were not in the original top-K output. A callout notes these are 'Algorithm-estimated probabilities'.

Visual elements include blue boxes for inputs/outputs, red-bordered blue rectangles for \widetilde{\text{GPT}} models, green for Glimpse and the base GPT, and dashed lines indicating data flow between components. Text labels specify steps, variables, and probability values. The figure emphasizes that the token column in the distribution tables is for reference only and not required for computing the conditional probability curvature metric used in detection.
