# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Discourse Features Enhance Detection of Document-Level Machine-Generated Content — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12679

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of the DTransformer model, designed to integrate both structural and semantic features for document-level classification. The global layout is divided into two parallel processing streams that converge into a shared decoder module. On the left, raw text input is processed through an NLTK split module (teal rounded rectangle), breaking the text into individual sentences labeled Sentence 1 through Sentence n. These sentences are then fed into a Pretrained PDTB BERT model (large orange rounded rectangle), which generates sentence representations including a [CLS] token and Code 1 through Code n for each sentence. On the right, the same text undergoes identical preprocessing via another NLTK split module, followed by a Sentence Transformer Encoder (large pink rounded rectangle), which produces a separate [CLS] representation for each sentence, denoted as [CLS]₁, [CLS]₂, ..., [CLS]ₙ. This encoder is replicated N times, indicated by the '×N' symbol on its side. The outputs from both branches are combined: the [CLS] token and code representations from the left branch are concatenated with the [CLS] tokens from the right branch, and this combined sequence is augmented with Learned Positional Encoding (indicated by a circle with a plus sign). This enriched sequence is then fed into the Doc Transformer Decoder (large gray rounded rectangle), which consists of N stacked layers (also marked '×N'). Each layer contains a Multi-head Attention block (orange), followed by Add & Norm (yellow), then a Cross Multi-head Attention block (orange) that attends to the encoded sentence representations from the right branch, again followed by Add & Norm (yellow), a Feed-forward block (blue), and finally another Add & Norm (yellow). The output from the final decoder layer is passed through a Linear layer (purple) and then a Softmax layer (green) to produce Output Probabilities. Arrows indicate the flow of data: from text inputs downward through preprocessing and encoding, then converging at the positional encoding step before entering the decoder. The cross-attention connections are shown as horizontal arrows from the right branch’s [CLS] tokens to the decoder’s Cross Multi-head Attention blocks. The entire pipeline is designed to leverage both semantic information from BERT and structural discourse features from the Sentence Transformer Encoder, enabling enhanced document classification performance.
