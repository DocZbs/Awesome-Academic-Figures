# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Progressive Transformer for Unifying Binary Code Embedding and Knowledge Transfer — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11177

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two distinct two-stage architectural frameworks for training a Transformer-based model on binary code, labeled as (a) Traditional two-stage architecture and (b) Two-stage framework with multi-modality. Both architectures are structured into three main vertical sections: Data Pre-processing, (i) MLM Pretraining, and (ii) Fine-tuning Task.

In (a), the traditional approach begins with Data Pre-processing, where a Binary File is manually extracted into Raw Byte sequences (e.g., '55 48 89 E5 EB 08'). This raw byte sequence is then passed through an 'Apply Mask' step, replacing one byte with '[MASK]' (e.g., '55 48 89 [MASK] EB 08'), which feeds into the MLM Pretraining stage. Here, the masked input undergoes 'Embed Input' via a 'Raw Byte Embedding' layer before being processed by a light blue rounded rectangle labeled 'Transformer'. The output predicts the masked token, shown as '[MASK] = E5'. A large blue arrow labeled 'Transfer' indicates the pre-trained Transformer is used in the Fine-tuning Task, where the same raw byte embedding process is applied to the full original sequence ('55 48 89 E5 EB 08') to perform a 'Target Task'.

In (b), the multi-modal framework enhances the pre-processing stage. The Binary File undergoes Reverse Engineering to extract multiple high-level modalities: Assembly Code, Control Flow Graph (CFG), and Dynamic Trace. These are then subjected to Feature Engineering, producing sequences of tokens for each modality (e.g., CFG: 't1 t2 t3 t4 t5 t6 t7 t8'; Dynamic Trace: 't1 t2 t3 t4 t5 t6 t7 t8'; Assembly: 'push rbp mov rbp, rsp jmp 0x1E'). These are concatenated into a single input stream. The 'Apply Mask' step masks tokens across these modalities (e.g., masking 't7' in CFG, 't4' in Dynamic Trace, and 'rbp' in Assembly). In the MLM Pretraining stage, this masked multi-modal input is embedded via a 'Concatenated Embedding' layer before being fed into the Transformer. The output predicts multiple masked tokens simultaneously, shown as '[MASK] = E5, [MASK] = 21, [MASK] = 0x1E ...'. The pre-trained model is transferred to the Fine-tuning Task, where the input is now an 'Assembly Embedding' layer processing the full assembly instruction sequence ('push rbp mov rbp, rsp jmp 0x1E'), leading to the Target Task.

Visually, both architectures use rectangular boxes with rounded corners for modules, color-coded for clarity: light blue for Transformers, yellow for Raw Byte Embedding, purple for Concatenated Embedding, red for Assembly Embedding, and green for prediction outputs. Arrows indicate data flow, with thick gray arrows for pre-processing steps and a large blue arrow for model transfer. The figure uses dashed boxes to group related components, such as the high-level modalities in (b). Text labels are clear and positioned near relevant components, with specific examples of byte sequences and assembly code provided for illustration.
