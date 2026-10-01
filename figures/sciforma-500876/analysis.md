# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Advancing Comprehensive Aesthetic Insight with Multi-Scale Text-Guided Self-Supervised Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11952

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500800&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of CALM, a model designed for aesthetic assessment using a combination of visual and language processing components. The global layout is left-to-right, starting with two input sources on the far left: 'Massive Unlabeled Images' and 'A few Labeled Images', both enclosed in dashed rectangular boxes. The unlabeled images are represented by three small thumbnails (a sunburst, a deer, and a statue), while the labeled images show three different scenes (a person walking, a group of people, and a vehicle). These inputs feed into a green trapezoidal block labeled 'visual encoder'. A dashed arrow from the unlabeled images to the visual encoder is annotated with 'text-guided self-supervised learning', indicating the pretraining mechanism.

From the visual encoder, a solid black arrow leads to a large yellow rounded rectangle titled 'multi-scale feature alignment module'. This module contains four vertically stacked components. On the far left is a salmon-colored vertical rectangle labeled 'Fully Connection', which receives the output from the visual encoder. To its right are three identical salmon-colored blocks, each labeled 'Qformer', representing query-based transformers. Each Qformer has multiple small orange squares beneath it, symbolizing queries, and is associated with a specific level of aesthetic queries: 'high-level aesthetic queries' for the first, 'middle-level aesthetic queries' for the second, and 'low-level aesthetic queries' for the third. Above each Qformer, a black line connects to a corresponding feature representation: H^thematic_v, H^high_v, H^middle_v, and H^low_v, respectively, indicating the multi-scale visual features being aligned.

From the multi-scale feature alignment module, four solid black arrows extend to the right, each connecting to one of four input tokens in a light blue rounded rectangle labeled 'large language model'. These tokens are '<low>', '<middle>', '<high>', and '<thematic>', corresponding to the four feature levels. Below the large language model, an upward arrow points to an instruction token '<instruction>' with the example text X_q: 'Can you give me the aesthetic score?'. An output arrow from the model points downward to an answer token '<answer>' with the example text X_a: '6.5.' This demonstrates the end-to-end process where the model generates a numerical aesthetic score based on the aligned visual features and the given instruction.

The visual modules are color-coded: the visual encoder is green, the multi-scale feature alignment module and its internal components are shades of yellow and salmon, and the large language model is light blue. All text labels are in black, with mathematical notations (H^thematic_v, etc.) in standard font. The connections are solid black lines with arrowheads, except for the dashed line indicating the self-supervised learning path. The overall structure emphasizes a pipeline from raw image data through feature extraction and alignment to language-based aesthetic scoring.
