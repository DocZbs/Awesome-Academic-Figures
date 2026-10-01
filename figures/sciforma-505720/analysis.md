# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The intrinsic motivation of reinforcement and imitation learning for sequential tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20573

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a goal-oriented hierarchical task decomposition framework for robot learning from a teacher, structured into three main regions: the Robot’s task decomposition space (yellow), the Teacher’s task decomposition space (orange), and the Actions space (green). The global layout positions the Robot’s space on the left, the Teacher’s space on the right, and the Actions space at the bottom, forming a triangular workflow. The diagram emphasizes recursive decomposition of high-level tasks into subtasks, ultimately mapped to executable action sequences.

In the Robot’s task decomposition space, a top-level subtask labeled d₁ is represented by a black diamond icon within a red-bordered circle. This subtask is further decomposed into two lower-level components: b₁ (a blue circle) and v₁ (a green circle), connected via light teal lines, indicating a hierarchical breakdown. These components are linked by black curved arrows to specific actions in the Actions space below.

The Teacher’s task decomposition space contains a high-level task m₁, symbolized by a musical note icon inside a red-bordered circle. This task is decomposed into two subtasks: d₂ (black diamond icon) and p₁ (a gray speaker icon), connected by light teal lines. A thick orange arrow connects m₁ to the sequence of actions in the Actions space, illustrating the teacher’s role in providing demonstrations. Additionally, an orange curved arrow links p₁ directly to action a₃, showing that the teacher can demonstrate a low-level policy corresponding to p₁.

The Actions space, shaded green, contains a horizontal sequence of three circular nodes labeled a₁, a₂, and a₃, each depicting a robot arm performing a distinct motion. These nodes are enclosed in a red rectangular box labeled 'Sequence of actions'. Black curved arrows from b₁ and v₁ in the Robot’s space point to a₁ and a₂ respectively, indicating that these subtasks are realized by those actions. The orange arrow from p₁ in the Teacher’s space points to a₃, demonstrating how the teacher can provide direct instruction for a specific action.

Connections between modules are color-coded: black arrows represent the robot’s internal mapping from decomposed subtasks to actions; orange arrows represent the teacher’s guidance, either at the task level (m₁ → sequence) or at the policy level (p₁ → a₃). The visual attributes include distinct shapes (diamonds, circles, speaker icons), colors (yellow, orange, green, red borders), and labels (d₁, b₁, v₁, m₁, d₂, p₁, a₁–a₃) to differentiate components. The figure’s caption clarifies that tasks like m₁ are recursively decomposed (e.g., m₁ → (d₂, p₁), d₂ → (b₂, v₂)) and ultimately executed as a sequence of policies (a₁, a₂, a₃). The framework supports interactive learning where the robot can request demonstrations at either the task decomposition or low-level policy level.
