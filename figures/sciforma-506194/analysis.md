# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

eRevise+RF: A Writing Evaluation System for Assessing Student Essay Revisions and Providing Formative Feedback — arXiv 2025.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2501.00715

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=506100&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents a hierarchical decision tree illustrating the progression of revision feedback (RF) in an educational context, specifically focusing on how students respond to feedback aimed at improving evidence usage and reasoning skills. The global layout is a directed acyclic graph with a central root node labeled 'RF' in a yellow rounded rectangle positioned on the left side. From this root, three primary branches extend to the right, each leading to a distinct type of feedback category: EF1 ('need more evidence'), EF2 ('need more specific details'), and EF3 ('need more explanation'). These categories are represented by rounded rectangles in different colors—EF1 in light purple, EF2 in light peach, and EF3 in light blue—each indicating a different dimension of feedback focus.

Each of these primary feedback categories further branches into multiple outcomes, representing the possible results of student revisions. The outcomes are labeled RF1 through RF10 and are displayed as rounded rectangles aligned vertically on the right side of the diagram. The visual distinction between successful and unsuccessful revision outcomes is indicated by border style: solid borders denote unsuccessful or incomplete revisions, while dashed borders signify successful revisions that advance the student’s skill level. This distinction is explicitly noted in the figure caption.

Specifically, from EF1 ('need more evidence'), four outcomes emerge: RF3 ('added evidence but repeated'), RF4 ('added evidence but not text-based'), RF5 ('added evidence but vague or general'), and RF6 ('added evidence successfully'). Among these, only RF6 has a dashed border, marking it as a successful outcome.

From EF2 ('need more specific details'), three outcomes follow: RF4 ('added evidence but not text-based'), RF5 ('added evidence but vague or general'), and RF7 ('added specific details successfully'). Again, only RF7 is marked with a dashed border, indicating success.

From EF3 ('need more explanation'), three outcomes are shown: RF8 ('successful evidence but no reasoning attempt'), RF9 ('successful evidence but unsuccessful reasoning'), and RF10 ('successful evidence and successful reasoning'). Here, RF10 is the only one with a dashed border, signifying full success.

Additionally, two direct outcomes branch from the root 'RF' node without passing through an EF category: RF1 ('no revision') and RF2 ('surface revision'), both presented in green rounded rectangles with solid borders, indicating they represent non-productive or minimal revision efforts.

All connections between nodes are represented by black arrows pointing from parent to child nodes, indicating the flow of feedback and revision outcomes. The diagram uses color coding consistently: green for minimal/no revision, purple for evidence-related feedback, peach for detail-related feedback, and blue for explanation-related feedback. The structure visually emphasizes the branching nature of feedback responses and the path toward mastery, with successful outcomes highlighted by dashed borders and positioned as terminal nodes in their respective branches.
