# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

DART: An AIGT Detector using AMR of Rephrased Text — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11517

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the DART framework, a methodological pipeline for evaluating and classifying AI-generated text based on semantic gap analysis. The overall layout is structured into four main stages, numbered 1 through 4, arranged vertically from top to bottom, representing a sequential workflow.

Stage 1 begins with an initial text input denoted as T₀, represented by a light blue document icon. This text undergoes iterative rephrasing operations, indicated by arrows labeled 'Rephrase', producing successive versions T₁ and T₂, shown as progressively darker blue document icons. This stage emphasizes the generation of multiple paraphrased variants of the original text.

Stage 2 involves processing these rephrased texts through a 'Semantic Parser' module, depicted as a wide horizontal rectangular box spanning the width of the diagram. The parser outputs structured semantic representations labeled A₀, A₁, and A₂, corresponding to T₀, T₁, and T₂ respectively. These representations are shown as colored rectangular blocks: A₀ is light blue, A₁ is medium blue, and A₂ is dark blue. Each block contains a semantic frame structure: '(g / generate-01 :ARG0 (h / human) :ARG1 (t / text))' for A₀, and '(g / generate-01 :ARG0 (m / machine) :ARG1 (t / text))' for A₁ and A₂, indicating a shift from human to machine as the agent in the semantic frame.

Stage 3 consists of two parallel 'Semantic Gap Scorer' modules, each receiving one or more semantic representations. The left scorer receives A₀ and A₁, while the right scorer receives A₁ and A₂. These scorers compute precision and recall metrics, visualized as horizontal bar charts. For the left scorer, precision p₁ and recall r₁ are shown with light blue bars; for the right scorer, precision p₂ and recall r₂ are shown with dark blue bars. The bars indicate the degree of overlap or alignment between the semantic representations being compared.

Stage 4 features an 'AIGT Classifier' module, a large horizontal box at the bottom of the diagram. It receives the precision and recall values (p₁, r₁, p₂, r₂) from Stage 3 via a curved arrow, integrating them to make a final classification decision. Below this classifier, a bar chart displays the output classification results for the original text T₀, with four distinct categories represented by icons: a purple human face emoji, a purple interlocking rings logo (resembling OpenAI's), a beige llama (symbolizing Llama models), and a blue starburst. The heights of the bars indicate the confidence or probability assigned to each category, with the llama icon having the tallest bar, suggesting it is the most likely source of the text.

The entire diagram uses a consistent color scheme—light to dark blue—to represent progression and transformation, with clear directional arrows indicating data flow. Text labels are placed above or beside components for clarity, and the structure emphasizes a pipeline from raw text input to final AI-generated text classification.
