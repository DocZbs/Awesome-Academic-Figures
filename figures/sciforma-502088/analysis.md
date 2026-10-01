# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Understanding and Analyzing Model Robustness and Knowledge-Transfer in Multilingual Neural Machine Translation using TX-Ray — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13881

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents two parallel evaluation scenarios, labeled (a) and (b), for assessing the performance of a trained model on test data under different conditions. The global layout consists of two horizontal workflows stacked vertically, each depicting a three-step process: input → model → output. Each workflow is composed of three rectangular modules connected by directed arrows indicating the flow of data.

In both scenarios, the central module is a light yellow rectangle labeled 'Trained model', representing the core machine learning model being evaluated. This module has a consistent visual attribute across both diagrams: a pale yellow fill color with a thin dark border, and bold black text centered within it.

Scenario (a), located at the top, begins with a white rectangular box on the left labeled 'Source sequence (test data without noise)', indicating clean test input. A solid black arrow points from this box to the 'Trained model'. Another solid black arrow extends from the 'Trained model' to a white rectangular box on the right labeled 'Target sequence (Translation)', representing the model's output translation. This setup illustrates the model’s performance on pristine test data.

Scenario (b), located below (a), mirrors the structure but uses a different input. The leftmost white box is labeled 'Source sequence (test data with noise)', signifying that the test input contains some form of corruption or perturbation. The same 'Trained model' processes this noisy input, and the output is again shown as 'Target sequence (Translation)' in a white box on the right. The arrows connecting these components are identical in style to those in (a): solid black lines with classic arrowheads pointing rightward.

The figure’s purpose, as stated in the caption, is to compare the model’s translation performance on test data with and without noise. The visual design emphasizes the contrast between the two conditions while keeping all other elements—model, output format, and connection style—identical, thereby isolating the effect of noise on the model’s output. The labels are clear, using bold black sans-serif font, and the layout is clean and symmetrical, facilitating direct comparison between the two cases.
