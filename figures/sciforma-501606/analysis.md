# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI PERSONA: Towards Life-long Personalization of LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a five-stage data generation pipeline for PersonaBench, designed to create personalized, context-rich queries for benchmarking AI systems. The pipeline is structured horizontally from left to right, with each stage labeled by a green rectangular header above the corresponding components.

[1] Global Layout and Structure:
The diagram is organized into five sequential stages: Seed Data Collection → Persona Synthesis → Scene Generation → Personalized Query Generation → Data Filtering & Refinement. Each stage contains visual elements representing inputs, processes, and outputs, connected by thick black arrows indicating the flow direction. The bottom half of the diagram shows the final two stages with user interaction depicted via speech bubbles and laptops, emphasizing human-in-the-loop refinement.

[2] Visual Modules and Attributes:
- Seed Data Collection: Contains a large blue scroll labeled 'Persona' with bullet points detailing demographics (Bob, 28, SDE), personality (INTJ), patterns (asks Java code for ChatGPT), and preferences (Markdown output). Below it is an orange scroll labeled 'Scene' with 'Job seeking'. A cartoon user sits at a laptop with '< />' symbol, indicating coding or technical work.
- Persona Synthesis: Enclosed in a dashed gray oval, this stage shows four smaller scrolls, each with a distinct color (blue, beige, gray, purple) and a cartoon character (e.g., explorer, scientist, musician, businessperson), symbolizing diverse personas generated from the seed data.
- Scene Generation: Depicted as a stack of five overlapping colored rectangles (purple, green, yellow, orange, red), with the topmost orange rectangle containing text: 'Synthesize Detailed Scene' with bullet points including context ('Job Seeking'), potential tool use ('Code Interpreter'), description ('Bob is looking for a new job...'), and contextual mock interviews for SDE in Google.
- Personalized Query Generation: Shows a speech bubble from a user laptop stating: 'I'm Bob, a 28-year-old Software Development Engineer (SDE)... I want help with mock interviews.' This represents the synthesized, personalized prompt.
- Data Filtering & Refinement: Displays another speech bubble from a user laptop with refined input: 'I am a software development engineer primarily using Java, and I need help with mock interviews: Please use Markdown format for the outputs.' This reflects cleaned and standardized query format.

Each transition between stages includes a small teal square icon with a white swirl pattern, resembling the OpenAI logo, suggesting LLM-based processing.

[3] Connections and Arrows:
Thick black arrows connect the stages sequentially: from Seed Data Collection to Persona Synthesis, then to Scene Generation, followed by Personalized Query Generation, and finally to Data Filtering & Refinement. The arrow from Scene Generation to Personalized Query Generation passes through the teal LLM icon, indicating AI-driven transformation. The final arrow leads to the refined query, completing the pipeline. The user figures at the bottom visually anchor the refinement stage, showing iterative human feedback.
