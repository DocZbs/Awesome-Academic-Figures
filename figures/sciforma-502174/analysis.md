# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Hansel: Output Length Controlling Framework for Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.14033

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comparative schematic of three text generation frameworks: Vanilla, Gretel, and Hansel, illustrating their training and inference phases. The top section demonstrates example outputs for each method using the prompt 'Chat about a random subject in X words,' with X varying across examples. For Gretel, the output is a standard sentence: 'The sun was high in the sky, and the birds flew fast.' For Hansel, the same sentence is shown with special red tokens inserted at specific positions—'10', '5', '0', and 'E'—to indicate length control and end-of-sequence markers. These tokens are placed at intervals corresponding to the target length (e.g., 12 words), with variations shown for 11 and 13 words, where the 'extra' count adjusts accordingly (0, +1, -1). The red tokens are visually distinct from the green word tokens, and the 'E' token marks the end. A small black-and-white sketch of a child bending down, presumably Hansel, appears next to the Hansel examples.

The lower half of the figure is divided into two main columns: 'Training Phase' on the left and 'Inference Phase' on the right, separated by a vertical dashed line. In the Training Phase, each method is represented by a horizontal flow: 'Source Text' (blue rounded rectangle) + 'Prompt' (green rounded rectangle) + 'Target Text' (orange rounded rectangle). For Vanilla, the Prompt is standalone. For Gretel, the Prompt includes 'Target Length' as an additional field. For Hansel, the Prompt includes 'Target @Length @', and the Target Text is replaced by a large orange box containing the child sketch and the text '@Target@Text@', indicating that the target sequence is embedded with special tokens marking positions.

In the Inference Phase, the structure mirrors the training phase but omits the Target Text. Instead, an orange arrow points right from the combined Source Text and Prompt to indicate the model's output generation. For Hansel, the Prompt during inference also contains 'Target @Length @', consistent with training. The visual design uses color-coded boxes: blue for Source Text, green for Prompt, and orange for Target Text or length-related components. The special tokens in Hansel’s output are highlighted in red, and the '@' symbols denote position markers. The figure effectively contrasts how each method handles length control, with Hansel uniquely incorporating positional tokens during both training and inference to guide generation.
