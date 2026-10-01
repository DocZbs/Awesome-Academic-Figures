# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Zero-Shot Low Light Image Enhancement with Diffusion Prior — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13401

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a taxonomy of Low-Light Image Enhancement (LLIE) methods, organized into four quadrants labeled (a), (b), (c), and (d), each illustrating a distinct approach with corresponding visual components and textual annotations.

[1] Global Layout and Structure:
The figure is divided into a 2x2 grid. The top row compares supervised/unsupervised methods (a) with zero-shot methods without pretrained models (b). The bottom row contrasts zero-shot methods with pretrained models (c) against the proposed method (d). Each quadrant contains a central processing module represented by a light blue hourglass-shaped block with a flame icon at its center, symbolizing the enhancement process. Input and output images are shown on either side of this module. Textual descriptions below each quadrant explain the core characteristics of the respective method.

[2] Visual Modules and Attributes:
In all quadrants, the central processing unit is a light blue hourglass-shaped block with a small orange flame icon inside, indicating the enhancement operation. The input images vary: (a) shows a dark candle image with label 'Dataset-specific noise'; (b) uses the same dark candle image; (c) displays two inputs — a small dark image and a noisy color texture — with a box labeled 'Learnable Param.' connected to the flame; (d) shows only the noisy color texture as input, with a box labeled 'Feature()' pointing to the module. The output in all cases is a well-lit scene with a candle, bottle, and cups. In (c) and (d), a black padlock icon appears on the lower part of the hourglass, indicating a frozen or fixed component. The text labels beneath each quadrant specify the method type: (a) 'Supervised & Unsupervised', (b) 'Zero-Shot (w/o Pretrained Model)', (c) 'Zero-Shot (w/ Pretrained Model)', and (d) 'Zero-Shot (Ours)'. Additional descriptive text below (b) and (c) states 'Optimization based on predefined loss.', while (d) adds 'Supports inputs from any data source.'

[3] Connections and Arrows:
In (a), a gray arrow connects the dark input image to the hourglass, which then outputs the enhanced image. In (b), the same flow exists, but an additional gray arrow descends from a rounded rectangle labeled 'Pre-defined ℒ' to the hourglass, indicating loss-based optimization. In (c), two inputs feed into the hourglass: one from the small dark image via a gray arrow to the 'Learnable Param.' box, which then connects to the flame, and another from the noisy texture directly to the hourglass. The 'Learnable Param.' box also has a flame icon. In (d), the noisy texture feeds into the hourglass, and a gray arrow from the 'Feature()' box points to the hourglass, suggesting feature guidance. All arrows are solid gray lines with arrowheads, indicating data or control flow direction. The padlock in (c) and (d) visually suggests that the base model is fixed during inference.
