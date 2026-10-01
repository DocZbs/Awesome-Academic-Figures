# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DecDEC: A Systems Approach to Advancing Low-Bit LLM Quantization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20185

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the inference process of a large language model (LLM), divided into two main phases: Prefill and Decode. The global layout is structured horizontally, with the leftmost section showing the internal architecture of a decoder block, followed by the Prefill phase, and then the Decode phase, which is further subdivided into multiple output streams labeled 'computer', 'science', and 'researcher'.

In the leftmost part, the decoder block is depicted as a vertical stack of components enclosed in a rectangular box. From bottom to top, it includes: a 'Normalization' layer, followed by 'Linear 1 (Q/K/V proj)' in a gray rectangle, then 'Self-Attention', 'Linear 2 (output proj)' in gray, another 'Normalization', 'Linear 3 (gate/up proj)' in gray, 'Activation Func', and finally 'Linear 4 (down proj)' in gray. These layers are connected sequentially with solid arrows indicating forward flow. A dashed line loops from the top of this block back to the bottom, suggesting a recurrent or residual connection within the block.

The Prefill phase, shaded in light gray, contains a vertical stack of three 'Decoder' blocks, each represented as a white rectangle with black border. At the bottom, input tokens 'I am a' are shown feeding into the lowest Decoder. An upward arrow connects each Decoder to the one above, with an ellipsis between the middle and top Decoders indicating additional layers. The top Decoder outputs to the label 'computer', which is positioned above the Prefill block.

The Decode phase follows to the right, consisting of three parallel vertical stacks, each labeled at the top with a target word: 'computer', 'science', and 'researcher'. Each stack contains a sequence of 'Decoder' blocks, with the first Decoder receiving an input token ('computer', 'science', or 'researcher') at the bottom. Solid upward arrows connect the Decoders within each stack, and an ellipsis indicates continuation. The top Decoder in each stack points to its respective label above. A horizontal bracket below the Decode phase spans all three stacks and is labeled 'Decode'.

Connections are primarily solid arrows indicating data flow from lower to higher layers. The dashed line from the decoder block’s output back to its input suggests a feedback or residual mechanism. The Prefill phase feeds into the Decode phase via a solid arrow from the top Decoder of Prefill to the first Decoder of the 'computer' stream, and similarly for the other streams, though only the 'computer' and 'science' connections are explicitly drawn. The overall structure emphasizes the separation between the initial prefill stage, where the full context is processed, and the subsequent decode stage, where tokens are generated autoregressively for different output sequences.
