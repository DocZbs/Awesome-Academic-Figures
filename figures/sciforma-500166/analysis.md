# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Robust Persian Digit Recognition in Noisy Environments Using Hybrid CNN-BiGRU Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.10857

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a block diagram illustrating the Mel-Frequency Cepstral Coefficients (MFCC) feature extraction pipeline, commonly used in speech and audio processing. The global layout is a two-row horizontal flowchart: the top row represents the forward processing stages from raw input to intermediate spectral features, while the bottom row continues the processing to produce the final output representation. The entire diagram flows from left to right, with arrows indicating the direction of data transformation.

In the top row, the process begins with an 'Input' represented by a blue waveform icon, symbolizing a raw audio signal. This input is first processed by a rounded rectangular module labeled 'Pre-Emphasis', which applies a high-pass filter to amplify higher frequencies. The output then proceeds to a 'framing' module, where the continuous signal is divided into short, overlapping time frames. Next, a 'Window' module applies a window function (e.g., Hamming or Hanning) to each frame to reduce spectral leakage. Following this, the 'FFT & Power Spectrum' module computes the Fast Fourier Transform of each windowed frame to obtain its power spectrum, representing frequency content over time.

From the 'FFT & Power Spectrum' module, a vertical arrow descends to the bottom row, connecting to the 'Mel Scale Filtering' module. This step maps the linear frequency scale of the power spectrum to the Mel scale, which approximates human auditory perception, using a set of triangular bandpass filters. The filtered outputs are then passed to a 'Log()' module, which takes the logarithm of the filter bank energies to compress the dynamic range and approximate the human ear's response to loudness. The result is fed into a 'DCT' (Discrete Cosine Transform) module, which decorrelates the log filter bank coefficients and produces the final MFCCs, typically retaining only the first 12–13 coefficients for efficiency and discriminative power.

The final output is visualized on the far left of the bottom row as a spectrogram-like heatmap, labeled 'OutPut', with a color gradient ranging from dark purple to bright yellow-green, indicating varying intensity levels across time and frequency (or cepstral coefficients). The entire diagram uses consistent visual attributes: all processing modules are white rounded rectangles with blue borders and black text; all connections are solid blue arrows with arrowheads indicating direction. The figure is captioned 'MFCC block diagram~\cite{dave2013feature}', indicating its source.
