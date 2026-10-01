# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Scaling Capability in Token Space: An Analysis of Large Vision Language Model — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18387

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a two-stage architectural pipeline for a vision-language model, designed for tasks such as visual question answering. The global layout is horizontally divided into two main processing blocks: the left side handles vision and question fusion, while the right side processes the fused representation through a large language model to generate answers. The entire flow proceeds from bottom to top, then left to right, indicating a sequential data processing pipeline.

On the left, the process begins with 'Global-Local image views', represented as a row of five light yellow rounded rectangles, which feed into a yellow rectangular module labeled 'Vision Encoder'. This module has a small fire emoji in its bottom-right corner, indicating it is updated during fine-tuning. The output of the Vision Encoder is a sequence of light yellow tokens, which are then passed to a smaller yellow box labeled 'local merge', also marked with a fire emoji, suggesting this component is trainable. The local merge module combines these visual tokens with 'question text' (represented as a sequence of light blue tokens) and 'learnable queries' (represented as a sequence of light green tokens). These three components are concatenated into a single token sequence, shown as alternating light yellow, light blue, and light green tokens, followed by an ellipsis to indicate continuation.

This combined sequence is fed into a large light blue rectangular block labeled 'Vision-Question Fusion', which also bears a fire emoji, signifying it is fine-tuned. The output of this fusion module is a set of four light green rounded rectangles labeled 'fused vision tokens', positioned above the block.

On the right side, the fused vision tokens are passed to a dark blue rectangular block labeled 'Large Language Model', which contains a snowflake emoji in its bottom-right corner, indicating it remains frozen during training. Below this block, the input to the LLM is shown as a sequence of tokens: light blue tokens (representing the question text), followed by light green tokens (the fused vision tokens), and then more light blue tokens, again with an ellipsis. A small black rectangular module labeled 'MLP' with a fire emoji is placed below the LLM's input, connected to the light green fused vision tokens, suggesting a projection or transformation step applied to these tokens before they enter the LLM. The final output of the LLM is a sequence of dark blue rounded rectangles labeled 'answers', with an ellipsis indicating further tokens may follow.

The figure uses color-coding to distinguish different types of inputs and representations: light yellow for visual features, light blue for question text, light green for learnable queries and fused vision tokens, and dark blue for the LLM’s output. The fire and snowflake emojis serve as visual indicators of whether a module is trainable (fire) or frozen (snowflake) during fine-tuning. The overall structure emphasizes a modular design where visual and textual information are first fused in a trainable component, then processed by a frozen large language model to generate answers.
