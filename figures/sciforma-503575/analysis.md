# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Visual Prompting with Iterative Refinement for Design Critique Generation — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16829

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a modular pipeline for generating and refining text items along with their corresponding bounding boxes (Bbox) from an input image and task prompt. The overall layout is structured into three vertically aligned, color-coded modules: 'Text Generation & Refinement Module' (light blue), 'Validation Module' (light green), and 'Bbox Generation & Refinement Module' (light orange). These modules are arranged left-to-right, indicating the primary data flow direction.

In the leftmost module, the process begins at step [1] with the input of an image and task prompt, which feeds into the 'Text Generation LLM' (blue rectangle). This model produces a 'List of Text Items' (step [2]), which is passed to the 'Text Filtering LLM' in the Validation Module. The filtered list (step [3]) is then processed one item at a time by the 'Bbox Generation LLM' (orange rectangle) in the rightmost module. This generates a 'Text Item & Bbox' pair (step [4]), which is sent to the 'Bbox Refinement LLM for Bbox' (orange rectangle). This refinement stage iteratively adjusts the bounding box based on the text item until termination, as indicated by the circular arrow and label [5].

The refined bounding box is then sent back to the 'Text & Bbox Validation LLM' (green rectangle) in the Validation Module. This validator receives both the text item and refined bbox (step [6+]) and evaluates them. Based on validation, three outcomes are possible: if both text and bbox are correct, the output is produced (step [7+] labeled 'Output: Correct Text & Correct Bbox'); if the text is incorrect but the bbox is correct, it sends 'Incorrect Text & Correct Bbox' (step [7+]) to the 'Text Refinement LLM for Bbox' (blue rectangle) in the left module; if the bbox is incorrect but the text is correct, it sends 'Correct Text & Incorrect Bbox' (step [7+]) back to the 'Bbox Refinement LLM for Bbox'. If both are incorrect, the item is discarded (step [7+] red arrow).

The 'Text Refinement LLM for Bbox' iteratively refines the text based on the current bbox until termination (step [4], circular arrow). Once refined, the updated 'Refined Text & Correct Bbox' (step [8+]) is sent back to the 'Text & Bbox Validation LLM' for re-evaluation. All LLMs are represented as rectangles with black borders, colored according to their module. Text labels inside each box specify the LLM's function. Arrows indicate data flow, with numbered labels showing the sequence of operations. Numbers with a '+' denote iterative or multiple instances of the same step. The figure captures a feedback-driven, multi-stage refinement process ensuring accurate text and bounding box pairs.
