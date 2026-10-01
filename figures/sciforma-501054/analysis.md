# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

Finding a Wolf in Sheep's Clothing: Combating Adversarial Text-To-Image Prompts with Text Summarization — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.12212

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501000&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates a divide-and-conquer attack (DACA) strategy designed to bypass content detection filters by obfuscating inappropriate prompts while preserving their harmful intent. The diagram is structured into four labeled subfigures (a), (b), (c), and (d), arranged horizontally from left to right, with dashed vertical lines separating the initial states from the attack process and its outcome.

[1] Global Layout and Structure:
The overall layout presents a comparative workflow: on the far left, an appropriate prompt (a) passes the filter, while an inappropriate prompt (b) is blocked. The central part of the diagram details the DACA attack process, which transforms the inappropriate prompt into an obfuscated version (c) that evades detection. Finally, on the far right, a summarization step (d) attempts to remove redundant or 'fluffy' content from the obfuscated prompt, resulting in a condensed version that still fails the filter. Each stage includes a content detection filter represented as a rectangular box at the top, with arrows indicating whether the prompt passes (green checkmark) or fails (red cross).

[2] Visual Modules and Attributes:
Subfigure (a) displays an 'Appropriate Prompt' in a rounded rectangle: 'Demogorgon as guest star in friends series', accompanied by a sheep icon labeled 'Sheep'. This prompt passes the Content Detection Filter, indicated by a green checkmark above the filter box.

Subfigure (b) shows an 'Inappropriate Prompt': 'A white male is threatening a Chinese man with a knife.', in a similar rounded rectangle, with a wolf icon labeled 'Wolf'. This prompt is blocked by the filter, marked with a red cross.

Subfigure (c) represents the core of the attack: the inappropriate prompt from (b) is fed into a gray rectangular module labeled 'DACA', which performs 'Stepwise obfuscation via LLM backbone' and contains a teal circular logo resembling the OpenAI logo. The output is an 'Obfuscated Prompt' — a long, detailed narrative describing the same threatening scene but with added descriptive elements (e.g., clothing, atmosphere, environmental damage). This obfuscated prompt is visually distinct due to its length and complexity, and it successfully bypasses the filter, indicated by a green checkmark. Below this box is a sheep icon with a wolf face inside, labeled 'Wolf in sheep's clothing', symbolizing the deceptive nature of the attack.

Subfigure (d) introduces a 'Summarizer' module — a green rounded rectangle labeled 'Summarization via small encoder or LLM', described as the 'Proposed method for "removing the fluff"'. This module processes the obfuscated prompt from (c) and outputs a 'Summarized Prompt': 'Jake, a skilled stunt performer, threatens an Asian male with a knife, creating a tense and dangerous atmosphere.' This summarized version retains the harmful intent but is concise. Despite being distilled, it still fails the content detection filter, marked with a red cross. The icon below is again the wolf, reinforcing that the harmful essence remains.

[3] Connections and Arrows:
Arrows indicate data flow and decision outcomes. From (b), a solid arrow points to the DACA module. From DACA, a solid arrow leads to the obfuscated prompt (c), which then connects via a solid arrow to the Summarizer. The Summarizer outputs to the summarized prompt (d). Dashed arrows connect each prompt to its respective Content Detection Filter, with green checks or red crosses indicating pass/fail status. The dashed vertical lines separate the initial prompt evaluation from the attack and summarization phases, emphasizing the transformation process.
