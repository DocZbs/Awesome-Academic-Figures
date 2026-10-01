# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LDP: Generalizing to Multilingual Visual Information Extraction by Language Decoupled Pretraining — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14596

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the LDM (Language-Driven Multimodal) framework, divided into two main parts: (a) the overall LDM framework and (b) the detailed MTIM module. The global layout is structured horizontally, with the left side showing the pretraining and downstream task pipelines, and the right side detailing the MTIM module. The framework begins with an input document image and associated bounding boxes (Box_1, Box_2, ..., Box_n), represented as coordinate tuples. These inputs are processed by the SAM Image Encoder and SAM Prompt Encoder, both marked as frozen during training. The SAM Decoder Layer processes these encodings across two iterations (x2), with outputs fed into the MTIM module after each layer. The MTIM module integrates multimodal information using self-attention and an MLP, taking as input features from the SAM decoder (F_n^SAM) and K tokens derived from concatenated box and text information. The output of MTIM is then passed through an MLP to produce prediction results (pink dashed boxes labeled Text_1 to Text_n with classifications like 'question', 'answer', or 'other'). For downstream tasks, extracted text content (Text_1 to Text_n) is fed into a frozen Sentence BERT model, which generates embeddings. These embeddings are combined with the MTIM outputs via language insert operations (blue plus symbols) before being processed by another MLP to yield final predictions. The pretraining phase involves training on document images with labeled regions ('Erklärung'), while the downstream phase uses the same architecture but with task-specific labels. The legend clarifies visual elements: green dashed boxes denote label annotations, pink dashed boxes represent prediction results, blue dotted boxes indicate text information, orange dotted boxes represent box information, blue plus signs signify language insertion, gray document icons denote OCR information, and flame icons indicate trainable components. The MTIM module specifically shows how features from multiple bounding boxes are resized, concatenated, and processed through self-attention and an MLP to merge information (Merge F_n^SAM). The entire pipeline emphasizes integrating visual and linguistic cues for document understanding tasks.
