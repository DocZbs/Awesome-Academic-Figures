# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

AI PERSONA: Towards Life-long Personalization of LLMs — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13103

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501600&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates an AI Persona Framework designed for interactive, personalized user engagement, particularly in technical skill development contexts such as mock interview preparation. The global layout is structured as a left-to-right workflow, beginning with user interaction on the left, progressing through a central chatbot system, and concluding with a satisfaction evaluation on the right. The framework is visually segmented into distinct functional modules connected by directional arrows indicating data flow and interaction sequence.

At the far left, a user icon—depicted as a person at a laptop with code symbols '<>'—initiates interaction via a labeled arrow 'Query' directed toward a central chatbot module. The chatbot is represented as a stylized robot head with blue accents and a headset, symbolizing conversational AI. Above and below the chatbot are two rectangular yellow boxes with purple borders: 'Persona Data' above and 'Function Calls' below. These represent external inputs feeding into the chatbot; 'Persona Data' provides contextual user information (e.g., goals, background), while 'Function Calls' denote backend API or tool invocations. An arrow labeled 'Update' points from the chatbot back to 'Persona Data', indicating dynamic personalization based on interaction history.

The core of the diagram is a large rounded rectangle containing a simulated conversation between the user and the chatbot. This dialogue is rendered as alternating speech bubbles: user messages appear as white bubbles with blue outlines and a small user icon, while chatbot responses are shown as blue bubbles with white outlines and a small robot icon. The conversation begins with the user requesting mock interviews for a Software Development Engineer (SDE) position. The chatbot responds by asking the user to implement quicksort in Java. The user then submits Java code ('public class QuickSort { ...}'), followed by the chatbot initiating an API call to a code interpreter, indicated by the text '```API Call code interpreter ...```'. The conversation continues with further interaction, though the final message is truncated with ellipses.

To the far right, an arrow leads from the conversation box to a satisfaction evaluation module. This is depicted as a clipboard with a pencil and a user icon, labeled 'Satisfaction Evaluation', signifying post-interaction feedback collection to assess the quality and effectiveness of the AI’s assistance.

All connections are represented by thick black arrows, clearly delineating the direction of information flow: from user query to chatbot, from chatbot to conversation, and from conversation to evaluation. The visual design uses consistent icons, color coding (blue for chatbot elements, yellow for data modules), and clear labeling to convey the modular, iterative nature of the AI persona system.
