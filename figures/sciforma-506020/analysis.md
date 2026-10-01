# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Speech Recognition With LLMs Adapted to Disordered Speech Using Reinforcement Learning — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00039

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a method for using a large language model (LLM), specifically Gemma 2B, for automatic speech recognition (ASR) through a multi-stage pipeline involving audio tokenization, clustering-based remapping, supervised fine-tuning, and reinforcement learning with alignment rewards. The global layout is left-to-right, depicting a data flow from raw audio input to final model output, with feedback loops for reward-based optimization.

On the far left, a blue waveform icon represents raw audio input, which is processed by a blue trapezoidal module labeled 'Audio Tokenizer'. This module outputs a set of audio tokens, visualized as purple rectangular blocks. These audio tokens are then fed into a clustering component, shown as a scatter plot with yellow, red, and blue points grouped into clusters, indicating unsupervised grouping of embeddings. A vertical stack of yellow rectangles labeled 'vocab' represents the LLM’s vocabulary space, and arrows from the clusters point to corresponding purple tokens below, illustrating a 'Remapping' process where audio tokens are mapped to vocabulary tokens based on cluster assignments.

The remapped audio tokens are passed to a central green rectangular block labeled 'Gemma 2B', marked with a small flame icon, indicating it is the primary LLM used in the pipeline. This model generates 'text tokens', represented as yellow rectangular blocks, which are then converted into a string output: 'Hello word.' — shown in a beige rounded rectangle labeled 'Model Output'.

Above this main path, a 'True Transcript' box contains the correct text: 'Hello world!'. A red arrow connects this true transcript directly to a pink rectangular box labeled 'Alignment Reward', which contains two subcomponents: 'Meaning Preservation Reward Model (Gemma 2B)' and 'Word Error Rate'. These components are combined via a '+' symbol, indicating the total reward is a sum of both metrics. A red arrow labeled 'Reward Signal' flows from the Alignment Reward box back to the Gemma 2B model, forming a reinforcement learning loop that guides the model to improve its output by minimizing word errors and preserving semantic meaning.

The figure visually emphasizes the integration of clustering for vocabulary alignment, supervised training on disordered speech (implied by the remapping), and reinforcement learning for fine-grained optimization. The color coding is consistent: blue for audio processing, purple for audio tokens, yellow for text/vocabulary tokens, green for the LLM, and pink for the reward mechanism. Text labels are clear and positioned near relevant components, with arrows indicating data and control flow. The overall structure reflects a hybrid approach combining unsupervised clustering, supervised learning, and reinforcement learning to enhance ASR performance.
