# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

STRAP: Robot Sub-Trajectory Retrieval for Augmented Policy Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.15182

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=502700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a robotic policy learning framework designed to train robust policies using a combination of offline data, few demonstrations, and retrieval-based augmentation. The global layout is structured as a left-to-right workflow: starting from data sources on the left, progressing through a central processing module, and culminating in policy deployment on the right. On the far left, labeled 'Offline Dataset' in blue, four real-world robot interaction images depict diverse kitchen tasks such as object manipulation, cooking, and cleaning, representing a broad but static dataset. Above center, labeled 'Few Demonstrations' in yellow, two images show a robotic arm performing a sink-related task (e.g., washing or placing an object), serving as sparse expert demonstrations. Below center, labeled 'Retrieval Dataset' in magenta, two similar sink-task images are shown, representing retrieved sub-trajectories from the offline dataset that are semantically aligned with the few demonstrations. These three data sources feed into a central oval-shaped module titled 'Dynamic Time Warping' (DTW), which visually represents trajectory alignment via three colored paths—blue (offline trajectories), yellow (few demonstrations), and magenta (retrieved trajectories)—interconnected by arrows indicating alignment and warping operations. The DTW module outputs augmented trajectories that are then fed into a rectangular box labeled 'Augmented Policy Learning', depicted with a single robot image performing a sink task, symbolizing the training phase where the policy learns from enriched data. Finally, on the far right, under 'Robust Policy' in green, four sequential robot images show the policy executing the task successfully across varying conditions (e.g., different object placements or lighting), demonstrating generalization and robustness. Green arrows connect the Augmented Policy Learning block to each of these output images, indicating deployment outcomes. The entire diagram uses color-coded borders and labels (blue, yellow, magenta, green) to distinguish data types and stages, with clear directional arrows showing the flow from data collection to policy execution. The caption clarifies that the method retrieves sub-trajectories using Dynamic Time Warping (DTW) to train robust policies during deployment.
