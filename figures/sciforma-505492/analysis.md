# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Stable-TTS: Stable Speaker-Adaptive Text-to-Speech Synthesis via Prosody Prompting — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20155

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural overview of two approaches for speaker-adaptive Text-to-Speech (TTS) synthesis: 'Previous Works' and the proposed 'Stable-TTS'. The layout is divided into two horizontal sections separated by a dashed line. The top section illustrates the limitations of prior methods, while the bottom section demonstrates the advantages of the proposed Stable-TTS framework.

In the top section, labeled 'Previous Works', a green-bordered box on the left contains a 'Target Sample' consisting of a Mel spectrogram (visualized as a blue-green heatmap) and corresponding text 'How are you?'. This sample is labeled 'NOISY SPEECH'. An arrow leads from this box to a yellow rounded rectangle labeled 'Only Fine-tuning'. Below this, a green-bordered rectangular module labeled 'Style Modeling - Entangled' contains a sequence of yellow squares representing entangled style features, with '(Target)' noted beneath it. A large yellow arrow points from this module to a red-labeled output box marked '※Noisy Output※', which displays a distorted Mel spectrogram, indicating poor quality due to noise propagation during fine-tuning.

The bottom section, labeled 'Stable-TTS', introduces an improved approach. On the left, a blue-bordered box labeled 'Prior Sample' contains a Mel spectrogram and text 'Hello, World.', labeled 'CLEAN SPEECH'. Two arrows extend from this box: one to a light-blue rounded rectangle labeled 'Fine-tuning with Prior-preservation', and another to a composite module below it. This composite module consists of two side-by-side boxes: a blue box labeled 'Prosody Modeling' containing numerical tokens like '20 ... 3' and marked '(Prompt)', and a green box labeled 'Timbre Modeling' with green squares and marked '(Target)'. These components represent disentangled modeling of prosody (from clean prior) and timbre (from target). A large blue arrow leads from this module to the final output, labeled 'Clean Output', which shows a clear, well-defined Mel spectrogram, demonstrating high-quality speech generation despite noisy target inputs.

The figure visually contrasts the entangled style modeling of previous works with the disentangled, prior-preserving approach of Stable-TTS, emphasizing how leveraging clean prior samples for prosody modeling enables robust, high-quality voice synthesis even when fine-tuning on noisy data.
