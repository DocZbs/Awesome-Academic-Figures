# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The Thousand Brains Project: A New Paradigm for Sensorimotor Intelligence — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18354

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical, multi-level cognitive architecture designed to model perception, learning, and action in a goal-directed system, using a concrete example of a hand reaching for a blue mug on a table. The global layout is vertically stratified into three main layers: the bottom layer represents the physical interaction with the world (sensory input and motor output), the middle layer contains sensor modules and learning modules (LMs) arranged in a hierarchical structure, and the top layer shows higher-level representations and goal states. The architecture is organized into multiple parallel columns, each representing a processing stream for different object instances or contexts, with ellipses indicating continuation beyond the shown scope.

Visual modules include: (1) Learning Modules (LMs), depicted as gray laptops with keyboards and screens, arranged in a vertical hierarchy; (2) Sensor Modules, shown as black-and-white containers with dotted patterns, positioned below each LM column; (3) Motor Systems, represented as inverted trapezoids with dotted fill, located at the base of each column. A legend in the bottom-right corner explicitly labels these components. At the bottom center, a real-world scene is illustrated: a blue mug on a wooden table, with an eye symbolizing visual input and a hand symbolizing motor action. The eye is connected via yellow lines to the mug, indicating visual focus, while the hand points toward the mug, suggesting an intended action.

Connections and arrows are color-coded and styled to represent different types of information flow. Solid blue arrows indicate feed-forward information flow from lower to higher levels within each column, carrying features and pose (CMP). Solid purple arrows represent top-down connections from higher to lower LMs, used to bias lower-level processing. Solid green arrows denote lateral voting connections between LMs at the same level across different columns, enabling cross-column coordination. Solid pink arrows convey goal states from higher levels down to the motor systems, which then execute actions. Dashed blue lines connect the sensor modules to the eye, representing raw sensory input from the environment. Dashed pink lines link the motor systems to the hand, indicating motor commands sent to actuators. A large, semi-transparent blue arrow spans from a lower-level sensor module to a higher-level LM in a different column, illustrating a direct connection carrying sensory outputs from a larger receptive field. All connections are annotated with small circles at endpoints, and discontinuities in the diagram are marked with ellipses at line ends.
