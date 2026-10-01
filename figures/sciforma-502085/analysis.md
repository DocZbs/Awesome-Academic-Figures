# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an attention mechanism in a sequence-to-sequence model, specifically showing how attention vectors are computed over a sequence of hidden states. The global layout is horizontal, depicting a left-to-right processing flow through four sequential steps, each corresponding to a time step in the input sequence. At the bottom, four input tokens — 'sos', 'Good', 'morning', and 'eos' — are shown, each feeding into a yellow rectangular block representing the embedding or input representation at that time step. These yellow blocks feed upward into a series of four light blue rectangular blocks labeled h1, h2, h3, and h4, which represent the concatenated hidden states from both forward and backward directions (as per the caption). Each blue block receives input from the previous blue block via a rightward arrow, indicating sequential dependency, and also receives input from the corresponding yellow block below via an upward arrow. The initial state h0 is shown entering the first blue block (h1) from the left. Above the blue blocks, there are four upward arrows connecting each blue block to a single pink rectangular block located at the top right, indicating that the hidden states are used as inputs to compute an attention vector. This pink block is labeled 'a' and outputs the final attention vector. Additionally, the last blue block (h4) feeds into another pink block labeled 'z', which corresponds to the final hidden state of the sequence. According to the caption, this 'z' is equivalent to the initial decoder state s0, and the attention computation occurs within the pink blocks. The visual modules are color-coded: yellow for input embeddings, blue for hidden states, and pink for attention computation units. All connections are represented by solid black arrows, indicating the direction of data flow. The structure reflects a standard attention mechanism where the context vector 'a' is computed by weighting the hidden states based on their relevance to the current decoding step, with 'z' serving as the initial state for the decoder.
