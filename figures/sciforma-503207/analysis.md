# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AgroXAI: Explainable AI-Driven Crop Recommendation System for Agriculture 4.0 — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16196

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a proposed Edge Computing-Based Explainable Crop Recommendation System (AgroXAI), structured into two main components: a hierarchical IoT data collection architecture on the left, and an explainable AI (XAI) workflow for crop prediction and recommendation on the right.

[1] Global Layout and Structure:
The diagram is horizontally divided into two major sections. The left side depicts a four-layered physical-to-cloud data infrastructure, while the right side presents a machine learning pipeline for crop prediction and explainability. The left section is vertically layered from bottom to top as Physical Layer, Edge Layer, Fog Layer, and Cloud Layer. The right section flows from left to right, starting with Black Box Models, progressing through XAI Methods, and culminating in Post-hoc Explainability Methods and Counterfactual Explainability for crop recommendations.

[2] Visual Modules and Attributes:
On the left, the Physical Layer shows a stylized landscape with fields of crops, trees, rivers, and sensor towers emitting radio waves. These sensors feed data upward. The Edge Layer contains green circuit board-like devices (edge nodes) connected via dashed lines to the sensors below and to Fog Servers above. The Fog Layer features multiple orange-and-black Fog Server icons with concentric circular signal waves, arranged in a cluster. Above them, the Cloud Layer is represented by a gray cloud icon with downward-pointing dashed lines indicating data transmission.

On the right, the workflow begins with a black rectangular box labeled 'Black Box Models', which receives 'Weather & Soil Data' from the edge layer. This feeds into a green box labeled 'XAI Methods'. From this, two paths diverge: one leads to a light green box labeled 'Post-hoc Explainability Methods', which displays a table with two columns: 'Prediction probabilities' (showing lentil at 0.85, mothbeans 0.07, jute 0.05, mungbean 0.03, Other 0.00) and 'Feature Value' (listing Rainfall 164.27, Potassium 35.00, Nitrogen 70.00, Humidity 79.27, Phosphorus 38.00, Temperature 24.40, pH 7.01). Adjacent to this is a second table under 'NOT lentil' and 'lentil', listing conditions such as 'Rainfall > 121.91' and 'pH > 6.92'.

The second path from 'XAI Methods' leads to a green triangle labeled 'Counterfactual Explainability (Crop Recommendations)', which contains a table with rows: 'Actual Instance' (Lentil), 'Counterfactual 1' (Maize), 'Counterfactual 2' (Jute), 'Counterfactual 3' (Mungbean). Dashed lines with blue up-arrows and red down-arrows indicate features to adjust for each alternative crop, with a legend below stating '↑↓ Features to adjust for the alternative crop'.

[3] Connections and Arrows:
Dashed lines connect the Physical Layer sensors to Edge Layer devices, and from there to Fog Servers. Solid lines with arrowheads show data flow from Fog Servers to the Cloud Layer. A solid arrow connects the 'Weather & Soil Data' to the 'Black Box Models'. A dashed arrow points from 'Black Box Models' to 'XAI Methods'. From 'XAI Methods', a solid arrow leads to 'Post-hoc Explainability Methods', and a green dashed arrow leads to 'Counterfactual Explainability'. The tables within these modules are presented as outputs of the respective methods, with no further arrows emanating from them.
