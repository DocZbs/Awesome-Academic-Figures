# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

LearnLM: Improving Gemini for Learning — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.16429

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=503300&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a six-step workflow for generating and evaluating educational tutoring conversations using large language models (LLMs), designed to compare tutor performance based on scenario-driven interactions. The global layout is a horizontal flowchart progressing from left to right, with steps numbered 1 through 6, each represented by a distinct rectangular panel containing visual elements and descriptive labels. The process begins with a participant, depicted as a circular avatar with a green background, who first reads and understands instructions via an icon of an open book with an information symbol. This step is labeled '1.) Read + understand instructions' in a blue rounded rectangle below the panel.

Step 2, 'Select Scenario', shows a user interface with two main sections: 'Scenario Categories' on the left, listing domains such as Computing Basics, Intro Java, Python Programming, AI, English, History, Math, Physical sciences, and Social sciences, with expandable subcategories like 'p0_cs_intro_python_classroom_19'. On the right, 'Scenario Details' includes a 'Conversation Plan' describing the tutor's role (e.g., 'You are a student in "intro to Python"...'), a 'Learner Persona' with traits (e.g., 'Does not show work', 'Is easily distracted'), and an 'Initial Learner Query' (e.g., 'I can't seem to solve x²+3x=5 for x :('). A green curved arrow connects the selected scenario to the next step.

Step 3, 'Tutor Configuration', displays two robot avatars representing LLMs: one teal labeled 'LearnLM' and one purple labeled 'Other LLM'. Above them are gray boxes labeled 'System Instructions' and 'Grounding Materials', both feeding into the LLMs via green arrows, indicating that these components configure the tutors. This step is enclosed in a dashed-line box to denote configuration phase.

Step 4, 'Human / LLM Role-playing conversation', shows a laptop screen with a conversation interface. Two green arrows point to it: one from 'Scenario Details & Grounding' and another from 'Human/LLM Conversation'. The interface displays chat bubbles with robot icons, and a human avatar appears beside the laptop. Below this panel, a note states '2 x (once per LLM)', indicating that this step is repeated twice—once for each LLM.

Step 5, 'Tutor Survey', presents a similar laptop interface with a conversation window and a 'Survey' button. Green arrows from 'Scenario Details' and 'Human/LLM Conversation' feed into this panel, suggesting that after each conversation, the participant completes a survey assessing the tutor’s performance.

Finally, Step 6, 'Dual-Tutor Comparison Survey', shows a laptop with two separate conversation windows side-by-side, each with a robot icon, and a 'Survey' button. A green arrow from 'Scenario Details' points to this panel, and the participant avatar is shown again, indicating that after experiencing both tutors, they complete a comparative survey to evaluate and rank the two models.

Orange arrows connect the steps sequentially, forming a clear progression from instruction reading to final comparison. The entire workflow emphasizes structured scenario-based evaluation of LLM tutors, with explicit grounding materials and system instructions, culminating in human-rated quality and preference assessments.
