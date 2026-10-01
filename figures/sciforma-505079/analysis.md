# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

KALAHash: Knowledge-Anchored Low-Resource Adaptation for Deep Hashing — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.19417

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents the architecture of the KALAHash method, divided into two main phases: Training-only and Inference, separated by a dashed horizontal line. The top section, labeled 'Training-only' and enclosed in a light yellow rounded rectangle with a dashed border, outlines the process for generating class-specific knowledge representations. It begins with an icon representing 'Categories', depicted as a stack of documents with a tag labeled '[CATEGORY]', which is processed through a 'Word Embed' module (light blue rectangle with a snowflake icon indicating it is frozen). This is followed by a 'Text Encoder' (also light blue with a snowflake), producing a sequence of embeddings denoted as 'K' (five purple squares). These embeddings are fed into a module labeled 'F' (pink trapezoid with a fire icon, indicating learnable parameters), which outputs a modified representation 'K̂'. This 'K̂' is then passed to a module 'G' (pink parallelogram with a fire icon), which generates a tensor 'T'. The output 'T' is directed to a component named 'KIDDO' (orange rounded rectangle), which is also marked as learnable. A legend in the top-right corner clarifies that fire icons denote 'Learnable' components and snowflake icons denote 'Frozen' components.

The bottom section, labeled 'Inference' and enclosed in a light gray rounded rectangle with a dashed border, describes the image processing pipeline. It starts with an 'Images' input, represented by a stack of photo icons, which is processed by a 'Patch Embed' module (light blue rectangle with a snowflake, indicating frozen). This produces a sequence of initial visual tokens 'V₀' (four light green squares). These tokens are sequentially processed through multiple 'Transformer Layer' modules (light blue rectangles with snowflakes, indicating frozen), labeled as 'Transformer Layer 1', 'Transformer Layer i', and 'Transformer Layer L', with ellipses indicating intermediate layers. At each layer, the input token sequence 'V_{i−1}' is transformed into 'V_i'. During this process, the 'CLoRA' module (pink rounded rectangle with a fire icon, indicating learnable) receives the 'K̂' from the training phase and outputs a weight update 'ΔW', which is applied to the Transformer layers. After the final Transformer layer, the output 'V_L' (four light green squares) is passed to a 'Hash Layer' (pink rectangle with a fire icon, indicating learnable), which generates a hash vector 'H' (single light green square). This hash vector 'H' is then sent back to the 'KIDDO' module in the training phase, completing the feedback loop. The overall structure emphasizes the separation between the training phase, where class knowledge is encoded and optimized, and the inference phase, where images are hashed using the learned parameters, with CLoRA enabling efficient adaptation of the frozen Transformer backbone.
