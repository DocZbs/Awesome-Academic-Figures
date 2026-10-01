# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.03124

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506900&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a structured taxonomy of evaluation criteria for PRM (Probabilistic Reasoning Models), organized into three main categories: Simplicity, Soundness, and Sensitivity. The layout is a three-column table with headers 'Categories', 'Descriptions', and 'Illustration'. A vertical sidebar on the left labels these three categories with distinct background colors: green for Simplicity, yellow for Soundness, and gray for Sensitivity. Each row corresponds to a specific criterion within one of these categories.

Under Simplicity, two criteria are listed: Non-Redundancy and Non-Circular Logic. Non-Redundancy requires the PRM to detect redundant steps—steps that can be removed without affecting correctness. Its illustration shows a linear chain of nodes A → C → B, where node C is highlighted in red to indicate redundancy. Non-Circular Logic addresses reasoning chains that loop back to the starting point; its illustration depicts a cycle between nodes C and A, with A also connecting to B, and the cycle is marked with curved arrows.

Under Soundness, four criteria are defined: Empirical Soundness, Step Consistency, Domain Consistency, and Confidence Invariance. Empirical Soundness requires detection of counterfactual steps contradicting ground truth; its illustration shows A → C → B with a red dashed line from C to a green box labeled 'G' indicating contradiction. Step Consistency requires detecting conflicts within a reasoning path; its illustration shows A → B → C with a red curved arrow and 'x' symbol between A and C, indicating inconsistency. Domain Consistency requires robustness when applying domain-specific theories outside their valid context; its illustration compares two domains (A and B) with identical structures but different node colors, connected by dashed red lines to show invalid cross-domain application. Confidence Invariance requires the PRM to remain invariant when faced with confidently stated contradictions; its illustration shows A → B → C with B and C shaded red and labeled 'Confident' under a brace.

Under Sensitivity, three criteria are listed: Prerequisite Sensitivity, Deception Resistance, and Multi-Solution Consistency. Prerequisite Sensitivity requires detection of missing critical premises; its illustration shows A → B → C with a dashed circle around M (a missing prerequisite) and a red dashed line from M to B. Deception Resistance requires detection of subtly altered statements that appear correct but are inaccurate; its illustration contrasts a 'Correct Theory' (A → B) with a 'Deception' (A → B') where B' is red, indicating a subtle error. Multi-Solution Consistency requires consistency across different solution paths for the same problem; its illustration shows two parallel paths from A: one via B → C → D and another via B' → C' → D, with all nodes in green, indicating consistent outcomes.

All illustrations use circular nodes with letters (A, B, C, etc.) and arrows to represent reasoning chains. Red color is used to highlight errors, contradictions, or invalid elements. Dashed lines and symbols like 'x' or braces are used to denote relationships or conditions. The descriptions are concise, defining each criterion's requirement for the PRM. The overall structure is clean, grid-based, and designed for clarity in presenting a comprehensive evaluation framework for PRMs.
