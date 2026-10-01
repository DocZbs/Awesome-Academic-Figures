# Source record: Figure 1

Unlocking precision diagnostics: A multimodal framework integrating metabolomics with advanced machine learning techniques — PLOS ONE 2026.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

Source caption (as supplied, not independently transcribed):

Workflows for concatenation, ensemble, and cascade deep forest. A) Straightforward Concatenation and Concatenation-Ensemble: In the Straightforward Concatenation approach, datasets are directly merged, followed by nested-stratified cross-validation and evaluation using SVM models. In the Concatenation-Ensemble approach, a base model combining SVM-poly, Random Forest (RF), and XGBoost (XGB) is trained on the validation set to generate predictions, which are then used to train a meta-model for final evaluation. B) Cascade Deep Forest: Datasets are input into cascade levels where Random Forests and Extra Trees independently generate probabilistic predictions. The final output integrates probabilities across all layers using an average-probabilities strategy.

Paper: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0318473

Index: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13268153/fullTextXML
