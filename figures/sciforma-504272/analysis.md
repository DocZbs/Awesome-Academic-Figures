# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Fair Knowledge Tracing in Second Language Acquisition — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.18048

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=504200&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates the architecture of an Intelligent Tutoring System (ITS) with a focus on Knowledge Tracing (KT), depicting the interaction between a student and the system, along with internal mechanisms for modeling knowledge state, skill dependencies, and forgetting behavior. The global layout is structured into two main sections: the top-level interaction between the student and ITS, and a detailed breakdown of KT components below. The top section shows a black silhouette icon labeled 'Student' exchanging 'Questions' and 'Answers' bidirectionally with a rounded rectangular box labeled 'Intelligent Tutoring Systems (ITSs)'. A vertical double-headed arrow connects this interaction to the lower KT framework, indicating continuous feedback and adaptation.

Within the KT framework, the structure is organized vertically into four layers: 'Knowledge State', 'Skills', 'Questions/Answers', and 'Dependency Graph', with an additional inset on 'Student Forgetting Behavior'. The 'Knowledge State' layer displays four bar charts labeled s₁ (red), s₂ (blue), s₃ (green), and s₄ (purple), representing skill mastery levels over time, each accompanied by a sequence of diamond-shaped nodes symbolizing evolving knowledge states. Below, the 'Skills' layer lists four skills k₁ (red), k₂ (blue), k₃ (green), and k₄ (purple), each connected via colored lines to corresponding questions in the 'Questions/Answers' layer. This layer presents a horizontal sequence of question-answer pairs (q₁ to q₄, repeating), each represented as a rectangular box with a checkmark (√) or cross (×) indicating correct or incorrect responses; the final box contains a question mark (?), suggesting uncertainty or prediction.

The 'Dependency Graph' at the bottom left visualizes relationships among skills using a directed graph: k₁ (red circle) points to k₂ (blue) and k₃ (green); k₂ points to k₄ (purple); and k₃ also points to k₄. These connections indicate prerequisite or dependency relationships between skills. On the bottom right, the 'Student Forgetting Behavior' inset features a stick figure with a thinking pose and a question mark above its head, labeled 'Forgetting rise'. Below it, a horizontal color gradient bar transitions from blue (left) to red (right), with skill labels k₂, k₃, k₄, and k₁ placed along it, visually representing increasing forgetting intensity from left to right. All elements use consistent color coding for skills (k₁-red, k₂-blue, k₃-green, k₄-purple) to maintain visual coherence across layers. Arrows indicate data flow and dependencies: from student to ITS, from ITS to KT components, from skills to questions, and within the dependency graph. The overall design emphasizes dynamic tracking of student knowledge, skill interdependencies, and the modeling of forgetting effects over time.
