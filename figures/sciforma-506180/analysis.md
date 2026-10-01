# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Titans: Learning to Memorize at Test Time — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00663

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the Memory as a Layer (MAL) architecture, which integrates memory components into a neural network framework to compress contextual information before it is processed by an attention mechanism. The global layout consists of three horizontal bands stacked vertically: 'Contextual Memory' at the top (light yellow background), 'Core' in the middle (light blue background), and 'Persistent Memory' at the bottom (light pink background). On the far right, a vertical column labeled 'Test Time' contains three stacked boxes indicating learning phases: 'Learning' (yellow), 'In-Context Learning' (gray), and 'Fixed' (pink with a snowflake icon), corresponding to the three memory layers respectively.

In the 'Core' band, a sequence of dark gray rectangular blocks labeled 'Sequence' flows from left to right. This sequence is processed through a white block segment, which represents a transformation or processing step, followed by another dark gray block segment. Dashed red arrows extend upward from the white segment to a 3D grid structure labeled 'Neural Memory' in the 'Contextual Memory' band. This grid is composed of small cubes with varying shades of brown and beige, suggesting stored data or memory states. A solid red arrow connects the 'Neural Memory' to a gray rounded rectangle labeled 'Attention', which then outputs to the right, indicating the flow of information into the next stage of processing.

In the 'Persistent Memory' band, a row of reddish-brown rectangular blocks is shown beneath the white segment of the sequence. These blocks are connected via dashed red lines to the white segment, indicating that they provide learnable, data-independent weights that influence the processing of the sequence. The text 'Learnable Data-Independent Weights' is placed next to these blocks, clarifying their role.

The connections and arrows are color-coded: solid red arrows indicate direct data flow (e.g., from Neural Memory to Attention), while dashed red arrows represent parameter or weight influences (e.g., from Persistent Memory to the sequence processing block). The overall workflow suggests that during test time, the model leverages both contextual memory (learned during training) and persistent memory (fixed or learned independently of data) to enhance the attention mechanism's performance. The architecture emphasizes memory compression and efficient context handling, aligning with the caption’s description of the memory layer’s role in compressing past and current context before attention.
