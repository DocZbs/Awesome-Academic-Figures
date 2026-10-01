# Source record: Figure 2

Integrating socioeconomic context with multimodal EEG data for improved ADHD risk screening — PLOS ONE 2026.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

Source caption (as supplied, not independently transcribed):

The proposed multimodal fusion architecture. Three parallel streams process heterogeneous inputs simultaneously: a 1D CNN-RNN pathway extracts temporal dynamics from raw EEG (producing a 256-dimensional vector), a 2D CNN pathway with integrated spatial and channel attention extracts spectro-temporal patterns from log-spectrograms (producing a 25,088-dimensional vector projected to 256 dimensions) and a feedforward SES pathway encodes socioeconomic context (producing a 64-dimensional embedding). The three representations are concatenated into a 576-dimensional multimodal vector and passed to a three-layer classification head. Solid lines indicate components present in both With-SES and Without-SES configurations; dashed lines indicate the optional SES stream used only in the full multimodal model.

Paper: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0357213

Index: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13533352/fullTextXML
