# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

INTERACT: Enabling Interactive, Question-Driven Learning in Large Language Models — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.11388

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=500400&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure presents an overview of the INTERACT framework for concept learning in large language models (LLMs), using a news article about a Martian solar eclipse caused by Phobos as the example concept. The layout is divided into three main sections: 'Without Static Lesson', 'With Static Lesson', and 'Dynamic Interaction', arranged in a 2x2 grid with the 'Dynamic Interaction' section occupying the right half vertically. At the top, a yellow rectangular box contains the full text of the news article, serving as the input concept for all methods.

In the 'Without Static Lesson' section (top-left), a blue rounded rectangle labeled 'Question: What do Phobos-caused eclipses help scientists track?' points via a black arrow to a pink rounded rectangle labeled 'Answer: Temperature of Mars’ atmosphere'. Between them is a cartoon robot labeled 'Student LLM', depicted with a sad face, indicating incorrect or incomplete reasoning.

In the 'With Static Lesson' section (bottom-left), two questions are posed in blue rounded rectangles: 'What do Phobos-caused eclipses help scientists track?' and 'What potential fate awaits Phobos?'. These connect via black arrows to two answer boxes: a green one ('Phobos’ orbit decay') and a pink one ('It will escape Mars’ gravity and drift into space'). A yellow speech bubble labeled 'Lesson' provides context about the Perseverance rover and Phobos’ orbit decay, originating from a cartoon robot labeled 'Teacher LLM' wearing a graduation cap. The Student LLM, now smiling, receives this lesson before answering, but still produces an incorrect answer for the second question.

The 'Dynamic Interaction' section (right side) is split into 'Learning Phase' and 'Quiz Phase'. In the Learning Phase, the Student LLM (smiling) asks the Teacher LLM (graduation cap) the question 'Why should we care about what happens to Phobos?'. The Teacher LLM responds with a detailed explanation in a blue speech bubble: 'Phobos’ orbit is slowly decaying... it will either crash into Mars or break apart and form a ring around the planet.' In the Quiz Phase, the same two questions are asked again. This time, the Student LLM correctly answers both: 'Phobos’ orbit decay' (green box) and 'It will collide with Mars or break apart.' (green box), demonstrating improved understanding after interactive learning.

All LLMs are represented as cartoon robots; the Student LLM has a red antenna and holds books and a pencil, while the Teacher LLM wears a graduation cap. Questions are in blue boxes, correct answers in green, and incorrect answers in pink. Arrows indicate the flow of information and interaction between components. The figure visually contrasts passive, static, and interactive learning paradigms, emphasizing that dynamic interaction enables comprehensive concept acquisition.
