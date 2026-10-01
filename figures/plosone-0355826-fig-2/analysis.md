# Source record: Figure 2

Patent license prediction using deep survival analysis: A comparative study — PLOS ONE 2026.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

Source caption (as supplied, not independently transcribed):

Semi-parametric Cox cure rate model architecture. The model processes patent features through a shared encoder ( 1042 → 1024 → 512 dimensions) that feeds into three specialized components: a licensability predictor outputting probability p , a Cox linear predictor outputting log hazard ratio β ′ X , and a learnable baseline hazard function h 0 ( t ). The final licensing probability combines these components as P ( License by t ) = p × ( 1 − S ( t | X ) ) , where S ( t | X ) = exp ( − H 0 ( t ) × exp ( β ′ X ) ) is the survival function with Cox proportional hazards framework.

Paper: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0355826

Index: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13557344/fullTextXML
