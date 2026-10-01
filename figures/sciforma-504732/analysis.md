# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

MRI2Speech: Speech Synthesis from Articulatory Movements Recorded by Real-time MRI — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18836

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the inference pipeline of a speech synthesis system that generates speech from silent real-time magnetic resonance imaging (rtMRI) videos. The global layout is vertically structured, progressing from input at the bottom to output at the top, with a side branch for duration prediction. At the bottom, four rtMRI video frames are shown as input, each displaying a cross-sectional view of the vocal tract in shades of purple, green, and blue. These frames feed into a blue rectangular module labeled 'AV-HuBERT', which processes the visual input to produce a text representation denoted as 'text (c)'. This text output is passed upward to a light green rectangular module labeled 'Text encoder', which encodes the text into a hidden representation 'h_text'. From this point, the pipeline splits: one path continues upward through a light green 'Projection' module, which outputs mean and standard deviation parameters 'μ_θ, σ_θ' for a latent distribution. The other path branches rightward to an orange rectangular module labeled 'Stochastic duration predictor', which takes 'h_text' as input and outputs a duration vector '[2,3,1]', labeled as 'duration (d)'. This duration vector is then used to expand the projected phoneme representations—shown as a sequence of colored blocks (orange, yellow, blue) that are repeated according to the duration values—resulting in a longer sequence of phoneme representations. These expanded representations are fed into a light green 'Flow' module, which maps them to a latent acoustic space via a normalizing flow, producing a latent variable 'z'. Finally, 'z' is passed to a gray rectangular 'Decoder' module, which synthesizes the final audio waveform, depicted as a blue spectrogram-like signal at the top. All modules are connected by black arrows indicating data flow, with labels specifying intermediate variables such as 'text (c)', 'h_text', 'μ_θ, σ_θ', 'duration (d)', and 'z'. The diagram emphasizes the role of the stochastic duration predictor in expanding phoneme durations before acoustic mapping, enabling realistic speech synthesis from visual articulatory data.
