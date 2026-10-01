# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

FolAI: Synchronized Foley Sound Generation with Semantic and Temporal Alignment — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15023

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the FOL·AI architecture, a two-stage framework for generating temporally and semantically aligned audio from video inputs, guided by text queries and audio samples. The global layout is divided into two main stages, each enclosed in a dashed boundary: Stage 1 at the top and Stage 2 below it. On the far right, the outputs are displayed as spectrograms and waveforms labeled 'Target audio' and 'Temporally and semantically aligned generated audio'.

Stage 1 begins with a video input, depicted as a sequence of frames showing a red sofa with a wooden stick hitting it, progressing over time t. This video is fed into a blue rounded rectangle labeled 'Video Model', which processes the visual content to predict an audio envelope. The output is a blue line graph labeled 'RMS' (Root Mean Square), representing the temporal envelope of the expected audio, marked with small sparkles indicating impact events. This RMS envelope is then passed to Stage 2.

Stage 2, enclosed in a light beige dashed box, contains the core audio synthesis pipeline. It receives multiple inputs: an 'Audio Sample' shown as a waveform icon, a 'Text Query' box containing the sentence "A person hit multiple times on sofa with a wooden stick.", and two numerical parameters labeled 'seconds start' and 'seconds total' that control the duration and starting point of the generated audio. These inputs are processed by two yellow trapezoidal modules: 'CLAP', which encodes the semantic content from both the audio sample and text query, and 'embed', which processes the duration parameters. Additionally, the RMS envelope from Stage 1 feeds into two orange rectangular modules: 'CAVP' and 'DiT ControlNet'. Both CAVP and DiT ControlNet provide conditioning signals to the central red rectangle labeled 'Audio Synthesis Model'. This model integrates all inputs—semantic embeddings from CLAP and embed, temporal control from DiT ControlNet, and audio context from CAVP—to generate the final audio.

Connections are represented by solid black arrows indicating data flow. From the video, an arrow leads to the Video Model, which outputs to the RMS graph. The RMS graph sends an arrow to both CAVP and DiT ControlNet in Stage 2. The Audio Sample and Text Query feed into CLAP, while the duration parameters feed into 'embed'. All three modules (CLAP, embed, DiT ControlNet, and CAVP) send arrows to the Audio Synthesis Model. Finally, an arrow from the Audio Synthesis Model points to the output section on the right, where the generated audio is shown as a clean waveform and a spectrogram, visually matching the target audio's rhythmic structure but synthesized from the given inputs. The entire process is designed to produce audio that is both temporally synchronized with the video events and semantically consistent with the provided text and audio cues.
