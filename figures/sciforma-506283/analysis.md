# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Is It Still Fair? Investigating Gender Fairness in Cross-Corpus Speech Emotion Recognition — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00995

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an unsupervised cross-corpus sentiment expression recognition (SER) framework called Combined Fairness Adaptation (CFA), designed to adapt a model trained on a source corpus (MSP-P) to a target corpus (BIIC-P) while ensuring fairness across genders. The diagram is divided into two main horizontal sections: the top section labeled 'Unsupervised Cross-Corpus SER' and the bottom section labeled 'Combined Fairness Adaptation'.

In the top section, the source corpus (MSP-P) is represented by an orange waveform icon, which feeds into a Wav2vec2.0 Extractor (a vertical white box). This is followed by a 'Transfer Learning approach' block, leading to a neural network depicted as a multi-layered structure of yellow circles connected by lines. The output of this network is shown as three circular icons representing emotions (happy, neutral, sad), enclosed in a dashed rectangle. An arrow points from this to the loss term L_EC. Below this, the total loss function is written as L_total = L_EC + λ * L_Gsim - β * L_GC. The target corpus (BIIC-P) is shown on the right as a gray box with a yellow waveform, indicating the unseen target domain.

The bottom section details the 'Combined Fairness Adaptation' mechanism. On the left, the source corpus (MSP-P) is again shown with multiple waveforms and gender icons (male and female), along with four facial emotion icons (happy, neutral, sad, angry). These inputs pass through a Wav2vec2.0 Extractor into a central pink region containing two submodules. The first submodule, labeled L_Gsim (in a light green box), shows two vertical stacks of colored blocks (representing feature embeddings) with bidirectional arrows between them, symbolizing similarity learning between source and target features. The second submodule, labeled L_GC (in a light pink box), contains a neural network with blue nodes and a 'Gradient Reversal Layer' below it, which is used to enforce gender-invariant representations. A blue bar labeled 'Mini Batches' feeds into both submodules, and an arrow from the Gradient Reversal Layer points upward with the notation -λ * ∂L_GC / ∂θ_GC, indicating gradient reversal during training. The adapted features then flow to the target corpus (BIIC-P) on the right, shown as a gray box with a question mark icon, gender icons, and waveforms, signifying the prediction task on unseen data. The Wav2vec2.0 Extractor is also present here, indicating feature extraction on the target side.

The visual elements use distinct colors: orange for source data, yellow for target data, and blue for the adaptation components. Shapes include rectangular boxes for modules, circular nodes for neural networks, and waveform icons for audio. Text labels clearly denote each component, loss terms, and data sources. Arrows indicate the direction of data flow and training signals, including the gradient reversal path. The overall layout emphasizes a two-stage process: initial transfer learning followed by fairness-aware adaptation using similarity and gender confusion losses.
