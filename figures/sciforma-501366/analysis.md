# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Uncertainty-Aware Hybrid Inference with On-Device Small and Remote Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12687

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of a proposed Uncertainty-aware Heterogeneous Large Model (U-HLM) system operating over a wireless network between a mobile device and a server. The diagram is divided into two main regions: a yellow-toned left section representing the small language model (SLM) inference on the client device, and a blue-toned right section representing large language model (LLM) inference on the server side. The overall workflow proceeds in four numbered stages.

Stage 1, labeled 'SLM inference', begins at the bottom-left with an input token represented by a yellow circle inside a square. This token is fed into a yellow cube labeled 'SLM'. The SLM processes the input and outputs a vocabulary distribution, depicted as a yellow elongated oval containing a smooth probability density curve. From this distribution, a generated token is selected, shown as a blue diamond inside a square, indicating the output of the SLM stage.

Stage 2, labeled 'measure uncertainty & Op Tx', involves assessing the confidence or uncertainty of the SLM's output. This is visually represented by a yellow triangle pointing upward from the vocabulary distribution, symbolizing the uncertainty measurement. Based on this assessment, a decision is made whether to transmit the token wirelessly to the server. The wireless transmission is illustrated by a signal icon (wavy lines) emanating from the SLM side toward the server side. If the uncertainty is high, the token is sent; if low, it may be retained locally.

Stage 3, labeled 'LLM inference', occurs on the server side, which is depicted with a cluster of server racks and a neural network icon. The received token (represented by a yellow circle) is fed into a blue cube labeled 'LLM'. The LLM performs inference and generates its own vocabulary distribution, shown as a blue elongated oval with a probability density curve. This distribution is then used to select a final generated token, represented by a blue diamond inside a square, which is the output of the LLM.

Stage 4, labeled 'reject & resample', describes a feedback mechanism. If the LLM determines that the received token is unreliable or uncertain (indicated by a dashed arrow looping back from the LLM’s output distribution), it triggers a rejection and resampling process. A blue diamond-shaped icon labeled 'reject & resample' is shown, which sends a signal back to the SLM side via the wireless link, prompting the SLM to generate a new token. This creates a closed-loop system where the LLM can request re-generation from the SLM if needed.

Connections are color-coded: orange arrows represent data flow within the SLM pipeline, while blue arrows represent data flow within the LLM pipeline and the wireless communication between them. The wireless link is marked with signal icons and includes a small yellow oval with a wavy line, possibly indicating a packet or transmission unit. The entire system is designed to balance computational load between device and server while ensuring high-quality output through uncertainty-aware decision-making.
