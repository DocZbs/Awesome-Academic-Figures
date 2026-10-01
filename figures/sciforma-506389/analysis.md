# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Large Language Model-Enhanced Symbolic Reasoning for Knowledge Base Completion — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.01246

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of LeSR (LLM-enhanced Symbolic Reasoning), a framework for knowledge base (KB) completion using symbolic reasoning augmented by large language models (LLMs). The global layout is structured as a horizontal pipeline with three main processing stages: Subgraph Extractor, LLM Proposer, and Rule Reasoner, each represented by a green rounded rectangle with distinct icons—a magnifying glass, a lightbulb, and a gear—respectively. These modules are connected sequentially via dotted lines indicating data flow.

At the bottom left, a complex directed graph represents the full knowledge base, composed of circular nodes connected by arrows. A dashed orange box labeled 'performer' points to this graph with an arrow labeled 'select', indicating that the Subgraph Extractor selects subgraphs based on the query relation 'performer'.

Above the Subgraph Extractor, a beige box titled 'Relevant Subgraphs' displays two example subgraphs extracted from the KB. The first is a generic abstract subgraph with edges labeled 'performer' in red text. The second is a concrete example involving entities 'Shine a Light', 'The Rolling Stone', and 'Ronnie Wood', with edges labeled 'cast member' and 'member of'. An arrow labeled 'extract' points upward from the Subgraph Extractor to this box.

From the 'Relevant Subgraphs' box, a downward arrow labeled 'context' leads to the LLM Proposer. This module generates logical rules based on the provided context. Below it, a beige box titled 'Proposed Logical Rules' contains two example rules written in formal logic: 'IF (A, present in work, B) AND (B, based on, C) AND (C, performer, D) THEN (A, performer, D);' and 'IF (A, present in work, B) AND (B, cast member, C) THEN (A, performer, C); ...'. The relation 'performer' is highlighted in red within these rules. An arrow labeled 'generate' connects the LLM Proposer to this rules box.

An upward arrow labeled 'refine' connects the Proposed Logical Rules box to the Rule Reasoner. This module evaluates and refines the proposed rules to determine their validity and significance.

Finally, an upward arrow labeled 'solve' connects the Rule Reasoner to a blue box titled 'KB Completion'. This box contains two example queries and answers: Q: (Happy, performer, ?) → A: Pharrell Williams; Q: (Dr. John Watson, performer, ?) → A: Jude Law. These demonstrate how the refined rules are applied to complete missing triples in the knowledge base.

The entire workflow illustrates a cycle where the Subgraph Extractor retrieves relevant subgraphs from the KB, the LLM Proposer generates plausible logical rules from them, the Rule Reasoner refines these rules, and finally, the refined rules are used to solve KB completion tasks.
