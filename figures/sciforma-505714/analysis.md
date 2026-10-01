# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

The intrinsic motivation of reinforcement and imitation learning for sequential tasks — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.20573

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=505700&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a conceptual framework for imitation learning, depicting the interaction between a learner and a teacher through policy spaces and an outcome space. The global layout consists of three main regions: the 'Policy Space of Learner' on the lower left, labeled A and shaded light green; the 'Policy Space of Teacher' on the lower right, labeled A' and shaded beige; and the 'Space of Outcomes' at the top, labeled Ω and shaded pale yellow. Within the outcome space, a dashed boundary encloses the 'Reachable Outcome Space', indicating outcomes achievable by the learner.

Visual modules include discrete policy points within each policy space: a₁, a₂, a₃, and a₄ in the learner’s space A; and ζ₁ and ζ₂ in the teacher’s space A'. These are represented as small gray circles. In the outcome space Ω, four outcomes ω₁, ω₂, ω₃, and ω₄ are similarly depicted as gray circles. Two large gray arrows between the policy space of the learner and the outcome space represent the 'Forward Model' (upward arrow) and 'Inverse Model' (downward arrow), indicating bidirectional mappings: actions map to outcomes via the forward model, and desired outcomes map back to actions via the inverse model.

Connections and arrows show the relationships between these elements. Solid black curved arrows originate from learner policies a₁, a₂, a₃, and a₄, pointing to outcomes ω₂, ω₁, ω₃, and ω₄ respectively, illustrating the forward model mapping. A solid brown arrow from teacher policy ζ₂ points to outcome ω₃, while another from ζ₁ points to ω₄, representing the teacher’s policy-outcome mappings. A dashed purple arrow labeled 'Emulation' connects ζ₂ to a₃, indicating the learner reproduces outcome ω₃ using its own policy a₃ rather than mimicking the teacher’s movement. Another dashed purple arrow labeled 'Mimicry' connects ζ₁ to a₄, showing the learner replicates the teacher’s movement ζ₁ using its own policy a₄, without necessarily achieving the same outcome ω₄. The caption clarifies that emulation focuses on matching outcomes, while mimicry focuses on matching actions, highlighting two distinct imitation strategies.
