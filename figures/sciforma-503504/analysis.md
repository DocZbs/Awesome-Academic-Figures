# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Interact with me: Joint Egocentric Forecasting of Intent to Interact, Attitude and Social Actions — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16698

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a computational framework for social understanding, structured as a sequential pipeline from raw video input to multiple social inference tasks. The global layout is horizontal, progressing from left to right, with a final output block positioned below the main processing stages. The entire diagram is composed of distinct rectangular modules with rounded corners, each color-coded to represent different functional components, connected by thick blue arrows indicating data flow direction.

On the far left, a stack of three video frames—depicting an indoor scene with people—is shown, symbolizing the input video sequence. These frames are connected via a diagonal arrow to the first processing module, labeled 'Whole Body Pose Estimation', which is enclosed in a pink rounded rectangle. Inside this module, four stick-figure representations of human poses are displayed along a trajectory, with small blue dots indicating key joints or tracking points, suggesting the extraction of full-body skeletal poses over time.

The output from pose estimation flows into the next major component: 'Pose Feature Analyser', a large blue rounded rectangle divided into two submodules. The left submodule, titled 'Spatiotemporal Modelling' (light beige background), contains three ST-Model blocks (rectangular boxes with rounded corners), each receiving input from a stick-figure representation of a person. These ST-Models feed into a vertical orange trapezoid labeled 'Dense Layers', indicating a deep learning component that integrates spatiotemporal features. The right submodule, 'Hierarchical Classifier' (yellow background), displays a tree-like structure of black nodes connected by lines, representing a multi-level classification hierarchy used to interpret the extracted features.

From the Pose Feature Analyser, a downward-pointing blue arrow leads to the final output block: 'Multiple Social Understanding Tasks', a teal-colored rounded rectangle at the bottom of the diagram. This block contains three smaller, horizontally aligned rectangular boxes with rounded corners, each labeled with a specific social task: 'Social Interest' (purple), 'Social Attitude' (lavender), and 'Social Action' (magenta). These represent the diverse downstream applications enabled by the framework.

All connections between modules are represented by bold, dark blue arrows, emphasizing the unidirectional flow of information from raw video through pose estimation, feature analysis, and finally to social understanding outputs. The visual design uses consistent shapes and colors to differentiate functional stages, while internal elements like stick figures, nodes, and model blocks provide insight into the underlying processes. The diagram effectively communicates a hierarchical, end-to-end system for deriving social insights from human motion data.
