# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Speech Retrieval-Augmented Generation without Automatic Speech Recognition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16500

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two main components: (a) a speech retriever architecture and (b) the SpeechRAG framework compared with a cascaded ASR-based system.

[1] Global Layout and Structure:
The figure is divided into two main panels. Panel (a) on the left illustrates the speech retriever’s internal structure, showing a dual-path design for text and speech embeddings. Panel (b) on the right compares the proposed SpeechRAG framework (top path) with a cascaded ASR-based system (bottom path), both processing an audio passage to answer a text query. The layout flows from left to right, indicating data flow and processing stages.

[2] Visual Modules and Attributes:
In panel (a), the speech retriever has two parallel branches. The left branch (blue) handles text: it starts with a 'Text Document' (training) or 'Text Query' (inference), which goes through a 'Text Embedding' module (blue trapezoid with gear icon) to produce an 'Embedded Text Sequence' (blue bars). This feeds into a 'Text Retriever' (blue rounded rectangle with gear icon). The right branch (pink) processes 'Audio Passage' (waveform) via a 'Speech Adapter' (pink trapezoid with flame icon) to generate an 'Embedded Audio Sequence' (pink bars), which then enters a 'Text Retriever' (pink rounded rectangle with gear icon). Both retrievers output embeddings compared via 'Cosine Similarity' (label above pink bar).

In panel (b), the top path (SpeechRAG) begins with an 'Audio Passage' (waveform) feeding into a 'Speech Retriever' (teal rounded rectangle). Its output connects to an 'Audio LM' (teal rounded rectangle), producing a response (e.g., 'David Bowie was the first artist...'). The bottom path (cascaded system) takes the same 'Audio Passage' into an 'ASR' module (yellow rounded rectangle), generating a 'Transcript' (text box with highlighted 'Dated Valley'). This transcript feeds into a 'Text Retriever' (yellow rounded rectangle), then a 'Text LM' (yellow rounded rectangle), yielding a response (e.g., 'Dated Valley was the first artist...'). Text tokens (A, B, C) and audio tokens (waveform icons) are shown as outputs from the respective LMs.

[3] Connections and Arrows:
In panel (a), arrows show the flow: from 'Text Document/Query' to 'Text Embedding', then to 'Embedded Text Sequence' and 'Text Retriever'. Similarly, 'Audio Passage' → 'Speech Adapter' → 'Embedded Audio Sequence' → 'Text Retriever'. A dashed arrow links the 'Text Embedding' output to the 'Speech Adapter' input, indicating training-time distillation. The two retrievers’ outputs are connected by a bidirectional arrow labeled 'Cosine Similarity'.

In panel (b), solid arrows indicate direct data flow: 'Audio Passage' → 'Speech Retriever' → 'Audio LM' → response. In the cascaded path: 'Audio Passage' → 'ASR' → 'Transcript' → 'Text Retriever' → 'Text LM' → response. A dashed arrow from 'ASR' to 'Text Retriever' suggests optional or indirect connection. The 'Transcript' box is linked to the 'Text Retriever' and also shows a highlighted phrase ('Dated Valley') corresponding to the final answer. The 'Audio LM' and 'Text LM' each output tokens (audio tokens and text tokens respectively), shown as small boxes with waveforms or letters.
