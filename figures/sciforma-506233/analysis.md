# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Negative to Positive Co-learning with Aggressive Modality Dropout — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00865

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative architectural diagram illustrating two variants of a learning framework: Multimodal Variant and Unimodal Variant, positioned side-by-side for direct comparison. The global layout is horizontally divided into two main sections, each labeled at the top with bold underlined text: 'Multimodal Variant' on the left and 'Unimodal Variant' on the right. Each section contains two vertical processing pipelines, one for training and one for testing, indicated by upward-pointing arrows leading to output symbols.

In the Multimodal Variant, the training pipeline receives three distinct input modalities: a green document icon representing text, a black filmstrip icon representing video, and a blue waveform icon representing audio. These inputs converge into a light blue rectangular processing module containing a black circular symbol with a bowtie-like shape inside. An upward arrow from this module points to the output symbol γ^train. The testing pipeline mirrors the training setup but excludes the video and audio inputs, which are visually marked with red prohibition signs over their respective icons. Only the text input remains active, feeding into an identical light blue processing module, which outputs γ^test.

In the Unimodal Variant, both training and testing pipelines receive only the green document icon (text) as input. Each input feeds into a light blue rectangular processing module with the same bowtie symbol, producing outputs φ^train and φ^test respectively, indicated by upward arrows.

Below the two variants, a legend defines three types of co-learning outcomes based on the comparison between γ^test and φ^test: γ^test > φ^test corresponds to 'Positive Co-learning', γ^test < φ^test corresponds to 'Negative Co-learning', and γ^test == φ^test corresponds to 'Neutral Co-learning'. These relationships are presented as mathematical inequalities with corresponding labels in bold text.

All arrows are light blue and point upwards, indicating the flow of data through the modules. The visual modules are uniformly light blue rectangles with consistent internal symbols. Inputs are represented by colored icons: green for text, black for video, and blue for audio. Prohibited inputs are overlaid with red circles containing diagonal slashes. The figure uses clear spatial separation and symbolic representation to convey the concept of multimodal versus unimodal training and testing, and how their performance comparison defines different co-learning scenarios.
