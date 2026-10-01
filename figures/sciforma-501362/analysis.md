# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

ShiftedBronzes: Benchmarking and Analysis of Domain Fine-Grained Classification in Open-World Settings — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12683

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a three-step methodology for collecting container-related data, structured as a sequential workflow from left to right. The global layout is divided into three distinct vertical sections labeled Step 1, Step 2, and Step 3, each representing a filtering stage in the data collection pipeline.

In Step 1, titled 'Filter categories related to the concept of "containers"', the process begins with a user icon (a gray silhouette inside a rounded rectangle with a blue border) posing the question: 'Which vocabulary in the document is related to containers?'. Below this, an icon representing a text file labeled 'imagenet-21k-class... TXT, 532.07 KB' indicates the source dataset. A large black arrow points from this section to the next. Below the user query, a black square logo with a white stylized 'K' and a blue dot, labeled 'LLM', outputs a list of vocabulary items: '1. artifact', '2. box', '3. bowl', '4. ...', suggesting that the LLM extracts relevant semantic categories from the dataset.

Step 2, titled 'Filter categories already present in the ImageNet-1K dataset', displays a light blue rectangular box containing a list of container-related terms such as 'mixing bowl', 'soup bowl', 'measuring cup', 'beer bottle', 'pop bottle, soda bottle', 'water bottle', 'wine bottle', 'water jug', 'whiskey jug', 'coffee mug', and 'red wine'. The term 'red wine' is marked with a red rectangular label containing 'NO', indicating it was excluded because it refers to a substance rather than a container. A thick black arrow leads from this step to the final one.

Step 3, titled 'Exclude images where containers appeared as secondary instance', presents a grid of six example images arranged in two columns and three rows. Each image is overlaid with a red or green label: 'NO' or 'YES', respectively. The top row shows a child holding a jar and a baby being fed with a bottle, both labeled 'NO', indicating these images were excluded because the containers are not the primary focus. The middle row shows a floral mixing bowl and a decorative coffee mug, both labeled 'YES', meaning they are valid examples. The bottom row includes a wooden bowl labeled 'YES' and a child drinking from a cup labeled 'NO', again emphasizing that only images where the container is the main subject are retained. An ellipsis ('...') to the right of the grid suggests additional examples exist beyond those shown.

The visual modules use consistent shapes: rounded rectangles for user/LLM inputs, rectangular boxes for lists and images, and colored labels (red for exclusion, green for inclusion) for decision outcomes. Arrows indicate the flow direction between steps. The entire diagram uses a clean, minimalistic style with clear text and contrasting colors to differentiate components and decisions.
