# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

A Survey of Calibration Process for Black-Box LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12767

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a comprehensive framework for the calibration of Large Language Models (LLMs), structured into two main stages: Confidence Estimation and Calibration. The global layout is horizontal, with a left-to-right flow starting from LLM inputs and ending with well-calibrated outputs. On the far left, icons representing LLMs (e.g., GPT, Claude, Llama) are shown, with an arrow indicating 'The response from LLMs' entering the first major module, labeled 'Confidence Estimation' in teal. This module is divided into two overlapping ovals: one for 'White-Box LLMs' containing 'Logit-based methods' and 'Internal state-based methods', and another for 'Black-Box LLMs' containing 'Consistency-based methods' and 'Self-Reflection-based methods'. These methods are represented as rounded rectangles within the ovals. An arrow from this module points downward to a shield icon labeled 'Confidence Value', symbolizing the output of this stage.

The second major module, 'Calibration', is positioned to the right and is split into two submodules: 'Calibration Methods' (in red) and 'Measurement Methods' (in gray), both enclosed within a larger blue container. The 'Calibration Methods' submodule includes 'White-Box LLMs' with 'Temperature Scaling', 'Model Finetuning', and 'Label Smoothing', and 'Black-Box LLMs' with 'Histogram Binning', 'Proxy models-based methods', and 'Isotonic Regression'. These are also depicted as rounded rectangles. A dashed arrow labeled 'Optimize' connects this submodule back to the Confidence Estimation module, and a solid arrow labeled 'Calibrate' points from Confidence Estimation to Calibration Methods. From Calibration Methods, a thick red arrow labeled 'Calibration Error Reduction' points downward toward the final goal.

The 'Measurement Methods' submodule contains 'White-Box LLMs' with 'Error-based methods' and 'Black-Box LLMs' with 'Correlation-based methods'. A solid arrow labeled 'Measure' connects Calibration Methods to Measurement Methods. Below this, a gray arrow leads to 'Calibration Error Measurement', which then connects via a dashed arrow to a checkmark icon labeled 'Well-Calibrated'. This final output is linked to 'Correctness Value', which is derived from 'Tasks' indicated by a list icon on the far right. The entire process aims to align confidence values with correctness values, achieving well-calibrated outputs. The figure visually emphasizes that black-box methods are fully integrated into white-box frameworks, whereas white-box methods have limited applicability in black-box settings.
