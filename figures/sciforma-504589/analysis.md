# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Long-Form Speech Generation with Spoken Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18603

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the tokenization and decoding processes in an audio processing pipeline, specifically focusing on how input and output windowing are applied with a 5-token window width and a 2-token overlap. The diagram is divided into two main sections: (a) Tokenization on the left and (b) Decoding on the right.

In section (a) Tokenization, a continuous waveform representing an audio signal is shown at the top. This waveform is segmented into overlapping windows using a sliding window approach. Each window contains five tokens, represented by orange circles, with adjacent windows sharing two tokens, indicating a 2-token overlap. The segmentation is visually indicated by dashed rectangular outlines around each group of five orange circles. The first window starts from the beginning of the waveform, and subsequent windows slide forward by three tokens (since the window size is five and the overlap is two). The process continues until the end of the waveform, where the final window may contain fewer than five tokens, which are still included as part of the tokenized sequence. A label 'Repeated Padding' appears above the waveform, suggesting that padding is applied to ensure consistent window sizes or to handle edge cases during tokenization.

In section (b) Decoding, the process is reversed. A sequence of orange circles (tokens) is shown at the top, representing the encoded or predicted token sequence. These tokens are grouped into windows of five, again with a 2-token overlap, similar to the tokenization step. Each window is then mapped back to a segment of the original waveform, which is displayed below each token window. The waveform segments are enclosed in light blue rectangles, indicating the reconstructed audio chunks corresponding to each token window. The reconstruction proceeds sequentially, with each window producing a waveform segment that aligns with the previous one, forming a continuous output waveform. The alignment between token windows and waveform segments is shown via vertical dashed lines connecting the tokens to their corresponding waveform outputs.

The overall layout is horizontal, with the tokenization process flowing downward from the raw waveform to the token sequence, and the decoding process flowing downward from the token sequence back to the reconstructed waveform. Gray arrows indicate the direction of data flow in both processes. The visual modules consist primarily of waveforms (black-and-white audio signals), orange circles (tokens), and light blue rectangles (reconstructed audio segments). Text labels such as 'Repeated Padding', '(a) Tokenization', and '(b) Decoding' provide context for each section. The diagram emphasizes the symmetry between tokenization and decoding, highlighting how overlapping windows enable smooth transitions and continuity in both directions.
